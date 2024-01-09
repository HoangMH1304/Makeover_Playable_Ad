using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System;

[RequireComponent(typeof(TextMeshProUGUI))]
public class CountNumber : MonoBehaviour
{
    [SerializeField]
    private float countDuration = 1;
    [SerializeField] private TextMeshProUGUI numberText;
    [SerializeField] private bool automaticSetNum = false;

    float currentValue = 0, targetValue = 0;
    Coroutine _C2T;

    void Awake()
    {
        if (numberText == null)
            numberText = GetComponent<TextMeshProUGUI>();
    }

    void Start()
    {
        if(automaticSetNum)
        {
            targetValue = 0;
            currentValue = 0;
            return;
        }
        string num = numberText.text;

        currentValue = float.Parse(num);
        targetValue = currentValue;
    }

    IEnumerator CountTo(float targetValue, bool normalize = false, bool continueCount = true)
    {
        if (normalize && !continueCount) currentValue = 0;
        var rate = Mathf.Abs(targetValue - currentValue) / countDuration;
        numberText.text = ((int)currentValue).ToString();
        while (currentValue != targetValue)
        {

            currentValue = Mathf.MoveTowards(currentValue, targetValue, rate * Time.deltaTime);
            if (normalize) numberText.text = "$" + ((int)currentValue).ToString();
            else numberText.text = ((int)currentValue).ToString();
            yield return null;
        }
    }

    public void AddValue(float value, bool normalize = false)
    {
        targetValue += value;
        if (_C2T != null)
            StopCoroutine(_C2T);
        _C2T = StartCoroutine(CountTo(targetValue, normalize));
    }

    public void CustomAddValue(float begin, float end)
    {
        if (_C2T != null)
            StopCoroutine(_C2T);
        _C2T = StartCoroutine(CountTo1(begin, end));
    }

    IEnumerator CountTo1(float begin, float end)
    {
        var rate = Mathf.Abs(end - begin) / countDuration;
        while (begin != end)
        {
            begin = Mathf.MoveTowards(begin, end, rate * Time.deltaTime);
            numberText.text = "$" + ((int)begin).ToString();
            yield return null;
        }
    }


    public void SetTarget(float target, bool normalize = false, bool continueCount = true)
    {
        targetValue = target;
        if (_C2T != null)
            StopCoroutine(_C2T);
        _C2T = StartCoroutine(CountTo(targetValue, normalize, continueCount));
    }
}