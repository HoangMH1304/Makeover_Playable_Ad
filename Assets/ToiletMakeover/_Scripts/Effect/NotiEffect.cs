using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class NotiEffect : MonoBehaviour
{
    public float orgScale = 1;
    public float targetScale = 1.15f;

    private void OnEnable()
    {
        transform.DOKill();
        transform.localScale = Vector3.one * orgScale;
        transform.DOScale(targetScale, 0.3f).SetEase(Ease.InOutQuad).SetLoops(-1, LoopType.Yoyo);
    }

    private void OnDisable()
    {
        transform.localScale = Vector3.one * orgScale;
    }
}
