using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using DG.Tweening;
using UnityEngine.UI;
//using Sirenix.OdinInspector;

public class UIHandler : MonoBehaviour
{
    public static UIHandler Instance;

    //[Title("UI Container", titleAlignment: TitleAlignments.Centered)]
    [SerializeField] private UI_Result uI_Result;
    [SerializeField] private UI_Ingame uI_Ingame;
    [SerializeField] private UI_Lobby uI_Lobby;
    [SerializeField] private UI_AnchorTop uI_AnchorTop;
    [SerializeField] private GameObject settingPanel;
    [SerializeField] private GameObject internetMessagePanel;
    [SerializeField] private GameObject iapSuccess;
    [SerializeField] private GameObject iapFail;
    [SerializeField] private GameObject confirmPanel;
    [SerializeField] private GameObject needMoreCoinPanel;
    [SerializeField] private GameObject sharePanel;
    [SerializeField] private GameObject previewLevelChallengePanel;
    [SerializeField] private GameObject levelSelection;
    [SerializeField] private GameObject loadingPanel;
    [SerializeField] private RectTransform limitArea;
    [SerializeField] private Image fade;
    [SerializeField] private GameObject adBreak;
    [SerializeField] private PopupPanel newModePkPopup;
    [SerializeField] private SubPanel subPanel;
    [SerializeField] private GameObject blackScreen;

    //[Title("Idle mode", titleAlignment: TitleAlignments.Centered)]
    [SerializeField] private GameObject leaderboard;

    //[Title("TMP Currency", titleAlignment: TitleAlignments.Centered)]
    [SerializeField] private TextMeshProUGUI goldNum;
    [SerializeField] private TextMeshProUGUI ticketNum;
    [SerializeField] private TextMeshProUGUI spinNum;
    [SerializeField] private TextMeshProUGUI spinNum1;
    [SerializeField] private TextMeshProUGUI skipAdTicket;


    //[Title("Other", titleAlignment: TitleAlignments.Centered)]
    [SerializeField] private CanvasGroup _fade;
    [SerializeField] private SkeletonAnimation bodyAnim;
    [SerializeField] private SkeletonAnimation bodyAnim2;
    [SerializeField] private SkeletonAnimation bodyAnim3;

    [SerializeField] private GameObject character;
    [SerializeField] private GameObject noAdBtn;
    [SerializeField] private GameObject noAdBtn_1;
    [SerializeField] private ParticleSystem moneyRain;

    private CharacterManager characterManager;

    //[Title("AnimBG")]
    public SkeletonGraphic curtainAnim;
    public BgAnimController bgAnim;

    private float widthCanvas;
    private bool returnHome = false;
    private CountNumber coinCount;

    public UI_Result UI_Result { get => uI_Result; set => uI_Result = value; }
    public UI_Ingame UI_Ingame { get => uI_Ingame; set => uI_Ingame = value; }
    public UI_Lobby UI_Lobby { get => uI_Lobby; set => uI_Lobby = value; }
    public GameObject InternetMessagePanel { get => internetMessagePanel; set => internetMessagePanel = value; }
    public GameObject IapSuccess { get => iapSuccess; set => iapSuccess = value; }
    public GameObject IapFail { get => iapFail; set => iapFail = value; }
    public GameObject NeedMoreCoinPanel { get => needMoreCoinPanel; set => needMoreCoinPanel = value; }
    public bool ReturnHome { get => returnHome; set => returnHome = value; }
    public float WidthCanvas { get => widthCanvas; set => widthCanvas = value; }
    public UI_AnchorTop AnchorTop { get => uI_AnchorTop; set => uI_AnchorTop = value; }
    public GameObject PreviewLevelChallengePanel { get => previewLevelChallengePanel; set => previewLevelChallengePanel = value; }
    public RectTransform LimitArea { get => limitArea; set => limitArea = value; }
    public GameObject AdBreak { get => adBreak; set => adBreak = value; }
    public PopupPanel NewModePkPopup { get => newModePkPopup; set => newModePkPopup = value; }
    public SubPanel SubPanel { get => subPanel; set => subPanel = value; }
    public GameObject BlackScreen { get => blackScreen; set => blackScreen = value; }

