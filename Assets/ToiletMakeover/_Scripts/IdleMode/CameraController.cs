using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    public static CameraController Instance;
    [SerializeField] private CharacterManager characterManager;

    //private void Awake()
    //{
    //    Instance = this;
        
    //}

    ////public void ZoomOut()
    ////{
    ////    CameraHandler.Instance.ZoomOut(new Vector3(0, -4.8f, 0), 11);  //-4.8
    ////}

    ////public void ZoomIn()
    ////{
    ////    CameraHandler.Instance.ZoomIn(new Vector3(0, 0, 0), 6.5f);

    ////}

    //public void DisplayCharacterInChallenge()
    //{
    //    characterManager.transform.position = Vector3.zero;
    //}

    
}
