using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SfxController : MonoBehaviour
{
    public static SfxController Instance;
    private const string SOUND = "Sound";
    private const string VIBRATE = "Vibrate";
    private const string FIRST_PLAY = "FirstPlaySFX";
    [SerializeField] private Sprite soundOn;
    [SerializeField] private Sprite soundOff;
    [SerializeField] private Sprite vibrateOn;
    [SerializeField] private Sprite vibrateOff;
    [SerializeField] private List<Image> sound;
    [SerializeField] private List<Image> vibrate;
    private Sprite soundImg, vibrateImg;
    private int soundState;
    private int vibrateState;

    private void Awake()
    {
        Instance = this;
    }

    private void OnEnable()
    {
        UpdateSFXUI();
    }

    public void UpdateSFXUI()
    {
        if (PlayerPrefs.GetInt(FIRST_PLAY) == 0)
        {
            PlayerPrefs.SetInt(FIRST_PLAY, 1);
            PlayerPrefs.SetInt(SOUND, 1);
            PlayerPrefs.SetInt(VIBRATE, 1);
        }
        soundState = PlayerPrefs.GetInt(SOUND);
        vibrateState = PlayerPrefs.GetInt(VIBRATE);
        ChangeIcon();
    }

    public void SwitchSoundState()
    {
        soundState = 1 - soundState;
        PlayerPrefs.SetInt(SOUND, soundState);
        if (soundState == 1)
        {
            PlayTapSound();
            SoundManager.Instance.PlaySound(Sound.bg2);
        }
        else
        {
            SoundManager.Instance.PauseSound(Sound.bg2, true);
        }
        ChangeIcon();
    }

    public void SwitchVibrationState()
    {
        vibrateState = 1 - vibrateState;
        PlayerPrefs.SetInt(VIBRATE, vibrateState);
        ChangeIcon();
    }

    private void ChangeIcon()
    {
        if (soundState == 1) soundImg = soundOn;
        else soundImg = soundOff;
        if (vibrateState == 1) vibrateImg = vibrateOn;
        else vibrateImg = vibrateOff;

        for (int i = 0; i < sound.Count; i++)
        {
            sound[i].sprite = soundImg;
            vibrate[i].sprite = vibrateImg;
        }
    }

    public void PlayTapSound()
    {
        SoundManager.Instance.PlaySound(Sound.done);
    }
    public void PlayPopupSound()
    {
        SoundManager.Instance.PlaySound(Sound.popup);
    }

    public void PlayBoosterSound2()
    {
        SoundManager.Instance.PlaySound(Sound.rocket);
    }

    public void PauseBoosterSound()
    {
        SoundManager.Instance.PauseSound(Sound.rocket);
    }

    public void PlayCashSound()
    {
        SoundManager.Instance.PlaySound(Sound.cash);
    }


    public void Vibrate()
    {
        //if (vibrateState == 1) MMVibrationManager.Haptic(HapticTypes.Success, true, true);
    }

    //public void CustomVibrate(HapticTypes hapticTypes)
    //{
    //    //if (vibrateState == 1) MMVibrationManager.Haptic(hapticTypes, true, true);
    //}

}
