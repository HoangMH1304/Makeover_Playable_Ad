using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;


public class UI_Ingame : MonoBehaviour
{
    [SerializeField] private GameObject nextBtn;
    [SerializeField] private Button doneBtn;
    [SerializeField] private GameObject submitBtn;
    [SerializeField] private GameObject battleBtn;
    [SerializeField] private GameObject previewChallenge;
    [SerializeField] private List<RectTransform> tabMenuElements;

    private bool isReadyToArrangeItem = false;

    private void OnEnable()
    {

        Input.multiTouchEnabled = false;
        doneBtn.interactable = true;
        
        HandleChallengeMode();

        HandleArrangeItem();
    }

    private void HandleChallengeMode()
    {
        if (GameManager.Instance.IsChallenge) previewChallenge.SetActive(true);
        else previewChallenge.SetActive(false);
    }

    private void HandleArrangeItem()
    {
        Debug.LogError("Hoang1");

        if (GameManager.Instance.mode == GameMode.PkMode)
        {
            Debug.LogError("Hoang2");

            isReadyToArrangeItem = true;
        }
        else
        {
            if (isReadyToArrangeItem)
            {
                Debug.LogError("Hoang3");
                isReadyToArrangeItem = false;
                ShopController.Instance.SortAllItem();
            }
        }
    }

    private void OnDisable()
    {
        Input.multiTouchEnabled = true;
    }

    // effect scale
    private void Start()
    {
        if (CameraHandler.Instance.aspectRatio == AspectRatio.AR34)   //aspect ratio 3:4
        {
            foreach (var tab in tabMenuElements)
                tab.localScale = Vector3.one * 1.5f;
        }
        else if (CameraHandler.Instance.aspectRatio == AspectRatio.AR916)  //aspect ratio 9:16
        {
            foreach (var tab in tabMenuElements)
                tab.localScale = Vector3.one * 1.1f;
        }
    }

    public void DeactiveDoneBtn()
    {
        doneBtn.interactable = false;
    }

    public void ChangeIconToDone()
    {
        if (GameManager.Instance.IsNormal)
        {
            doneBtn.gameObject.SetActive(true);
            nextBtn.SetActive(false);
            battleBtn.SetActive(false);
        }
        else if (GameManager.Instance.IsChallenge)
        {
            submitBtn.SetActive(true);
            nextBtn.SetActive(false);
            battleBtn.SetActive(false);
        }
        else
        {
            battleBtn.SetActive(true);
            nextBtn.SetActive(false);
            submitBtn.SetActive(false);
        }
    }


    public void OnClickPreviousBtn()
    {
        doneBtn.gameObject.SetActive(false);
        submitBtn.SetActive(false);
        battleBtn.SetActive(false);
        nextBtn.SetActive(true);
    }

    public void Home()
    {

        if (GameManager.Instance.mode == GameMode.PkMode)
        {
            this.PostEvent(EventID.OnTurnOffSuggestSymbolItems);
        }
        UIHandler.Instance.ReturnHome = true;
        this.PostEvent(EventID.OnReplay);
        UIHandler.Instance.ReturnHome = false;

        SoundManager.Instance.PauseSound(Sound.makeoverPk);
        SoundManager.Instance.PauseSound(Sound.outtro);
        SoundManager.Instance.PlaySound(Sound.bg2);
    }


    private void OnReward()
    {
        RewardEffect.Instance.SetUp(0, 20, UIHandler.Instance.UI_Result.rewardPos, true);
        SoundManager.Instance.PlaySFX(Sound.cashCoin, 1f);
        Invoke("IncreseCoin", 1.3f);
    }

    private void IncreseCoin()
    {
        GameController.Instance.UpdateGold(20);
    }
}