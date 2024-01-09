using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using TMPro;

public class ItemDisplay : MonoBehaviour
{
    [SerializeField] private Image itemSprite;
    [SerializeField] private GameObject adSlot;
    [SerializeField] private GameObject priceSlot;
    [SerializeField] private GameObject lockSlot;
    [SerializeField] private GameObject fill;
    [SerializeField] private TextMeshProUGUI adCount;
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

    //tắt star khi chơi xong mode pk
    private void OnEnable()
    {
        CheckForPurchaseRemoveAds();
        //starPk.SetActive(false);
    }



    public void MarkSuggestItem()
    {
        starPk.SetActive(true);
        if (item.bodyPart == BodyPart.Head || item.bodyPart == BodyPart.Body)
            transform.SetAsFirstSibling();
        else
            transform.SetSiblingIndex(1);
    }

    public void CheckForPurchaseRemoveAds()
    {
        if (!PrefInfo.IsUsingAd() && PlayerPrefs.GetInt("Remote_RewardAds", 1) == 0)
        {
            if (item.isAd)
            {
                PlayerPrefs.SetInt(item.bodyPart.ToString() + item.id + "Ad", 1);
                lockSlot.SetActive(false);
                adSlot.SetActive(false);
            }
        }
    }

    private void OnDisable()
    {
        transform.DOKill();
    }
    public void Show(Item _item, bool isSkipAd)
    {
        gameObject.SetActive(true);
        item = _item;
        itemSprite.sprite = item.preview;
        itemSprite.SetNativeSize();

        RegisterListener();

        CheckForPurchaseRemoveAds();

        if (item.isAd && PlayerPrefs.GetInt(item.bodyPart.ToString() + item.id + "Ad") != 1)
        {
            if (isSkipAd)
            {
                icoSkipAd.SetActive(true);
                icoAd.SetActive(false);
            }
            else
            {
                icoSkipAd.SetActive(false);
                icoAd.SetActive(true);
            }
            LockSlot(adSlot);
        }
        if (item.price > 0 && PlayerPrefs.GetInt(item.bodyPart.ToString() + item.id + "Price") != 1)
            LockSlot(priceSlot);
    }

    private void LockSlot(GameObject typeLock)
    {
        lockSlot.SetActive(true);
        typeLock.SetActive(true);
    }

    public void OnClick()
    {
        if (item.isAd && PlayerPrefs.GetInt(item.bodyPart.ToString() + item.id + "Ad") != 1)
        {
            if (GameController.Instance.IsSkipAdsTicketAvaiable())
            {
                OnReward();
            }
            else
            {
                HandleAdItem(item);
            }
            return;
        }
        if (item.price > 0 && PlayerPrefs.GetInt(item.bodyPart.ToString() + item.id + "Price") != 1)
        {
            HandlePriceItem();
            return;
        }

        //show ad inters khi khong bam vao item ad
        HandleConditionToShowInters();


        if ((item.price > 0 && PlayerPrefs.GetInt(item.bodyPart.ToString() + item.id + "Price") != 1) ||
            (item.isAd && PlayerPrefs.GetInt(item.bodyPart.ToString() + item.id + "Ad") != 1))
        {
            return;
        }


        this.PostEvent(EventID.OnClick, item.id);

        //hand tut in first challenge
        if (handTut.activeSelf)
        {
            Destroy(GetComponent<GraphicRaycaster>());
            Destroy(GetComponent<Canvas>());
        }
        handTut.SetActive(false);
        if (item.bodyPart == BodyPart.Eye) blockPanelTut.SetActive(false);

        //anim
        transform.DOKill();
        transform.DOScale(1.05f, 0.4f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
        //
        fill.SetActive(true);
        PlayerPrefs.SetInt(item.bodyPart.ToString(), item.id);
        SetPriceItem();
        SoundManager.Instance.PlayItemClickedSound();
    }

    private static void HandleConditionToShowInters()
    {
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
        if (GameController.Instance.Gold < 30)
        {
            UIHandler.Instance.NeedMoreCoinPanel.SetActive(true);
        }
        else
        {
            GameController.Instance.UpdateGold(-30);
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

            if (GameManager.Instance.mode == GameMode.PkMode)
            {
            }
        }
    }

    private void HandleAdItem(Item item)
    {
       
    }

    private void OnReward()
    {
        SoundManager.Instance.PlayItemClickedSound();
        ImmediateBuy();

    }

    private void ImmediateBuy()
    {
        PlayerPrefs.SetInt(item.bodyPart.ToString() + item.id + "Ad", 1);
        ShopController.Instance.UnlockItem(item);
        lockSlot.SetActive(false);
        adSlot.SetActive(false);

        this.PostEvent(EventID.OnClick, item.id);
        //anim
        transform.DOKill();
        transform.DOScale(1.05f, 0.4f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
        //
        fill.SetActive(true);
        PlayerPrefs.SetInt(item.bodyPart.ToString(), item.id);
        SetPriceItem();
    }

    public void Deselect()
    {
        transform.DOKill();
        transform.DOScale(1, 0);
        fill.SetActive(false);
    }

    public void SetSib(int idx) => transform.SetSiblingIndex(idx);


}
