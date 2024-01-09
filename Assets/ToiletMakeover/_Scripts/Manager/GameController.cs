using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public static GameController Instance;
    #region Currency
    [SerializeField] private int gold;
    [SerializeField] private int ticket;
    [SerializeField] private int spin;
    [SerializeField] private int skipAdsTicket;

    public int battlePoint;
    #endregion
    [SerializeField] private int usedSpin;

    [SerializeField] private SpinBtnEffect spinBtnEffect;

    public int Gold { get => gold; set => gold = value; }
    public int Ticket { get => ticket; set => ticket = value; }
    public int Spin { get => spin; set => spin = value; }
    public int SkipAdsTicket { get => skipAdsTicket; set => skipAdsTicket = value; }

    private void Awake()
    {
        Instance = this;
    }

    private void FreeSpinNoti()
    {
        System.DateTime lastSpinTime = PrefInfo.GetLastSpinTime();
        System.DateTime now = System.DateTime.Now;
        if (now.Subtract(lastSpinTime).TotalHours >= 24 && spin == 0)
        {
            UpdateSpin(1);
        }
        if (spin > 0) spinBtnEffect.Noti();
    }

    public void UpdateGold(int amount)
    {
        gold += amount;
        PlayerPrefs.SetInt("Gold", gold);
        UIHandler.Instance.UpdateGold(gold);
    }

    public void UpdateTicket(int amount)
    {
        ticket += amount;
        PlayerPrefs.SetInt("Ticket", ticket);
        UIHandler.Instance.UpdateTicket(ticket);
    }
    public void UpdateSpin(int amount)
    {
        spin += amount;
        PlayerPrefs.SetInt("Spin", spin);
        UIHandler.Instance.UpdateSpin(spin);
        if (amount > 0) this.PostEvent(EventID.OnRewardSpin);
    }

    public void UpdateSkipAdsTicket(int amount)
    {
        if (amount > 0) this.PostEvent(EventID.OnDisplayAdItem, true);
        skipAdsTicket += amount;
        if (skipAdsTicket == 0) this.PostEvent(EventID.OnDisplayAdItem, false);
        PlayerPrefs.SetInt("SkipAdsTicket", skipAdsTicket);
        UIHandler.Instance.UpdateSkipAdTicket(skipAdsTicket);
    }

    public void UdpateBattlePoint(int amount)
    {
    }


    public bool IsSkipAdsTicketAvaiable()
    {
        if (skipAdsTicket > 0)
        {
            skipAdsTicket--;
            PlayerPrefs.SetInt("SkipAdsTicket", skipAdsTicket);
            UIHandler.Instance.UpdateSkipAdTicket(skipAdsTicket);
            if (skipAdsTicket == 0)
            {
                this.PostEvent(EventID.OnDisplayAdItem, false);
            }
            return true;
        }
        return false;
    }
}
