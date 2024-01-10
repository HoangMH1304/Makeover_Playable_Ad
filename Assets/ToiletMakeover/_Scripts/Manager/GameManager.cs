using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Spine.Unity;
#if UNITY_EDITOR
using UnityEditor;
#endif

public enum GameMode
{
    IdleHome,
    Normal,
    Challenge,
    Collection,
    Shop,
    PkMode
}

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameMode mode;
    public GameMode Mode { get; set; }
    public bool IsChallenge { get => isChallenge; set => isChallenge = value; }
    public bool IsNormal { get => isNormal; set => isNormal = value; }

    public int countTurn = 0;

    private bool isChallenge = false;
    private bool isNormal = true;


    void Awake()
    {
        Instance = this;

        Application.targetFrameRate = 60;
        Application.lowMemory += () =>
        {
            Resources.UnloadUnusedAssets();
        };
    }


    public void ChangeGameMode(GameMode newMode)
    {
        mode = newMode;
        switch (newMode)
        {
            case GameMode.IdleHome:
                HandleIdleHomeMode();
                return;
            case GameMode.Normal:
                HandlNormalMode();
                return;
            default:
                throw new ArgumentOutOfRangeException(nameof(newMode), newMode, null);
        }
    }


    public void HandleIdleHomeMode()
    {
        Input.multiTouchEnabled = true;
    }


    private void HandlNormalMode()
    {
        isNormal = true;
        isChallenge = false;
        countTurn++;
    }


}