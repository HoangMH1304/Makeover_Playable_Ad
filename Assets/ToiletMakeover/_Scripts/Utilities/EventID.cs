public enum EventID
{
    OnClick,  //pick item
    OnReplay,
    OnStart,
    OnBuyItem,
    /// <summary>
    /// Unlock all ad, coin items
    /// </summary>
    OnUnlock,  //for unlock all
    /// <summary>
    /// Unlock all ad items
    /// </summary>
    OnUnlockAdItems,
    /// <summary>
    /// On change state skip ad -> ad
    /// </summary>
    OnDisplayAdItem,
    OnRewardSpin,
    OnPickLevel,
    OnUnlockLevel,
    OnTakeAShot,
    OnEnterIdleMode,
    OnEnterLeaderboard,
    OnEnterShop,
    OnEnterPkMode,
    OnTurnOffSuggestSymbolItems,
    OnReplayPK,
    OnUnlockPkMode,
    //Subcription
    OnSubcribe,
    //SeasonReward
    OnRewardTop1,
    OnRewardTop2,
    OnRewardTop3,
    OnRewardTop10,
    OnRewardTop50,
    OnRewardTop100,
    //NativeAdZone
    OnTurnOffInteractNativeAd
}