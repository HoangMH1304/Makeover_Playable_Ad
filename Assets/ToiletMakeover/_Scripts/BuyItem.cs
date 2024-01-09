using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BuyItem : MonoBehaviour
{
    [SerializeField] private Transform faceHolder;
    [SerializeField] private Transform eyeHolder;
    [SerializeField] private Transform mouthHolder;
    [SerializeField] private Transform accHolder;
    [SerializeField] private Transform bodyHolder;

    public void ConfirmBuy()
    {
        string chooseItem = PlayerPrefs.GetString("SelectedItem");
        int id = PlayerPrefs.GetInt(chooseItem);
        if (chooseItem.Contains("Head")) faceHolder.Find(id.ToString()).GetComponent<ItemDisplay>().OnBuy();
        else if (chooseItem.Contains("Eye")) eyeHolder.Find(id.ToString()).GetComponent<ItemDisplay>().OnBuy();
        else if (chooseItem.Contains("Mouth")) mouthHolder.Find(id.ToString()).GetComponent<ItemDisplay>().OnBuy();
        else if (chooseItem.Contains("Acc")) accHolder.Find(id.ToString()).GetComponent<ItemDisplay>().OnBuy();
        else if (chooseItem.Contains("Body")) bodyHolder.Find(id.ToString()).GetComponent<ItemDisplay>().OnBuy();
    }
}
