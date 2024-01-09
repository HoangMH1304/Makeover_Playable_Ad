using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using TMPro;

public class FloatEffect : MonoBehaviour
{
    [SerializeField] private Transform autoRaiseMoneyTransform;
    [SerializeField] private TextMeshProUGUI autoRaiseMoney;
    [SerializeField] private Image autoMoney;
    private Sequence sq;
    private bool requireInitTween = true;

    private void OnEnable()
    {
        if (requireInitTween)
        {
            InitSequence();
            requireInitTween = false;
        }
        else sq.Restart();
    }

    public bool CheckActiveState()
    {
        return gameObject.activeSelf;
    }

    public void KillTween()
    {
        requireInitTween = true;
        sq.Kill();
    }


    private void InitSequence()
    {
        sq = DOTween.Sequence();
        sq.SetAutoKill(false);

        autoRaiseMoneyTransform.localPosition = new Vector3(Random.Range(-1f, 1f), 0, 0);

        sq.Append(autoRaiseMoney.DOFade(1, 0));
        sq.Join(autoMoney.DOFade(1, 0));
        sq.Join(autoRaiseMoneyTransform.DOLocalMoveY(3.5f, 1f).SetEase(Ease.InOutSine));
          
        sq.Insert(0.2f, autoRaiseMoney.DOFade(0, 0.8f).SetEase(Ease.InOutSine));
        sq.Insert(0.3f, autoMoney.DOFade(0, 0.7f).SetEase(Ease.InOutSine));
        sq.Play();
        sq.OnComplete(() => gameObject.SetActive(false));
    }

    public void SetValueMoneyTxt(int money)
    {
        autoRaiseMoney.text = "+" + money.ToString("N0");
    }

    public void PlayEffect()
    {
        gameObject.SetActive(true);
    }
}
