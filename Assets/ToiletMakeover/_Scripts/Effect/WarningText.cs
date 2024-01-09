using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using TMPro;
using UnityEngine.UI;

public class WarningText : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI warningText;
    [SerializeField] private Image ico;

    private void Awake()
    {
        if (warningText == null)
            warningText = GetComponent<TextMeshProUGUI>();
    }

    public void SetText(int num)
    {
        if (num < 1000) warningText.text = " + " + num.ToString("N0");
        else warningText.text = " +" + num.ToString("N0");
        gameObject.SetActive(true);
    }

    private void OnEnable()
    {
        transform.DOKill();
        warningText.DOKill();
        transform.localPosition = Vector3.zero - new Vector3(0, 30, 0);
        warningText.DOFade(1, 0);
        if (ico != null) ico.DOFade(1, 0);
        warningText.DOFade(0, 0.6f).SetDelay(0.2f).SetEase(Ease.InOutQuad);
        if (ico != null) ico.DOFade(0, 0.6f).SetDelay(0.2f).SetEase(Ease.InOutQuad);
        transform.DOLocalMoveY(70, 0.8f).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            gameObject.SetActive(false);
        });
    }
}
