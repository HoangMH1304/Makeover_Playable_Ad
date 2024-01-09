using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UI_Background : MonoBehaviour
{
    [SerializeField] private GameObject starVideo;
    [SerializeField] private GameObject bgVideo;

    public GameObject StarVideo { get => starVideo; set => starVideo = value; }
    public GameObject BgVideo { get => bgVideo; set => bgVideo = value; }

    private void OnDisable()
    {
        starVideo.SetActive(true);
        bgVideo.SetActive(false);
    }

    public void ReturnToUIBackground()
    {
        gameObject.SetActive(true);
        bgVideo.SetActive(true);
        starVideo.SetActive(false);
    }
}
