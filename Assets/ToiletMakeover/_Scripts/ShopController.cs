using Spine.Unity;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Spine;
#if UNITY_EDITOR
using UnityEditor;
#endif

public class ShopController : MonoBehaviour
{
    public static ShopController Instance;
    private BodyPart bodyPart;
    public BodyPart BodyPart { get => bodyPart; set => bodyPart = value; }

    public bool IsPickBody { get => isPickBody; set => isPickBody = value; }
    public Item[] Bodies { get => bodies; set => bodies = value; }
    public Item CurrentHead { get => currentHead; set => currentHead = value; }
    public Item CurrentEye { get => currentEye; set => currentEye = value; }
    public Item CurrentMouth { get => currentMouth; set => currentMouth = value; }
    public Item CurrentAcc { get => currentAcc; set => currentAcc = value; }
    public Item CurrentBody { get => currentBody; set => currentBody = value; }

    [Header("List Scriptable Object")]
    [SerializeField] public Item[] heads;
    [SerializeField] public Item[] eyes;
    [SerializeField] public Item[] mouths;
    [SerializeField] public Item[] accs;
    [SerializeField] public Item[] bodies;

    [Header("ItemDisplay List")]
    private List<ItemDisplay> headItemDisplay = new List<ItemDisplay>();
    private List<ItemDisplay> eyeItemDisplay = new List<ItemDisplay>();
    private List<ItemDisplay> mouthItemDisplay = new List<ItemDisplay>();
    private List<ItemDisplay> accItemDisplay = new List<ItemDisplay>();
    private List<ItemDisplay> bodyItemDisplay = new List<ItemDisplay>();

    [Header("BodyPart Content")]
    [HideInInspector]
    [SerializeField] public Transform headContent;
    [HideInInspector]
    [SerializeField] public Transform eyeContent;
    [HideInInspector]
    [SerializeField] public Transform mouthContent;
    [HideInInspector]
    [SerializeField] public Transform accContents;
    [HideInInspector]
    [SerializeField] public Transform bodyContent;

    [Header("Preview Bodypart")]
    [HideInInspector]
    [SerializeField] private GameObject head;
    [HideInInspector]
    [SerializeField] private GameObject eye;
    [HideInInspector]
    [SerializeField] private GameObject mouth;
    [HideInInspector]
    [SerializeField] private GameObject acc;
    [HideInInspector]
    [SerializeField] private GameObject body;
    [HideInInspector]
    [SerializeField] private GameObject body2;
    [HideInInspector]
    [SerializeField] private Transform headHolder;
    [HideInInspector]
    [SerializeField] private BoneFollower boneFollower;
    [HideInInspector]
    [SerializeField] private BoneFollower boneFollower2;

    [Header("Current body part in scriptable object")]
    private Item currentHead;
    private Item currentEye;
    private Item currentMouth;
    private Item currentAcc;
    private Item currentBody;


    private SpriteRenderer head_img;
    private SpriteRenderer eye_img;
    private SpriteRenderer mouth_img;
    private SpriteRenderer acc_img;
    private SkeletonAnimation bodyAnim;
    private SkeletonAnimation bodyAnim2;

    private TouchController eyeController;
    private TouchController mouthController;
    private TouchController accController;

    private bool isPickHead = false;
    private bool isPickEye = false;
    private bool isPickMouth = false;
    private bool isPickAcc = false;
    private bool isPickBody = false;

    private Vector3 eyePos = new Vector3(0, 0.7f, 0);
    private Vector3 mouthPos = new Vector3(0, -1f, 0);

    [HideInInspector]
    public List<Item> lockHead = new List<Item>();
    [HideInInspector]
    public List<Item> lockEye = new List<Item>();
    [HideInInspector]
    public List<Item> lockMouth = new List<Item>();
    [HideInInspector]
    public List<Item> lockAcc = new List<Item>();
    [HideInInspector]
    public List<Item> lockBody = new List<Item>();
    [HideInInspector]
    public List<Item> lockItem = new List<Item>();


