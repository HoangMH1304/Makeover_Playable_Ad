using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BoosterDisplayer : MonoBehaviour
{
    [SerializeField] private CanvasGroup boosterLayer;
    [SerializeField] private GameObject particleEffect;

    public void OnDisplay()
    {
        boosterLayer.DOKill();
        boosterLayer.alpha = 0;
        boosterLayer.DOFade(1, 0f).SetEase(Ease.InOutQuad).OnComplete(() =>  //0.3
        {
            boosterLayer.interactable = true;
        });
        particleEffect.SetActive(true);

    }

    public void OnNonDisplay()
    {
        boosterLayer.alpha = 1;
        boosterLayer.DOFade(0, 0f).SetEase(Ease.InOutQuad); //0f
        boosterLayer.interactable = false;
        particleEffect.SetActive(false);

        SoundManager.Instance.PauseSound(Sound.rocket);

    }
}
