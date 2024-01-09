using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class ButtonEffect : MonoBehaviour
{
    //atractive button
    private void OnEnable()
    {
        //transform.DOKill();
        //StartCoroutine(PlayEffect());
        transform.localScale = Vector3.one;
        PlayPopEffect();
    }

    public void PlayPopEffect()
    {
        transform.DOKill();
        float t = Random.Range(1, 1.5f);
        Sequence sq = DOTween.Sequence();
        sq.Append(transform.DOScale(0.9f, 0.2f).SetEase(Ease.InOutSine));
        sq.Append(transform.DOScale(1f, 0.2f).SetEase(Ease.InOutSine));
        sq.SetLoops(-1, LoopType.Yoyo);
        sq.PrependInterval(t);
    }
}
