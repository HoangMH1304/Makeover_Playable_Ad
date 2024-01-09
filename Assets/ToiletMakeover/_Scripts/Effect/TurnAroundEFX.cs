using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TurnAroundEFX : MonoBehaviour
{
    private void OnEnable()
    {
        transform.DOKill();
        transform.DOLocalRotate(new Vector3(0, 0, -360), 8f, RotateMode.FastBeyond360).
            SetRelative(true).SetEase(Ease.Linear).SetLoops(-1);
    }

}
