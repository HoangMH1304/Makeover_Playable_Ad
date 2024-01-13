using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Luna.Unity;

public class UI_Endgame : MonoBehaviour
{
    [SerializeField] private CanvasGroup canvasGroup;

    public void OnEntrance()
    {
        LifeCycle.GameEnded();
        gameObject.SetActive(true);
        canvasGroup.DOFade(1, 0.3f).SetEase(Ease.InOutSine);
        Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
    }

    public void OnClickDownload()
    {
        Application.OpenURL("https://apps.apple.com/us/app/toilet-makeover-mix-monsters/id6448269598");
        Playable.InstallFullGame();
    }
}
