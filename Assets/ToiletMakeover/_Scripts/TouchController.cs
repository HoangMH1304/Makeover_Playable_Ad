using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class TouchController : MonoBehaviour
{
    [SerializeField] private Rigidbody2D rb;
    private float deltaX, deltaY;
    private Vector3 mousePos;
    [SerializeField] private float speed;
    private bool isDrawing = false;
    
    private Vector3[] corners = new Vector3[4];
    private Camera _camera;


    private void Start()
    {
        UIHandler.Instance.limitArea.GetWorldCorners(corners);
        _camera = Camera.main;
    }

    private void OnValidate()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update ()
    {
        Drawing();
    }

    private Vector3 LimitPosition( Vector3 position)
    {

        if (position.x < corners[0].x) position.x = corners[0].x;
        if (position.x > corners[3].x) position.x = corners[3].x;
        if (position.y < corners[0].y) position.y = corners[0].y;
        if (position.y > corners[1].y) position.y = corners[1].y;
        return position;
        //transform.position = position;
    }

    private void Drawing()
    {
        // WARNING: DO NOT CHANGE THE ORDER !
        EndDraw();
        InDraw();
        BeginDraw();
    }


    public void BeginDraw()
    {
        if (Input.GetMouseButtonDown(0) && EventSystem.current.currentSelectedGameObject == null)
        {
            if (isDrawing == false)
            {
                isDrawing = true;
                // Your code here!
                mousePos = _camera.ScreenToWorldPoint(Input.mousePosition) + new Vector3(0, 0, 10);
                deltaX = mousePos.x - transform.position.x;
                deltaY = mousePos.y - transform.position.y;
            }
        }
    }

    public void InDraw()
    {
        if (isDrawing && EventSystem.current.currentSelectedGameObject == null)
        {
            rb.MovePosition(LimitPosition(new Vector2(mousePos.x - deltaX, mousePos.y - deltaY)));
            mousePos = _camera.ScreenToWorldPoint(Input.mousePosition) + new Vector3(0, 0, 10);
        }
    }

    public void EndDraw()
    {
        if ((Input.touchCount < 2 && Input.GetMouseButtonUp(0))
            || (Input.touchCount >= 2 && Input.touches[0].phase == TouchPhase.Ended))
        {
            if (isDrawing == true)
            {
                isDrawing = false;
                rb.velocity = Vector2.zero;
            }
        }
    }
}
