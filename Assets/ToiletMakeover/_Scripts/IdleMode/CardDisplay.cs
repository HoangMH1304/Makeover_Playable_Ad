using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class CardDisplay : MonoBehaviour
{
    [SerializeField] private Transform cardMonsterHolder;
    [SerializeField] private TextMeshProUGUI monsterCounter;
    [SerializeField] private bool shrinkCard = false;
    [SerializeField] private Transform otherCard, otherCard1;

    private void OnEnable()
    {
        UpdateMonsterLeft();
    }

    private void Start()
    {
        UpdateMonsterLeft();
    }

    public void UpdateMonsterLeft()
    {
        if (transform.childCount == 1 && !shrinkCard) transform.localScale = Vector3.zero;
        else transform.localScale = Vector3.one * 0.95f;

        //if (shrinkCard) return;
        int counter = cardMonsterHolder.childCount - 1;
        monsterCounter.text = counter.ToString();
    }

    public void OnEnableFirstMonster()
    {
        transform.GetChild(0).gameObject.SetActive(true);
    }

    public void OnDisableFirstMonster()
    {
        transform.GetChild(0).gameObject.SetActive(false);
    }

    private void OnDisable()
    {
        if (shrinkCard)
        {
            transform.GetChild(0).gameObject.SetActive(false);
            otherCard.GetChild(0).gameObject.SetActive(false);
            otherCard1.GetChild(0).gameObject.SetActive(false);
        }
    }
}
