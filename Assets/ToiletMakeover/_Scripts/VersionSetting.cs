using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class VersionSetting : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI version;
    void Start()
    {
        version.text = "Version: " + Application.version;
    }

    
}
