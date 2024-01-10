using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
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
    [SerializeField] private Slider slider;
    [SerializeField] private GameObject handTut;
    public Transform targetScaleBodyPart = null;
    public bool isSliderShow = false;


    private void Awake()
    {
        Instance = this;
    }
  

    private void Start()
    {
        firstPlay = false;
        InitState();
    }

    private void OnEnable()
    {
        isShow = false;

        if (!firstPlay) InitState();
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

        //slider.value = 1;
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
