using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using TMPro;

public class HideUI : MonoBehaviour
{
    private bool showUI = true;
    public GameObject mainCanvas;
    [SerializeField] private Image btn;
    [SerializeField] private TextMeshProUGUI text;

    public void OnClick()
    {
        showUI = !showUI;
        if (showUI)
        {
            btn.DOFade(1, 0);
            text.DOFade(1, 0);
        }
        else
        {
            btn.DOFade(0, 0);
            text.DOFade(0, 0);
        }
        mainCanvas.SetActive(showUI);
    }
}
