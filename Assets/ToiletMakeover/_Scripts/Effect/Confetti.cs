using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Confetti : MonoBehaviour
{
    [SerializeField] private List<ParticleSystem> fireworks;
    [SerializeField] private ParticleSystem _particleSystem;
    private Camera mainCamera;

    private void Awake()
    {
        _particleSystem = GetComponent<ParticleSystem>();
    }

    public void Play()
    {
        for (int i = 0; i < fireworks.Count; i++)
        {
            fireworks[i].gameObject.SetActive(true);
            fireworks[i].Play();
        }
    }

    public void PlayConfetti()
    {
        if (mainCamera == null)
            mainCamera = CameraHandler.Instance.CameraMain;

        if (mainCamera.orthographicSize > 7)
        {
            transform.localPosition = new Vector3(0, -1.5f, 50);
            transform.localScale = Vector3.one * 2;
            for (int i = 0; i < fireworks.Count; i++)
            {
                var effect = fireworks[i].main;
                effect.startSize = new ParticleSystem.MinMaxCurve(0.4f, 0.7f);


                var constSpeed = fireworks[i].limitVelocityOverLifetime;
                constSpeed.limit = new ParticleSystem.MinMaxCurve { constant = 6 };

                constSpeed.limitX = 6;
                constSpeed.limitY = 6;
                constSpeed.limitZ = 6;
            }
        }
        else
        {
            transform.localPosition = new Vector3(0, 0, 50);
            transform.localScale = Vector3.one;
            for (int i = 0; i < fireworks.Count; i++)
            {
                var effect = fireworks[i].main;

                effect.startSize = new ParticleSystem.MinMaxCurve(0.15f, 0.4f);


                var constSpeed = fireworks[i].limitVelocityOverLifetime;
                constSpeed.limit = new ParticleSystem.MinMaxCurve { constant = 1 };
                constSpeed.limitX = 1;
                constSpeed.limitY = 1;
                constSpeed.limitZ = 1;
            }
        }
        for (int i = 0; i < fireworks.Count; i++)
        {
            fireworks[i].gameObject.SetActive(true);
            fireworks[i].Play();
        }
    }


    public void StopParticleSystem()
    {
        for (int i = 0; i < fireworks.Count; i++)
        {
            fireworks[i].gameObject.SetActive(false);
        }
    }

    //private void OnDisable()
    //{
    //    StopParticleSystem();
    //}
}
