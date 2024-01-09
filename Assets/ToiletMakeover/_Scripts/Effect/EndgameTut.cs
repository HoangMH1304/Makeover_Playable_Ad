using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;

public class EndgameTut : MonoBehaviour
{
    [SerializeField] private Transform handTut;
    private Image handDir;

    private void Awake()
    {
        handDir = GetComponent<Image>();
    }

    //-150 -> -110
    private void Start()
    {
        //handTut.DOKill();
        //handTut.DOLocalMoveY(-220f, 0.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
        handDir.DOKill();
        handDir.DOFade(0f, 0.5f).SetEase(Ease.InOutQuad).SetLoops(-1, LoopType.Yoyo);
    }

    private void OnDisable()
    {
        handDir.DOKill();
    }
}
