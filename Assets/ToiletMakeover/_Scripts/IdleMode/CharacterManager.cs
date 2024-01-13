using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

public class CharacterManager : MonoBehaviour
{
    public static CharacterManager Instance;
    public string monsterBody = "";
    public bool spawnMoney = true;

    [SerializeField] private Transform headHolder;
    [SerializeField] private SkeletonAnimation[] bodies;
    [SerializeField] private BoneFollower[] boneFollowers;

    private int numberVariantBody;

    public SortingGroup sortingGroup;


    //private void Start()
    //{

    //    sortingGroup = GetComponent<SortingGroup>();
    //    numberVariantBody = bodies.Length;

    //    monsterBody = gameObject.name;
    //    MyDebug.LogError("IMPORTANT: skin:" + monsterBody);


    //    ChangeToDanceAnim(true);

    //}

    public void SetScale(float range)
    {
        transform.localScale = Vector3.one * 0.8f;
    }

    public void SetPos(Vector3 pos)
    {
        transform.localPosition = pos;
    }


    private void SetTypeOfAnim(SkeletonAnimation body, int id = -1)
    {
        if (id == 0)
        {
            body.AnimationState.SetAnimation(0, "Zerotwo", true).MixDuration = 0;
            body.skeleton.SetToSetupPose();
            return;
        }
        int randomIdx = Random.Range(0, 4);
        if (randomIdx <= 1)
        {
            body.AnimationState.SetAnimation(0, "Zerotwo", true).MixDuration = 0;
        }
        else
        {
            body.AnimationState.SetAnimation(0, "Zerotwo" + randomIdx, true).MixDuration = 0;
        }
        body.skeleton.SetToSetupPose();
    }


    public void ChangeToDanceAnim(bool saveDance = false)
    {
        for (int i = 0; i < bodies.Length; i++)
        {
            if (!bodies[i].gameObject.activeSelf) continue;
            if (saveDance)
            {
                if (i == 0) bodies[i].Skeleton.SetSkin(monsterBody);//
                else
                {
                    try
                    {
                        bodies[i].Skeleton.SetSkin("trend/" + monsterBody);//
                    }
                    catch (System.Exception)
                    {
                    }
                    try
                    {
                        bodies[i].Skeleton.SetSkin("alime/" + monsterBody);//
                    }
                    catch (System.Exception)
                    {
                    }
                    try
                    {
                        bodies[i].Skeleton.SetSkin("Skibidi/" + monsterBody);//
                    }
                    catch (System.Exception)
                    {
                    }
                }
                //bodies[i].Skeleton.SetSkin(monsterBody);//
                bodies[i].Skeleton.SetToSetupPose();
            }

            SetTypeOfAnim(bodies[i], i);
            if (!saveDance) return;
            boneFollowers[i].skeletonRenderer = bodies[i];//
            boneFollowers[i].enabled = false;//
            boneFollowers[i].SetBone(i == 0 ? "face" : monsterBody + "_head");//
            boneFollowers[i].enabled = true;//
        }
    }

}
