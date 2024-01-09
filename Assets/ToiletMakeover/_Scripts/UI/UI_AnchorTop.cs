using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
public class UI_AnchorTop : MonoBehaviour
{
    public bool mainTopMenu = false;

    [SerializeField] private CanvasGroup canvasGroup;

    [Header("Top bar element")]
    [SerializeField] private GameObject home;
    [SerializeField] private GameObject noAd;
    [SerializeField] private GameObject gold;
    [SerializeField] private GameObject ticket;
    [SerializeField] private GameObject spin;
    [SerializeField] private GameObject skipAdTicket;
    [SerializeField] private GameObject otherSpin;
    [SerializeField] private GameObject vipText;

    private void Awake()
    {
        this.RegisterListener(EventID.OnSubcribe, (param) => SetActiveVipSymbol());
    }

    private void SetActiveVipSymbol()
    {
        if (vipText != null)
            vipText.SetActive(true);
    }

    //adjust size of top bar via camera ortho
    private void Start()
    {
        float aspect = Camera.main.aspect;

        if (aspect > 0.5f)  //iphone 8 plus + ipad
        {
            transform.localScale = Vector3.one;
        }
        else
        {
            transform.localScale = Vector3.one * 0.92f;
        }
        //if (noAd != null)
        //    ToggleNoAdBtn(true);

        if (vipText != null)
            vipText.SetActive(PrefInfo.IsSub());
    }

    private void OnEnable()
    {
        if (mainTopMenu)
        {
            IdleActions.OnDisplayIdleUI -= ShowTopBar;
            IdleActions.OnHideIdleUI += HideTopBar;
        }
    }

    private void OnDisable()
    {
        if (mainTopMenu)
        {
            IdleActions.OnDisplayIdleUI += ShowTopBar;
            //IdleActions.OnDisplayIdleUI -= HideTopBar;
            IdleActions.OnHideIdleUI -= HideTopBar;
        }

    }

    public void DisplayTopBar(bool state)
    {
        if (state) canvasGroup.alpha = 1;
        gameObject.SetActive(state);

        if (PrefInfo.IsUsingAd())
            noAd.SetActive(true);
        else
            noAd.SetActive(false);

        home.SetActive(state);
        gold.SetActive(state);
        ticket.SetActive(state);
        spin.SetActive(state);
        skipAdTicket.SetActive(state);
    }

    public void DisplayTopBarHome() // coin, special ticket, normal ticket
    {
        canvasGroup.alpha = 1;
        gameObject.SetActive(true);

        home.SetActive(true);

        gold.SetActive(true);
        ticket.SetActive(true);
        skipAdTicket.SetActive(true);
        spin.SetActive(false);
        otherSpin.SetActive(false);
    }

    public void DisplayTopBarIngame() // coin, special ticket
    {
        canvasGroup.alpha = 1;
        gameObject.SetActive(true);

        home.SetActive(true);

        gold.SetActive(true);
        skipAdTicket.SetActive(true);
        ticket.SetActive(false);
        spin.SetActive(false);
    }

    public void DisplayTopBarChallenge() // coin, specialticket, normal ticket
    {
        canvasGroup.alpha = 1;
        gameObject.SetActive(true);

        home.SetActive(true);

        gold.SetActive(true);
        ticket.SetActive(true);
        skipAdTicket.SetActive(true);
        spin.SetActive(false);
    }

    public void DisplayTopBarEndgame(bool includeHome = true)  //coin, specialticket, normal ticket
    {
        canvasGroup.alpha = 1;
        gameObject.SetActive(true);

        if (includeHome) home.SetActive(true);
        else home.SetActive(false);

        gold.SetActive(true);
        ticket.SetActive(true);
        skipAdTicket.SetActive(true);
        spin.SetActive(false);
    }

    public void DisplayTopBarEndgamePk()
    {
        canvasGroup.alpha = 1;
        gameObject.SetActive(true);

        home.SetActive(false);

        gold.SetActive(true);
        ticket.SetActive(true);
        skipAdTicket.SetActive(true);
        spin.SetActive(false);
        otherSpin.SetActive(true);
    }


    public void ToggleNoAdBtn(bool state)  //result + level + challenge
    {
        noAd.SetActive(state && PrefInfo.IsUsingAd());
    }

    public void ToggleHomeBtn(bool state)
    {
        home.SetActive(state);
    }

    private void ShowTopBar()
    {
        FadeIn();
    }

    private void HideTopBar()
    {
        FadeOut();
    }


    public void FadeIn()
    {
        canvasGroup.alpha = 0;
        gameObject.SetActive(true);
        canvasGroup.DOFade(1, 0f).SetEase(Ease.InOutQuad);
    }
    public void FadeOut()
    {
        canvasGroup.DOFade(0, 0).SetEase(Ease.InOutQuad).OnComplete(() => gameObject.SetActive(false));  //0.3f
    }

}