    private void Awake()
    {
        Instance = this;
        InitReferences();

        this.RegisterListener(EventID.OnRewardTop1, (param) => HandleTop1Reward());
        this.RegisterListener(EventID.OnRewardTop2, (param) => HandleTop2Reward());
        this.RegisterListener(EventID.OnRewardTop3, (param) => HandleTop3Reward());
        this.RegisterListener(EventID.OnRewardTop10, (param) => HandleTop10Reward());
        this.RegisterListener(EventID.OnRewardTop50, (param) => HandleTop50Reward());
        this.RegisterListener(EventID.OnRewardTop100, (param) => HandleTop100Reward());
    }

    private void GetReference()
    {
        //neu loi game thi get reference nay o ham InitReferences
        head_img = head.GetComponent<SpriteRenderer>();
        eye_img = eye.GetComponent<SpriteRenderer>();
        mouth_img = mouth.GetComponent<SpriteRenderer>();
        acc_img = acc.GetComponent<SpriteRenderer>();

        eyeController = eye.GetComponent<TouchController>();
        mouthController = mouth.GetComponent<TouchController>();
        accController = acc.GetComponent<TouchController>();

        bodyAnim = body.GetComponent<SkeletonAnimation>();
        bodyAnim2 = body2.GetComponent<SkeletonAnimation>();
    }

    private void InitReferences()
    {
        GetReference();

        for (int i = 0; i < heads.Length; i++)
        {
            if ((heads[i].isAd && PlayerPrefs.GetInt(heads[i].bodyPart.ToString() + heads[i].id + "Ad") == 0) ||
                (heads[i].price > 0 && PlayerPrefs.GetInt(heads[i].bodyPart.ToString() + heads[i].id + "Price") == 0))
            {
                lockHead.Add(heads[i]);
                lockItem.Add(heads[i]);
            }
        }
        for (int i = 1; i < eyes.Length; i++)
        {
            if ((eyes[i].isAd && PlayerPrefs.GetInt(eyes[i].bodyPart.ToString() + eyes[i].id + "Ad") == 0) ||
                (eyes[i].price > 0 && PlayerPrefs.GetInt(eyes[i].bodyPart.ToString() + eyes[i].id + "Price") == 0))
            {
                lockEye.Add(eyes[i]);
                lockItem.Add(eyes[i]);
            }
        }
        for (int i = 1; i < mouths.Length; i++)
        {
            if ((mouths[i].isAd && PlayerPrefs.GetInt(mouths[i].bodyPart.ToString() + mouths[i].id + "Ad") == 0) ||
                (mouths[i].price > 0 && PlayerPrefs.GetInt(mouths[i].bodyPart.ToString() + mouths[i].id + "Price") == 0))
            {
                lockMouth.Add(mouths[i]);
                lockItem.Add(mouths[i]);
            }
        }
        //for (int i = 1; i < accs.Length; i++)
        //{
        //    if ((accs[i].isAd && PlayerPrefs.GetInt(accs[i].bodyPart.ToString() + accs[i].id + "Ad") == 0) ||
        //        (accs[i].price > 0 && PlayerPrefs.GetInt(accs[i].bodyPart.ToString() + accs[i].id + "Price") == 0))
        //    {
        //        lockAcc.Add(accs[i]);
        //        lockItem.Add(accs[i]);
        //    }
        //}
        //for (int i = 0; i < bodies.Length; i++)
        //{
        //    if ((bodies[i].isAd && PlayerPrefs.GetInt(bodies[i].bodyPart.ToString() + bodies[i].id + "Ad") == 0) ||
        //        (bodies[i].price > 0 && PlayerPrefs.GetInt(bodies[i].bodyPart.ToString() + bodies[i].id + "Price") == 0))
        //    {
        //        lockBody.Add(bodies[i]);
        //        lockItem.Add(bodies[i]);
        //    }
        //}
    }

