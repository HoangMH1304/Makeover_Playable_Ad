using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class UI_FadeElementLobby : MonoBehaviour
{
    private CanvasGroup fadeElementPanel;
    [SerializeField] private BoosterDisplayer boosterDisplayer;

    private void Awake()
    {
        fadeElementPanel = GetComponent<CanvasGroup>();
    }
    private void OnEnable()
    {
        IdleActions.OnDisplayIdleUI -= DisplayIdleUI;
        IdleActions.OnHideIdleUI += OnExit;
        OnEntrance();
    }

    private void OnEntrance()
    {
        fadeElementPanel.alpha = 0;
        fadeElementPanel.DOFade(1, 0.3f).SetEase(Ease.InOutQuad);
        boosterDisplayer.OnDisplay();
    }

    private void OnDisable()
    {
        IdleActions.OnDisplayIdleUI += DisplayIdleUI;
        IdleActions.OnHideIdleUI -= OnExit;
        boosterDisplayer.OnNonDisplay();
    }

    private void DisplayIdleUI()
    {
        fadeElementPanel.gameObject.SetActive(true);
    }

    public void OnExit()
    {
        fadeElementPanel.DOFade(0, 0).SetEase(Ease.InOutQuad).OnComplete(() => fadeElementPanel.gameObject.SetActive(false)); //0.3f
        boosterDisplayer.OnNonDisplay();
    }

}
