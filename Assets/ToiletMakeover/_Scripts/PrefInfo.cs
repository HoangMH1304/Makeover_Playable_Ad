using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PrefInfo : MonoBehaviour
{
    public static void SetSubState(bool purchased) => PlayerPrefs.SetInt("IsSub", purchased ? 1 : 0);
    public static bool IsSub() => PlayerPrefs.GetInt("IsSub", 0) == 1 ? true : false;

    public static System.DateTime GetLastSpinTime()
    {
        if (!PlayerPrefs.HasKey("LastSpinTime"))
        {
            SetLastSpinTime(System.DateTime.Now.AddDays(-1));
        }
        return System.DateTime.Parse(PlayerPrefs.GetString("LastSpinTime"));
    }
    public static void SetLastSpinTime(System.DateTime time)
    {
        PlayerPrefs.SetString("LastSpinTime", time.ToString());
    }

    public static System.DateTime GetLastAdInChallenge()
    {
        if (!PlayerPrefs.HasKey("LastAdChallenge"))
        {
            SetLastAdInChallenge(System.DateTime.Now.AddDays(-1));
        }
        return System.DateTime.Parse(PlayerPrefs.GetString("LastAdChallenge"));
    }

    public static void SetLastAdInChallenge(System.DateTime time)
    {
        PlayerPrefs.SetString("LastAdChallenge", time.ToString());
    }
    public static void SetTotalExtraLife(int total)
    {
        PlayerPrefs.SetInt("TotalExtraLife", total);
    }
    public static int TotalExtraLife()
    {
        return PlayerPrefs.GetInt("TotalExtraLife", 5);
    }

    public static float Distance(Vector3 a, Vector3 b)
    {
        return Mathf.Sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
    }

    public static System.DateTime GetLastDieTime()
    {
        return System.DateTime.Parse(PlayerPrefs.GetString("LastDieTime", System.DateTime.Now.ToString()));
    }
    public static void SetLastDieTime(System.DateTime time)
    {
        PlayerPrefs.SetString("LastDieTime", time.ToString());
    }

    public static int GetPlayTime(string id = "")
    {
        return PlayerPrefs.GetInt("PlayTime" + id, 0);
    }
    public static void SetPlayTime(int c, string id = "")
    {
        PlayerPrefs.SetInt("PlayTime" + id, c);
    }
    public static void IncreasePlayTime(int am, string id = "")
    {
        PlayerPrefs.SetInt("PlayTime" + id, GetPlayTime(id) + am);
    }
    //
    public static float GetIQ()
    {
        return PlayerPrefs.GetFloat("IQ", 85);
    }
    public static void SetIQ(float c)
    {
        PlayerPrefs.SetFloat("IQ", c);
    }

    public static int GetHeart()
    {
        if (PrefInfo.IsUnlimited()) return TotalExtraLife();
        return Mathf.Max(0, PlayerPrefs.GetInt("Heart", TotalExtraLife()));
    }
    public static void SetHeart(int c)
    {
        PlayerPrefs.SetInt("Heart", c);
    }
    public static int GetSpin()
    {
        return PlayerPrefs.GetInt("Spin", 0);
    }
    public static void SetSpin(int c)
    {
        PlayerPrefs.SetInt("Spin", c);
    }
    public static int GetGem()
    {
        return PlayerPrefs.GetInt("Gem", 0);
    }
    public static void SetGem(int c)
    {
        PlayerPrefs.SetInt("Gem", c);
    }
    public static void AddGem(int c)
    {
        PlayerPrefs.SetInt("Gem", GetGem() + c);
    }

    public static bool GetItemStatus(int id)
    {
        if (id == 0) return true;
        return PlayerPrefs.GetInt("Equipment_" + id, 0) != 0;
    }
    public static void SetItemStatus(int id, bool status = true)
    {
        PlayerPrefs.SetInt("Equipment_" + id, status ? 1 : 0);
    }


    public static string GetName()
    {
        return PlayerPrefs.GetString("PlayerName", "You");
    }
    public static void SetName(string name)
    {
        PlayerPrefs.SetString("PlayerName", name);
    }
    public static bool IsUnlimited()
    {
        return PlayerPrefs.GetInt("UnlimitedHeart", 0) == 1;
    }
    public static void SetUnlimited(bool active = false)
    {
        PlayerPrefs.SetInt("UnlimitedHeart", active ? 1 : 0);
    }

    #region ToggleAdfor_NOAD_BTN
    public static bool IsUsingAd()
    {
        return PlayerPrefs.GetInt("AdEnabled", 1) == 1 && !IsSub();
    }
    public static void SetAd(bool active = false)
    {
        PlayerPrefs.SetInt("AdEnabled", active ? 1 : 0);
    }
    #endregion

    public static float GetSensitivity()
    {
        return PlayerPrefs.GetFloat("Sensitivity", 0.5f);
    }
    public static void SetSensitivity(float total)
    {
        PlayerPrefs.SetFloat("Sensitivity", total);
    }
    public static int GetCurrentSkin(int type)
    {

        return PlayerPrefs.GetInt("Skin" + type, 0);
    }
    public static void SetCurrentSkin(int c, int type)
    {
        PlayerPrefs.SetInt("Skin" + type, c);
    }
    public static int GetCoin()
    {
        return PlayerPrefs.GetInt("Coin", 0);
    }

    public static void SetCoin(int total)
    {
        PlayerPrefs.SetInt("Coin", total);
    }
    public static void AddCoin(int total)
    {
        PlayerPrefs.SetInt("Coin", GetCoin() + total);
    }

    public static bool IsUnlocked(int id, int type)
    {
        if ((id == 0 && type == 0)) return true;
        return PlayerPrefs.GetInt("Lock_" + type + "_" + id, 0) == 0 ? false : true;
    }

    public static void SetUnlocked(int id, bool active, int type)
    {
        PlayerPrefs.SetInt("Lock_" + type + "_" + id, active ? 1 : 0);
        //FireBaseManager.Instance.LogEvent("CHARACTER_UNLOCK_" + (id + 1));
    }

    public static void SetHint(int currenHint)
    {
        PlayerPrefs.SetInt("Hint", currenHint);
    }

    public static int TotalHint()
    {
        return PlayerPrefs.GetInt("Hint", 1);
    }


    private static string CurrentDailyIndexStr = "CurrentDailyIndex";
    private static string CurrentDailyIndexAdStr = "CurrentDailyIndexAd";
    public static void SetCurrentDailyGiftIndex()
    {
        PlayerPrefs.SetInt(CurrentDailyIndexStr, CurrentDailyIndex() + 1);
        if (CurrentDailyIndex() > 6)
        {
            if (Complete7Day() == false)
            {
                SetComplete7Day();

            }
            PlayerPrefs.SetInt(CurrentDailyIndexStr, 0);
        }
        SetDayClaimed();
    }

    public static void SetCurrentDailyGiftIndexAd()
    {
        PlayerPrefs.SetInt(CurrentDailyIndexAdStr, 1);
        //if (CurrentDailyIndex() > 6)
        //{
        //    if (Complete7Day() == false)
        //    {
        //        SetComplete7Day();

        //    }
        //    PlayerPrefs.SetInt(CurrentDailyIndexStr, 0);
        //}
        //SetDayClaimed();
    }

    private static string DayClaimed = "DayClaimed";
    public static int GetDayClaim()
    {
        return PlayerPrefs.GetInt(DayClaimed, 0);
    }
    public static void SetDayClaimed()
    {
        PlayerPrefs.SetInt(DayClaimed, GetDayClaim() + 1);
    }

    public static int CurrentDailyIndex()                       //daily reward
    {
        return PlayerPrefs.GetInt(CurrentDailyIndexStr);
    }

    public static int CurrentDailyIndexAd()                       //ad challenge
    {
        return PlayerPrefs.GetInt(CurrentDailyIndexAdStr);
    }

    private static string Complete7DayStr = "Complete7Day";
    public static bool Complete7Day()
    {
        return PlayerPrefs.GetInt(Complete7DayStr, 0) == 0 ? false : true;
    }

    public static void SetComplete7Day()
    {
        PlayerPrefs.SetInt(Complete7DayStr, 1);
    }

    private static string LastDayLoginStr = "LastDayLogin";
    private static string LastDayLoginAdStr = "LastDayLoginAd";

    public static void SaveTimeLastLogin(string time)       //daily reward
    {
        PlayerPrefs.SetString(LastDayLoginStr, time);
    }

    public static void SaveTimeLastLoginAd(string time)       //ad reward
    {
        PlayerPrefs.SetString(LastDayLoginAdStr, time);
    }

    public static string TimeLastDayLogin()                 //daily reward
    {
        return PlayerPrefs.GetString(LastDayLoginStr);
    }

    public static string TimeLastDayLoginAd()                 //ad challenge
    {
        return PlayerPrefs.GetString(LastDayLoginAdStr);
    }

    public static int GetProgress => PlayerPrefs.GetInt("progress", 0);

    public static void SetProgress(int progress)
    {
        PlayerPrefs.SetInt("progress", progress);
    }
    public static int GetTier => PlayerPrefs.GetInt("tier", 0);
    public static void SetTier(int tier)
    {
        PlayerPrefs.SetInt("tier", tier);
    }

    public static int GetKeyOwned => PlayerPrefs.GetInt("KeyOwn", 0);
    public static void SetKeyOwned(int key)
    {
        PlayerPrefs.SetInt("KeyOwn", key);
    }

    public static void AddKey(int amout)
    {
        PlayerPrefs.SetInt("KeyOwn", GetKeyOwned + amout);
    }
}
