using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public enum AspectRatio
{
    AR920,
    AR919,
    AR918,
    AR916,
    AR34
}

public class CameraHandler : MonoBehaviour
{
    public static CameraHandler Instance;
    [SerializeField] private CharacterManager characterManager;
    [SerializeField] private Confetti confetti;
    [SerializeField] private Transform[] cams;
    [SerializeField] Camera[] cameras;
    private Transform _transform;
    [HideInInspector]
    private float shakeTimer, shakePower;
    Vector3 defaultPos;
    private Camera cameraMain;
    public float defaultSize = 6.5f;
    private bool clickable = true;
    private bool furnitureSelectable;

    public AspectRatio aspectRatio;
    public bool Clickable { get => clickable; set => clickable = value; }
    public bool FurnitureSelectable { get => furnitureSelectable; set => furnitureSelectable = value; }
    public Camera CameraMain { get => cameraMain; set => cameraMain = value; }

    private void Awake()
    {
        Instance = this;

        RegisterListener();

        SetSize();
    }
    private void SetSize()
    {
        cameraMain = cameras[0]; //default camera


        if (cameraMain.aspect <= 0.451f)
        {
            MyDebug.Log("9:20");
            aspectRatio = AspectRatio.AR920;
        }
        else if (cameraMain.aspect <= 0.474f)
        {
            MyDebug.Log("9:19");
            aspectRatio = AspectRatio.AR919;

        }
        else if (cameraMain.aspect <= 0.5f)
        {
            MyDebug.Log("9:18");
            aspectRatio = AspectRatio.AR918;
        }
        else if (cameraMain.aspect <= 0.563f)
        {
            MyDebug.Log("9:16");
            aspectRatio = AspectRatio.AR916;
        }
        else
        {
            MyDebug.Log("3:4");
            aspectRatio = AspectRatio.AR34;
        }
    }

    #region PlayConfettiZone
    public void PlayConfetti()
    {
        confetti.PlayConfetti();
    }

    float backUpOrthoSize = 15;
    public void AdjustToPlayConfetti()
    {
        if (cameraMain.orthographicSize != 11)
        {
            backUpOrthoSize = cameraMain.orthographicSize;
            cameraMain.orthographicSize = 11;
        }

        confetti.PlayConfetti();
    }

    public void SwitchOrgOrthoSize()
    {
        confetti.StopParticleSystem();
        cameraMain.orthographicSize = backUpOrthoSize;
    }
    #endregion

    private void RegisterListener()
    {
        this.RegisterListener(EventID.OnReplay, (param) => ResetCameraIngame());
        this.RegisterListener(EventID.OnReplayPK, (param) => SetCamForPk());
        this.RegisterListener(EventID.OnEnterLeaderboard, (param) => ResetCameraHome());
    }


    public void DisplayCharacterInChallenge()
    {
        //characterManager.transform.position = Vector3.zero;
        characterManager.transform.position = new Vector3(0, -1f, 0);
    }

    private void SetCamForPk()
    {
        CameraInGameplay(6.5f);
        characterManager.ResetMonsterPos();
    }

    public void ResetCameraIngame()
    {
        if (!UIHandler.Instance.ReturnHome)
        {
            CameraInGameplay(6.5f);
        }
        else
        {
            CheckConditionOrthoCameraConfig();
        }
        characterManager.ResetMonsterPos();
    }

    public void ResetCameraHome()
    {
        CheckConditionOrthoCameraConfig();
        characterManager.ResetMonsterPos();
    }

    private void CheckConditionOrthoCameraConfig()
    {
        if (aspectRatio == AspectRatio.AR919)
        {
            CameraInGameplay(20);
        }
        else
        {
            CameraInGameplay(15);
        }
    }

    public void SetPosOfCamera(Vector3 pos)
    {
        cams[0].position = pos;
    }
    public void CameraInGameplay(float camSize)
    {
        for (int i = 0; i < cameras.Length; i++)
        {
            cameras[i].orthographicSize = camSize;
            cams[i].position = new Vector3(0, 0, -10);
        }
        clickable = true;
    }

    public void CameraForConfetti(float camSize)
    {
        for (int i = 0; i < cameras.Length; i++)
        {
            cameras[i].orthographicSize = camSize;
        }
    }
    public void FocusItem(Vector3 pos, float toSize = 11f)
    {
        pos += new Vector3(0, -4f, -10);
        furnitureSelectable = false;
        cameras[0].DOOrthoSize(toSize, 0.2f).SetEase(Ease.InOutQuad).OnComplete(() => furnitureSelectable = true);
    }

    #region camera_zoom

    Vector3 zoomPos;
    float orthoSize;
    public void ZoomIn()
    {
        zoomPos = Vector3.zero;
        orthoSize = 6.5f;
        DoZoom(zoomPos, orthoSize);
    }
    public void ZoomOut()
    {
        zoomPos = new Vector3(0, -4.8f, 0);
        orthoSize = 11;
        DoZoom(zoomPos, orthoSize);
    }

    public void OpeningZoom(float toSize)
    {
        cameras[0].DOOrthoSize(toSize, 1f).SetEase(Ease.OutExpo);
    }

