using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterCreator : MonoBehaviour
{
    [SerializeField] private Transform headHolder;

    [Header("BodyPart")]
    [SerializeField] private SpriteRenderer headSR;
    [SerializeField] private SpriteRenderer eyeSR;
    [SerializeField] private SpriteRenderer mouthSR;
    [SerializeField] private SpriteRenderer accSR;

    [Header("Body")]
    [SerializeField] private BoneFollower boneFollower1;
    [SerializeField] private BoneFollower boneFollower2;
    [SerializeField] private SkeletonAnimation body1, body2;

    public void CreateMonster(Item head, Item eye, Item mouth, Item acc, Item body)
    {
        headSR.sprite = head.part;
        eyeSR.sprite = eye.part;
        mouthSR.sprite = mouth.part;
        accSR.sprite = acc.part;

        if (acc.specialPos)
        {
            accSR.transform.localPosition = acc.realPos;

        }
        HandleBodyType(body);

        transform.localScale = Vector3.one * 0.6f;
        gameObject.SetActive(true);
    }

    private void HandleBodyType(Item body)
    {
        if (body.dataAsset == 0)
        {
            body2.gameObject.SetActive(false);
            body1.gameObject.SetActive(true);

            body1.Skeleton.SetSkin(body.bodypartName + "_hold");
            SetTypeOfAnim(body1, 0);

            boneFollower1.enabled = false;
            boneFollower1.SetBone("face"); //dùng chung xương face
            boneFollower1.enabled = true;
            headHolder.SetParent(boneFollower1.transform);


            headHolder.localRotation = Quaternion.Euler(0, 0, -89.145f);
        }
        else
        {
            body1.gameObject.SetActive(false);
            body2.gameObject.SetActive(true);

            body2.Skeleton.SetSkin(body.catalogue.ToString() + "/" + body.bodypartName);
            SetTypeOfAnim(body2, 1);

            boneFollower2.enabled = false;
            boneFollower2.SetBone(body.bodypartName + "_head");
            boneFollower2.enabled = true;
            headHolder.SetParent(boneFollower2.transform);

            headHolder.localRotation = Quaternion.Euler(0, 0, -89.12f);
        }
    }

    private void SetTypeOfAnim(SkeletonAnimation body, int id = -1)
    {
        if (id == 0)  //trường hợp monster dùng chung xương chỉ có 1 điệu nhảy
        {
            body.AnimationState.SetAnimation(0, "Zerotwo", true).MixDuration = 0;
            body.Skeleton.SetToSetupPose();
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
}
