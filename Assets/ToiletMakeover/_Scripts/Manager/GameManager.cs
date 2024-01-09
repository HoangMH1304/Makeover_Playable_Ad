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

public enum OS
{
    Android,
    IOS
}

public class GameManager : MonoSingleton<GameManager>
{
    public GameMode mode;
    public GameMode Mode { get; set; }
    public bool IsChallenge { get => isChallenge; set => isChallenge = value; }
    public bool IsNormal { get => isNormal; set => isNormal = value; }

    public int countTurn = 0;

    private bool isChallenge = false;
    private bool isNormal = true;


    protected override void Awake()
    {
        base.Awake();

        countTurn = PlayerPrefs.GetInt("CountTurn", 0);
        Application.targetFrameRate = 120;
        Application.lowMemory += () =>
        {
            Resources.UnloadUnusedAssets();
        };
    }

    public float timePerCheckInternet = 3f;
    private void Start()
    {
        //LogInternetStatus();
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
            case GameMode.Challenge:
                HandleChallengeMode();
                return;
            case GameMode.Collection:
                HandleCollectionMode();
                return;
            case GameMode.Shop:
                HandleShopMode();
                return;
            case GameMode.PkMode:
                HandlePkMode();
                return;
            default:
                throw new ArgumentOutOfRangeException(nameof(newMode), newMode, null);
        }
    }

    private void HandlePkMode()
    {
        Input.multiTouchEnabled = false;

        isNormal = false;
        isChallenge = false;

        CameraHandler.Instance.ResetToOriginalView();

    }

    private void HandleShopMode()
    {
        Input.multiTouchEnabled = false;
    }

    public void HandleIdleHomeMode()
    {
        Input.multiTouchEnabled = true;
    }

    public void HandleCollectionMode()
    {
        Input.multiTouchEnabled = false;
        //startActivity(new Intent(Settings.ACTION_WIFI_SETTINGS));

    }

    public void HandleExitCollectionMode()
    {
        Input.multiTouchEnabled = true;
    }


    private void HandlNormalMode()
    {
        isNormal = true;
        isChallenge = false;
        SoundManager.Instance.SwitchBg(0);
        CameraHandler.Instance.ResetToOriginalView();
        UIHandler.Instance.DisplayNoAds();

        countTurn++;
        PlayerPrefs.SetInt("CountTurn", countTurn);
    }

    private void HandleChallengeMode()
    {
        isChallenge = true;
        isNormal = false;
        CameraHandler.Instance.ResetToOriginalView();
        UIHandler.Instance.DisplayNoAds();
    }