    private void Start()
    {

        bool isSkipAd = GameController.Instance.SkipAdsTicket > 0 ? true : false;

        InitItems(isSkipAd, heads, headContent, headItemDisplay, 0);
        InitItems(isSkipAd, eyes, eyeContent, eyeItemDisplay, 2);
        InitItems(isSkipAd, mouths, mouthContent, mouthItemDisplay, 2);
        InitItems(isSkipAd, accs, accContents, accItemDisplay, 2);
        InitItems(isSkipAd, bodies, bodyContent, bodyItemDisplay, 0);

        this.RegisterListener(EventID.OnClick, (param) => OnClickItem((int)param));
        this.RegisterListener(EventID.OnReplay, (param) => ResetShopItem());
        this.RegisterListener(EventID.OnReplayPK, (param) => ResetShopItem());
    }

    public void UnlockItem(Item item)
    {
        switch (item.bodyPart)
        {
            case BodyPart.Head:
                RemoveItemInList(item, lockHead);
                break;
            case BodyPart.Eye:
                RemoveItemInList(item, lockEye);
                break;
            case BodyPart.Mouth:
                RemoveItemInList(item, lockMouth);
                break;
            //case BodyPart.Acc:
            //    RemoveItemInList(item, lockAcc);
            //    break;
            //case BodyPart.Body:
            //    RemoveItemInList(item, lockBody);
            //    break;
            default:
                break;
        }
    }

    private void RemoveItemInList(Item item, List<Item> items)
    {
        for (int i = items.Count - 1; i >= 0; i--)
        {
            if (items[i].id == item.id)
            {
                items.RemoveAt(i);
                break;
            }
        }
        for (int i = lockItem.Count - 1; i >= 0; i--)
        {
            if (lockItem[i].id == item.id && lockItem[i].bodyPart.ToString().Equals(item.bodyPart.ToString()))
            {
                lockItem.RemoveAt(i);
                break;
            }
        }
    }

    #region Reset_shop_item
    private void ResetShopItem()
    {
        DeselectItem();
        OnInitialSpecs();
    }

    private void DeselectItem() //need optimize
    {
        headContent.Find(PlayerPrefs.GetInt("Head").ToString()).GetChild(1).gameObject.SetActive(false);
        eyeContent.Find(PlayerPrefs.GetInt("Eye").ToString()).GetChild(1).gameObject.SetActive(false);
        mouthContent.Find(PlayerPrefs.GetInt("Mouth").ToString()).GetChild(1).gameObject.SetActive(false);
        accContents.Find(PlayerPrefs.GetInt("Acc").ToString()).GetChild(1).gameObject.SetActive(false);
        bodyContent.Find(PlayerPrefs.GetInt("Body").ToString()).GetChild(1).gameObject.SetActive(false);

        isPickHead = false;
        isPickEye = false;
        isPickMouth = false;
        isPickAcc = false;
        isPickBody = false;

        headHolder.SetParent(boneFollower.transform);
        headHolder.localPosition = new Vector3(3, 1);
        headHolder.localRotation = Quaternion.Euler(0, 0, -90f);
    }

    public void OnInitialSpecs()
    {
        ShopController.Instance.BodyPart = BodyPart.Head;
        bodyAnim.AnimationState.SetAnimation(0, "Hold", true).MixDuration = 0;
        bodyAnim.Skeleton.SetToSetupPose();         //
        bodyAnim.Skeleton.SetBonesToSetupPose();    //
        bodyAnim.Skeleton.SetSlotsToSetupPose();    //
        bodyAnim2.AnimationState.SetAnimation(0, "Hold", true).MixDuration = 0;
        bodyAnim2.Skeleton.SetToSetupPose();         //
        bodyAnim2.Skeleton.SetBonesToSetupPose();    //
        bodyAnim2.Skeleton.SetSlotsToSetupPose();


        boneFollower.enabled = false;
        boneFollower2.enabled = false;
        body.SetActive(false);
        body2.SetActive(false);
        head_img.sprite = null;
        eye_img.sprite = null;
        mouth_img.sprite = null;
        acc_img.sprite = null;
    }
    #endregion

