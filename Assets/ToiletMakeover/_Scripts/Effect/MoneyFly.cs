using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;

public class MoneyFly : MonoBehaviour
{
    [SerializeField] private Image money;
    [SerializeField] private Outline outline;
    [SerializeField] private Text moneyTxt;
    private Sequence autoMoneySq;
    private float time;
    private float countTime = 1f;
    private float orgPos;
    public bool mainChar;


    private void Start()
    {
        orgPos = transform.localPosition.y;
        int moneyNum;
        if (mainChar) moneyNum = Random.Range(800, 1000);
        else moneyNum = Random.Range(100, 500);
        moneyTxt.text = "+" + moneyNum;
        InitSequence();
    }

    private void InitSequence()
    {
        autoMoneySq = DOTween.Sequence();
        autoMoneySq.SetAutoKill(false);

        autoMoneySq.Append(transform.DOLocalMoveY(orgPos, 0f));
        autoMoneySq.Append(money.DOFade(1, 0));
        autoMoneySq.Join(moneyTxt.DOFade(1, 0));
        autoMoneySq.Join(outline.DOFade(1, 0));
        autoMoneySq.Join(transform.DOLocalMoveY(orgPos + 100, 0.8f).SetEase(Ease.OutCubic));

        autoMoneySq.Insert(0.5f, money.DOFade(0, 0.3f).SetEase(Ease.OutSine));
        autoMoneySq.Insert(0.5f, moneyTxt.DOFade(0, 0.3f).SetEase(Ease.OutSine));
        autoMoneySq.Insert(0.5f, outline.DOFade(0, 0.1f).SetEase(Ease.OutSine));
        autoMoneySq.Play();
    }

    private void Update()
    {
        time += Time.deltaTime;
        if (time >= countTime)
        {
            time = 0;
            autoMoneySq.Restart();
            //FloatEffect();
        }
    }
}
