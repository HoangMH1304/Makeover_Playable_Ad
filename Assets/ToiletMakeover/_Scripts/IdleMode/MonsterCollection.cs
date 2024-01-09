using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.Rendering;
using TMPro;
using System;

public class MonsterCollection : MonoBehaviour
{
    private const string MONSTER_COLLECTION = "MonsterCollection3";
    private const string CARD_CONTAINER = "CardContainer3";
    private const string TOTAL_MONSTER_PRICE = "TotalMonsterPrice3";
    public static MonsterCollection Instance;

    public int totalMonsterPrice = 0;
    public int totalMonster;
    public bool isUpdateVersion;
    [SerializeField] public InitPrice priceCanvas;
    [SerializeField] public MoneyFloat moneyFloatCanvas;
    [SerializeField] private GameObject monster;
    [SerializeField] private RectTransform card, endgameCard, endgameChallengeCard, endgamePKCard;
    [SerializeField] private Transform monsterHolder;
    [SerializeField] public List<CharacterManager> monsters = new List<CharacterManager>();
    private Transform monsterCard;
    private Transform monsterCardEndgame;
    private bool isMonsterInCard;
    private CharacterManager characterManager, characterManagerEndgame;
    private bool outOfCard;


    public bool IsEnableForIdleMode()
    {
        return monsterHolder.childCount >= 1;
    }

    public void CreateMonsterCard()
    {
        isMonsterInCard = true;
        if (card.childCount > 1) card.GetChild(1).gameObject.SetActive(false);
        string bodyName = ShopController.Instance.Bodies[PlayerPrefs.GetInt("Body")].bodypartName;

        monsterCard = Instantiate(monster.transform, card);
        monsterCard.SetSiblingIndex(1);
        monsterCard.name = bodyName;
        monsterCard.localScale = Vector3.one * 16f;
        monsterCard.GetComponent<SortingGroup>().sortingLayerName = "UI";
        monsterCard.gameObject.SetActive(card.GetChild(1) == monsterCard);
        monsterCard.GetComponent<BoxCollider2D>().enabled = true;

        InitMonsterCardEndgame(bodyName, endgameCard);
        InitMonsterCardEndgame(bodyName, endgameChallengeCard, true);
        InitMonsterCardEndgame(bodyName, endgamePKCard, true);

        characterManager = monsterCard.GetComponent<CharacterManager>();
        MonsterStackHolder.Instance.monsterStack.Push(characterManager);

        characterManager.ChangeToIdleAnim();
        characterManagerEndgame = monsterCardEndgame.GetComponent<CharacterManager>();
        characterManagerEndgame.ChangeToIdleAnim();

    }

    private void InitMonsterCardEndgame(string bodyName, Transform card, bool isActive = false)
    {
        monsterCardEndgame = Instantiate(monster.transform, card);
        monsterCardEndgame.SetSiblingIndex(0);
        monsterCardEndgame.name = bodyName;
        monsterCardEndgame.localScale = Vector3.one * 16f;
        //delay
        monsterCardEndgame.gameObject.SetActive(isActive);

        var monsterCardEndgameSG = monsterCardEndgame.GetComponent<SortingGroup>();
        monsterCardEndgameSG.sortingLayerName = "UI";
        monsterCardEndgameSG.sortingOrder = 7;
    }

    private Transform firstMonster;

    public void DragMonster()  //drag card btn
    {
        if (!isMonsterInCard || card.childCount == 1) return;
        firstMonster = card.GetChild(1);
        
        firstMonster.SetParent(monsterHolder);
        firstMonster.localScale = Vector3.one * 0.35f;
        firstMonster.GetComponent<SortingGroup>().sortingLayerName = "Gameplay";

        characterManager = firstMonster.GetComponent<CharacterManager>();

        characterManager.ChangeToDanceAnim();
        isMonsterInCard = false;

    }

    public void EndDragMonster()
    {
        if (!outOfCard) return;
        outOfCard = false;
        isMonsterInCard = true;
       
    }

    public void CalculateTotalMonsterPrice()
    {
        totalMonsterPrice = 0;
        for (int i = 0; i < monsters.Count; i++)
        {
            totalMonsterPrice += monsters[i].orgPrice;
        }
        PlayerPrefs.SetInt(TOTAL_MONSTER_PRICE, totalMonsterPrice);
    }

    public void SetStateMonsterInCard()
    {
        outOfCard = true;
    }
}