using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System;
using DG.Tweening;

public class TabMenuHandler : MonoBehaviour
{
    public static TabMenuHandler Instance;
    [SerializeField] private List<Tab> tabSelection;
    [SerializeField] private List<GridHandler> tabContents;
    [SerializeField] private Image nextBtn, prevBtn;
    [SerializeField] private Color fade;
    [SerializeField] private GameObject next_Btn, done_Btn, submit_Btn, battle_Btn;

    [SerializeField] private ParticleSystem prev;
    [SerializeField] private ParticleSystem next;


    [SerializeField] private Transform subscriptionBtn;
    private int countTurnPlayGame = 0;
    private int timeShowSub = 0;
    private int limitCountTurnShowSub = 0;

    private int index;
    private bool isShow = false;
    private bool firstPlay = true;
    private bool nextable = false, prevable = true;

    [Header("Slider")]
    [SerializeField] private TextMeshProUGUI scaleText;
    [SerializeField] private Slider slider;
    [SerializeField] private GameObject handTut;
    public Transform targetScaleBodyPart = null;
    public bool isSliderShow = false;


    private void Awake()
    {
        Instance = this;
    }
    #region ZoomSlider
    private void SetBodyPart(Transform target)
    {
        if (target != null)
        {
            if (target.name.Equals("Face") && isSliderShow)
            {
                slider.transform.DOScaleY(0, 0);
                return;
            }
            targetScaleBodyPart = target;
        }
    }

    public void SetZoomSlideForHead()
    {
        slider.transform.DOScaleY(0, 0);
    }

    public void UpdateScaleData()
    {
        if (targetScaleBodyPart == null) return;
        if (handTut.activeSelf) handTut.SetActive(false);
        var scale = Math.Round(slider.value, 1);
        targetScaleBodyPart.localScale = Vector3.one * (float)scale;
    }

    public void ShowZoomSlide()
    {
        if (PlayerPrefs.GetInt("HandTutSlider", 0) == 0)
        {
            handTut.SetActive(true);
            PlayerPrefs.SetInt("HandTutSlider", 1);
        }
        isSliderShow = true;

        slider.transform.DOKill();
        slider.transform.DOScaleY(0, 0);
        slider.transform.DOScaleY(1, 0.3f).SetEase(Ease.OutBack);

        slider.value = 1;
    }

    public void HideZoomSlide()
    {
        if (!isSliderShow) return;
        isSliderShow = false;
        slider.transform.DOKill();
        //slider.transform.DOScaleY(1, 0);
        slider.transform.DOScaleY(0, 0.2f).SetEase(Ease.InBack);
    }

    public void SetValueSlide(float value)
    {
        slider.value = value;
    }

    //zoom in, zoom out btn
    public void AddAmountToZoom(float amount)
    {
        SfxController.Instance.PlayTapSound();
        //if (currentValue >= maxValue || currentValue <= minValue) return;
        slider.value += amount;
    }
    #endregion

    private void Start()
    {
        firstPlay = false;
        InitState();
        InitConditionToShowSubBtn();

    }

    private void OnEnable()
    {
        IdleActions.OnUpdateScaleBodyPart += SetBodyPart;
        slider.normalizedValue = 0.5f;
        isShow = false;
        subscriptionBtn.DOKill();
        subscriptionBtn.DOLocalMoveX(150, 0);

        if (!firstPlay) InitState();
    }

    public void HandleShowBtnSub()
    {
        if (GameManager.Instance.IsChallenge) return;
        countTurnPlayGame++;
        if (countTurnPlayGame % limitCountTurnShowSub == 0)
        {
            Invoke(nameof(ShowSubscriptionBtn), 2f);
            Invoke(nameof(HideSubscriptionBtn), timeShowSub);
        }
    }

    private void ShowSubscriptionBtn()
    {
        if (PrefInfo.IsUsingAd())
        {
            subscriptionBtn.DOLocalMoveX(450, 0.5f).SetEase(Ease.InOutSine);
            isShow = true;
        }
    }

    private void HideSubscriptionBtn()
    {
        subscriptionBtn.DOLocalMoveX(150, 0.5f).SetEase(Ease.InOutSine);
    }

    private void InitConditionToShowSubBtn()
    {
        if (timeShowSub == 0)
        {

            //Debug.LogError("timeShowSub: " + timeShowSub);
            //Debug.LogError("countTurnPlayGame: " + countTurnPlayGame);
        }
    }

    private void OnDisable()
    {
        IdleActions.OnUpdateScaleBodyPart -= SetBodyPart;
        handTut.SetActive(false);
        CancelInvoke(nameof(ShowSubscriptionBtn));
        CancelInvoke(nameof(HideSubscriptionBtn));
    }

    private void InitState()
    {
        ResetTabs();

        prevable = true;
        nextable = false;
        prevBtn.color = fade;
        nextBtn.color = fade;
        done_Btn.SetActive(false);
        next_Btn.SetActive(true);

        slider.value = 1;
    }

    public void ResetTabs()
    {
        index = 0;
        for (int i = 0; i < tabSelection.Count; i++)
        {
            if (i == index) tabSelection[i].OnDisplay();
            else tabSelection[i].Reset();
            tabContents[i].SetStateContent(i == index);
        }
        //for (int i = 0; i < tabContents.Count; i++)
        //{
        //}

    }

    #region Change_State_Next_Prev_Btn
    //able to click
    public void TurnOnNextBtn()
    {
        nextable = true;
        nextBtn.color = Color.white;
    }

    public void TurnOnPrevBtn()
    {
        prevable = true;
        prevBtn.color = Color.white;
    }

    public void SetStateNextBtn(int id)
    {
        nextable = ShopController.Instance.CheckNextStep(id);
        if (!nextable) nextBtn.color = fade;
    }
    #endregion

    #region next_prev_btn
    public void NextTab()
    {
        if (index + 1 == tabContents.Count || !nextable || !CameraHandler.Instance.Clickable) return;   //delay


        if (index + 2 == tabContents.Count)
        {
            if (ShopController.Instance.IsPickBody)
                UIHandler.Instance.UI_Ingame.ChangeIconToDone();
        }

        SetStateNextBtn(index + 1);

        next.Play();
        tabSelection[index].OnExit(true);
        tabContents[index].SetStateContent(false);

        index = (index + 1) % tabSelection.Count;

        tabSelection[index].OnDisplay();
        tabContents[index].SetStateContent(true);
        prevBtn.color = Color.white;
        ShopController.Instance.SetCurrenBodyPartController(index);

        SoundManager.Instance.PlaySound(Sound.next);
    }

    public void PreviousTab()
    {
        if (index - 1 < 0 || !prevable || !CameraHandler.Instance.Clickable) return;   //delay


        if (index - 1 == 0)
        {
            prevBtn.color = fade;
        }
        else TurnOnPrevBtn();

        prev.Play();
        tabSelection[index].OnExit(false);
        tabContents[index].SetStateContent(false);

        index = (index - 1) % tabSelection.Count;
        tabSelection[index].OnDisplay();
        tabContents[index].SetStateContent(true);
        TurnOnNextBtn();
        ShopController.Instance.SetCurrenBodyPartController(index);

        SoundManager.Instance.PlaySound(Sound.next);
    }
    #endregion
}