    private float aspectRatio;

    private void Awake()
    {
        Instance = this;
        this.RegisterListener(EventID.OnReplay, (param) => OnReplay());
        this.RegisterListener(EventID.OnReplayPK, (param) => OnPlayAgainPkMode());
        this.RegisterListener(EventID.OnStart, (param) => OnFadeInLobby());
        this.RegisterListener(EventID.OnBuyItem, (param) => confirmPanel.SetActive(true));
        this.RegisterListener(EventID.OnEnterLeaderboard, (param) => OnFadeInLeaderboard());

        aspectRatio = (float)Screen.height / (float)Screen.width;
        widthCanvas = (int)(1920 / aspectRatio);

        coinCount = goldNum.GetComponent<CountNumber>();
        characterManager = character.GetComponent<CharacterManager>();
    }

    private void Start()
    {
        //DisplayNoAds();
        if (PlayerPrefs.GetInt("FirstPlayChallengeMode") == 0)
        {
            PlayerPrefs.SetInt("FirstPlayChallengeMode", 1);
            uI_Lobby.NormalMode();
            uI_Lobby.gameObject.SetActive(true);
        }
        else
        {
            GameManager.Instance.ChangeGameMode(GameMode.IdleHome);
            loadingPanel.SetActive(true);
            StartCoroutine(DelayOpeningZoom(3.5f));
            SoundManager.Instance.PlaySound(Sound.bg2);
        }
    }

    IEnumerator DelayOpeningZoom(float delayTime)
    {
        yield return new WaitForSeconds(delayTime);
        CameraHandler.Instance.OpeningZoom(15f);
    }

    #region Update Currency
    public void UpdateGold(int gold)
    {
        if (goldNum.gameObject.activeInHierarchy)
            coinCount.SetTarget(gold);
        else
            goldNum.text = gold.ToString();
    }

    public void UpdateTicket(int ticket)
    {
        ticketNum.text = ticket.ToString();
    }

    public void UpdateSpin(int spin)
    {
        spinNum.text = spin.ToString();
        spinNum1.text = spin.ToString();
    }

    public void UpdateSkipAdTicket(int ticket)
    {
        skipAdTicket.text = ticket.ToString();
        if (ticket <= 0) IdleActions.OnDisplayAdBooster?.Invoke();
    }
    #endregion

    #region ingame_panel_Area


