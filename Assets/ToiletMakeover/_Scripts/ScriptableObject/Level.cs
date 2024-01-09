using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Level", menuName = "Scriptable Object/Level")]
public class Level : ScriptableObject
{
    public string monsterName;
    public int id;

    [Header("BodyPart Item")]
    public Item face;
    public Item eye;
    public Item mouth;
    public Item acc;
    public Item body;
    [Header("Custom BodyPart Position")]
    //public bool customPos;
    public Vector3 headPos = new Vector3(0, 240, 0);
    public Vector3 eyePos = new Vector3(0, 46.5f, 0);
    public Vector3 mouthPos = new Vector3(0, -170, 0);
    public Vector3 accPos = new Vector3(0, 0 , 0);
    public Vector3 bodyPos = new Vector3(0, -101, 0);
}
