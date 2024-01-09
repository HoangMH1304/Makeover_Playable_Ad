using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class ShakeEFX : MonoBehaviour
{
    [SerializeField] private Transform preview;

    private void OnEnable()
    {
        preview.DOKill();
        preview.DOPunchRotation(new Vector3(0, 0, 5), 2, 4, 1).SetEase(Ease.InOutSine).SetLoops(-1);
    }
}
