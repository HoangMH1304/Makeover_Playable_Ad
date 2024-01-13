using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CanvasHandler : MonoBehaviour
{
    private void Awake()
    {
        float sx = (Screen.width / 1080);
        float sy = (Screen.height / 1920f);
        this.GetComponent<CanvasScaler>().matchWidthOrHeight = (sx < sy ? 0 : 1);
    }
}
