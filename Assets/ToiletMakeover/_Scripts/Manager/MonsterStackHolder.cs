using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterStackHolder : MonoBehaviour
{
    public static MonsterStackHolder Instance;

    private void Awake()
    {
        Instance = this;
    }

    public Stack<CharacterManager> monsterStack = new Stack<CharacterManager>();
}
