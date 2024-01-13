using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;


public class UI_Ingame : MonoBehaviour
{
    [SerializeField] private GameObject nextBtn;
    [SerializeField] private Button doneBtn;
    [SerializeField] private List<RectTransform> tabMenuElements;

    private void OnEnable()
    {

        Input.multiTouchEnabled = false;
        doneBtn.interactable = true;
    }


    // effect scale
    private void Start()
    {
        if (CameraHandler.Instance.aspectRatio == AspectRatio.AR34)   //aspect ratio 3:4
        {
            foreach (var tab in tabMenuElements)
                tab.localScale = Vector3.one * 1.25f;
        }
        else if (CameraHandler.Instance.aspectRatio == AspectRatio.AR916)  //aspect ratio 9:16
        {
            foreach (var tab in tabMenuElements)
                tab.localScale = Vector3.one * 1.1f;
        }
    }

    public void DeactiveDoneBtn()
    {
        doneBtn.interactable = false;
    }

    public void ChangeIconToDone()
    {
        doneBtn.gameObject.SetActive(true);
        nextBtn.SetActive(false);
    }
}
