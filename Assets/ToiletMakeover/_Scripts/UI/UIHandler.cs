using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
//using Sirenix.OdinInspector;

public class UIHandler : MonoBehaviour
{
    public static UIHandler Instance;

    //[Title("UI Container", titleAlignment: TitleAlignments.Centered)]
    [SerializeField] private UI_Result uI_Result;
    [SerializeField] private UI_Ingame uI_Ingame;
    [SerializeField] private UI_Endgame endGamePanel;
    [SerializeField] private UI_Transition transition;
    [SerializeField] public RectTransform limitArea;

    [SerializeField] private SkeletonAnimation bodyAnim;
    [SerializeField] private SkeletonAnimation bodyAnim2;

    [SerializeField] private GameObject character;
    [SerializeField] private ParticleSystem moneyRain;


    //[Title("AnimBG")]
    public SkeletonGraphic curtainAnim;


    public UI_Ingame UI_Ingame { get => uI_Ingame; set => uI_Ingame = value; }





    private void PauseGameplay()
    {
        Time.timeScale = 0;
        SoundManager.Instance.ChangePitch(0);
    }

    private void ResumeGameplay()
    {
        Time.timeScale = 1;
        SoundManager.Instance.ChangePitch(1);
    }

    private void Awake()
    {
        Instance = this;


        Luna.Unity.LifeCycle.OnPause += PauseGameplay;
        Luna.Unity.LifeCycle.OnResume += ResumeGameplay;
    }

    private void Start()
    {
        this.PostEvent(EventID.OnStart);
    }


    #region ingame_panel_Area


    private void HandleDoneBtn()
    {
        StartCoroutine(PlayEffect());
        transition.gameObject.SetActive(true);
        SoundManager.Instance.PauseSound(Sound.bg);
        SoundManager.Instance.PlaySound(Sound.outtro);
    }


    public void Done()
    {
        HandleDoneBtn();
    }


    /// <summary>
    /// 0: normal, 1: challenge
    /// </summary>
    /// <param name="_typeMode"></param>
    /// <returns></returns>
    IEnumerator PlayEffect(int _typeMode = 0)
    {
        yield return new WaitForSeconds(1f);

        CameraHandler.Instance.SetPosOfCamera(new Vector3(0, -2.8f, -10));

        uI_Ingame.gameObject.SetActive(false);

        PlayDanceAnimForMonster();


        uI_Result.gameObject.SetActive(true);
        moneyRain.Play();

        yield return new WaitForSeconds(2f);

        //curtainAnim.gameObject.SetActive(false);

        yield return new WaitForSeconds(2f);
        endGamePanel.OnEntrance();
    }



    public void PlayDanceAnimForMonster()
    {
        if (bodyAnim.gameObject.activeSelf)
        {
            bodyAnim.Skeleton.SetSkin(ShopController.Instance.Bodies[PlayerPrefs.GetInt("Body")].bodypartName);
            bodyAnim.AnimationState.SetAnimation(0, "Zerotwo", true);
            bodyAnim.Skeleton.SetToSetupPose();
        }
        else if (bodyAnim2.gameObject.activeSelf)
        {
            var body = ShopController.Instance.Bodies[PlayerPrefs.GetInt("Body")];
            bodyAnim2.Skeleton.SetSkin(body.catalogue.ToString() + "/" + body.bodypartName);
            int randomIdx = Random.Range(0, 4);
            if (randomIdx <= 1)
            {
                bodyAnim2.AnimationState.SetAnimation(0, "Zerotwo", true);
            }
            else
            {
                bodyAnim2.AnimationState.SetAnimation(0, "Zerotwo" + randomIdx, true);
            }
            bodyAnim2.Skeleton.SetToSetupPose();
        }
    }
    #endregion
}
