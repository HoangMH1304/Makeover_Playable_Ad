using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BgAnimController : MonoBehaviour
{

    public int bgIdx = 0;
    public GameObject[] bgAnims;
    int currentBg;
    public bool isShowAnimBg;


    public int SetActiveBgAnim()
    {
        int rand = Random.Range(0, bgAnims.Length);
        currentBg = rand;
        bgAnims[currentBg].SetActive(true && isShowAnimBg);
        return currentBg;
    }

    public void DeactiveBgAnim()
    {
        for(int i = 0; i < bgAnims.Length; i++)
        {
            bgAnims[i].SetActive(false);
        }
    }

    public int ChangeBG()
    {
        DeactiveBgAnim();

        int rand = Random.Range(0, bgAnims.Length);
        while (rand == currentBg)
        {
            rand = Random.Range(0, bgAnims.Length);
        }
        currentBg = rand;
        bgAnims[currentBg].SetActive(true && isShowAnimBg);
        return currentBg;
    }

    public int GetNextBgPkMode()
    {
        int rand = Random.Range(0, bgAnims.Length);
        while (rand == currentBg)
        {
            rand = Random.Range(0, bgAnims.Length);
        }
        currentBg = rand;
        return currentBg;
    }

    public void ChangeBgPkMode()
    {
        DeactiveBgAnim();
        bgAnims[currentBg].SetActive(true && isShowAnimBg);
    }
}
