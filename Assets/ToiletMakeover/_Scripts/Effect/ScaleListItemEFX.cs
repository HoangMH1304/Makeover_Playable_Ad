using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class ScaleListItemEFX : MonoBehaviour
{
    [SerializeField] private Transform[] zoomAnims;
    private Sequence sequence;
    private void OnEnable()
    {
        Setup();
        sequence = DOTween.Sequence();
        sequence.AppendInterval(0.4f);
        foreach (var item in zoomAnims)
        {
            sequence.Append(item.DOScale(Vector3.one, 0.25f).SetEase(Ease.OutQuad));
        }
        //sequence.OnComplete(() => OnDisappear()).SetLoops(-1, LoopType.Restart);
    }

    private void Setup()
    {
        sequence.Kill();
        foreach (Transform obj in zoomAnims)
        {
            obj.DOKill();
            obj.DOScale(Vector3.zero, 0);
        }
    }

    private void OnDisappear()
    {
        foreach (var item in zoomAnims)
        {
            item.DOKill();
            item.DOScale(0, 0.2f).SetEase(Ease.InQuad);
        }
    }

    private void OnDisable()
    {
        Setup();
    }
}
