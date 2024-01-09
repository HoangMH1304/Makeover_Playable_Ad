using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GridHandler : MonoBehaviour
{
    [SerializeField] private RectTransform content;
    [SerializeField] private GridLayoutGroup grid;
    float cellSize;

    private void Start()
    {
        cellSize = (UIHandler.Instance.WidthCanvas - 7 * 25) / 6;
        grid.cellSize = new Vector2(cellSize, cellSize);

    }

    public void RestoreInitialPos()
    {
        //set pos
        float y = content.localPosition.y;
        content.localPosition -= new Vector3(0, y, 0);
    }

    public void SetStateContent(bool state)
    {
        gameObject.SetActive(state);
        RestoreInitialPos();
    }
}