    public bool CheckNextStep(int id)
    {
        switch (id)
        {
            case (int)BodyPart.Head:
                return isPickHead;
            case (int)BodyPart.Eye:
                return isPickEye;
            case (int)BodyPart.Mouth:
                return isPickMouth;
            case (int)BodyPart.Acc:
                return isPickAcc;
            case (int)BodyPart.Body:
                return isPickBody;
            default:
                return false;
        }
    }

    private void OnClickItem(int id)
    {
        int currentId = PlayerPrefs.GetInt(bodyPart.ToString(), 0);
        SfxController.Instance.Vibrate();
        switch (bodyPart)
        {
            case BodyPart.Head:
                var head = headContent.Find(currentId.ToString());
                head.GetComponent<ItemDisplay>().Deselect();


                head_img.transform.DOScaleY(0, 0).OnComplete(() =>
                {
                    head_img.sprite = heads[id].part;
                    head_img.transform.DOScaleY(1f, 0.1f);  //old art
                });
                isPickHead = true;
                currentHead = heads[id];
                TabMenuHandler.Instance.TurnOnNextBtn();
                break;
            case BodyPart.Eye:
                var eye = eyeContent.Find(currentId.ToString());
                eye.GetComponent<ItemDisplay>().Deselect();

                eye_img.sprite = eyes[id].part;
                idEye = id;

                HandleSlider(id, isPickEye);

                if (eyes[id].specialPos) eye_img.transform.localPosition = eyes[id].realPos;
                else eye_img.transform.localPosition = eyePos;

                eye_img.transform.DOScale(new Vector3(1f, 0, 0), 0);
                eye_img.transform.DOScaleY(1, 0.1f);

                isPickEye = true;
                currentEye = eyes[id];
                TabMenuHandler.Instance.TurnOnNextBtn();

                break;
            case BodyPart.Mouth:
                var mouth = mouthContent.Find(currentId.ToString());
                mouth.GetComponent<ItemDisplay>().Deselect();

                mouth_img.sprite = mouths[id].part;
                idMouth = id;

                HandleSlider(id, isPickMouth);


                if (isPickMouth && currentId != 0)
                {
                    //not show zoom bar
                    TabMenuHandler.Instance.SetValueSlide(1);
                }
                else
                {
                    //show zoom bar
                    TabMenuHandler.Instance.ShowZoomSlide();
                }
                mouth_img.transform.localPosition = mouthPos;

                mouth_img.transform.DOScale(new Vector3(1f, 0, 0), 0);
                mouth_img.transform.DOScaleY(1f, 0.1f);

                currentMouth = mouths[id];
                isPickMouth = true;
                TabMenuHandler.Instance.TurnOnNextBtn();

                break;
            case BodyPart.Acc:
                var acc = accContents.Find(currentId.ToString());
                acc.GetComponent<ItemDisplay>().Deselect();

                acc_img.sprite = accs[id].part;
                idAcc = id;

                HandleSlider(id, isPickAcc);


                if (isPickAcc)
                {
                    //not show zoom bar
                    TabMenuHandler.Instance.SetValueSlide(1);
                }
                else
                {
                    //show zoom bar
                    TabMenuHandler.Instance.ShowZoomSlide();
                }

                if (accs[id].specialPos) acc_img.transform.localPosition = accs[id].realPos;

                acc_img.transform.DOScale(new Vector3(1f, 0, 0), 0);
                acc_img.transform.DOScaleY(1f, 0.1f);

                isPickAcc = true;
                currentAcc = accs[id];
                TabMenuHandler.Instance.TurnOnNextBtn();
                break;
            case BodyPart.Body:
                var body = bodyContent.Find(currentId.ToString());
                body.GetComponent<ItemDisplay>().Deselect();

                isPickBody = true;

                var dataIndex = bodies[id].dataAsset;
                currentBody = bodies[id];
                if (dataIndex == 0)
                {
                    this.body2.SetActive(false);
                    this.body.SetActive(true);

                    bodyAnim.skeleton.SetSkin(bodies[id].bodypartName + "_hold");
                    bodyAnim.Skeleton.SetToSetupPose();

                    bodyAnim.AnimationState.SetAnimation(0, "Hold", true).MixDuration = 0;
                    boneFollower.enabled = true;
                    headHolder.SetParent(boneFollower.transform);
                    headHolder.localPosition = new Vector3(3.2f, 1f, 0);
                    headHolder.localRotation = Quaternion.Euler(0, 0, -89.145f);
                }
                else
                {
                    this.body.SetActive(false);
                    this.body2.SetActive(true);


                    bodyAnim2.skeleton.SetSkin(bodies[id].catalogue.ToString() + "/" + bodies[id].bodypartName);
                    bodyAnim2.Skeleton.SetToSetupPose();

                    bodyAnim2.AnimationState.SetAnimation(0, "Hold", true).MixDuration = 0;

                    boneFollower2.enabled = false;
                    boneFollower2.SetBone(bodies[id].bodypartName + "_head");
                    boneFollower2.enabled = true;
                    headHolder.SetParent(boneFollower2.transform);

                    headHolder.localPosition = Vector3.right * 0.8f;
                    headHolder.localRotation = Quaternion.Euler(0, 0, -89.12f);
                }


                UIHandler.Instance.UI_Ingame.ChangeIconToDone();
                break;
            default:
                break;
        }
    }

