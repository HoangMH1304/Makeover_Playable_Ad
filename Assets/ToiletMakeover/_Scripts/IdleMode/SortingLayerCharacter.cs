using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

public class SortingLayerCharacter : MonoBehaviour
{
    private SortingGroup sortingGroup;
    private int baseSortingOrderLayer = 1000;
    [SerializeField] private int offset = -10;

    private float timer;
    private float maxTimer = 0.1f;
    [SerializeField]
    private bool isDrag = false;

    private void Awake()
    {
        sortingGroup = GetComponent<SortingGroup>();
    }

    public void SetDragState(bool state)
    {
        isDrag = state;
    }
    private void LateUpdate()
    {
        if (isDrag)
        {
            timer -= Time.deltaTime;
            if (timer <= 0)
            {
                timer = maxTimer;
                sortingGroup.sortingOrder = (int)(baseSortingOrderLayer - transform.position.y - offset);
            }
        }
    }
}
