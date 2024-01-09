using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TimeTrackingManager : MonoBehaviour
{
    public static TimeTrackingManager Instance;

    private int minuteLeft = 11;

    public int MinuteLeft { get => minuteLeft; set => minuteLeft = value; }

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        InvokeRepeating(nameof(CountdownTime), 0, 60);
    }

    private void CountdownTime()
    {
        minuteLeft--;
        if (minuteLeft < 0) CancelInvoke(nameof(CountdownTime));
    }
}
