using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class AuraEfx : MonoBehaviour
{
    [SerializeField] private Transform auraTransform;
    private Image auraImg;

    private void OnEnable()
    {
        if (auraTransform == null) auraImg = GetComponent<Image>();

        auraImg.DOKill();
        auraTransform.DOKill();

        auraImg.DOFade(0.2f, 0);

        auraTransform.DORotate(new Vector3(0f, 0f, 360f), 4.0f, RotateMode.FastBeyond360).SetEase(Ease.Linear)
        .SetLoops(-1, LoopType.Incremental);

        auraImg.DOFade(0.5f, 0.5f).SetEase(Ease.OutBack).SetLoops(-1, LoopType.Yoyo);
    }
}