    private void HandleSlider(int id, bool isPick)
    {
        if (isPick)
        {
            if (id != 0)
            {
                if (!TabMenuHandler.Instance.isSliderShow)
                {
                    TabMenuHandler.Instance.SetValueSlide(1);
                    TabMenuHandler.Instance.ShowZoomSlide();
                }
                else
                    TabMenuHandler.Instance.SetValueSlide(1);
            }
            else
                TabMenuHandler.Instance.HideZoomSlide();
        }
        else
        {
            if (id == 0)
                TabMenuHandler.Instance.HideZoomSlide();
            else
                TabMenuHandler.Instance.ShowZoomSlide();
        }
    }

    private void SetStateZoomSlide(bool state)
    {
        if (!state)
        {
            TabMenuHandler.Instance.HideZoomSlide();
        }
        else
        {
            TabMenuHandler.Instance.ShowZoomSlide();
        }
    }

    #region for_zoom_slider
    private int idEye;
    private int idMouth;
    private int idAcc;
    #endregion

    public void SetCurrenBodyPartController(int index)
    {
        eyeController.enabled = false;
        mouthController.enabled = false;
        accController.enabled = false;
        switch (index)
        {
            case (int)BodyPart.Head:
                bodyPart = BodyPart.Head;
                TabMenuHandler.Instance.HideZoomSlide();
                break;
            case (int)BodyPart.Eye:
                bodyPart = BodyPart.Eye;
                SetStateZoomSlide(isPickEye && idEye != 0);
                eyeController.enabled = true;
                break;
            case (int)BodyPart.Mouth:
                bodyPart = BodyPart.Mouth;
                SetStateZoomSlide(isPickMouth && idMouth != 0);
                mouthController.enabled = true;
                break;
            case (int)BodyPart.Acc:
                bodyPart = BodyPart.Acc;
                SetStateZoomSlide(isPickAcc && idAcc != 0);
                accController.enabled = true;
                FocusHeadCharacter();
                break;
            case (int)BodyPart.Body:
                bodyPart = BodyPart.Body;
                TabMenuHandler.Instance.HideZoomSlide();
                ForcusEntireCharacter();
                break;
        }

    }

    #region camera_zoom_to_focus
    private void ForcusEntireCharacter()
    {
        if (body.activeSelf)
        {
            headHolder.localEulerAngles = new Vector3(0, 0, -89.145f);
            headHolder.localPosition = new Vector3(3.2f, 1f, 0);
        }
        else if (body2.activeSelf)
        {
            headHolder.localEulerAngles = new Vector3(0, 0, -89.12f);
            headHolder.localPosition = new Vector3(0.8f, 0f, 0);
        }
        else
        {
            headHolder.localPosition = new Vector3(3f, 1f, 0);
        }
        CameraHandler.Instance.ZoomOut();
    }

