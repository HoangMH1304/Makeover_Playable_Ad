using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BoosterEffect : MonoBehaviour
{
    private Vector3 orgScale;
    private void Awake()
    {
        orgScale = transform.localScale;
    }
    private void OnEnable()
    {
        transform.DOKill();
        transform.localScale = orgScale;
        transform.DOScale(orgScale * 1.03f, 1f).SetEase(Ease.InOutCubic).SetLoops(-1, LoopType.Yoyo);
    }
}
