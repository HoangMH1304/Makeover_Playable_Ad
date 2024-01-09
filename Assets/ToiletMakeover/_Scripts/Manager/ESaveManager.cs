using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ESaveManager : MonoBehaviour
{
    private void Start()
    {
        DontDestroyOnLoad(gameObject);
    }
}
