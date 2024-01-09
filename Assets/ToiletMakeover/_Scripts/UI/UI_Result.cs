using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;
//using System;

public class UI_Result : MonoBehaviour
{
    [SerializeField] private BgAnimController bgAnimController;
    [SerializeField] private CharacterManager characterManager;
    [SerializeField] public Transform rewardPos;
    [SerializeField] private Image rewardImg;
    [SerializeField] private GameObject youGotPanel;
    [SerializeField] private CanvasGroup endgameCanvasGroup;
    [SerializeField] private GameObject tutPanel, tutHand;
    [SerializeField] private Transform card;
    [SerializeField] private Transform mainCard;
    [SerializeField] private GameObject x2Btn;
    [SerializeField] private CanvasGroup x2Btn_OldVersion;

    [Header("A/b test reward zone")]
    [SerializeField] private GameObject rewardSpinZone;
    [SerializeField] private GameObject rewardRandomZone;

    [Header("Currency")]
    [SerializeField] private TextMeshProUGUI quantity;
    [SerializeField] private TextMeshProUGUI coinNum;
    [SerializeField] private CountNumber moneyText;

    [Header("Reward Zone")]
    [SerializeField] private Sprite[] rewardSpr;
    [SerializeField] private GameObject[] rewardInfo;
    [SerializeField] private GameObject[] rewardOldVersionInfo;
    [SerializeField] private GameObject[] replayTxts;
    [SerializeField] private CanvasGroup rewardCanvasGroup, rewardCanvasGroupOldVer;

    [Header("Icon Free + Ad")]
    [SerializeField] private GameObject adIcon;
    [SerializeField] private GameObject freeIcon;
    [SerializeField] private GameObject adIconOldVer;
    [SerializeField] private GameObject freeIconOlder;

    [Header("Spin")]
    [SerializeField] private Transform spin;
    [SerializeField] private Transform arrowSpin;
    [SerializeField] private Animator arrowAnim;

    private string[] showBtnLog = new string[3] { "Endgame_Show_Coin", "Endgame_Show_Spin", "Endgame_Show_Ticket" };
    private string[] rewardLog = new string[3] { "Reward_Coin", "Reward_Spin", "Reward_ticket" };
    private int idBG;

    [Header("SkipAdCurrency")]
    [SerializeField] private GameObject[] adIco;
    [SerializeField] private GameObject[] skipAdIco;
    private bool isSkipAdAvaiable;

    private bool IsSkipAdAvaiable()
    {
        if (GameController.Instance.SkipAdsTicket > 0)
        {
            for (int i = 0; i < adIco.Length; i++)
            {
                skipAdIco[i].SetActive(true);
                adIco[i].SetActive(false);
            }
            return true;
        }
        for (int i = 0; i < skipAdIco.Length; i++)
        {
            skipAdIco[i].SetActive(false);
            adIco[i].SetActive(true);
        }
        return false;
    }


    public void UpdateMoneyBar(int money)
    {
        moneyText.SetTarget(money, true, false);
    }


    #region adRewardBtn
    public void SpinReward()
    {
        if (freeIcon.activeInHierarchy || freeIconOlder.activeInHierarchy)
        {
            RandomReward();
            isSkipAdAvaiable = IsSkipAdAvaiable();

            return;
        }

        if (isSkipAdAvaiable)
        {
            RandomReward();
            GameController.Instance.UpdateSkipAdsTicket(-1);
            isSkipAdAvaiable = IsSkipAdAvaiable();
            return;
        }
    }

    private void SetStateBtn(CanvasGroup btn, float alpha, bool interact)
    {
        btn.alpha = alpha;
        btn.interactable = interact;
    }

    //private void 

    private void RandomReward()
    {
        quantity.DOFade(0, 0);
        rewardImg.rectTransform.localScale = Vector3.one * 2;


        SetStateBtn(rewardCanvasGroup, 0.6f, false);
        SetStateBtn(rewardCanvasGroupOldVer, 0.6f, false);


    }

    #endregion

    #region OtherStage_btn
    public void OtherStageBtn()
    {
        HandleAdBg();
    }
    private void HandleAdBg()
    {
        if (isSkipAdAvaiable)
        {
            OnChangeBg();
            GameController.Instance.UpdateSkipAdsTicket(-1);
            isSkipAdAvaiable = IsSkipAdAvaiable();
            return;
        }
    }

    private void OnChangeBg()
    {
        idBG = bgAnimController.ChangeBG();
        SetStateReplayText();
    }

    private void TurnOffReplayBtn()
    {
        for(int i = 0; i < replayTxts.Length; i++)
        {
            replayTxts[i].SetActive(false);
        }
    }

    private void SetStateReplayText()
    {
        if (idBG == 1)
        {
            replayTxts[0].SetActive(false);
            replayTxts[1].SetActive(true);
        }
        else
        {
            replayTxts[1].SetActive(false);
            replayTxts[0].SetActive(true);
        }
    }
    #endregion


