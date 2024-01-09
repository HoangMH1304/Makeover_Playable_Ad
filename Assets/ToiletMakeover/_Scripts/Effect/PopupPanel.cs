using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class PopupPanel : MonoBehaviour
{
    [SerializeField] protected Transform panel;
    [SerializeField] private ParticleSystem conffeti;
    [SerializeField] private bool adjustCamera = false;
    [SerializeField] private bool dailySpinPanel = false;
    //public float yScaleSize;
    private float lastCamOrthoSize;
    protected float entranceTime = 0.3f;
    public float scaleY = 1;
    private Confetti _confetti;
    private bool closeable = false;

    private bool closed = false;


    protected virtual void OnEnable()
    {
        if (!dailySpinPanel)
            IdleActions.OnSwitchConditionToRaiseMoneyMonster?.Invoke(false);
        InitEffect();

        closeable = false;
        closed = false;

        Invoke(nameof(CanTurnOff), 0.6f);
    }


    protected virtual void OnDisable()
    {
        if (!dailySpinPanel)
            IdleActions.OnSwitchConditionToRaiseMoneyMonster?.Invoke(true);
    }

    private void CanTurnOff() => closeable = true;

    protected virtual void SetText(string msg = "")
    {

    }

    protected virtual void InitEffect()
    {
        this.PostEvent(EventID.OnTurnOffInteractNativeAd, false);
        EntranceAnim();

        SetText();

        if (conffeti == null) return;
        SoundManager.Instance.PlaySFX(Sound.winSFX, 1f);
        if (adjustCamera)
        {
            lastCamOrthoSize = Camera.main.orthographicSize;
            CameraHandler.Instance.CameraForConfetti(6.5f);
        }
        _confetti = conffeti.GetComponent<Confetti>();
        _confetti.PlayConfetti();
    }

    protected virtual void EntranceAnim()
    {
        panel.DOKill();
        panel.DOScaleY(0.5f, 0);
        panel.DOScaleY(scaleY, entranceTime).SetEase(Ease.OutBack);
    }

    public virtual void OnExit()
    {
        if (!closeable || closed) return;
        if (adjustCamera) CameraHandler.Instance.CameraForConfetti(lastCamOrthoSize);
        if (conffeti != null)
        {
            _confetti.StopParticleSystem();
        }
        
        this.PostEvent(EventID.OnTurnOffInteractNativeAd, true);
        closed = true;

        panel.DOKill();
        panel.DOScaleY(scaleY, 0);
        panel.DOScaleY(0.5f, 0.2f).SetEase(Ease.InBack).OnComplete(() => gameObject.SetActive(false));
    }
}
