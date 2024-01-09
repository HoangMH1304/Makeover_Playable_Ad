using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum Sound
{
    bg,//
    next,//
    done,//
    start,//
    congrate,//
    outtro,//
    rollSFX, //
    winSFX, //
    startSFX,//
    winSFX2,//
    startSFX2,//
    musicSFX,//
    firework,//
    popup,//
    cashCoin,//
    bg2,
    teddy,
    heart,
    rocket,
    cash,
    unlockItem,
    unlockNewArea,
    beachBg,//
    toiletBg,
    concertBg,
    makeoverPk,
    losePk,
    winPk,
    point1,
    point2,
    point3,
    startRandom,
    endRandom,
    readyPk,
    heartBtn
}
public class SoundManager : MonoBehaviour
{
    private const string SOUND = "Sound";
    [SerializeField] private SoundAudioClip[] soundAudioClips;
    [SerializeField] private SoundAudioClip[] itemClickedAudio;
    [SerializeField] private SoundAudioClip[] textFloatInPk;
    public static SoundManager Instance;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            //DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
            return;
        }
        foreach (SoundAudioClip s in soundAudioClips)
        {
            s.source = gameObject.AddComponent<AudioSource>();
            s.source.clip = s.audioClip;
            s.source.volume = s.volume;
            s.source.pitch = 1;
            s.source.loop = s.loop;
        }
        foreach (SoundAudioClip s in itemClickedAudio)
        {
            s.source = gameObject.AddComponent<AudioSource>();
            s.source.clip = s.audioClip;
            s.source.volume = s.volume;
            s.source.pitch = 1;
            s.source.loop = s.loop;
        }
        foreach (SoundAudioClip s in textFloatInPk)
        {
            s.source = gameObject.AddComponent<AudioSource>();
            s.source.clip = s.audioClip;
            s.source.volume = s.volume;
            s.source.pitch = 1;
            s.source.loop = s.loop;
        }
    }

    /// <summary>
    /// 0: ingame, 1: lobby
    /// </summary>
    /// <param name="id"></param>
    public void SwitchBg(int id)
    {
        if(id == 1)
        {
            PauseSound(Sound.bg);
            PlaySound(Sound.bg2);
        }
        else
        {
            PauseSound(Sound.bg2);
            PlaySound(Sound.bg);
        }
    }

    public void PlaySound(Sound sound, bool toggle = false)
    {
        SoundAudioClip soundAudioClip = GetAudioClip(sound);
        if (soundAudioClip == null) return;
        if (PlayerPrefs.GetInt(SOUND) == 1 || toggle) soundAudioClip.source.Play();
    }

    public void PlaySFX(Sound sound, float volume, bool isPlayAgain = false)
    {
        SoundAudioClip soundAudioClip = GetAudioClip(sound);
        if (soundAudioClip == null) return;
        if (PlayerPrefs.GetInt(SOUND) == 1)
        {
            soundAudioClip.source.volume = volume;
            if(!isPlayAgain) soundAudioClip.source.Play();
        }
    }

    //public void AdjustVolume( float volume)
    //{
    //    SoundAudioClip soundAudioClip = GetAudioClip(sound);
    //    if (soundAudioClip == null) return;
    //    if (PlayerPrefs.GetInt(SOUND) == 1)
    //    {
    //        soundAudioClip.source.volume = volume;
    //        soundAudioClip.source.Play();
    //    }
    //}    

    public void PauseSound(Sound sound, bool toggle = false)
    {
        SoundAudioClip soundAudioClip = GetAudioClip(sound);
        if (soundAudioClip == null || soundAudioClip.source == null) return;
        if (PlayerPrefs.GetInt(SOUND) == 1 || toggle) soundAudioClip.source.Stop();
    }

    public void PlayItemClickedSound(int choose = -1)
    {
        if (PlayerPrefs.GetInt(SOUND) != 1) return;
        if (choose != -1) itemClickedAudio[choose].source.Play();
        else
        {
            int id = Random.Range(0, itemClickedAudio.Length);
            itemClickedAudio[id].source.Play();
        }
    }

    int choose = 0;
    public void PlayTextFloatInPk()
    {
        if (PlayerPrefs.GetInt(SOUND) != 1) return;
        choose = (choose + 1) % textFloatInPk.Length;

        textFloatInPk[choose].source.Play();
    }

    public SoundAudioClip GetAudioClip(Sound sound)
    {
        foreach (SoundAudioClip soundAudioClip in soundAudioClips)
        {
            if (soundAudioClip.sound == sound)
                return soundAudioClip;
        }
        MyDebug.Log("Sound " + sound + " not found");
        return null;
    }

    public void ChangePitch(float value) {
        foreach (SoundAudioClip s in soundAudioClips)
        {
            s.source.pitch = value;
        }
        foreach (SoundAudioClip s in itemClickedAudio)
        {
            s.source.pitch = value;
        }
        foreach (SoundAudioClip s in textFloatInPk)
        {
            s.source.pitch = value;
        }
    }
}