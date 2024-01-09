using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Unity.Collections;

public class IntroPreviewCharacter : MonoBehaviour
{
    private ShopController shop;

    private SpriteRenderer face;
    private SpriteRenderer eye;
    private SpriteRenderer mouth;
    private SpriteRenderer acc;

    private int currentFaceId = 0;
    private int currentEyeId = 0;
    private int currentMouthId = 0;
    private int currentAccId = 0;

    private void Awake()
    {
        face = transform.GetChild(0).GetComponent<SpriteRenderer>();
        eye = transform.GetChild(1).GetComponent<SpriteRenderer>();
        mouth = transform.GetChild(2).GetComponent<SpriteRenderer>();
        acc = transform.GetChild(3).GetComponent<SpriteRenderer>();
        //this.RegisterListener(EventID.OnStart, (param) => TurnOffPreview());
        //this.RegisterListener(EventID.OnReplay, (param) => TurnOnPreview());
    }

    private void Start()
    {
        shop = ShopController.Instance;
    }

    private void OnEnable()
    {
        OnEntranceEffect();
        StartCoroutine(SpawnRandomHead());
    }

    private void OnEntranceEffect()
    {
        transform.DOMoveY(1.5f, 0);
        transform.DOScale(0.25f, 0);
        face.DOFade(0f, 0);
        eye.DOFade(0f, 0);
        mouth.DOFade(0f, 0);
        acc.DOFade(0f, 0);
        transform.DOMoveY(0, 0.5f).SetEase(Ease.OutSine);
        transform.DOScale(0.5f, 0.3f).SetEase(Ease.OutSine);
        face.DOFade(1, 0.5f).SetEase(Ease.OutSine);
        eye.DOFade(1, 0.5f).SetEase(Ease.OutSine);
        mouth.DOFade(1, 0.5f).SetEase(Ease.OutSine);
        acc.DOFade(1, 0.5f).SetEase(Ease.OutSine);
    }

    public void TurnOffPreview()
    {
        StopAllCoroutines();
        gameObject.SetActive(false);
    }

    public void TurnOnPreview()
    {
        if(UIHandler.Instance.ReturnHome) gameObject.SetActive(true);
    }

    IEnumerator SpawnRandomHead()
    {
        while (true)
        {
            yield return new WaitForSeconds(0.25f);
            Invoke("RandomFace", 0.25f);
            yield return new WaitForSeconds(0.25f);
            Invoke("RandomEye", 0.25f);
            yield return new WaitForSeconds(0.25f);
            Invoke("RandomMouth", 0.25f);
            yield return new WaitForSeconds(0.25f);
            Invoke("RandomAcc", 0.25f);

            //yield return new WaitForSeconds(0.25f);
            //RandomFace();
            //yield return new WaitForSeconds(0.25f);
            //RandomEye();
            //yield return new WaitForSeconds(0.25f);
            //RandomMouth();
            //yield return new WaitForSeconds(0.25f);
            //RandomAcc();
        }
    }

    private void RandomFace()
    {
        var headsSO = shop.heads;
        int id = Random.Range(0, headsSO.Length);
        while (currentFaceId == id)
        {
            id = Random.Range(0, headsSO.Length);
        }
        currentFaceId = id;
        face.sprite = headsSO[id].part;
    }

    private void RandomEye()
    {
        var eyesSO = shop.eyes;
        int id = Random.Range(1, eyesSO.Length);
        while(currentEyeId == id)
        {
            id = Random.Range(0, eyesSO.Length);
        }

        try
        {
            if (eyesSO[id].specialPos) eye.transform.localPosition = eyesSO[id].realPos;
            else eye.transform.localPosition = new Vector3(0, 0.6f, 0);
            currentEyeId = id;
            eye.sprite = eyesSO[id].part;
            
        }
        catch(System.Exception e)
        {
            //MyDebug.LogError(e +"...."+ id);
        }

    }
    private void RandomMouth()
    {
        var mouthsSO = shop.mouths;
        int id = Random.Range(1, mouthsSO.Length);
        while (currentMouthId == id)
        {
            id = Random.Range(0, mouthsSO.Length);
        }
        currentMouthId = id;
        mouth.sprite = mouthsSO[id].part;
    }
    private void RandomAcc()
    {
        var accsSO = shop.accs;
        int id = Random.Range(1, accsSO.Length);
        while (currentAccId == id)
        {
            id = Random.Range(0, accsSO.Length);
        }
        currentAccId = id;
        acc.sprite = accsSO[id].part;
        if (accsSO[id].specialPos) acc.transform.localPosition = accsSO[id].realPos;
    }
}
