using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BubbleNoti : MonoBehaviour
{
    [SerializeField] private Transform bubble;

    public void OnClickToNoti()
    {
        bubble.DOKill();
        bubble.DOScaleY(0, 0);
        bubble.DOScaleY(0.8f, 0.25f).SetEase(Ease.OutCubic);
        bubble.DOScaleY(0, 0.25f).SetEase(Ease.InCubic).SetDelay(0.8f);
    }

    private void OnDisable()
    {
        bubble.DOScaleY(0f, 0);
    }
}
