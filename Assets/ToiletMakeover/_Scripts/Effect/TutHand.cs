using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TutHand : MonoBehaviour
{
    [SerializeField] private RectTransform rt;
    private void OnEnable()
    {
        rt.DOKill();
        rt.DOAnchorPosY(180, 0);
        rt.DOAnchorPosY(140, 0.4f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
    }

    private void OnDisable()
    {
        transform.DOKill();
    }
}
