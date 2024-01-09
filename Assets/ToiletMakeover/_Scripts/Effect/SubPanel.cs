using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Coffee.UIExtensions;

public class SubPanel : PopupPanel
{
    [Header("Prize Zone")]
    [SerializeField] private Transform[] prizes;

    private Sequence animPrize;


    private void Awake()
    {
        if (Camera.main.aspect <= 0.5f)
        {
            scaleY = 0.85f;
            panel.localScale = Vector3.one * 0.85f;
        }
    }

    protected override void OnEnable()
    {
        AnimPrize();
        base.OnEnable();
    }

    private void AnimPrize()
    {
        animPrize = DOTween.Sequence();
        //animPrize.SetAutoKill(false);

        foreach (var item in prizes)
        {
            item.DOKill();
            item.localScale = Vector3.one;
            animPrize.AppendInterval(0.15f);
            animPrize.Append(item.DOScale(1.3f, 0.3f).SetEase(Ease.OutBack));
            animPrize.Append(item.DOScale(1f, 0.15f).SetEase(Ease.InBack));
        }

        //animPrize.SetLoops(-1, LoopType.Restart);

        InvokeRepeating(nameof(HighLightObj), 0, 1.6f);
    }

    private void HighLightObj()
    {
    }

    public void OnClickPolicy()
    {
        Application.OpenURL("https://docs.google.com/document/d/1U2mluYGBHW26YAOoqWzoY4ECXR-HRkfle9OH5NiloRE/edit");
    }

    public void OnClickTermOfUser()
    {
        Application.OpenURL("https://docs.google.com/document/d/1g_Ej-JMe6uYFldXVzlP6CF96sfzuAiCXmtoCmKCeuU8/edit");
    }

    protected override void OnDisable()
    {
        CancelInvoke(nameof(HighLightObj));
        animPrize.Kill();

        //if(PlayerPrefs.GetInt("FirstInters") == 1)
        //{
        //    MasterControl.Instance.ShowInterstitialAd();
        //    PlayerPrefs.SetInt("FirstInters", 2);
        //}
        base.OnDisable();
    }

}
