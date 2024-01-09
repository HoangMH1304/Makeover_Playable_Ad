using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BreathButton : MonoBehaviour
{
    private float buttonScale;
    private Sequence sq;
    public bool constantBreath = false;
    public bool increaseScale = false;
    public float delayFirstTime = 0;
    //attactive button
    private void Awake()
    {
        buttonScale = transform.localScale.y;
    }
    private void OnEnable()
    {
        transform.DOKill();
        transform.DOScale(buttonScale, 0);
        Invoke(nameof(DoScale), delayFirstTime);
        //DoScale();
    }

    private void DoScale()
    {
        sq = DOTween.Sequence();

        float t = Random.Range(0.8f, 1.2f);
        if (constantBreath)
        {
            t = 1;
            sq.AppendInterval(1);

        }
        if (increaseScale)
        {
            sq.Append(transform.DOScale(buttonScale + 0.1f, 0.3f).SetEase(Ease.OutQuad));
        }
        else
        {
            sq.Append(transform.DOScale(buttonScale - 0.1f, 0.3f).SetEase(Ease.OutQuad));
        }
        sq.Append(transform.DOScale(buttonScale, 0.3f).SetEase(Ease.InQuad));
        sq.SetLoops(-1, LoopType.Yoyo);

        if (!constantBreath)
            sq.PrependInterval(t);
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(DoScale));
        sq.Kill();
    }
}
