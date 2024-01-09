using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class InitPrice : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI price;

    public void UpdatePrice(int _price)
    {
        price.text = "$" + _price;
    }
}
