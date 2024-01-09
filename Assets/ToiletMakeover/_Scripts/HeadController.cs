using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HeadController : MonoBehaviour
{
    [SerializeField] private Transform eye;
    [SerializeField] private Transform mouth;
    [SerializeField] private Transform acc;

    private bool isClone = false;

    private Vector3 initialEye = new Vector3(0, 0.3f, 0);
    private Vector3 initialMouth = new Vector3(0, -1.3f, 0);
    private Vector3 initialAcc = new Vector3(-0.12f, 2.49f, 0);

    public bool IsVariant { get => isClone; set => isClone = value; }

    private void Start()
    {
        this.RegisterListener(EventID.OnReplay, (param) => InitialBodyPart());
        this.RegisterListener(EventID.OnReplayPK, (param) => InitialBodyPart());
    }

    private void InitialBodyPart()
    {
        if (isClone) return;
        transform.localPosition = new Vector3(3, 1, 0); //test
        eye.transform.localPosition = initialEye;
        mouth.transform.localPosition = initialMouth;
        acc.transform.localPosition = initialAcc;
    }
}
