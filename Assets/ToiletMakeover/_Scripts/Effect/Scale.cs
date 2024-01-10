using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class Scale : MonoBehaviour
{
    //bubble text
    private void OnEnable()
    {
        transform.localScale = Vector3.zero;
    }

    public void OnEnter()
    {
        transform.DOKill();
        transform.DOScale(0, 0);
        transform.DOScale(1, 0.2f).SetEase(Ease.InOutSine);
        transform.localScale = Vector3.one;
    }

    public void OnExit()
    {
        transform.DOKill();
        transform.DOScale(0, 0.2f).SetEase(Ease.InOutSine);
    }
}
