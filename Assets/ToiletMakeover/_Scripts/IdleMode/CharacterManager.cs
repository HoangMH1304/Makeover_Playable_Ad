using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

public class CharacterManager : MonoBehaviour
{
    public static CharacterManager Instance;
    public string monsterBody = "";
    public int price = 0;
    public int currentPrice = 0;
    public int orgPrice = 0;
    public bool spawnMoney = true;

    [SerializeField] private Transform headHolder;
    [SerializeField] private SkeletonAnimation[] bodies;
    [SerializeField] private BoneFollower[] boneFollowers;
    [SerializeField] private HeadController headController;
    [SerializeField] public Texture2D monsterTex;
    [SerializeField] public Sprite monsterSprite;

    public int moneyBoostCount = 6;
    public string textureStr;
    private int numberVariantBody;

    public SortingGroup sortingGroup;
    private MoneyFloat moneyFloat;
    private Vector3 headHolderPos = new Vector3(1.04387f, -1.180925f, 0);
    private Vector3 headHolderRot = new Vector3(0, 0, 89.145f);


    private void Start()
    {
        IdleActions.OnBoost += BoostMonsterPrice;
        IdleActions.OnDeboost += DeboostMonsterPrice;

        sortingGroup = GetComponent<SortingGroup>();
        numberVariantBody = bodies.Length;
        if (gameObject.name.Equals("Character"))
        {
            IdleActions.OnCalculatePrice += CalculateMonsterPrice;
            return;
        }

        if (price == 0)
            orgPrice = currentPrice;
        monsterBody = gameObject.name;
        MyDebug.LogError("IMPORTANT: skin:" + monsterBody);

        if (transform.parent.name.Equals("Card"))
        {
            ChangeToIdleAnim(true);
            return;
        }
        else
        {
            ChangeToDanceAnim(true);
        }

        HandleMoneyFloat();

    }

    private void HandleMoneyFloat()
    {
        if (!transform.parent.CompareTag("PreviewCollection"))
            InitPriceLabel();
        else
            CancelInteractMonster();
    }

    public void DestroyThisMonster()
    {
        //moneyFloat?.StopTween();
        moneyFloat?.gameObject.SetActive(false);
        Destroy(gameObject);
    }

    public void CancelInteractMonster()
    {
        if (transform.childCount > numberVariantBody)
        {
            for (int i = numberVariantBody; i < transform.childCount; i++)
            {
                transform.GetChild(i).gameObject.SetActive(false);
            }
        }
    }

    public void CreatePreviewMonster(string name)
    {
        this.name = name;
        transform.localScale = Vector3.one * 53;
        transform.localPosition = Vector3.zero;
        sortingGroup.sortingLayerName = "UI";
        sortingGroup.sortingOrder = 10;
        ChangeToIdleAnim(true);
    }

    private void OnDestroy()
    {
        IdleActions.OnBoost -= BoostMonsterPrice;
        IdleActions.OnDeboost -= DeboostMonsterPrice;
    }

    private void OnDisable()
    {
        if (price > 0) return;  //for old version
        if (moneyFloat != null) moneyFloat.UpdatePrice(currentPrice);
    }

    public void DeboostMonsterPrice(float rate)
    {
        if (price > 0) return;  //for old version
        currentPrice -= (int)(rate * orgPrice);
        moneyFloat?.UpdatePrice(currentPrice);
    }

    public void BoostMonsterPrice(float rate)
    {
        if (price > 0) return;  //for old version
        currentPrice += (int)(rate * orgPrice);
        moneyFloat?.UpdatePrice(currentPrice);
    }

    public void ReturnNormalPrice()
    {
        if (price > 0) return;  //for old version
        currentPrice = orgPrice;
    }

    public void DeleteCanvas()
    {
        if (transform?.childCount <= numberVariantBody) return;
        DestroyImmediate(transform.GetChild(numberVariantBody).gameObject);
    }


    public void CalculateMonsterPrice()
    {
        int totalAdItem = 0;
        currentPrice = 0;

        if (PlayerPrefs.GetInt("FirstCreateMonster", 0) == 0)
        {
            PlayerPrefs.SetInt("FirstCreateMonster", 1);
            currentPrice = 1000;
            orgPrice = currentPrice;
            return;
        }

        currentPrice += PlayerPrefs.GetInt("HeadPrice");
        currentPrice += PlayerPrefs.GetInt("EyePrice");
        currentPrice += PlayerPrefs.GetInt("MouthPrice");
        currentPrice += PlayerPrefs.GetInt("AccPrice");
        currentPrice += PlayerPrefs.GetInt("BodyPrice");

        if (PlayerPrefs.GetInt("HeadPrice") == 100) totalAdItem++;
        if (PlayerPrefs.GetInt("EyePrice") == 100) totalAdItem++;
        if (PlayerPrefs.GetInt("MouthPrice") == 100) totalAdItem++;
        if (PlayerPrefs.GetInt("AccPrice") == 100) totalAdItem++;
        if (PlayerPrefs.GetInt("BodyPrice") == 100) totalAdItem++;

        if (totalAdItem == 5) currentPrice += 500;
        else if (totalAdItem >= 3) currentPrice += 200;

        orgPrice = currentPrice;

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

    public void ChangeToIdleAnim(bool saveDance = false)
    {
        headController.IsVariant = true;
        for (int i = 0; i < bodies.Length; i++)
        {
            if (!bodies[i].gameObject.activeSelf) continue;
            MyDebug.Log($"name body: {monsterBody}");
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
                bodies[i].Skeleton.SetToSetupPose();
            }
            bodies[i].AnimationState.SetAnimation(0, "Hold", true).MixDuration = 0;
            if (!saveDance) return;
            boneFollowers[i].skeletonRenderer = bodies[i];
            boneFollowers[i].enabled = false;
            boneFollowers[i].SetBone(i == 0 ? "face" : monsterBody + "_head");
            boneFollowers[i].enabled = true;
        }
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

    public void InitPriceLabel()
    {
        if (transform.childCount > numberVariantBody)
        {
            for (int i = numberVariantBody; i < transform.childCount; i++)
            {
                Destroy(transform.GetChild(i).gameObject);
            }
        }

        //moneyFloat = Instantiate(MonsterCollection.Instance.moneyFloatCanvas, transform);
        moneyFloat.transform.localPosition = new Vector3(0, 4f, 0);

        if (price > 0)
        {
            moneyFloat.UpdatePrice(price);
        }
        else
        {
            moneyFloat.UpdatePrice(currentPrice);
        }
    }

    public void UpdatePriceAfterCollection()
    {
        if (price > 0) return;
        moneyFloat.UpdatePrice(currentPrice);
    }

    public void ResetMonsterPos()
    {
        headHolder.localPosition = headHolderPos;
        headHolder.localEulerAngles = headHolderRot;
        transform.position = new Vector3(0, -0.5f, -9f);
        gameObject.SetActive(true);
    }
}
