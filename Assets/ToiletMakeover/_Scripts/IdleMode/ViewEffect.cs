using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class ViewEffect : MonoBehaviour
{
    [SerializeField] private Sprite viewOn;
    [SerializeField] private Sprite viewOff;
    [SerializeField] private Image shareBtn;
    [SerializeField] private Image buttonImg;
    [SerializeField] private GameObject screenshotZone;

    private void Start()
    {
        IdleActions.OnDisplayIdleUI += ShowUI;
        IdleActions.OnHideIdleUI += HideUI;
    }

    //private void OnDisable()
    //{
    //    IdleActions.OnDisplayIdleUI -= ShowUI;
    //    IdleActions.OnHideIdleUI -= HideUI;
    //}

    private void ShowUI()
    {
        buttonImg.sprite = viewOn;
        screenshotZone.SetActive(false);
        shareBtn.DOKill();
        shareBtn.DOFade(1, 0);
        shareBtn.DOFade(0, 0f).SetEase(Ease.InOutQuad).OnComplete(() => shareBtn.gameObject.SetActive(false));  //0.3f
    }

    private void HideUI()
    {
        buttonImg.sprite = viewOff;
        screenshotZone.SetActive(true);
        shareBtn.DOKill();
        shareBtn.DOFade(0, 0);
        shareBtn.gameObject.SetActive(true);
        shareBtn.DOFade(1, 0f).SetEase(Ease.InOutQuad);  //0.3f
    }

    private void OnDisable()
    {
        screenshotZone.SetActive(false);
    }
}
