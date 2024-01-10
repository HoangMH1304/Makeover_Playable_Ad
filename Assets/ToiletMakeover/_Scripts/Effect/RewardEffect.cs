using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class RewardEffect : MonoBehaviour
{

    public static RewardEffect Instance;
    [SerializeField]
    private Transform holderCoin;
    [SerializeField]
    private Transform holderCurrency2;
    [SerializeField]
    private GameObject prefabCoin;
    [SerializeField]
    private GameObject prefabTicket;
    [SerializeField]
    private GameObject prefabSpin;
    [SerializeField]
    private Canvas canvas;
    //[InfoBox("Mảng Targets: đánh dấu các vị trí mà reward sẽ bay đến")]
    [SerializeField]
    private Transform[] targets;
    private List<Image> listImg;
    private List<Transform> listCoinTransform;
    //[InfoBox("Mảng Sprites: hình ảnh của reward")]
    [SerializeField]
    private Sprite[] sprites;
    [HideInInspector]
    public bool isActive = false;

    // Start is called before the first frame update
    void Start()
    {
        Instance = this;
        listImg = new List<Image>();
        listCoinTransform = new List<Transform>();
        foreach (Transform t in holderCoin)
        {
            listCoinTransform.Add(t);
            listImg.Add(t.GetComponentInChildren<Image>());
        }
    }
    //#if UNITY_EDITOR
    //    private void OnGUI()
    //    {
    //        if(GUILayout.Button("TEST COIN FLY",new GUILayoutOption(GUILayout.))
    //        {
    //            SetUp(20, targets[2], true, 0);
    //        }
    //    }
    //#endif


    /// <summary>
    /// Hàm tạo hiệu ứng tiền bay đến vị trí chỉ định
    /// </summary>
    /// <param name="idHolder"></param> 0: vị trí ở canvas chính, 1 vị trí ở canvas shop
    /// <param name="amount"></param>
    /// <param name="from"></param>
    /// <param name="quick"></param>
    /// <param name="target"></param>
    /// <param name="delay"></param>
    /// <param name="sprite"></param>
    /// <param name="isOldFly"></param>
    public void SetUp(int idHolder, int amount, Transform from, bool quick = false, int target = 0, float delay = 0, int sprite = 0, bool isOldFly = false)
    {
        //if (isActive) return;
        isActive = true;
        Clean();
        //MyDebug.LogError("FROM " + from + " " + targets[target].position);
        //from += CameraFlow.Instance.transform.localPosition;
        //from=CanvasExtensions.WorldToCanvas(canvas, from, Camera.main);
        if (isOldFly == true)
        {
            StartCoroutine(DoGenerate(amount, from, targets[target], quick, delay, sprite));
        }
        else
            StartCoroutine(DoGenerate2(idHolder, amount, from, targets[target], quick, delay, sprite));
    }
    public void Clean()
    {
        StopAllCoroutines();
        for (int i = 0; i < listCoinTransform.Count; i++)
        {
            listCoinTransform[i].gameObject.SetActive(false);
        }
    }
    Transform Get(int i, int defaultTransform = 0)
    {
        try
        {
            return listCoinTransform[i];
        }
        catch
        {
            GameObject o = null;
            if (defaultTransform == 0)
                o = Instantiate(prefabCoin, holderCoin);
            else
                o = Instantiate(prefabCoin, holderCurrency2);

            listCoinTransform.Add(o.transform);
            listImg.Add(o.GetComponentInChildren<Image>());
            return Get(i, defaultTransform);

        }
    }
    IEnumerator DoGenerate(int amount, Transform from, Transform toPos, bool quick, float delay = 0, int sprite = 0)
    {
        yield return new WaitForSecondsRealtime(delay);
        float time = (quick ? 0.3f : 0.9f) / amount;
        for (int i = 0; i < amount; i++)
        {
            Transform t = Get(i);
            Image img = listImg[i];
            img.sprite = sprites[sprite];
            StartCoroutine(DoPopUp(i, from, toPos));
            yield return new WaitForSecondsRealtime(time);
        }

        isActive = false;

    }

    /// <summary>
    /// just care this
    /// </summary>
    /// <param name="amount"></param>
    /// <param name="from"></param>
    /// <param name="toPos"></param>
    /// <param name="quick"></param>
    /// <param name="delay"></param>
    /// <param name="sprite"></param>
    /// <returns></returns>
    IEnumerator DoGenerate2(int idHolder, int amount, Transform from, Transform toPos, bool quick, float delay = 0, int sprite = 0)
    {
        yield return new WaitForSecondsRealtime(delay);
        float time = (quick ? 0.3f : 0.9f) / amount;
        //MyDebug.Log("COIN: " + from.position + " " + toPos.position);
        for (int i = 0; i < amount; i++)
        {
            Transform t = Get(i, idHolder);   ///
            Image img = listImg[i];
            img.sprite = sprites[sprite];
            img.SetNativeSize();
            DoPopup2(i, from, toPos);
            yield return new WaitForSeconds(Random.Range(0, .02f));
        }
        yield return new WaitForSeconds(.4f);
        for (int i = 0; i < amount; i++)
        {
            StartCoroutine(DoPopup3(i, from, toPos));
            yield return new WaitForSeconds(Random.Range(0, .02f));
        }
        isActive = false;
    }
    private Vector3 CalculatePoint(float t, Vector3 a, Vector3 b, Vector3 o)
    {
        float u = 1 - t;
        float tt = t * t;
        float uu = u * u;
        Vector3 p = uu * a;
        p += 2 * u * t * b;
        p += tt * o;
        return p;
    }
    IEnumerator DoPopUp(int index, Transform from, Transform toPos)
    {
        Transform t = listCoinTransform[index];
        t.gameObject.SetActive(true);
        t.position = from.position + (Vector3)Random.insideUnitCircle * 0.1f;

        Vector3 originPos = t.position;

        t.localScale = Vector3.zero;
        Vector3 original = Vector3.one;

        while (t.localScale.x < 1)
        {
            t.localScale = Vector3.MoveTowards(t.localScale, original, 0.14f);
            yield return null;
        }
        t.localScale = original;
        Vector3 oPos = new Vector3(Random.Range(originPos.x, toPos.position.x), Random.Range(originPos.y, toPos.position.y - 1));
        yield return new WaitForSecondsRealtime(0.02f);
        float timer = 0;

        float a = Random.Range(1.7f, 2f);
        while (timer < 1)
        {
            t.position = CalculatePoint(timer, originPos, oPos, toPos.position);
            timer += Time.unscaledDeltaTime * a;
            a += Time.unscaledDeltaTime;
            yield return null;
        }
        t.position = toPos.position;

        Vector3 to = Vector3.zero;
        while (t.localScale.x > 0)
        {
            t.localScale = Vector3.MoveTowards(t.localScale, to, 0.5f);
            yield return null;
        }
        t.gameObject.SetActive(false);

    }

    public void DoPopup2(int index, Transform from, Transform toPos)
    {
        Transform t = listCoinTransform[index];
        t.gameObject.SetActive(true);
        t.position = from.position;
        t.localScale = Vector3.zero;
        //LeanTween.move(t.gameObject , from.position + (Vector3)Random.insideUnitCircle * 2f,.3f);
        t.DOMove(from.position + (Vector3)Random.insideUnitCircle * 2f, 0.3f);
        //LeanTween.scale(t.gameObject, Vector3.one,.3f);
        t.DOScale(Vector3.one, 0.3f);
    }
    private IEnumerator DoPopup3(int index, Transform from, Transform toPos)
    {
        Transform t = listCoinTransform[index];
        float timer = 0;
        Vector3 originPos = t.position;
        Vector3 oPos = new Vector3(Random.Range(originPos.x, toPos.position.x), Random.Range(originPos.y, toPos.position.y - 1));
        float a = Random.Range(3.7f, 4f);
        while (timer < 1)
        {
            t.position = CalculatePoint(timer, originPos, oPos, toPos.position);
            timer += Time.unscaledDeltaTime * a;
            a += Time.unscaledDeltaTime;
            yield return null;
        }
        t.position = toPos.position;
        Vector3 to = Vector3.zero;
        while (t.localScale.x > 0)
        {
            t.localScale = Vector3.MoveTowards(t.localScale, to, 0.5f);
            yield return null;
        }
        t.gameObject.SetActive(false);
        t.localScale = Vector3.one;
    }
}

public static class CanvasExtensions
{
    public static Vector2 WorldToCanvas(this Canvas canvas,
                                        Vector3 world_position,
                                        Camera camera = null)
    {
        if (camera == null)
        {
            camera = Camera.main;
        }

        var viewport_position = camera.WorldToViewportPoint(world_position);
        var canvas_rect = canvas.GetComponent<RectTransform>();

        return new Vector2((viewport_position.x * canvas_rect.sizeDelta.x) - (canvas_rect.sizeDelta.x * 0.5f),
                           (viewport_position.y * canvas_rect.sizeDelta.y) - (canvas_rect.sizeDelta.y * 0.5f));
    }
}