using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class DragDropTut : MonoBehaviour
{
    private void OnEnable()
    {
        transform.DOLocalMove(new Vector3(-110f, 250f, 0), 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Restart);
    }
}
