using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;

public class MoneyFloat : MonoBehaviour
{
    [Header("Auto float money")]
    [SerializeField] private Text autoRaiseMoney;
    [SerializeField] private Image autoMoney;
    private Transform autoRaiseMoneyTransform;

    [Header("For single monster")]
    [SerializeField] private Text[] click1TimeMoney;
    [SerializeField] private Image[] moneyImgs1;
    [SerializeField] private FloatEffect[] moneyPerMonster;

    [Header("For multiple monster")]
    [SerializeField] private Text[] totalMoneyRaise;
    [SerializeField] private Image[] moneyImgs2;
    [SerializeField] private FloatEffect[] moneyAllMonster;

    private float countTime;
    private float time = 0;
    private long priceOfMonster;
    private Sequence autoMoneySq;

    private bool callFirstTime = false;

    private void Start()
    {
        countTime = Random.Range(1.6f, 2f);
        autoRaiseMoneyTransform = autoRaiseMoney.transform;

        InitSequence();
        callFirstTime = true;
    }

    private void OnEnable()
    {
        if (callFirstTime)
            InitSequence();
    }

    private void OnDisable()
    {
        autoMoneySq.Kill();
        foreach (var money in moneyAllMonster)
        {
            money.KillTween();
        }
        foreach (var money in moneyPerMonster)
        {
            money.KillTween();
        }
    }


    public void StopTween()
    {
        for (int i = 0; i < moneyImgs1.Length; i++)
        {
            moneyImgs1[i].DOKill();
            moneyImgs1[i].transform.DOKill();
        }
        for (int i = 0; i < moneyImgs2.Length; i++)
        {
            moneyImgs2[i].DOKill();
            moneyImgs2[i].transform.DOKill();
        }
        for (int i = 0; i < click1TimeMoney.Length; i++)
        {
            click1TimeMoney[i].DOKill();
            click1TimeMoney[i].transform.DOKill();
        }
        for (int i = 0; i < totalMoneyRaise.Length; i++)
        {
            totalMoneyRaise[i].DOKill();
            totalMoneyRaise[i].transform.DOKill();
        }
        autoRaiseMoney.DOKill();
        autoRaiseMoney.transform.DOKill();
        autoMoney.DOKill();
        autoMoney.transform.DOKill();
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

    private void FloatEffect()
    {
        autoRaiseMoney.DOFade(1, 0);
        autoMoney.DOFade(1, 0);
        autoRaiseMoneyTransform.DOLocalMoveY(4f, 1.5f).SetEase(Ease.OutCubic);

        autoRaiseMoney.DOFade(0, 1f).SetEase(Ease.OutSine).SetDelay(0.5f);
        autoMoney.DOFade(0, 1f).SetEase(Ease.OutSine).SetDelay(0.5f).OnComplete(() =>
        {
            autoRaiseMoneyTransform.DOLocalMoveY(0f, 0f);
        });
    }

    //object pool

    public void ClickToRaiseMoney()   //tang tien khi bam vao bg
    {
        for (int i = 0; i < moneyAllMonster.Length; i++)
        {
            if (!moneyAllMonster[i].CheckActiveState())
            {
                moneyAllMonster[i].PlayEffect();  
                //SpawnText(i);
                return;
            }
        }
    }

    public void ClickToRaiseMoney1()  //tang tien khi bam vao quai
    {
        for (int i = 0; i < moneyPerMonster.Length; i++)
        {
            if (!moneyPerMonster[i].CheckActiveState())
            {
                moneyPerMonster[i].PlayEffect();
                //SpawnText1(i);
                return;
            }
        }
    }
    private void InitSequence()
    {
        autoMoneySq = DOTween.Sequence();
        autoMoneySq.SetAutoKill(false);

        autoMoneySq.Append(autoRaiseMoneyTransform.DOLocalMoveY(0f, 0f));
        autoMoneySq.Append(autoRaiseMoney.DOFade(1, 0));
        autoMoneySq.Join(autoMoney.DOFade(1, 0));
        autoMoneySq.Join(autoRaiseMoneyTransform.DOLocalMoveY(4f, 1.5f).SetEase(Ease.OutCubic));

        autoMoneySq.Insert(0.5f, autoRaiseMoney.DOFade(0, 1f).SetEase(Ease.OutSine));
        autoMoneySq.Insert(0.5f, autoMoney.DOFade(0, 1f).SetEase(Ease.OutSine));
        autoMoneySq.Play();
    }

    private void SpawnText1(int i)
    {
        click1TimeMoney[i].gameObject.SetActive(true);
        click1TimeMoney[i].transform.localPosition = new Vector3(Random.Range(-1f, 1f), 0, 0);
        click1TimeMoney[i].DOFade(1, 0);
        moneyImgs1[i].DOFade(1, 0);
        click1TimeMoney[i].transform.DOLocalMoveY(3.5f, 1f).SetEase(Ease.InOutSine);

        click1TimeMoney[i].DOFade(0, 0.8f).SetEase(Ease.InOutSine).SetDelay(0.2f);
        moneyImgs1[i].DOFade(0, 0.7f).SetEase(Ease.InOutSine).SetDelay(0.3f).OnComplete(() =>
        {
            click1TimeMoney[i].transform.DOLocalMoveY(0f, 0f);
            click1TimeMoney[i].gameObject.SetActive(false);
            moneyImgs1[i].transform.DOLocalMoveY(0f, 0f);
        });
    }

    private void SpawnText(int i)
    {
        totalMoneyRaise[i].gameObject.SetActive(true);
        totalMoneyRaise[i].transform.localPosition = new Vector3(Random.Range(-1f, 1f), 0, 0);
        totalMoneyRaise[i].DOFade(1, 0);
        moneyImgs2[i].DOFade(1, 0);
        totalMoneyRaise[i].transform.DOLocalMoveY(3.5f, 1f).SetEase(Ease.InOutSine);

        totalMoneyRaise[i].DOFade(0, 0.8f).SetEase(Ease.InOutSine).SetDelay(0.2f);
        moneyImgs2[i].DOFade(0, 0.7f).SetEase(Ease.InOutSine).SetDelay(0.3f).OnComplete(() =>
        {
            totalMoneyRaise[i].transform.DOLocalMoveY(0f, 0f);
            totalMoneyRaise[i].gameObject.SetActive(false);
            moneyImgs2[i].transform.DOLocalMoveY(0f, 0f);
        });
    }

    public void UpdatePrice(int num)
    {
        priceOfMonster = num;
        autoRaiseMoney.text = "+" + num.ToString("N0");

        foreach (var money in moneyPerMonster)
        {
            money.SetValueMoneyTxt(num);
        }
        foreach (var money in moneyAllMonster)
        {
            money.SetValueMoneyTxt(num);
        }
        //foreach (var item in totalMoneyRaise)
        //{
        //    item.text = "+" + num.ToString("N0");
        //}
        //foreach (var item in click1TimeMoney)
        //{
        //    item.text = "+" + num.ToString("N0");
        //}
    }

}
