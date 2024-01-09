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
        GameManager.Instance.ChangeGameMode(GameMode.Normal);
        EnterGame();
    }

    public void EnterGame()
    {
        this.PostEvent(EventID.OnStart);
        if (PlayerPrefs.GetInt("IsFirstOpenGame", 0) == 0)
        {
            PlayerPrefs.SetInt("IsFirstOpenGame", 1);
        }
        else
            SoundManager.Instance.PlaySound(Sound.start);
    }

    public void ChallengeMode()
    {
        SoundManager.Instance.PlaySound(Sound.done);
        GameManager.Instance.ChangeGameMode(GameMode.Challenge);
    }

    public void OnClickSetting()
    {
        OpenSetting();
    }

    private void OpenSetting()
    {
        settingPanel.SetActive(true);
    }

    public void OnClickCloseSetting()
    {
        settingPanel.SetActive(false);
    }


}