    public void ZoomToBG(Vector3 bgTransform, Ease ease = Ease.OutExpo, float orthoSize = 15, float duration = 0.5f)
    {
        furnitureSelectable = false;
        cams[0].DOLocalMove(bgTransform + new Vector3(0, 0, -10), duration).SetEase(ease);
        cameras[0].DOOrthoSize(orthoSize, duration).SetEase(ease).OnComplete(() => furnitureSelectable = true);
    }

    public void ZoomAfterBuilding(Vector3 bgTransform)
    {
        float orthoSize = 0;

        if (aspectRatio == AspectRatio.AR916) //iphone 8 plus
        {
            orthoSize = 19;
        }
        else if (aspectRatio == AspectRatio.AR34)  //ipad
        {
            orthoSize = 15;
        }
        else //iphone 12 pro max
        {
            orthoSize = 23;
        }

        furnitureSelectable = false;
        cams[0].DOLocalMove(bgTransform + new Vector3(0, 0, -10), 0.25f).SetEase(Ease.InOutSine);
        cameras[0].DOOrthoSize(orthoSize, 0.25f).SetEase(Ease.InOutSine).OnComplete(() => furnitureSelectable = true);
    }


    public void ResetToOriginalView()
    {
        cameras[0].DOKill();
        cams[0].DOKill();
        cameras[0].orthographicSize = 6.5f;
        cams[0].position = new Vector3(0, 0, -10);

    }


    private void DoZoom(Vector3 pos, float toSize)
    {
        clickable = false;
        defaultSize = cameras[0].orthographicSize;
        cams[0].DOMoveY(pos.y, 0.3f).SetEase(Ease.InOutSine);
        cameras[0].DOOrthoSize(toSize, 0.3f).SetEase(Ease.InOutSine).OnComplete(() => clickable = true);
    }

    #endregion

    #region OldVersionCode
    IEnumerator DoZoomIn(Vector3 pos, float toSize)
    {
        clickable = false;
        defaultSize = cameras[0].orthographicSize;
        while (cameras[0].orthographicSize > toSize || Vector3.Distance(pos, _transform.position) > 0.03f)
        {
            _transform.position = Vector3.Lerp(pos, _transform.position, 0.85f); //0.85f  //0.85f
            if (cameras[0].orthographicSize > toSize)
            {
                for (int i = 0; i < cameras.Length; i++)
                {
                    cameras[i].orthographicSize -= Time.deltaTime * 20f;  //1.5f
                }
            }
            yield return null;
        }
        clickable = true;
        //_transform.position = pos;
    }


    IEnumerator DoZoomOut(Vector3 pos, float defaultSize)
    {
        //Vector3 pos = Vector3.zero;
        clickable = false;
        while (cameras[0].orthographicSize < defaultSize || Vector3.Distance(pos, _transform.position) > 0.03f)
        {
            _transform.position = Vector3.Lerp(pos, _transform.position, 0.7f);   //0.9f  //0.85f
            if (cameras[0].orthographicSize < defaultSize)
            {
                for (int i = 0; i < cameras.Length; i++)
                {
                    cameras[i].orthographicSize += Time.deltaTime * 30f;   //2
                }
            }
            yield return null;
        }
        clickable = true;
    }

    IEnumerator DoZoomOut()
    {
        Vector3 pos = Vector3.zero;
        while (cameras[0].orthographicSize < defaultSize || Vector3.Distance(pos, _transform.position) > 0.03f)
        {
            _transform.position = Vector3.Lerp(pos, _transform.position, 0.7f);
            if (cameras[0].orthographicSize < defaultSize)
            {
                for (int i = 0; i < cameras.Length; i++)
                {
                    cameras[i].orthographicSize += Time.deltaTime * 30f;
                }
            }
            yield return null;
        }
        _transform.position = Vector3.zero;
        for (int i = 0; i < cameras.Length; i++)
        {
            cameras[i].orthographicSize = defaultSize;
        }
    }
    #endregion

    #region camera_shake
    //void Start()
    //{
    //    //cameras = new Camera[cams.Length];
    //    //for (int i = 0; i < cameras.Length; i++)
    //    //{
    //    //    cameras[i] = cams[i].GetComponent<Camera>();
    //    //}
    //    //InitForCameraShake();
    //}

    private void InitForCameraShake()  //khi nào dùng camera shake thì enable nó lên trong start
    {
        _transform = transform;
        defaultPos = cams[0].localPosition;
    }
    public void Shake(float shakePower, float shakeTimer)
    {
        this.shakePower = shakePower;
        this.shakeTimer = shakeTimer;
    }
    public bool isShaking()
    {
        if (shakeTimer > 0)
        {
            return true;
        }
        return false;
    }
    void ShakeScreen()
    {
        if (shakeTimer >= 0)
        {

            Vector2 shakePos = Random.insideUnitSphere * shakePower;

            for (int i = 0; i < cams.Length; i++)
            {
                cams[i].transform.position = new Vector3(cams[i].position.x + shakePos.x, cams[i].position.y + shakePos.y, cams[i].position.z);

            }

            shakeTimer -= Time.deltaTime;
        }
        if (shakeTimer < 0)
        {
            if (cams[0].localPosition.x != 0)
            {
                for (int i = 0; i < cams.Length; i++)
                {
                    cams[i].localPosition = Vector3.Lerp(cams[i].localPosition, defaultPos, 0.5f);
                }

            }
        }
    }
    //void Update()
    //{
    //    ShakeScreen();
    //}
    #endregion
}
