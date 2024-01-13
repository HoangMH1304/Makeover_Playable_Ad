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

    [SerializeField] private GameObject handTut;
    [SerializeField] private Transform characterManager;

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


    private void Awake()
    {
        Instance = this;
        GetReference();
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

    private void Start()
    {
        InitItems(heads, headContent, 0);
        InitItems(eyes, eyeContent, 2);
        InitItems(mouths, mouthContent, 2);
        InitItems(accs, accContents, 2);
        InitItems(bodies, bodyContent, 0);

        this.RegisterListener(EventID.OnClick, (param) => OnClickItem((int)param));
    }

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
        if (!handTut.activeSelf) handTut.SetActive(true);
        int currentId = PlayerPrefs.GetInt(bodyPart.ToString(), 0);
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
                break;
            case (int)BodyPart.Eye:
                bodyPart = BodyPart.Eye;
                eyeController.enabled = true;
                break;
            case (int)BodyPart.Mouth:
                bodyPart = BodyPart.Mouth;
                mouthController.enabled = true;
                break;
            case (int)BodyPart.Acc:
                bodyPart = BodyPart.Acc;
                accController.enabled = true;
                FocusHeadCharacter();
                break;
            case (int)BodyPart.Body:
                bodyPart = BodyPart.Body;
                ForcusEntireCharacter();
                break;
        }

    }

    #region camera_zoom_to_focus
    private void ForcusEntireCharacter()
    {
        //if (body.activeSelf)
        //{
        //    headHolder.localEulerAngles = new Vector3(0, 0, -89.145f);
        //    headHolder.localPosition = new Vector3(3.2f, 1f, 0);
        //}
        //else if (body2.activeSelf)
        //{
        //    headHolder.localEulerAngles = new Vector3(0, 0, -89.12f);
        //    headHolder.localPosition = new Vector3(0.8f, 0f, 0);
        //}
        //else
        //{
        //    headHolder.localPosition = new Vector3(3f, 1f, 0);
        //}
        //CameraHandler.Instance.ZoomOut();
        characterManager.DOScale(Vector3.one * 0.5f, 0.3f).SetEase(Ease.InOutSine);
        characterManager.DOLocalMoveY(2.5f, 0.3f).SetEase(Ease.InOutSine);
    }

    private void FocusHeadCharacter()
    {
        //CameraHandler.Instance.ZoomIn();
        characterManager.DOScale(Vector3.one, 0.3f).SetEase(Ease.InOutSine);
        characterManager.DOLocalMoveY(0f, 0.3f).SetEase(Ease.InOutSine);
    }
    #endregion


    public void InitItems(Item[] items, Transform content, int startIdx = 0)  // grimace, normal, anime
    {
        ItemDisplay templateObject = content.GetChild(0).GetComponent<ItemDisplay>();

        for (int i = 0; i < items.Length; i++)
        {
            var itemObject = Instantiate(templateObject, content);
            items[i].id = i;
            itemObject.Show(items[i], i);
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
        }

        Destroy(templateObject.gameObject);
    }

    //====================Just update data ongui by tool=================
    #region Editor_Tool

    public void HandleSortItemIngame()
    {
        SortArr(heads);
        SortArr(eyes);
        SortArr(mouths);
        SortArr(accs);
        SortArr(bodies);
    }


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
    #endregion
}