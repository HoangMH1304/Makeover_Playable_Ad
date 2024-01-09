using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using System;
using Sirenix.OdinInspector;

public class ScaleBodyPartAdjust : MonoBehaviour
{
    [Title("Slider")]
    [SerializeField] private TextMeshProUGUI scaleText;
    [SerializeField] private Slider slider;


    public Transform targetScaleBodyPart = null;

    private void Start()
    {
        IdleActions.OnUpdateScaleBodyPart += SetBodyPart;
    }

    private void OnEnable()
    {
        slider.normalizedValue = 0.5f;
    }

    private void SetBodyPart(Transform target)
    {
        if (target == null) gameObject.SetActive(false);
        else
        {
            if (!gameObject.activeSelf) gameObject.SetActive(true);
            targetScaleBodyPart = target;
        }
    }


    public void UpdateScaleData()
    {
        if (targetScaleBodyPart == null) return;
        var scale = Math.Round(slider.value, 1);
        targetScaleBodyPart.localScale = Vector3.one * (float)scale;
        scaleText.text = scale.ToString();
    }
}
