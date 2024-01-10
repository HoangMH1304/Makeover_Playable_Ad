using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UI_Lobby : MonoBehaviour
{
    [SerializeField] private GameObject settingPanel;
    [SerializeField] private GameObject adsPanel;
    [Header("Setting zone")] //test mode money
    [SerializeField] private GameObject testMoney1;
    [SerializeField] private GameObject testMoney2;


    public void NormalMode()
    {
        EnterGame();
    }

    public void EnterGame()
    {
        this.PostEvent(EventID.OnStart);
    }
}
