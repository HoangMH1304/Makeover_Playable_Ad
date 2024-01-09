using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Video;

public class VideoPlayController : MonoBehaviour
{
    [SerializeField] private VideoClip[] startVideoClips;
    [SerializeField] private VideoClip[] bgVideoClips;
    [SerializeField] private VideoPlayer videoPlayerStar;
    [SerializeField] private VideoPlayer videoPlayerResult;


    private int currentId;
    //private void Awake()
    //{
    //    this.RegisterListener(EventID.OnReplay, (param) => TurnOffBackground());
    //    //RenderTexture.active = videoPlayerResult.targetTexture;
    //    //GL.Clear(true, true, Color.black);
    //    //RenderTexture.active = null;
    //    StarVideoInit();
    //    ResultVideoInit();
    //}

    private void StarVideoInit()
    {
        int randomVideo = Random.Range(0, startVideoClips.Length);
        videoPlayerStar.clip = startVideoClips[randomVideo];
        videoPlayerStar.isLooping = false;
        videoPlayerStar.Prepare();
    }

    private void ResultVideoInit()
    {
        int randomVideo = Random.Range(0, bgVideoClips.Length);
        videoPlayerResult.clip = bgVideoClips[randomVideo];
        currentId = randomVideo;
        videoPlayerResult.isLooping = true;
        videoPlayerResult.Prepare();
    }

    private void TurnOffBackground()
    {
        videoPlayerStar.Stop();
        videoPlayerStar.targetTexture.Release();
        videoPlayerResult.Stop();
        videoPlayerResult.targetTexture.Release();
        StarVideoInit();
        ResultVideoInit();
    }

    public void ShowResultVideo()
    {
        videoPlayerStar.Play();
    }

    public void ShowRandomVideo()
    {
        videoPlayerResult.Play();
    }

    public void OtherStages()
    {
        videoPlayerResult.Stop();
        videoPlayerResult.targetTexture.Release();

        int randomVideo = Random.Range(0, bgVideoClips.Length);
        if(bgVideoClips.Length > 1)
        {
            while (randomVideo == currentId)
            {
                randomVideo = Random.Range(0, bgVideoClips.Length);
            }
        }


        videoPlayerResult.clip = bgVideoClips[randomVideo];
        currentId = randomVideo;
        videoPlayerResult.isLooping = true;
        videoPlayerResult.Play();
    }
}