    private void HandleDoneBtn()
    {
        IdleActions.OnCalculatePrice?.Invoke();

        curtainAnim.gameObject.SetActive(true);
        curtainAnim.AnimationState.SetAnimation(0, "curtain", false);

        StartCoroutine(PlayEffect());
        //show ads
        if (PlayerPrefs.GetInt("FirstPlaySession", 0) == 0)
        {
            PlayerPrefs.SetInt("FirstPlaySession", 1);
        }
        //
        SoundManager.Instance.PlaySound(Sound.done);
        SfxController.Instance.Vibrate();
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
        yield return new WaitForSeconds(1.7f);

        CameraHandler.Instance.SetPosOfCamera(new Vector3(0, -2.8f, -10));
        if (_typeMode == 1)
        {
            CameraHandler.Instance.DisplayCharacterInChallenge();
            bgAnim.SetActiveBgAnim();
        }

        uI_AnchorTop.gameObject.SetActive(false);
        uI_Ingame.gameObject.SetActive(false);

        PlayDanceAnimForMonster();

        PlayerPrefs.SetInt("PlayTime", PlayerPrefs.GetInt("PlayTime", 1) + 1);
        ShowReview();

        MonsterCollection.Instance.CreateMonsterCard();
        //MonsterStackHolder.Instance.monsterStack.Push(characterManager);

        if (GameManager.Instance.IsChallenge)
        {
            uI_AnchorTop.DisplayTopBarEndgame();
            uI_AnchorTop.ToggleNoAdBtn(false);
        }
        else
        {
            int numUnlock = PlayerPrefs.GetInt("PkUnlockLeft", 1) + 1;

            PlayerPrefs.SetInt("PkUnlockLeft", numUnlock);
            PlayerPrefs.SetInt("ChallengeUnlockLeft", numUnlock);
            

            uI_Result.gameObject.SetActive(true);
            moneyRain.Play();

            yield return new WaitForSeconds(1.5f);
        }


        yield return new WaitForSeconds(1f);
        curtainAnim.gameObject.SetActive(false);
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

    #region result_panel_Area

    public void OnReplay()
    {
        curtainAnim.gameObject.SetActive(false);
        bgAnim.DeactiveBgAnim();

        uI_Result.gameObject.SetActive(false);
        previewLevelChallengePanel.gameObject.SetActive(false);
        levelSelection.SetActive(false);
        sharePanel.SetActive(false);
        if (returnHome)
            OnFadeOut();
        else
        {
            uI_AnchorTop.DisplayTopBarIngame();
            uI_AnchorTop.ToggleNoAdBtn(true);
            uI_Ingame.gameObject.SetActive(true);
        }
    }

    public void OnPlayAgainPkMode()
    {
        bgAnim.DeactiveBgAnim();


        uI_Ingame.gameObject.SetActive(false);
        uI_AnchorTop.DisplayTopBarHome();
        uI_AnchorTop.ToggleHomeBtn(false);
        //uI_Lobby.gameObject.SetActive(true);

    }

    private void ShowReview()
    {
        if (PlayerPrefs.GetInt("PlayTime", 1) == PlayerPrefs.GetInt("level_show_rate", 5) && PlayerPrefs.GetInt("Rate", 0) == 0)
        {
            PlayerPrefs.SetInt("Rate", 1);
            StartCoroutine(DoShowRate());
        }
    }

    IEnumerator DoShowRate()
    {
        MyDebug.LogWarning("Show Review");
        yield return null;
    }
    #endregion

    #region TrasitionEffect
    public void OnFadeInLobby()  //lobby -> ingame
    {
        fade.gameObject.SetActive(true);
        fade.DOKill();
        fade.DOFade(0, 0);
        fade.DOFade(1, 0.01f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            uI_Lobby.gameObject.SetActive(false);
            //uI_AnchorTop.DisplayTopBar(true);
            uI_AnchorTop.DisplayTopBarIngame();
            uI_AnchorTop.ToggleNoAdBtn(true);
            fade.DOFade(0, 0.5f).SetEase(Ease.InOutSine).OnComplete(() =>
            {
                fade.gameObject.SetActive(false);
            });
            uI_Ingame.gameObject.SetActive(true);
        });
    }

