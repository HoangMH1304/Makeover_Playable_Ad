using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackgroundManager : MonoBehaviour
{
    [SerializeField] private Sprite originalSprite;
    [SerializeField] private Color originalColor;
    [SerializeField] private Sprite sprite;
    [SerializeField] private SpriteRenderer spriteRenderer;

    private void Awake()
    {
        //this.RegisterListener(EventID.OnStart, (param) => OnChangeBackground());
        //this.RegisterListener(EventID.OnReplay, (param) => OnChangeOriginalBG());
    }

    private void OnChangeBackground()   //change to ingame background
    {
        spriteRenderer.sprite = sprite;
        spriteRenderer.color = Color.white;
    }

    private void OnChangeOriginalBG()  //change to lobby background
    {
        if (!UIHandler.Instance.ReturnHome) return;
        spriteRenderer.sprite = originalSprite;
        spriteRenderer.color = originalColor;
    }
}
