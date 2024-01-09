using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class HintAnim : MonoBehaviour
{
    private float buttonScale;
    private Sequence sq;
    [SerializeField] private float duration = 1.5f;

    private void Awake()
    {
        buttonScale = transform.localScale.y;
    }
    private void OnEnable()
    {
        StartCoroutine(DelayHintAnim());
    }

    private IEnumerator DelayHintAnim()
    {
        //sq.Kill();
        transform.localEulerAngles = Vector3.one;
        yield return new WaitForSeconds(duration);
        sq = DOTween.Sequence();
        sq.Append(transform.DOPunchRotation(new Vector3(0, 0, 40), 1.2f, 7, 0));
        sq.SetLoops(-1, LoopType.Restart);
        sq.PrependInterval(duration);
    }

    private void OnDisable()
    {
        sq.Kill();
    }
}