    public void OnFadeInLeaderboard() // lobby --> leaderboard
    {
        fade.gameObject.SetActive(true);
        fade.color = Color.black;
        _fade.DOKill();
        _fade.DOFade(0, 0);
        _fade.DOFade(1, 0.01f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            fade.transform.GetChild(0).gameObject.SetActive(true);
            uI_Lobby.gameObject.SetActive(false);
            uI_AnchorTop.DisplayTopBar(false);
            leaderboard.SetActive(true);

            _fade.DOFade(0f, 0.5f).SetEase(Ease.InOutSine).SetDelay(3f).OnComplete(() =>
            {
                fade.gameObject.SetActive(false);
                fade.transform.GetChild(0).gameObject.SetActive(false);
            });
        });
    }

    public void FakeLoadingIntoLeaderboard()
    {
        _fade.DOFade(0f, 0.5f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            fade.gameObject.SetActive(false);
            fade.transform.GetChild(0).gameObject.SetActive(false);
        });
    }

    public void OnFadeOutLeaderboard() //leaderboard --> home
    {
        fade.gameObject.SetActive(true);
        _fade.DOKill();
        _fade.DOFade(0, 0);
        _fade.DOFade(1, 0.01f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            leaderboard.SetActive(false);
            uI_Lobby.gameObject.SetActive(true);
            //uI_AnchorTop.DisplayTopBar(true);
            uI_AnchorTop.DisplayTopBarHome();
            uI_AnchorTop.ToggleHomeBtn(false);
            uI_AnchorTop.ToggleNoAdBtn(false);
            _fade.DOFade(0, 0.5f).SetEase(Ease.InOutSine).OnComplete(() =>
            {
                fade.gameObject.SetActive(false);
                fade.transform.GetChild(0).gameObject.SetActive(false);
                _fade.alpha = 1;
            });
            //uI_Ingame.gameObject.SetActive(true);
        });
    }

    public void OnFadeOutChallengeResult() //end level -> choose level
    {
        fade.gameObject.SetActive(true);
        fade.DOKill();
        fade.DOFade(0, 0);
        fade.DOFade(1, 0.01f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            uI_Ingame.gameObject.SetActive(false);
            levelSelection.SetActive(true);
            //uI_AnchorTop.DisplayTopBar(true);
            uI_AnchorTop.DisplayTopBarChallenge();
            uI_AnchorTop.ToggleHomeBtn(false);
            uI_AnchorTop.ToggleNoAdBtn(false);
            fade.DOFade(0, 0.5f).SetEase(Ease.InOutSine).OnComplete(() => fade.gameObject.SetActive(false));
        });
    }

    public void OnFadeInLevel() //lobby -> challenge
    {
        fade.gameObject.SetActive(true);
        fade.DOKill();
        fade.DOFade(0, 0);
        fade.DOFade(1, 0.01f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            uI_Lobby.gameObject.SetActive(false);
            //uI_AnchorTop.DisplayTopBar(true);
            uI_AnchorTop.DisplayTopBarChallenge();
            uI_AnchorTop.ToggleNoAdBtn(false);
            if (PlayerPrefs.GetInt("FirstChallengePlay") == 0)
            {
                previewLevelChallengePanel.SetActive(true);
                PlayerPrefs.SetInt("FirstChallengePlay", 1);
            }
            else
            {
                levelSelection.SetActive(true);
                uI_AnchorTop.ToggleHomeBtn(false);
            }
            fade.DOFade(0, 0.5f).SetEase(Ease.InOutSine).OnComplete(() =>
            {
                fade.gameObject.SetActive(false);
            });
        });
    }

    public void OnFadeOut()  //ingame -> lobby
    {
        fade.gameObject.SetActive(true);
        fade.DOKill();
        fade.DOFade(0, 0);
        fade.DOFade(1, 0.01f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            uI_Ingame.gameObject.SetActive(false);
            //uI_AnchorTop.gameObject.SetActive(false);
            uI_AnchorTop.DisplayTopBarHome();
            uI_AnchorTop.ToggleHomeBtn(false);
            uI_Result.gameObject.SetActive(false);
            uI_Lobby.gameObject.SetActive(true);
            fade.DOFade(0, 0.5f).SetEase(Ease.InOutSine).OnComplete(() => fade.gameObject.SetActive(false));
        });
    }

    public void OnFadeShare() //share -> endgame
    {
        fade.gameObject.SetActive(true);
        fade.DOKill();
        fade.DOFade(0, 0);
        fade.DOFade(1, 0.01f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            sharePanel.gameObject.SetActive(false);
            uI_Result.gameObject.SetActive(true);
            fade.DOFade(0, 0.5f).SetEase(Ease.InOutSine).OnComplete(() => fade.gameObject.SetActive(false));
        });
    }
    #endregion

    #region NoAds
    public void OnClickNoAdsBtn()
    {
        internetMessagePanel.SetActive(true);
    }

    public void OnClickOkNoAdsBtn()
    {
        internetMessagePanel.SetActive(false);
    }

    public void DisplayNoAds()
    {
        if (PrefInfo.IsUsingAd())
        {
            noAdBtn.SetActive(true);
            //noAdBtn_1.SetActive(true);
        }
        else
        {
            noAdBtn.SetActive(false);
            //noAdBtn_1.SetActive(false);
        }
    }


    #endregion


}
