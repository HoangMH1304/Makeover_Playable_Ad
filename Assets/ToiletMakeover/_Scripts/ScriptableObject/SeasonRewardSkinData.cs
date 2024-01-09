using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "SSRewardSkinData", menuName = "Scriptable Object/SSRewardSkin")]
public class SeasonRewardSkinData : ScriptableObject
{
    [Header("Top1")]
    public int[] head1;
    public int[] eye1;
    public int[] mouth1;
    public int[] acc1;
    public int[] body1;

    [Header("Top2")]
    public int[] head2;
    public int[] eye2;
    public int[] mouth2;
    public int[] acc2;
    public int[] body2;

    [Header("Top3")]
    public int[] head3;
    public int[] mouth3;
    public int[] acc3;
    public int[] body3;

    [Header("Top10")]
    public int[] head10;
    public int[] acc10;
    public int[] body10;

    [Header("Top50")]
    public int[] acc50;
    public int[] body50;

    [Header("Top100")]
    public int[] acc100;
}