    private void FocusHeadCharacter()
    {
        CameraHandler.Instance.ZoomIn();
    }
    #endregion

    public void SetPriorityItemPkMode(BodyPart bodyPart, int id)
    {
        switch (bodyPart)
        {
            case BodyPart.Head:
                headItemDisplay[id - 1].MarkSuggestItem();
                break;
            case BodyPart.Eye:
                eyeItemDisplay[id].MarkSuggestItem();
                break;
            case BodyPart.Mouth:
                mouthItemDisplay[id].MarkSuggestItem();
                break;
            case BodyPart.Acc:
                accItemDisplay[id].MarkSuggestItem();
                break;
            case BodyPart.Body:
                bodyItemDisplay[id - 1].MarkSuggestItem();
                break;
            default:
                break;
        }
    }

    public void InitItems(bool isSkipAd, Item[] items, Transform content, List<ItemDisplay> l, int startIdx = 0)  // grimace, normal, anime
    {
        ItemDisplay templateObject = content.GetChild(0).GetComponent<ItemDisplay>();

        for (int i = 0; i < items.Length; i++)
        {
            var itemObject = Instantiate(templateObject, content);
            items[i].id = i;
            itemObject.Show(items[i], isSkipAd);
            itemObject.name = i.ToString();

            if (items[i].priority == Priority.High || items[i].priority == Priority.SeasonReward)
            {
                itemObject.SetSib(startIdx);
            }

            if (items[i].priority == Priority.SeasonReward)
            {
                int temp = i;
                if (items[i].bodyPart == BodyPart.Head || items[i].bodyPart == BodyPart.Body)
                {
                    temp -= 1;
                }

                if (PlayerPrefs.GetInt("SS" + items[i].bodyPart + temp, 0) == 0)
                    itemObject.gameObject.SetActive(false);
                else
                    itemObject.gameObject.SetActive(true);
            }

            l.Add(itemObject);
        }

        Destroy(templateObject.gameObject);
    }

    //head: 79, eye: 108, mouth: 61, acc: 58, body: 81

    private void SortBodyPartItem(Transform content, int extraItem)
    {
        var i1 = content.GetChild(0);
        var i2 = content.GetChild(1);
        var i3 = content.GetChild(2);
        var i4 = content.GetChild(3);
        var i5 = content.GetChild(4);
        var i6 = content.GetChild(5);

        i1.SetSiblingIndex(int.Parse(i1.name));
        i2.SetSiblingIndex(int.Parse(i2.name));
        i3.SetSiblingIndex(int.Parse(i3.name));
        i4.SetSiblingIndex(int.Parse(i4.name));
        i5.SetSiblingIndex(int.Parse(i5.name));
        i6.SetSiblingIndex(int.Parse(i6.name));


        //int sortedQuantity = 7;
        //while (sortedQuantity > 0)
        //{
        //    var item = content.GetChild(0);
        //    int idx = int.Parse(item.name);

        //    item.SetSiblingIndex(idx);
        //    sortedQuantity--;
        //}

        //for(int i = 0; i < 6; i++)
        //{
        //    var item = content.GetChild(i);
        //    int idx = int.Parse(item.name);

        //    item.SetSiblingIndex(idx);
        //}
        //content.GetChild(extraItem).SetAsFirstSibling();
    }

    public void SortAllItem()
    {
        Debug.LogError("Sorted.....");
        SortBodyPartItem(headContent, 79);
        SortBodyPartItem(eyeContent, 108);
        SortBodyPartItem(mouthContent, 61);
        SortBodyPartItem(accContents, 58);
        SortBodyPartItem(bodyContent, 81);
    }



    #region HandleSSReward

    [SerializeField] private SeasonRewardSkinData androidData;
    [SerializeField] private SeasonRewardSkinData iosData;

