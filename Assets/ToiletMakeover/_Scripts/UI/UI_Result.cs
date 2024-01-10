using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.UI;
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

    private int idBG;

    [Header("SkipAdCurrency")]
    [SerializeField] private GameObject[] adIco;
    [SerializeField] private GameObject[] skipAdIco;

    public void UpdateMoneyBar(int money)
    {
        moneyText.SetTarget(money, true, false);
    }


    //bool setSpinSizeOneTime = false;
    public bool testSpin;

    private void OnEnable()
    {
        //SetSpinSize();
        idBG = bgAnimController.SetActiveBgAnim();
        UpdateMoneyBar(characterManager.currentPrice);
    }
}
