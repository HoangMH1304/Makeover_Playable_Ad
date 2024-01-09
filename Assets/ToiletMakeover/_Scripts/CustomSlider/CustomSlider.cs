using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class CustomSlider : Slider
{
    protected override void Awake()
    {
        base.Awake();

        var assembly = Assembly.GetAssembly(typeof(UnityEngine.UI.Slider));
        var type = assembly.GetType("Slider");
    }

    //public override void OnPointerDown(PointerEventData eventData)
    //{
    //    var assembly = Assembly.GetAssembly(typeof(UnityEngine.UI.Slider));
    //    var type = assembly.GetType("Slider");
    //    var method = type.GetMethod(name: "MayDrag");
    //    var property = type.GetProperty(name: "PropertyName");

    //    if (!method(eventData))
    //    {
    //        return;
    //    }

    //    base.OnPointerDown(eventData);

    //    m_Offset = Vector2.zero;
    //    if (m_HandleContainerRect != null && RectTransformUtility.RectangleContainsScreenPoint(m_HandleRect, eventData.pointerPressRaycast.screenPosition, eventData.enterEventCamera))
    //    {
    //        Vector2 localMousePos;
    //        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(m_HandleRect, eventData.pointerPressRaycast.screenPosition, eventData.pressEventCamera, out localMousePos))
    //            m_Offset = localMousePos;
    //    }
    //    //else
    //    //{
    //    //    // Outside the slider handle - jump to this point instead
    //    //    UpdateDrag(eventData, eventData.pressEventCamera);
    //    //}
    //}
}
