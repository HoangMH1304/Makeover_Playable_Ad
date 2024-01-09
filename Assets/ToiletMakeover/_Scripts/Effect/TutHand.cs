using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TutHand : MonoBehaviour
{
    private void OnEnable()
    {
        transform.DOKill();
        transform.DOLocalMoveY(-110, 0);
        transform.DOLocalMoveY(-70, 0.4f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
    }

    private void OnDisable()
    {
        transform.DOKill();
    }
}