    public void HandleTop1Reward()
    {

#if UNITY_ANDROID
        foreach (var i in androidData.head1)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in androidData.eye1)
        {
            eyeContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSEye" + i, 1);
        }

        foreach (var i in androidData.mouth1)
        {
            mouthContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSMouth" + i, 1);
        }

        foreach (var i in androidData.acc1)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in androidData.body1)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

#if UNITY_IOS
        foreach (var i in iosData.head1)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in iosData.eye1)
        {
            eyeContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSEye" + i, 1);
        }

        foreach (var i in iosData.mouth1)
        {
            mouthContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSMouth" + i, 1);
        }

        foreach (var i in iosData.acc1)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in iosData.body1)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif
    }

    public void HandleTop2Reward()
    {
#if UNITY_ANDROID
        foreach (var i in androidData.head2)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in androidData.eye2)
        {
            eyeContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSEye" + i, 1);
        }

        foreach (var i in androidData.mouth2)
        {
            mouthContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSMouth" + i, 1);
        }

        foreach (var i in androidData.acc2)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in androidData.body2)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

#if UNITY_IOS
        foreach (var i in iosData.head2)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in iosData.eye2)
        {
            eyeContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSEye" + i, 1);
        }

        foreach (var i in iosData.mouth2)
        {
            mouthContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSMouth" + i, 1);
        }

        foreach (var i in iosData.acc2)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in iosData.body2)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif
    }

    public void HandleTop3Reward()
    {
#if UNITY_ANDROID
        foreach (var i in androidData.head3)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in androidData.mouth3)
        {
            mouthContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSMouth" + i, 1);
        }

        foreach (var i in androidData.acc3)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in androidData.body3)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

#if UNITY_IOS
        foreach (var i in iosData.head3)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in iosData.mouth3)
        {
            mouthContent.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSMouth" + i, 1);
        }

        foreach (var i in iosData.acc3)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in iosData.body3)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

    }

    public void HandleTop10Reward()
    {
#if UNITY_ANDROID
        foreach (var i in androidData.head10)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in androidData.acc10)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in androidData.body10)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

#if UNITY_IOS
        foreach (var i in iosData.head10)
        {
            headContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSHead" + (i - 1), 1);
        }

        foreach (var i in iosData.acc10)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in iosData.body10)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

    }

    public void HandleTop50Reward()
    {
#if UNITY_ANDROID
        foreach (var i in androidData.acc50)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in androidData.body50)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

#if UNITY_IOS
        foreach (var i in iosData.acc50)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }

        foreach (var i in iosData.body50)
        {
            bodyContent.Find((i - 1) + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSBody" + (i - 1), 1);
        }
#endif

    }

    public void HandleTop100Reward()
    {
#if UNITY_ANDROID
        foreach (var i in androidData.acc100)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }


#endif

#if UNITY_IOS
        foreach (var i in iosData.acc100)
        {
            accContents.Find(i + "").gameObject.SetActive(true);
            PlayerPrefs.SetInt("SSAcc" + i, 1);
        }
#endif
    }
    #endregion

    //====================Just update data ongui by tool=================

    public void HandleSortItemIngame()
    {
        SortArr(heads);
        SortArr(eyes);
        SortArr(mouths);
        SortArr(accs);
        SortArr(bodies);
    }

    int[] map = new[] { 3, 2, 1 };

    private void SortArr(Item[] items)
    {
        Array.Sort(items, (a, b) => (int.Parse(a.name).CompareTo(int.Parse(b.name))));

    }

#if UNITY_EDITOR
    public void EDITOR_SortData()
    {
        Debug.LogError("Sorting data");
        _ = SortItemsList();
    }
    public async System.Threading.Tasks.Task<bool> SortItemsList()
    {
        HandleSortItemIngame();

        Debug.LogError("Sorted data");
        EditorUtility.SetDirty(this);
        await System.Threading.Tasks.Task.Yield();

        return true;
    }
#endif
}