using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlipCard : MonoBehaviour
{
    [SerializeField] private float yRotate;
    [SerializeField] public GameObject cardBack;
    private bool cardBackIsActive;
    private float timer;

    private void OnEnable()
    {
        cardBackIsActive = false;
        timer = 0;
    }

    public void StartFlip()
    {
        StartCoroutine(CalculateFlip());
    }

    public void Flip()
    {
        if(cardBackIsActive == true)
        {
            cardBack.SetActive(false);
            cardBackIsActive = false;
        }
        else
        {
            cardBack.SetActive(true);
            cardBackIsActive = true;
        }
    }

    IEnumerator CalculateFlip()
    {
        for(int i = 0; i < 180; i++)
        {
            yield return new WaitForSeconds(0.01f);
            transform.Rotate(new Vector3(0, yRotate, 0));
            timer++;
            if (timer == 90 || timer == -90) Flip();
        }
        timer = 0;

    }
}
