using System;
using UnityEngine;

public class MyDebug
{
    static readonly bool canLog = false;
    public static void Log(object message, UnityEngine.Object context)
    {
        if (canLog)
        {
            Debug.Log(message, context);
        }
    }
    public static void Log(object message)
    {
        if (canLog)
        {
            Debug.Log(message);
        }
    }

    public static void LogError(object message)
    {
        if (canLog)
        {
            Debug.LogError(message);
        }
    }

    public static void LogError(object message, UnityEngine.Object context)
    {
        if (canLog)
        {
            Debug.LogError(message, context);
        }
    }


    public static void LogWarning(object message, UnityEngine.Object context)
    {
        if (canLog)
        {
            Debug.LogWarning(message, context);
        }
    }

    public static void LogWarning(object message)
    {
        if (canLog)
        {
            Debug.LogWarning(message);
        }
    }
}