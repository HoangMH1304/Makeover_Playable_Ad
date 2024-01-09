using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BGLightEffect : MonoBehaviour
{
    private SpriteRenderer bg;
    public Color otherColor;

    private void Awake()
    {
        bg = GetComponent<SpriteRenderer>();
    }

    private void OnEnable()
    {
        IdleActions.OnGlitch += Glitch;
    }

    private void OnDisable()
    {
        IdleActions.OnGlitch -= Glitch;
        //bg.color = Color.white;
    }

    public void Glitch()
    {
        bg.DOKill();
        //bg.color = Color.white;
        bg.DOColor(otherColor, 0.3f).SetEase(Ease.InOutSine).SetLoops(30, LoopType.Yoyo);
    }
}