    #region x2_value_monster_btn
    public void x2MonsterPrice()
    {
        if (isSkipAdAvaiable)
        {
            HandleX2Value();
            GameController.Instance.UpdateSkipAdsTicket(-1);
            isSkipAdAvaiable = IsSkipAdAvaiable();
            return;
        }
    }

    private void HandleX2Value()
    {
        CameraHandler.Instance.PlayConfetti();

        var firstMonster = mainCard.GetChild(1).GetComponent<CharacterManager>();
        int n = firstMonster.currentPrice;
        firstMonster.currentPrice *= 2;
        moneyText.CustomAddValue(n, 2 * n);
        x2Btn.SetActive(false);
        x2Btn_OldVersion.alpha = 0.5f;
        x2Btn_OldVersion.interactable = false;
    }
    #endregion

    #region Replay_btn
    public void Replay()
    {
        this.PostEvent(EventID.OnReplay);
        SoundManager.Instance.PauseSound(Sound.outtro);
        SoundManager.Instance.PlaySound(Sound.bg);
    }
    #endregion

    //bool setSpinSizeOneTime = false;
    public bool testSpin;

    private void OnEnable()
    {
        //SetSpinSize();
        isSkipAdAvaiable = IsSkipAdAvaiable();

        idBG = bgAnimController.SetActiveBgAnim();


        UpdateMoneyBar(characterManager.currentPrice);
        SetConditionForReward();

        endgameCanvasGroup.alpha = 0;
        endgameCanvasGroup.interactable = false;
        endgameCanvasGroup.DOFade(1, 0.3f).SetEase(Ease.InOutSine).SetDelay(1.5f).OnComplete(() =>
        {
            endgameCanvasGroup.interactable = true;
            if (PlayerPrefs.GetInt("TutIdle") == 0)
            {
                PlayerPrefs.SetInt("TutIdle", 1);
                tutPanel.SetActive(true);
                tutHand.SetActive(true);
            }
            else
            {
            }
            card.GetChild(0).gameObject.SetActive(true);
            //UIHandler.Instance.AnchorTop.DisplayTopBar(true);
            UIHandler.Instance.AnchorTop.DisplayTopBarEndgame();
            UIHandler.Instance.AnchorTop.ToggleNoAdBtn(false);
        });

    }

    int idReward = 0;

    [Header("Special case")]
    [SerializeField] private GameObject skipAdOJ;

    private void RandomRewardEndgame()
    {
        rewardOldVersionInfo[idReward].SetActive(false);
        idReward = (idReward + 1) % 3;
        rewardOldVersionInfo[idReward].SetActive(true);

    }

    private void SetConditionForReward()
    {
        if (PlayerPrefs.GetInt("TotalShowRate") < PlayerPrefs.GetInt("level_show_rate", 5))
        {
            PlayerPrefs.SetInt("TotalShowRate", PlayerPrefs.GetInt("TotalShowRate") + 1);
        }
        if (PlayerPrefs.GetInt("FreeReward") < 3)
        {
            PlayerPrefs.SetInt("FreeReward", PlayerPrefs.GetInt("FreeReward") + 1);
            adIcon.SetActive(false);
            adIconOldVer.SetActive(false);
            freeIcon.SetActive(true);
            freeIconOlder.SetActive(true);
            skipAdOJ.SetActive(false);
        }
        else
        {
            freeIcon.SetActive(false);
            freeIconOlder.SetActive(false);
            adIcon.SetActive(true);
            adIconOldVer.SetActive(true);
        }
    }

    float timer = 0;
    readonly float eclapseTime = 0.02f;

    private void Update()
    {
        if (timer < 0) return;
        timer += Time.deltaTime;
        if (timer < eclapseTime) return;

        timer = 0;
        SetRewardPrice();
    }

    private void SetRewardPrice()
    {
        if (arrowSpin.localEulerAngles.z >= 36 && arrowSpin.localEulerAngles.z <= 90)
        {
            for (int i = 0; i < 3; i++)
            {
                rewardInfo[i].SetActive(i == 0);
            }
        }
        else if (arrowSpin.localEulerAngles.z < 36 || arrowSpin.localEulerAngles.z - 360 >= -36)
        {
            for (int i = 0; i < 3; i++)
            {
                rewardInfo[i].SetActive(i == 1);
            }
        }
        else
        {
            for (int i = 0; i < 3; i++)
            {
                rewardInfo[i].SetActive(i == 2);
            }
        }
    }

    private void OnDisable()
    {
        tutPanel.SetActive(false);
        tutHand.SetActive(false);

        SetStateBtn(rewardCanvasGroup, 1, true);
        SetStateBtn(rewardCanvasGroupOldVer, 1, true);

    }

    #region OldVersionCode
    //private void FireLog(string events)
    //{
    //    if (MasterControl.Instance.adsState == AdsState.UnlockAll)
    //    {
    //        return;
    //    }
    //    FireBaseManager.Instance.LogEvent(events);
    //}
    //private void Start()
    //{
    //    MasterControl.Instance.adsController.countGame++;
    //}
    #endregion
}
