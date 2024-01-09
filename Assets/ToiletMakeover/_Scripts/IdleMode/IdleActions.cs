using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class IdleActions
{
    public static Action OnUnlockLeftMap;
    public static Action OnUnlockRightMap;
    public static Action OnUnlockTopMap;
    public static Action OnUnlockBottomMap;

    //view btn
    public static Action OnDisplayIdleUI;
    public static Action OnHideIdleUI;

    public static Action OnCalculatePrice;
    public static Action<int> OnClaimOfflineReward;

    //booster 
    public static Action<float> OnBoost;
    public static Action<float> OnDeboost;

    //booster percent
    public static Action<int> OnIncreaseBoosterPercent;
    public static Action<int> OnDecreaseBoosterPercent;

    public static Action OnFocusItemInBuilding;

    public static Action OnPopUpOfflineReward;

    //slot monster in field
    public static Action OnNotiLimitCharacter;
    public static Action OnNotiUpgradeSlot;

    //tap screen + monster
    public static Action OnRaiseMoneyAllMonster;
    public static Action<bool> OnSwitchConditionToRaiseMoneyMonster;

    //glitch bg
    public static Action OnGlitch;

    //notification
    public static Action OnNotiCollection;

    //tut Idle
    public static Action<bool> OnUpdateInBg;

    //scale bodypart
    public static Action<Transform> OnUpdateScaleBodyPart;

    //skipAd in Building
    public static Action<bool> OnDisplayAdSkipInBuilding;

    //skipAd Booster
    public static Action OnDisplayAdBooster;
}
