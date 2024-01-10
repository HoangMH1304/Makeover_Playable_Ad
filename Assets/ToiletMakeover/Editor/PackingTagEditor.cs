using System.Collections;
using System.Collections.Generic;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine.U2D;
using UnityEditor.U2D;

[CustomEditor(typeof(ShopController))]
public class PackingTagEditor : Editor
{
#if UNITY_EDITOR

    SpriteAtlas atlas;
    SpriteAtlas atlas2;
    SpriteAtlas atlas3;
    SpriteAtlas atlas4;
    SpriteAtlas atlas5;
    bool isEdit;
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();

        var script = (ShopController)target;

        if (GUILayout.Button("Sort data item"))
        {
            (target as ShopController).EDITOR_SortData();
        }
        serializedObject.ApplyModifiedProperties();

        GUILayout.Space(20f);
        isEdit = EditorGUILayout.Toggle("Create Atlas from List" ,isEdit);
        if (!isEdit) return;

        EditorGUILayout.LabelField("Head");
        atlas = (SpriteAtlas)EditorGUILayout.ObjectField(atlas, typeof(SpriteAtlas));
        if (GUILayout.Button("Set atlas Head"))
        {
            var newObj = new Object[script.heads.Length];
            for (int i = 0; i < newObj.Length; i++)
            {
                newObj[i] = script.heads[i].preview;
            }
            SpriteAtlasExtensions.Add(atlas, newObj);
        }
        GUILayout.Space(5f);
        EditorGUILayout.LabelField("Eye");
        atlas2 = (SpriteAtlas)EditorGUILayout.ObjectField(atlas2, typeof(SpriteAtlas));
        if (GUILayout.Button("Set atlas Eye"))
        {
            var newObj = new Object[script.eyes.Length];
            for (int i = 0; i < newObj.Length; i++)
            {
                newObj[i] = script.eyes[i].preview;
            }
            SpriteAtlasExtensions.Add(atlas2, newObj);
        }
        GUILayout.Space(5f);
        EditorGUILayout.LabelField("Mouth");
        atlas3 = (SpriteAtlas)EditorGUILayout.ObjectField(atlas3, typeof(SpriteAtlas));
        if (GUILayout.Button("Set atlas Mouth"))
        {
            var newObj = new Object[script.mouths.Length];
            for (int i = 0; i < newObj.Length; i++)
            {
                newObj[i] = script.mouths[i].preview;
            }
            SpriteAtlasExtensions.Add(atlas3, newObj);
        }
        GUILayout.Space(5f);
        EditorGUILayout.LabelField("Acc");
        atlas4 = (SpriteAtlas)EditorGUILayout.ObjectField(atlas4, typeof(SpriteAtlas));
        if (GUILayout.Button("Set atlas Acc"))
        {
            var newObj = new Object[script.accs.Length];
            for (int i = 0; i < newObj.Length; i++)
            {
                newObj[i] = script.accs[i].preview;
            }
            SpriteAtlasExtensions.Add(atlas4, newObj);
        }
        GUILayout.Space(5f);
        EditorGUILayout.LabelField("Body");
        atlas5 = (SpriteAtlas)EditorGUILayout.ObjectField(atlas5, typeof(SpriteAtlas)); 
        if(GUILayout.Button("Set atlas Body"))
        {
            var newObj = new Object[script.bodies.Length];
            for(int i =0;i < newObj.Length; i++)
            {
                newObj[i] = script.bodies[i].preview;
            }
            SpriteAtlasExtensions.Add(atlas5, newObj);
        }
    }
#endif
}
