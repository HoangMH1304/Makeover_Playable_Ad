using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class ItemDisplay : MonoBehaviour
{
    public int _id;
    [SerializeField] private Transform iconScale;
    [SerializeField] private Image itemSprite;
    [SerializeField] private GameObject fill;

    
    public Item item;


    private void OnDisable()
    {
        transform.DOKill();
    }
    public void Show(Item _item, int id)
    {
        gameObject.SetActive(true);

        item = _item;
        _id = id;

        itemSprite.sprite = item.preview;
        itemSprite.SetNativeSize();

        iconScale.localScale = Vector3.one * 0.8f;
    }


    public void OnClick()
    {
        this.PostEvent(EventID.OnClick, item.id);

        fill.SetActive(true);
        PlayerPrefs.SetInt(item.bodyPart.ToString(), item.id);
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
