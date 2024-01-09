using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using DG.Tweening;

public class LockMoneyBarZone : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI lockMoneyBarZone;

    private void OnEnable()
    {
        lockMoneyBarZone.DOKill();
        transform.DOKill();
        
        transform.DOScaleX(0, 0);
        transform.DOScaleX(1, 0.2f).SetEase(Ease.InOutQuad);

        lockMoneyBarZone.DOFade(1, 0);
        lockMoneyBarZone.text = "Coming soon";
        lockMoneyBarZone.DOFade(0, 0.3f).SetEase(Ease.InOutSine)
            .SetLoops(14, LoopType.Yoyo).OnComplete(() =>
            {
                transform.DOScaleX(0, 0.2f).SetEase(Ease.InOutQuad).OnComplete(() => gameObject.SetActive(false));
            });
    }
}
