using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoosterSound : MonoBehaviour
{
    private void OnEnable()
    {
        SoundManager.Instance.PlaySound(Sound.rocket);
    }

    private void OnDisable()
    {
        SoundManager.Instance.PauseSound(Sound.rocket);
    }
}
