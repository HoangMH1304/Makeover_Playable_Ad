using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using System.Text;
//using System;

public class UI_Result : MonoBehaviour
{
    [SerializeField] private Text moneyTxt;
    [SerializeField] private GameObject bgAnim;
    [SerializeField] private GameObject ingameBg;
    [SerializeField] private Transform characterZone;
    [SerializeField] private CharacterManager characterManager;
    [SerializeField] private MonsterCreator extraMonster1;
    [SerializeField] private MonsterCreator extraMonster2;
    private ShopController shopController;

    private float timer = 0;
    private float range = 0.8f;
    private int money = 900;

    private void OnEnable()
    {
        shopController = ShopController.Instance;
        
        money = 1000;
        moneyTxt.text = "$" + money.ToString("N0");


        ingameBg.SetActive(false);
        bgAnim.SetActive(true);

        characterZone.localPosition = new Vector3(0, 1.5f, 0);
        characterManager.SetScale(0.9f);
        characterManager.SetPos(new Vector3(0, -2.2f, 0));

        HandleExtraMonster1();
        HandleExtraMonster2();
    }

    private void Update()
    {
        if(timer < range)
        {
            timer += Time.deltaTime;
            return;
        }
        if (money > 50000) return;
        money += 1400;
        moneyTxt.text = "$" + money.ToString("N0");
        timer = 0;
    }



    private void HandleExtraMonster1()
    {
        Item head = null, eye = null, mouth = null, acc = null, body = null;

        for(int i = 0; i < shopController.heads.Length; i++)
        {
            head = shopController.heads[i];
            if (head != shopController.CurrentHead) break;
        }

        for (int i = 0; i < shopController.eyes.Length; i++)
        {
            eye = shopController.eyes[i];
            if (eye != shopController.CurrentEye) break;
        }

        for (int i = 0; i < shopController.mouths.Length; i++)
        {
            mouth = shopController.mouths[i];
            if (mouth != shopController.CurrentMouth) break;
        }

        for (int i = 0; i < shopController.accs.Length; i++)
        {
            acc = shopController.accs[i];
            if (acc != shopController.CurrentAcc) break;
        }

        for (int i = 0; i < shopController.bodies.Length; i++)
        {
            body = shopController.bodies[i];
            if (body != shopController.CurrentBody) break;
        }

        extraMonster1.CreateMonster(head, eye, mouth, acc, body);
    }

    private void HandleExtraMonster2()
    {
        Item head = null, eye = null, mouth = null, acc = null, body = null;

        for (int i = shopController.heads.Length - 1; i >= 0; i--)
        {
            head = shopController.heads[i];
            if (head != shopController.CurrentHead) break;
        }

        for (int i = shopController.eyes.Length - 1; i >= 0; i--)
        {
            eye = shopController.eyes[i];
            if (eye != shopController.CurrentEye) break;
        }

        for (int i = shopController.mouths.Length - 1; i >= 0; i--)
        {
            mouth = shopController.mouths[i];
            if (mouth != shopController.CurrentMouth) break;
        }

        for (int i = shopController.accs.Length - 1; i >= 0; i--)
        {
            acc = shopController.accs[i];
            if (acc != shopController.CurrentAcc) break;
        }

        for (int i = shopController.bodies.Length - 1; i >= 0; i--)
        {
            body = shopController.bodies[i];
            if (body != shopController.CurrentBody) break;
        }

        extraMonster2.CreateMonster(head, eye, mouth, acc, body);
    }
}
