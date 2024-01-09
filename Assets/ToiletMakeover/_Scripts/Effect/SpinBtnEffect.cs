using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class SpinBtnEffect : MonoBehaviour
{
    [SerializeField] private GameObject sign;
    public void Noti()
    {
        sign.gameObject.SetActive(true);
    }

    public void NoMoreNoti()
    {
        sign.gameObject.SetActive(false);
    }
}
