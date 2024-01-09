using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CurrencyConvert
{
    public static string RoundConvert(long money)
    {
        string res = money.ToString();
        if (res.Length > 9) return ((int)(money / 1000000000)).ToString() + "B";
        if(res.Length > 6) return ((int)(money / 1000000)).ToString() + "M";
        if (res.Length > 3) return ((int)(money / 1000)).ToString() + "K";
        return res;
    }

    public static string DecimalConvert(long money, int precision = 1)
    {
        string res = money.ToString();

        if(precision == 3)
        {
            if (res.Length > 9) return ((float)money / 1000000000).ToString("#.000") + "B";
            if (res.Length > 6) return ((float)money / 1000000).ToString("#.000") + "M";
            if (res.Length > 3) return ((float)money / 1000).ToString("#.000") + "K";
            return res;
        }
        if (res.Length > 9)
        {
            if(money % 1000000000 == 0) return ((int)(money / 1000000000)).ToString() + "B";
            return ((float)money / 1000000000).ToString("#.0") + "B";
        }
        if (res.Length > 6)
        {
            if(money % 1000000 == 0) return ((float)money / 1000000).ToString() + "M";
            return ((float)money / 1000000).ToString("#.0") + "M";
        }
        if (res.Length > 3)
        {
            if (money % 1000 == 0) return ((int)(money / 1000)).ToString() + "K";
            return ((float)money / 1000).ToString("#.0") + "K";
        }
        return res;
    }

}
