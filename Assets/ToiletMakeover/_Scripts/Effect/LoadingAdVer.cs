using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using TMPro;

public class LoadingAdVer : MonoBehaviour
{
    [SerializeField] private Transform spinAnim;
    [SerializeField] private Transform highlightAnim;
    private void OnEnable()
    {
        Setup();
        spinAnim.DOLocalRotate(new Vector3(0, 0, -180), 2f, RotateMode.Fast).SetEase(Ease.Linear).SetLoops(-1, LoopType.Incremental);
        highlightAnim.DOScale(Vector3.one * 1.1f, 0.8f).SetEase(Ease.InOutQuad).SetLoops(-1, LoopType.Yoyo);
    }

    private void Setup()
    {
        spinAnim.DOKill();
        spinAnim.DOLocalRotate(Vector3.zero, 0);
        highlightAnim.DOKill();
        highlightAnim.DOScale(Vector3.one, 0);
    }

    private void OnDisable()
    {
        Setup();
    }
}
