using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class UI_Transition : MonoBehaviour
{
    [SerializeField] private CanvasGroup canvasGroup;

    private void Start()
    {
        canvasGroup.DOFade(1, 0.3f).SetEase(Ease.InOutSine);
        Invoke(nameof(OnExit), 1.2f);
    }

    private void OnExit()
    {
        canvasGroup.DOFade(0, 0.3f).SetEase(Ease.InOutSine);
    }
}
