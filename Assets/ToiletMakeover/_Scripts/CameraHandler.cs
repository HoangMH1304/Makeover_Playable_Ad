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

    private void RegisterListener()
    {
        this.RegisterListener(EventID.OnReplayPK, (param) => SetCamForPk());
        this.RegisterListener(EventID.OnEnterLeaderboard, (param) => ResetCameraHome());
    }


    public void DisplayCharacterInChallenge()
    {
        characterManager.transform.position = new Vector3(0, -1f, 0);
    }

    private void SetCamForPk()
    {
        //CameraInGameplay(6.5f);
    }

    public void ResetCameraHome()
    {
        CheckConditionOrthoCameraConfig();
    }

    private void CheckConditionOrthoCameraConfig()
    {
        //if (aspectRatio == AspectRatio.AR919)
        //{
        //    CameraInGameplay(20);
        //}
        //else
        //{
        //    CameraInGameplay(15);
        //}
    }

    public void SetPosOfCamera(Vector3 pos)
    {
        cams[0].position = pos;
        cameras[0].orthographicSize = 11;
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



    private void DoZoom(Vector3 pos, float toSize)
    {
        clickable = false;
        defaultSize = cameras[0].orthographicSize;
        cams[0].DOMoveY(pos.y, 0.3f).SetEase(Ease.InOutSine);
        cameras[0].DOOrthoSize(toSize, 0.3f).SetEase(Ease.InOutSine).OnComplete(() => clickable = true);
    }

    #endregion
}
