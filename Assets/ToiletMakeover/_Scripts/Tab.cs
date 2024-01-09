using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Tab : MonoBehaviour
{
    [Header("Ref")]
    [SerializeField] private Transform bodyPartLink;

    [Header("State")]
    [SerializeField] private Scale bubble;
    [SerializeField] private GameObject check; //gold
    [SerializeField] private Color32 selected;
    [SerializeField] private Image fill;
    
    
    //void Awake()
    //{
    //    fill = GetComponent<Image>();
    //    bubble = transform.GetChild(0).GetComponent<Scale>();
    //    check = transform.GetChild(1).gameObject;
    //}

    private void OnValidate()
    {
        fill = GetComponent<Image>();
        bubble = transform.GetChild(0).GetComponent<Scale>();
        check = transform.GetChild(1).gameObject;
    }

    public void OnDisplay()
    {
        bubble.OnEnter();
        check.SetActive(true);
        fill.color = Color.white;
        IdleActions.OnUpdateScaleBodyPart?.Invoke(bodyPartLink);
    }

    public void OnExit(bool tick)
    {
        bubble.OnExit();
        if (tick) fill.color = selected;
        else fill.color = Color.white;
        check.SetActive(false);
    }

    public void Reset()
    {
        bubble.OnExit();
        fill.color = Color.white;
        check.SetActive(false);
    }
}
