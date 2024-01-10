using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BlinkText : MonoBehaviour
{
    private bool blinking = false;

    public bool Blinking { get => blinking; set => blinking = value; }

    private void OnEnable()
    {
        blinking = false;
    }

    private void Start()
    {
    }
    public void Blink()
    {
        //text.DOKill();
        //text.DOFade(1, 0.75f).SetEase(Ease.InOutCirc).SetLoops(-1, LoopType.Yoyo);
        //blinking = true;
    }

    public void OnExit(bool immediate = false)
    {
        //text.DOKill();
        //float duration = (immediate) ? 0 : 0.5f;
        //text.DOFade(0, duration).SetEase(Ease.InSine);
        //blinking = false;
    }
}
