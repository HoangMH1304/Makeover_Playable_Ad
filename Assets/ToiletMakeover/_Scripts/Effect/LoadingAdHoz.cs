using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using TMPro;

public class LoadingAdHoz : MonoBehaviour
{
    private string[] tipText = {
            "Tapping on the monster is the easiest way to earn money",
            "Test your luck with The Fortune Wheel",
            "You can easily drag and move some body parts",
            "Resize the body parts to create a unique difference",
            "The more monsters, the more money",
            "Using boosters is the fastest way to earn money",
            "Buying a combo package helps save a lot more money"
        };

    private int totalTips = -1;

    [SerializeField] private Transform[] zoomAnims;
    [SerializeField] private TextMeshProUGUI tip;
    public bool hasTip = false;
    private Sequence sequence;
    private void OnEnable()
    {
        if (hasTip)
            RandomTip();

        Setup();
        sequence = DOTween.Sequence();
        foreach (var item in zoomAnims)
        {
            sequence.Append(item.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutQuad));
        }
        sequence.OnComplete(() => OnDisappear()).SetLoops(-1, LoopType.Restart);
        //text.DOScale(Vector3.one * 1.1f, 0.8f).SetEase(Ease.InOutQuad).SetLoops(-1, LoopType.Yoyo);
    }

    private void RandomTip()
    {
        totalTips = tipText.Length;
        int rand = Random.Range(0, totalTips);

        tip.text = "TIP: " + tipText[rand];
    }

    private void Setup()
    {
        sequence.Kill();
        foreach (Transform obj in zoomAnims)
        {
            obj.DOKill();
            obj.DOScale(Vector3.zero, 0);
        }
        //text.DOKill();
        //text.DOScale(Vector3.one, 0);
    }

    private void OnDisappear()
    {
        foreach (var item in zoomAnims)
        {
            item.DOScale(0, 0.2f).SetEase(Ease.InQuad);
        }
    }

    private void OnDisable()
    {
        Setup();
    }
}
