using UnityEngine;
public enum BodyPart
{
    Head,
    Eye,
    Mouth,
    Acc,
    Body
}

public enum CatalogueTheme
{
    Skibidi,
    alime,
    trend,
    Normal
}

public enum Theme
{
    Toilet,
    Concert,
    Beach
}

public enum Priority
{
    Low,
    High,
    SeasonReward
}

[CreateAssetMenu(fileName = "Item", menuName = "Scriptable Object/Item", order = 0)]
public class Item : ScriptableObject 
{
    public int id;
    public string bodypartName;
    public Sprite preview;
    public Sprite part;
    [Header("Currency")]
    public bool isAd;
    //[InfoBox("Số lượng ad để unlock")]
    public int adNum = 1;
    public int price;
    [Header("=======")]
    public BodyPart bodyPart;
    public bool specialPos;
    public Vector3 realPos;
    public CatalogueTheme catalogue = CatalogueTheme.Normal;
    /// <summary>
    /// 0: là những con monster cũ dùng chung xương, 1 là monster mới xương k dùng chung
    /// </summary>
    public int dataAsset;
    [Header("Theme")]
    public Theme pkTheme;
    [Header("Priority")]
    public Priority priority = Priority.Low;
}