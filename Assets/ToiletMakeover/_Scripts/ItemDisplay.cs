using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class ItemDisplay : MonoBehaviour
{
    [SerializeField] private Image itemSprite;
    [SerializeField] private GameObject adSlot;
    [SerializeField] private GameObject priceSlot;
    [SerializeField] private GameObject lockSlot;
    [SerializeField] private GameObject fill;
    [SerializeField] private GameObject starPk;

    [SerializeField] private GameObject handTut;
    [SerializeField] private GameObject blockPanelTut;
    [Header("Icon Ad")]
    [SerializeField] private GameObject icoAd;
    [SerializeField] private GameObject icoSkipAd;
    public Item item;
    private int idItem;


    private void RegisterListener()
    {
        this.RegisterListener(EventID.OnUnlock, (param) => OnClaim());
        this.RegisterListener(EventID.OnUnlockAdItems, (param) => OnUnlockAdItem());
        this.RegisterListener(EventID.OnDisplayAdItem, (param) => ChangeStateAdItem((bool)param));
        this.RegisterListener(EventID.OnTurnOffSuggestSymbolItems, (param) => TurnOffSuggestSymbolItems());
    }

    public void TurnOffSuggestSymbolItems()
    {
        starPk.SetActive(false);
    }

    private void ChangeStateAdItem(bool stateAd)  // skip ad -> ad
    {
        icoSkipAd.SetActive(stateAd);
        icoAd.SetActive(!stateAd);
    }

    public void OnClaim()  //unlock all item (coin, ad)
    {
        lockSlot.SetActive(false);
        adSlot.SetActive(false);
        priceSlot.SetActive(false);

        if (item.isAd)
        {
            PlayerPrefs.SetInt(item.bodyPart.ToString() + item.id + "Ad", 1);
        }
        if (item.price > 0)
        {
            PlayerPrefs.SetInt(item.bodyPart.ToString() + item.id + "Price", 1);
        }
        ShopController.Instance.UnlockItem(item);
    }

    public void OnUnlockAdItem()
    {
        if (item.isAd)
        {
            PlayerPrefs.SetInt(item.bodyPart.ToString() + item.id + "Ad", 1);
            lockSlot.SetActive(false);
            adSlot.SetActive(false);
        }
    }


    private void OnDisable()
    {
        transform.DOKill();
    }
    public void Show(Item _item)
    {
        gameObject.SetActive(true);
        item = _item;
        itemSprite.sprite = item.preview;
        itemSprite.SetNativeSize();

        RegisterListener();
    }

    private void LockSlot(GameObject typeLock)
    {
        lockSlot.SetActive(true);
        typeLock.SetActive(true);
    }

    public void OnClick()
    {
        this.PostEvent(EventID.OnClick, item.id);

        fill.SetActive(true);
        PlayerPrefs.SetInt(item.bodyPart.ToString(), item.id);
        SetPriceItem();
        SoundManager.Instance.PlayItemClickedSound();
    }


    private void SetPriceItem()
    {
        int price = 0;

        if (item.price > 0) price = UnityEngine.Random.Range(50, 61);
        else if (item.isAd) price = UnityEngine.Random.Range(90, 101);
        else price = UnityEngine.Random.Range(10, 21);
        PlayerPrefs.SetInt(item.bodyPart.ToString() + "Price", price);
    }

    private void HandlePriceItem()
    {
        PlayerPrefs.SetInt(item.bodyPart.ToString() + "Choosed", item.id);
        PlayerPrefs.SetString("SelectedItem", item.bodyPart.ToString() + "Choosed");
        OnBuy();
    }

    public void OnBuy()
    {
        if (item.price == 0) return;
            PlayerPrefs.SetInt(item.bodyPart.ToString() + item.id + "Price", 1);
            lockSlot.SetActive(false);
            priceSlot.SetActive(false);
            ShopController.Instance.UnlockItem(item);

            this.PostEvent(EventID.OnClick, item.id);
            //anim
            transform.DOKill();
            transform.DOScale(1.05f, 0.4f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            //
            fill.SetActive(true);
            PlayerPrefs.SetInt(item.bodyPart.ToString(), item.id);
            SetPriceItem();
            SoundManager.Instance.PlayItemClickedSound();

    }


    public void Deselect()
    {
        transform.DOKill();
        transform.DOScale(1, 0);
        fill.SetActive(false);
    }

    public void SetSib(int idx) => transform.SetSiblingIndex(idx);


}