#if UNITY_EDITOR
    [Header("=====GetDataZone=====")]
    public string data1;
    public string data2;
    public string data3;

    public int[] dataArr1, dataArr2, dataArr3;

    public string bodyPart;
    public string folderName1 = "Anime", folderName2 = "Normal", folderName3 = "Special";
    public string path1, path2, path3;

    private string refFolderAnimAndroid = "Assets/ToiletMakeover/AnimSpine/_AndroidAnim/android.asset";
    private string refFolderAnimiOS = "Assets/ToiletMakeover/AnimSpine/_iOSAnim/ios.asset";

    [HideInInspector]
    [SerializeField] private SkeletonAnimation skeleonAnimation1;
    [HideInInspector]
    [SerializeField] private SkeletonAnimation skeleonAnimation2;
    [HideInInspector]
    [SerializeField] private SkeletonAnimation skeleonAnimation3;
    [HideInInspector]
    [SerializeField] private ShopController shopController;

    //[Header("===========RefBodyPart============")]
    //[SerializeField] private

    private void GetArrayData()
    {
        dataArr1 = Array.ConvertAll<string, int>(data1.Split(','), int.Parse);
        dataArr2 = Array.ConvertAll<string, int>(data2.Split(','), int.Parse);
        dataArr3 = Array.ConvertAll<string, int>(data3.Split(','), int.Parse);
    }

    private void GetPath()
    {
        path1 = $"Assets/ToiletMakeover/ScriptableObject/_iOSMonster/{bodyPart}/{folderName1}/";
        path2 = $"Assets/ToiletMakeover/ScriptableObject/_iOSMonster/{bodyPart}/{folderName2}/";
        path3 = $"Assets/ToiletMakeover/ScriptableObject/_iOSMonster/{bodyPart}/{folderName3}/";
    }


    public async System.Threading.Tasks.Task<bool> GetAndSetItemData()
    {
        GetArrayData();
        GetPath();
        HandleData(dataArr1, Theme.Toilet);
        HandleData(dataArr2, Theme.Concert);
        HandleData(dataArr3, Theme.Beach);

        EditorUtility.SetDirty(this);
        await System.Threading.Tasks.Task.Yield();

        return true;
    }

    public async System.Threading.Tasks.Task<bool> HandleAndroidAnim()
    {
        Debug.LogError("android");

        var anim = AssetDatabase.LoadAssetAtPath<SkeletonDataAsset>(refFolderAnimAndroid);

        //set anim data
        skeleonAnimation1.skeletonDataAsset = anim;
        skeleonAnimation2.skeletonDataAsset = anim;
        skeleonAnimation3.skeletonDataAsset = anim;

        EditorUtility.SetDirty(this);
        await System.Threading.Tasks.Task.Yield();

        EditorUtility.SetDirty(this);

        return true;
    }

    public async System.Threading.Tasks.Task<bool> HandleIOSAnim()
    {
        Debug.LogError("ios");
        var anim = AssetDatabase.LoadAssetAtPath<SkeletonDataAsset>(refFolderAnimiOS);
        Debug.LogError(anim.name);
        skeleonAnimation1.skeletonDataAsset = anim;
        skeleonAnimation2.skeletonDataAsset = anim;
        skeleonAnimation3.skeletonDataAsset = anim;

        EditorUtility.SetDirty(this);
        await System.Threading.Tasks.Task.Yield();

        return true;
    }

    private void HandleData(int[] dataArr, Theme theme)
    {
        for (int i = 0; i < dataArr.Length; i++)
        {
            //Debug.LogWarning($"{path1}{dataArr[i]}.asset");

            var item = AssetDatabase.LoadAssetAtPath<Item>
                (path1 + dataArr[i] + ".asset");
            if (item != null)
            {
                Debug.LogWarning("1");
                item.pkTheme = theme;
                EditorUtility.SetDirty(item);
            }

            var item1 = AssetDatabase.LoadAssetAtPath<Item>
                (path2 + dataArr[i] + ".asset");
            if (item1 != null)
            {
                Debug.LogWarning("2");

                item1.pkTheme = theme;
                EditorUtility.SetDirty(item1);

            }

            var item2 = AssetDatabase.LoadAssetAtPath<Item>
                (path3 + dataArr[i] + ".asset");
            if (item2 != null)
            {
                Debug.LogWarning("3");

                item2.pkTheme = theme;
                EditorUtility.SetDirty(item2);

            }
        }
    }

    //====================Just update data ongui by tool=================

    public void EDITOR_UpdateItemData()
    {
        Debug.LogError("Update Entire Level Data");
        _ = GetAndSetItemData();
    }

    public void EDITOR_ConvertToAndroidData()
    {
        Debug.LogError("Convert to Android data");
        _ = HandleAndroidAnim();
        shopController.EDITOR_SortData();
    }

    public void EDITOR_ConvertToIOSData()
    {
        Debug.LogError("Convert to IOS data");
        _ = HandleIOSAnim();
        shopController.EDITOR_SortData();
    }


#endif
}

#if UNITY_EDITOR
[CustomEditor(typeof(GameManager))]
public class GameManagerEditor : Editor
{
    public override void OnInspectorGUI()
    {
        serializedObject.Update();
        base.OnInspectorGUI();
        if (GUILayout.Button("Update data item"))
        {
            (target as GameManager).EDITOR_UpdateItemData();
        }

        if (GUILayout.Button("Convert to android data"))
        {
            (target as GameManager).EDITOR_ConvertToAndroidData();
        }

        if (GUILayout.Button("Convert to ios data"))
        {
            (target as GameManager).EDITOR_ConvertToIOSData();
        }
        serializedObject.ApplyModifiedProperties();
    }
}
#endif
