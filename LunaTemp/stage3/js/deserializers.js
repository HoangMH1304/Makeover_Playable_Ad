var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointSpring' )
  var i509 = data
  i508.spring = i509[0]
  i508.damper = i509[1]
  i508.targetPosition = i509[2]
  return i508
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointMotor' )
  var i511 = data
  i510.m_TargetVelocity = i511[0]
  i510.m_Force = i511[1]
  i510.m_FreeSpin = i511[2]
  return i510
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointLimits' )
  var i513 = data
  i512.m_Min = i513[0]
  i512.m_Max = i513[1]
  i512.m_Bounciness = i513[2]
  i512.m_BounceMinVelocity = i513[3]
  i512.m_ContactDistance = i513[4]
  i512.minBounce = i513[5]
  i512.maxBounce = i513[6]
  return i512
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointDrive' )
  var i515 = data
  i514.m_PositionSpring = i515[0]
  i514.m_PositionDamper = i515[1]
  i514.m_MaximumForce = i515[2]
  return i514
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i517 = data
  i516.m_Spring = i517[0]
  i516.m_Damper = i517[1]
  return i516
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i519 = data
  i518.m_Limit = i519[0]
  i518.m_Bounciness = i519[1]
  i518.m_ContactDistance = i519[2]
  return i518
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i521 = data
  i520.m_ExtremumSlip = i521[0]
  i520.m_ExtremumValue = i521[1]
  i520.m_AsymptoteSlip = i521[2]
  i520.m_AsymptoteValue = i521[3]
  i520.m_Stiffness = i521[4]
  return i520
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i523 = data
  i522.m_LowerAngle = i523[0]
  i522.m_UpperAngle = i523[1]
  return i522
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i525 = data
  i524.m_MotorSpeed = i525[0]
  i524.m_MaximumMotorTorque = i525[1]
  return i524
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i527 = data
  i526.m_DampingRatio = i527[0]
  i526.m_Frequency = i527[1]
  i526.m_Angle = i527[2]
  return i526
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i529 = data
  i528.m_LowerTranslation = i529[0]
  i528.m_UpperTranslation = i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i530 = root || new pc.UnityMaterial()
  var i531 = data
  i530.name = i531[0]
  request.r(i531[1], i531[2], 0, i530, 'shader')
  i530.renderQueue = i531[3]
  i530.enableInstancing = !!i531[4]
  var i533 = i531[5]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i533[i + 0]) );
  }
  i530.floatParameters = i532
  var i535 = i531[6]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i535[i + 0]) );
  }
  i530.colorParameters = i534
  var i537 = i531[7]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i537[i + 0]) );
  }
  i530.vectorParameters = i536
  var i539 = i531[8]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i539[i + 0]) );
  }
  i530.textureParameters = i538
  var i541 = i531[9]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i541[i + 0]) );
  }
  i530.materialFlags = i540
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i545 = data
  i544.name = i545[0]
  i544.value = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i549 = data
  i548.name = i549[0]
  i548.value = new pc.Color(i549[1], i549[2], i549[3], i549[4])
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i553 = data
  i552.name = i553[0]
  i552.value = new pc.Vec4( i553[1], i553[2], i553[3], i553[4] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i557 = data
  i556.name = i557[0]
  request.r(i557[1], i557[2], 0, i556, 'value')
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i561 = data
  i560.name = i561[0]
  i560.enabled = !!i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i563 = data
  i562.name = i563[0]
  i562.width = i563[1]
  i562.height = i563[2]
  i562.mipmapCount = i563[3]
  i562.anisoLevel = i563[4]
  i562.filterMode = i563[5]
  i562.hdr = !!i563[6]
  i562.format = i563[7]
  i562.wrapMode = i563[8]
  i562.alphaIsTransparency = !!i563[9]
  i562.alphaSource = i563[10]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i565 = data
  i564.position = new pc.Vec3( i565[0], i565[1], i565[2] )
  i564.scale = new pc.Vec3( i565[3], i565[4], i565[5] )
  i564.rotation = new pc.Quat(i565[6], i565[7], i565[8], i565[9])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i567 = data
  i566.enabled = !!i567[0]
  i566.sortingLayerIndex = i567[1]
  i566.sortingOrder = i567[2]
  i566.sortingLayerName = i567[3]
  return i566
}

Deserializers["SortingLayerCharacter"] = function (request, data, root) {
  var i568 = root || request.c( 'SortingLayerCharacter' )
  var i569 = data
  i568.offset = i569[0]
  i568.isDrag = !!i569[1]
  return i568
}

Deserializers["MonsterCreator"] = function (request, data, root) {
  var i570 = root || request.c( 'MonsterCreator' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'headHolder')
  request.r(i571[2], i571[3], 0, i570, 'headSR')
  request.r(i571[4], i571[5], 0, i570, 'eyeSR')
  request.r(i571[6], i571[7], 0, i570, 'mouthSR')
  request.r(i571[8], i571[9], 0, i570, 'accSR')
  request.r(i571[10], i571[11], 0, i570, 'boneFollower1')
  request.r(i571[12], i571[13], 0, i570, 'boneFollower2')
  request.r(i571[14], i571[15], 0, i570, 'body1')
  request.r(i571[16], i571[17], 0, i570, 'body2')
  return i570
}

Deserializers["Spine.Unity.BoneFollower"] = function (request, data, root) {
  var i572 = root || request.c( 'Spine.Unity.BoneFollower' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'skeletonRenderer')
  i572.boneName = i573[2]
  i572.followXYPosition = !!i573[3]
  i572.followZPosition = !!i573[4]
  i572.followBoneRotation = !!i573[5]
  i572.followSkeletonFlip = !!i573[6]
  i572.followLocalScale = !!i573[7]
  i572.followParentWorldScale = !!i573[8]
  i572.maintainedAxisOrientation = i573[9]
  i572.initializeOnAwake = !!i573[10]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i575 = data
  i574.enabled = !!i575[0]
  request.r(i575[1], i575[2], 0, i574, 'sharedMaterial')
  var i577 = i575[3]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.sharedMaterials = i576
  i574.receiveShadows = !!i575[4]
  i574.shadowCastingMode = i575[5]
  i574.sortingLayerID = i575[6]
  i574.sortingOrder = i575[7]
  i574.lightmapIndex = i575[8]
  i574.lightmapSceneIndex = i575[9]
  i574.lightmapScaleOffset = new pc.Vec4( i575[10], i575[11], i575[12], i575[13] )
  i574.lightProbeUsage = i575[14]
  i574.reflectionProbeUsage = i575[15]
  i574.color = new pc.Color(i575[16], i575[17], i575[18], i575[19])
  request.r(i575[20], i575[21], 0, i574, 'sprite')
  i574.flipX = !!i575[22]
  i574.flipY = !!i575[23]
  i574.drawMode = i575[24]
  i574.size = new pc.Vec2( i575[25], i575[26] )
  i574.tileMode = i575[27]
  i574.adaptiveModeThreshold = i575[28]
  i574.maskInteraction = i575[29]
  i574.spriteSortPoint = i575[30]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i581 = data
  i580.name = i581[0]
  i580.tagId = i581[1]
  i580.enabled = !!i581[2]
  i580.isStatic = !!i581[3]
  i580.layer = i581[4]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'sharedMesh')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'additionalVertexStreams')
  i584.enabled = !!i585[2]
  request.r(i585[3], i585[4], 0, i584, 'sharedMaterial')
  var i587 = i585[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sharedMaterials = i586
  i584.receiveShadows = !!i585[6]
  i584.shadowCastingMode = i585[7]
  i584.sortingLayerID = i585[8]
  i584.sortingOrder = i585[9]
  i584.lightmapIndex = i585[10]
  i584.lightmapSceneIndex = i585[11]
  i584.lightmapScaleOffset = new pc.Vec4( i585[12], i585[13], i585[14], i585[15] )
  i584.lightProbeUsage = i585[16]
  i584.reflectionProbeUsage = i585[17]
  return i584
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i588 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i589 = data
  i588.loop = !!i589[0]
  i588.timeScale = i589[1]
  request.r(i589[2], i589[3], 0, i588, 'skeletonDataAsset')
  i588.initialSkinName = i589[4]
  i588.fixPrefabOverrideViaMeshFilter = i589[5]
  i588.initialFlipX = !!i589[6]
  i588.initialFlipY = !!i589[7]
  i588.updateWhenInvisible = i589[8]
  i588.zSpacing = i589[9]
  i588.useClipping = !!i589[10]
  i588.immutableTriangles = !!i589[11]
  i588.pmaVertexColors = !!i589[12]
  i588.clearStateOnDisable = !!i589[13]
  i588.tintBlack = !!i589[14]
  i588.singleSubmesh = !!i589[15]
  i588.fixDrawOrder = !!i589[16]
  i588.addNormals = !!i589[17]
  i588.calculateTangents = !!i589[18]
  i588.maskInteraction = i589[19]
  i588.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i589[20], i588.maskMaterials)
  i588.disableRenderingOnOverride = !!i589[21]
  i588.updateTiming = i589[22]
  i588.unscaledTime = !!i589[23]
  i588._animationName = i589[24]
  var i591 = i589[25]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i588.separatorSlotNames = i590
  return i588
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i592 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i593 = data
  var i595 = i593[0]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.materialsMaskDisabled = i594
  var i597 = i593[1]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i592.materialsInsideMask = i596
  var i599 = i593[2]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i592.materialsOutsideMask = i598
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i603 = data
  i602.name = i603[0]
  i602.halfPrecision = !!i603[1]
  i602.vertexCount = i603[2]
  i602.aabb = i603[3]
  var i605 = i603[4]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( !!i605[i + 0] );
  }
  i602.streams = i604
  i602.vertices = i603[5]
  var i607 = i603[6]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i607[i + 0]) );
  }
  i602.subMeshes = i606
  var i609 = i603[7]
  var i608 = []
  for(var i = 0; i < i609.length; i += 16) {
    i608.push( new pc.Mat4().setData(i609[i + 0], i609[i + 1], i609[i + 2], i609[i + 3],  i609[i + 4], i609[i + 5], i609[i + 6], i609[i + 7],  i609[i + 8], i609[i + 9], i609[i + 10], i609[i + 11],  i609[i + 12], i609[i + 13], i609[i + 14], i609[i + 15]) );
  }
  i602.bindposes = i608
  var i611 = i603[8]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i611[i + 0]) );
  }
  i602.blendShapes = i610
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i617 = data
  i616.triangles = i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i623 = data
  i622.name = i623[0]
  var i625 = i623[1]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i625[i + 0]) );
  }
  i622.frames = i624
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i627 = data
  i626.pivot = new pc.Vec2( i627[0], i627[1] )
  i626.anchorMin = new pc.Vec2( i627[2], i627[3] )
  i626.anchorMax = new pc.Vec2( i627[4], i627[5] )
  i626.sizeDelta = new pc.Vec2( i627[6], i627[7] )
  i626.anchoredPosition3D = new pc.Vec3( i627[8], i627[9], i627[10] )
  i626.rotation = new pc.Quat(i627[11], i627[12], i627[13], i627[14])
  i626.scale = new pc.Vec3( i627[15], i627[16], i627[17] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i629 = data
  i628.cullTransparentMesh = !!i629[0]
  return i628
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Image' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_Sprite')
  i630.m_Type = i631[2]
  i630.m_PreserveAspect = !!i631[3]
  i630.m_FillCenter = !!i631[4]
  i630.m_FillMethod = i631[5]
  i630.m_FillAmount = i631[6]
  i630.m_FillClockwise = !!i631[7]
  i630.m_FillOrigin = i631[8]
  i630.m_UseSpriteMesh = !!i631[9]
  i630.m_PixelsPerUnitMultiplier = i631[10]
  request.r(i631[11], i631[12], 0, i630, 'm_Material')
  i630.m_Maskable = !!i631[13]
  i630.m_Color = new pc.Color(i631[14], i631[15], i631[16], i631[17])
  i630.m_RaycastTarget = !!i631[18]
  i630.m_RaycastPadding = new pc.Vec4( i631[19], i631[20], i631[21], i631[22] )
  return i630
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Button' )
  var i633 = data
  i632.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i633[0], i632.m_OnClick)
  i632.m_Navigation = request.d('UnityEngine.UI.Navigation', i633[1], i632.m_Navigation)
  i632.m_Transition = i633[2]
  i632.m_Colors = request.d('UnityEngine.UI.ColorBlock', i633[3], i632.m_Colors)
  i632.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i633[4], i632.m_SpriteState)
  i632.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i633[5], i632.m_AnimationTriggers)
  i632.m_Interactable = !!i633[6]
  request.r(i633[7], i633[8], 0, i632, 'm_TargetGraphic')
  return i632
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i635 = data
  i634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i635[0], i634.m_PersistentCalls)
  return i634
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i637 = data
  var i639 = i637[0]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('UnityEngine.Events.PersistentCall', i639[i + 0]));
  }
  i636.m_Calls = i638
  return i636
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_Target')
  i642.m_TargetAssemblyTypeName = i643[2]
  i642.m_MethodName = i643[3]
  i642.m_Mode = i643[4]
  i642.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i643[5], i642.m_Arguments)
  i642.m_CallState = i643[6]
  return i642
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_ObjectArgument')
  i644.m_ObjectArgumentAssemblyTypeName = i645[2]
  i644.m_IntArgument = i645[3]
  i644.m_FloatArgument = i645[4]
  i644.m_StringArgument = i645[5]
  i644.m_BoolArgument = !!i645[6]
  return i644
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i647 = data
  i646.m_Mode = i647[0]
  i646.m_WrapAround = !!i647[1]
  request.r(i647[2], i647[3], 0, i646, 'm_SelectOnUp')
  request.r(i647[4], i647[5], 0, i646, 'm_SelectOnDown')
  request.r(i647[6], i647[7], 0, i646, 'm_SelectOnLeft')
  request.r(i647[8], i647[9], 0, i646, 'm_SelectOnRight')
  return i646
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i649 = data
  i648.m_NormalColor = new pc.Color(i649[0], i649[1], i649[2], i649[3])
  i648.m_HighlightedColor = new pc.Color(i649[4], i649[5], i649[6], i649[7])
  i648.m_PressedColor = new pc.Color(i649[8], i649[9], i649[10], i649[11])
  i648.m_SelectedColor = new pc.Color(i649[12], i649[13], i649[14], i649[15])
  i648.m_DisabledColor = new pc.Color(i649[16], i649[17], i649[18], i649[19])
  i648.m_ColorMultiplier = i649[20]
  i648.m_FadeDuration = i649[21]
  return i648
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_HighlightedSprite')
  request.r(i651[2], i651[3], 0, i650, 'm_PressedSprite')
  request.r(i651[4], i651[5], 0, i650, 'm_SelectedSprite')
  request.r(i651[6], i651[7], 0, i650, 'm_DisabledSprite')
  return i650
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i653 = data
  i652.m_NormalTrigger = i653[0]
  i652.m_HighlightedTrigger = i653[1]
  i652.m_PressedTrigger = i653[2]
  i652.m_SelectedTrigger = i653[3]
  i652.m_DisabledTrigger = i653[4]
  return i652
}

Deserializers["ItemDisplay"] = function (request, data, root) {
  var i654 = root || request.c( 'ItemDisplay' )
  var i655 = data
  i654._id = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'item')
  request.r(i655[3], i655[4], 0, i654, 'iconScale')
  request.r(i655[5], i655[6], 0, i654, 'itemSprite')
  request.r(i655[7], i655[8], 0, i654, 'fill')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i657 = data
  i656.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i657[0], i656.main)
  i656.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i657[1], i656.colorBySpeed)
  i656.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i657[2], i656.colorOverLifetime)
  i656.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i657[3], i656.emission)
  i656.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i657[4], i656.rotationBySpeed)
  i656.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i657[5], i656.rotationOverLifetime)
  i656.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i657[6], i656.shape)
  i656.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i657[7], i656.sizeBySpeed)
  i656.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i657[8], i656.sizeOverLifetime)
  i656.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i657[9], i656.textureSheetAnimation)
  i656.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i657[10], i656.velocityOverLifetime)
  i656.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i657[11], i656.noise)
  i656.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i657[12], i656.inheritVelocity)
  i656.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i657[13], i656.forceOverLifetime)
  i656.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i657[14], i656.limitVelocityOverLifetime)
  i656.useAutoRandomSeed = !!i657[15]
  i656.randomSeed = i657[16]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemMain()
  var i659 = data
  i658.duration = i659[0]
  i658.loop = !!i659[1]
  i658.prewarm = !!i659[2]
  i658.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.startDelay)
  i658.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.startLifetime)
  i658.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[5], i658.startSpeed)
  i658.startSize3D = !!i659[6]
  i658.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[7], i658.startSizeX)
  i658.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[8], i658.startSizeY)
  i658.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[9], i658.startSizeZ)
  i658.startRotation3D = !!i659[10]
  i658.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[11], i658.startRotationX)
  i658.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[12], i658.startRotationY)
  i658.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[13], i658.startRotationZ)
  i658.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[14], i658.startColor)
  i658.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[15], i658.gravityModifier)
  i658.simulationSpace = i659[16]
  request.r(i659[17], i659[18], 0, i658, 'customSimulationSpace')
  i658.simulationSpeed = i659[19]
  i658.useUnscaledTime = !!i659[20]
  i658.scalingMode = i659[21]
  i658.playOnAwake = !!i659[22]
  i658.maxParticles = i659[23]
  i658.emitterVelocityMode = i659[24]
  i658.stopAction = i659[25]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i660 = root || new pc.MinMaxCurve()
  var i661 = data
  i660.mode = i661[0]
  i660.curveMin = new pc.AnimationCurve( { keys_flow: i661[1] } )
  i660.curveMax = new pc.AnimationCurve( { keys_flow: i661[2] } )
  i660.curveMultiplier = i661[3]
  i660.constantMin = i661[4]
  i660.constantMax = i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i662 = root || new pc.MinMaxGradient()
  var i663 = data
  i662.mode = i663[0]
  i662.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[1], i662.gradientMin)
  i662.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[2], i662.gradientMax)
  i662.colorMin = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.colorMax = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i665 = data
  i664.mode = i665[0]
  var i667 = i665[1]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i667[i + 0]) );
  }
  i664.colorKeys = i666
  var i669 = i665[2]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i669[i + 0]) );
  }
  i664.alphaKeys = i668
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemColorBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i671[1], i670.color)
  i670.range = new pc.Vec2( i671[2], i671[3] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i675 = data
  i674.color = new pc.Color(i675[0], i675[1], i675[2], i675[3])
  i674.time = i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i679 = data
  i678.alpha = i679[0]
  i678.time = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemColorOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i681[1], i680.color)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemEmitter()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.rateOverTime)
  i682.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.rateOverDistance)
  var i685 = i683[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i685[i + 0]) );
  }
  i682.bursts = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemBurst()
  var i689 = data
  i688.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[0], i688.count)
  i688.cycleCount = i689[1]
  i688.minCount = i689[2]
  i688.maxCount = i689[3]
  i688.repeatInterval = i689[4]
  i688.time = i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemRotationBySpeed()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.separateAxes = !!i691[4]
  i690.range = new pc.Vec2( i691[5], i691[6] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemRotationOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemShape()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.shapeType = i695[1]
  i694.randomDirectionAmount = i695[2]
  i694.sphericalDirectionAmount = i695[3]
  i694.randomPositionAmount = i695[4]
  i694.alignToDirection = !!i695[5]
  i694.radius = i695[6]
  i694.radiusMode = i695[7]
  i694.radiusSpread = i695[8]
  i694.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[9], i694.radiusSpeed)
  i694.radiusThickness = i695[10]
  i694.angle = i695[11]
  i694.length = i695[12]
  i694.boxThickness = new pc.Vec3( i695[13], i695[14], i695[15] )
  i694.meshShapeType = i695[16]
  request.r(i695[17], i695[18], 0, i694, 'mesh')
  request.r(i695[19], i695[20], 0, i694, 'meshRenderer')
  request.r(i695[21], i695[22], 0, i694, 'skinnedMeshRenderer')
  i694.useMeshMaterialIndex = !!i695[23]
  i694.meshMaterialIndex = i695[24]
  i694.useMeshColors = !!i695[25]
  i694.normalOffset = i695[26]
  i694.arc = i695[27]
  i694.arcMode = i695[28]
  i694.arcSpread = i695[29]
  i694.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[30], i694.arcSpeed)
  i694.donutRadius = i695[31]
  i694.position = new pc.Vec3( i695[32], i695[33], i695[34] )
  i694.rotation = new pc.Vec3( i695[35], i695[36], i695[37] )
  i694.scale = new pc.Vec3( i695[38], i695[39], i695[40] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemSizeBySpeed()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.separateAxes = !!i697[4]
  i696.range = new pc.Vec2( i697[5], i697[6] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemSizeOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.separateAxes = !!i699[4]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.mode = i701[1]
  i700.animation = i701[2]
  i700.numTilesX = i701[3]
  i700.numTilesY = i701[4]
  i700.useRandomRow = !!i701[5]
  i700.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[6], i700.frameOverTime)
  i700.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[7], i700.startFrame)
  i700.cycleCount = i701[8]
  i700.rowIndex = i701[9]
  i700.flipU = i701[10]
  i700.flipV = i701[11]
  i700.spriteCount = i701[12]
  var i703 = i701[13]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sprites = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[1], i706.x)
  i706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.y)
  i706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.z)
  i706.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.radial)
  i706.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[5], i706.speedModifier)
  i706.space = i707[6]
  i706.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[7], i706.orbitalX)
  i706.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[8], i706.orbitalY)
  i706.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[9], i706.orbitalZ)
  i706.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[10], i706.orbitalOffsetX)
  i706.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[11], i706.orbitalOffsetY)
  i706.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[12], i706.orbitalOffsetZ)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemNoise()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.separateAxes = !!i709[1]
  i708.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.strengthX)
  i708.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.strengthY)
  i708.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.strengthZ)
  i708.frequency = i709[5]
  i708.damping = !!i709[6]
  i708.octaveCount = i709[7]
  i708.octaveMultiplier = i709[8]
  i708.octaveScale = i709[9]
  i708.quality = i709[10]
  i708.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[11], i708.scrollSpeed)
  i708.scrollSpeedMultiplier = i709[12]
  i708.remapEnabled = !!i709[13]
  i708.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[14], i708.remapX)
  i708.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[15], i708.remapY)
  i708.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[16], i708.remapZ)
  i708.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[17], i708.positionAmount)
  i708.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[18], i708.rotationAmount)
  i708.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[19], i708.sizeAmount)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemInheritVelocity()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.mode = i711[1]
  i710.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.curve)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemForceOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[1], i712.x)
  i712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.y)
  i712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.z)
  i712.space = i713[4]
  i712.randomized = !!i713[5]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.limit)
  i714.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.limitX)
  i714.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.limitY)
  i714.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[4], i714.limitZ)
  i714.dampen = i715[5]
  i714.separateAxes = !!i715[6]
  i714.space = i715[7]
  i714.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[8], i714.drag)
  i714.multiplyDragByParticleSize = !!i715[9]
  i714.multiplyDragByParticleVelocity = !!i715[10]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i717 = data
  i716.enabled = !!i717[0]
  request.r(i717[1], i717[2], 0, i716, 'sharedMaterial')
  var i719 = i717[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.sharedMaterials = i718
  i716.receiveShadows = !!i717[4]
  i716.shadowCastingMode = i717[5]
  i716.sortingLayerID = i717[6]
  i716.sortingOrder = i717[7]
  i716.lightmapIndex = i717[8]
  i716.lightmapSceneIndex = i717[9]
  i716.lightmapScaleOffset = new pc.Vec4( i717[10], i717[11], i717[12], i717[13] )
  i716.lightProbeUsage = i717[14]
  i716.reflectionProbeUsage = i717[15]
  request.r(i717[16], i717[17], 0, i716, 'mesh')
  i716.meshCount = i717[18]
  i716.activeVertexStreamsCount = i717[19]
  i716.alignment = i717[20]
  i716.renderMode = i717[21]
  i716.sortMode = i717[22]
  i716.lengthScale = i717[23]
  i716.velocityScale = i717[24]
  i716.cameraVelocityScale = i717[25]
  i716.normalDirection = i717[26]
  i716.sortingFudge = i717[27]
  i716.minParticleSize = i717[28]
  i716.maxParticleSize = i717[29]
  i716.pivot = new pc.Vec3( i717[30], i717[31], i717[32] )
  request.r(i717[33], i717[34], 0, i716, 'trailMaterial')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i721 = data
  i720.name = i721[0]
  i720.index = i721[1]
  i720.startup = !!i721[2]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i723 = data
  i722.enabled = !!i723[0]
  i722.planeDistance = i723[1]
  i722.referencePixelsPerUnit = i723[2]
  i722.isFallbackOverlay = !!i723[3]
  i722.renderMode = i723[4]
  i722.renderOrder = i723[5]
  i722.sortingLayerName = i723[6]
  i722.sortingOrder = i723[7]
  i722.scaleFactor = i723[8]
  request.r(i723[9], i723[10], 0, i722, 'worldCamera')
  i722.overrideSorting = !!i723[11]
  i722.pixelPerfect = !!i723[12]
  i722.targetDisplay = i723[13]
  i722.overridePixelPerfect = !!i723[14]
  return i722
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i725 = data
  i724.m_UiScaleMode = i725[0]
  i724.m_ReferencePixelsPerUnit = i725[1]
  i724.m_ScaleFactor = i725[2]
  i724.m_ReferenceResolution = new pc.Vec2( i725[3], i725[4] )
  i724.m_ScreenMatchMode = i725[5]
  i724.m_MatchWidthOrHeight = i725[6]
  i724.m_PhysicalUnit = i725[7]
  i724.m_FallbackScreenDPI = i725[8]
  i724.m_DefaultSpriteDPI = i725[9]
  i724.m_DynamicPixelsPerUnit = i725[10]
  i724.m_PresetInfoIsWorld = !!i725[11]
  return i724
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i727 = data
  i726.m_IgnoreReversedGraphics = !!i727[0]
  i726.m_BlockingObjects = i727[1]
  i726.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i727[2] )
  return i726
}

Deserializers["UI_Ingame"] = function (request, data, root) {
  var i728 = root || request.c( 'UI_Ingame' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'nextBtn')
  request.r(i729[2], i729[3], 0, i728, 'doneBtn')
  var i731 = i729[4]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 1, i730, '')
  }
  i728.tabMenuElements = i730
  return i728
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.Text' )
  var i735 = data
  i734.m_FontData = request.d('UnityEngine.UI.FontData', i735[0], i734.m_FontData)
  i734.m_Text = i735[1]
  request.r(i735[2], i735[3], 0, i734, 'm_Material')
  i734.m_Maskable = !!i735[4]
  i734.m_Color = new pc.Color(i735[5], i735[6], i735[7], i735[8])
  i734.m_RaycastTarget = !!i735[9]
  i734.m_RaycastPadding = new pc.Vec4( i735[10], i735[11], i735[12], i735[13] )
  return i734
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.FontData' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'm_Font')
  i736.m_FontSize = i737[2]
  i736.m_FontStyle = i737[3]
  i736.m_BestFit = !!i737[4]
  i736.m_MinSize = i737[5]
  i736.m_MaxSize = i737[6]
  i736.m_Alignment = i737[7]
  i736.m_AlignByGeometry = !!i737[8]
  i736.m_RichText = !!i737[9]
  i736.m_HorizontalOverflow = i737[10]
  i736.m_VerticalOverflow = i737[11]
  i736.m_LineSpacing = i737[12]
  return i736
}

Deserializers["TabMenuHandler"] = function (request, data, root) {
  var i738 = root || request.c( 'TabMenuHandler' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'targetScaleBodyPart')
  i738.isSliderShow = !!i739[2]
  var i741 = i739[3]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Tab')))
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 1, i740, '')
  }
  i738.tabSelection = i740
  var i743 = i739[4]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('GridHandler')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i738.tabContents = i742
  request.r(i739[5], i739[6], 0, i738, 'nextBtn')
  i738.fade = new pc.Color(i739[7], i739[8], i739[9], i739[10])
  request.r(i739[11], i739[12], 0, i738, 'next_Btn')
  request.r(i739[13], i739[14], 0, i738, 'done_Btn')
  request.r(i739[15], i739[16], 0, i738, 'handtut')
  request.r(i739[17], i739[18], 0, i738, 'slider')
  request.r(i739[19], i739[20], 0, i738, 'handTut')
  return i738
}

Deserializers["Tab"] = function (request, data, root) {
  var i748 = root || request.c( 'Tab' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'bodyPartLink')
  request.r(i749[2], i749[3], 0, i748, 'bubble')
  request.r(i749[4], i749[5], 0, i748, 'check')
  i748.selected = UnityEngine.Color32.ConstructColor(i749[6], i749[7], i749[8], i749[9])
  request.r(i749[10], i749[11], 0, i748, 'fill')
  return i748
}

Deserializers["Scale"] = function (request, data, root) {
  var i750 = root || request.c( 'Scale' )
  var i751 = data
  return i750
}

Deserializers["BreathButton"] = function (request, data, root) {
  var i752 = root || request.c( 'BreathButton' )
  var i753 = data
  i752.constantBreath = !!i753[0]
  i752.increaseScale = !!i753[1]
  i752.delayFirstTime = i753[2]
  return i752
}

Deserializers["TutHand"] = function (request, data, root) {
  var i754 = root || request.c( 'TutHand' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'rt')
  return i754
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'm_Content')
  i756.m_Horizontal = !!i757[2]
  i756.m_Vertical = !!i757[3]
  i756.m_MovementType = i757[4]
  i756.m_Elasticity = i757[5]
  i756.m_Inertia = !!i757[6]
  i756.m_DecelerationRate = i757[7]
  i756.m_ScrollSensitivity = i757[8]
  request.r(i757[9], i757[10], 0, i756, 'm_Viewport')
  request.r(i757[11], i757[12], 0, i756, 'm_HorizontalScrollbar')
  request.r(i757[13], i757[14], 0, i756, 'm_VerticalScrollbar')
  i756.m_HorizontalScrollbarVisibility = i757[15]
  i756.m_VerticalScrollbarVisibility = i757[16]
  i756.m_HorizontalScrollbarSpacing = i757[17]
  i756.m_VerticalScrollbarSpacing = i757[18]
  i756.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i757[19], i756.m_OnValueChanged)
  return i756
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i759 = data
  i758.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i759[0], i758.m_PersistentCalls)
  return i758
}

Deserializers["GridHandler"] = function (request, data, root) {
  var i760 = root || request.c( 'GridHandler' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'content')
  request.r(i761[2], i761[3], 0, i760, 'grid')
  return i760
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.Mask' )
  var i763 = data
  i762.m_ShowMaskGraphic = !!i763[0]
  return i762
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i765 = data
  i764.m_StartCorner = i765[0]
  i764.m_StartAxis = i765[1]
  i764.m_CellSize = new pc.Vec2( i765[2], i765[3] )
  i764.m_Spacing = new pc.Vec2( i765[4], i765[5] )
  i764.m_Constraint = i765[6]
  i764.m_ConstraintCount = i765[7]
  i764.m_Padding = UnityEngine.RectOffset.FromPaddings(i765[8], i765[9], i765[10], i765[11])
  i764.m_ChildAlignment = i765[12]
  return i764
}

Deserializers["UI_Result"] = function (request, data, root) {
  var i766 = root || request.c( 'UI_Result' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'moneyTxt')
  request.r(i767[2], i767[3], 0, i766, 'bgAnim')
  request.r(i767[4], i767[5], 0, i766, 'ingameBg')
  request.r(i767[6], i767[7], 0, i766, 'characterZone')
  request.r(i767[8], i767[9], 0, i766, 'characterManager')
  request.r(i767[10], i767[11], 0, i766, 'extraMonster1')
  request.r(i767[12], i767[13], 0, i766, 'extraMonster2')
  return i766
}

Deserializers["MoneyFly"] = function (request, data, root) {
  var i768 = root || request.c( 'MoneyFly' )
  var i769 = data
  i768.mainChar = !!i769[0]
  request.r(i769[1], i769[2], 0, i768, 'money')
  request.r(i769[3], i769[4], 0, i768, 'outline')
  request.r(i769[5], i769[6], 0, i768, 'moneyTxt')
  return i768
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Outline' )
  var i771 = data
  i770.m_EffectColor = new pc.Color(i771[0], i771[1], i771[2], i771[3])
  i770.m_EffectDistance = new pc.Vec2( i771[4], i771[5] )
  i770.m_UseGraphicAlpha = !!i771[6]
  return i770
}

Deserializers["UI_Transition"] = function (request, data, root) {
  var i772 = root || request.c( 'UI_Transition' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'canvasGroup')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i775 = data
  i774.m_Alpha = i775[0]
  i774.m_Interactable = !!i775[1]
  i774.m_BlocksRaycasts = !!i775[2]
  i774.m_IgnoreParentGroups = !!i775[3]
  i774.enabled = !!i775[4]
  return i774
}

Deserializers["UI_Endgame"] = function (request, data, root) {
  var i776 = root || request.c( 'UI_Endgame' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'canvasGroup')
  return i776
}

Deserializers["CharacterManager"] = function (request, data, root) {
  var i778 = root || request.c( 'CharacterManager' )
  var i779 = data
  i778.monsterBody = i779[0]
  i778.spawnMoney = !!i779[1]
  request.r(i779[2], i779[3], 0, i778, 'sortingGroup')
  request.r(i779[4], i779[5], 0, i778, 'headHolder')
  var i781 = i779[6]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.bodies = i780
  var i783 = i779[7]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i778.boneFollowers = i782
  return i778
}

Deserializers["TouchController"] = function (request, data, root) {
  var i788 = root || request.c( 'TouchController' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'rb')
  i788.speed = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i791 = data
  i790.bodyType = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'material')
  i790.simulated = !!i791[3]
  i790.useAutoMass = !!i791[4]
  i790.mass = i791[5]
  i790.drag = i791[6]
  i790.angularDrag = i791[7]
  i790.gravityScale = i791[8]
  i790.collisionDetectionMode = i791[9]
  i790.sleepMode = i791[10]
  i790.constraints = i791[11]
  return i790
}

Deserializers["ShopController"] = function (request, data, root) {
  var i792 = root || request.c( 'ShopController' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.heads = i794
  var i797 = i793[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i792.eyes = i796
  var i799 = i793[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i792.mouths = i798
  var i801 = i793[3]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i792.accs = i800
  var i803 = i793[4]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i792.bodies = i802
  request.r(i793[5], i793[6], 0, i792, 'headContent')
  request.r(i793[7], i793[8], 0, i792, 'eyeContent')
  request.r(i793[9], i793[10], 0, i792, 'mouthContent')
  request.r(i793[11], i793[12], 0, i792, 'accContents')
  request.r(i793[13], i793[14], 0, i792, 'bodyContent')
  request.r(i793[15], i793[16], 0, i792, 'head')
  request.r(i793[17], i793[18], 0, i792, 'eye')
  request.r(i793[19], i793[20], 0, i792, 'mouth')
  request.r(i793[21], i793[22], 0, i792, 'acc')
  request.r(i793[23], i793[24], 0, i792, 'body')
  request.r(i793[25], i793[26], 0, i792, 'body2')
  request.r(i793[27], i793[28], 0, i792, 'headHolder')
  request.r(i793[29], i793[30], 0, i792, 'boneFollower')
  request.r(i793[31], i793[32], 0, i792, 'boneFollower2')
  request.r(i793[33], i793[34], 0, i792, 'handTut')
  request.r(i793[35], i793[36], 0, i792, 'characterManager')
  return i792
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i806 = root || request.c( 'UIHandler' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'limitArea')
  request.r(i807[2], i807[3], 0, i806, 'curtainAnim')
  request.r(i807[4], i807[5], 0, i806, 'uI_Result')
  request.r(i807[6], i807[7], 0, i806, 'uI_Ingame')
  request.r(i807[8], i807[9], 0, i806, 'endGamePanel')
  request.r(i807[10], i807[11], 0, i806, 'transition')
  request.r(i807[12], i807[13], 0, i806, 'bodyAnim')
  request.r(i807[14], i807[15], 0, i806, 'bodyAnim2')
  request.r(i807[16], i807[17], 0, i806, 'character')
  request.r(i807[18], i807[19], 0, i806, 'moneyRain')
  return i806
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i808 = root || request.c( 'CameraHandler' )
  var i809 = data
  i808.defaultSize = i809[0]
  i808.aspectRatio = i809[1]
  request.r(i809[2], i809[3], 0, i808, 'characterManager')
  var i811 = i809[4]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.cams = i810
  var i813 = i809[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i808.cameras = i812
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i819 = data
  i818.enabled = !!i819[0]
  i818.aspect = i819[1]
  i818.orthographic = !!i819[2]
  i818.orthographicSize = i819[3]
  i818.backgroundColor = new pc.Color(i819[4], i819[5], i819[6], i819[7])
  i818.nearClipPlane = i819[8]
  i818.farClipPlane = i819[9]
  i818.fieldOfView = i819[10]
  i818.depth = i819[11]
  i818.clearFlags = i819[12]
  i818.cullingMask = i819[13]
  i818.rect = i819[14]
  request.r(i819[15], i819[16], 0, i818, 'targetTexture')
  i818.usePhysicalProperties = !!i819[17]
  i818.focalLength = i819[18]
  i818.sensorSize = new pc.Vec2( i819[19], i819[20] )
  i818.lensShift = new pc.Vec2( i819[21], i819[22] )
  i818.gateFit = i819[23]
  return i818
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i820 = root || request.c( 'SoundManager' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('SoundAudioClip', i823[i + 0]) );
  }
  i820.soundAudioClips = i822
  var i825 = i821[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('SoundAudioClip', i825[i + 0]) );
  }
  i820.itemClickedAudio = i824
  return i820
}

Deserializers["SoundAudioClip"] = function (request, data, root) {
  var i828 = root || request.c( 'SoundAudioClip' )
  var i829 = data
  i828.sound = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'audioClip')
  i828.volume = i829[3]
  i828.pitch = i829[4]
  i828.loop = !!i829[5]
  request.r(i829[6], i829[7], 0, i828, 'source')
  return i828
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_FirstSelected')
  i830.m_sendNavigationEvents = !!i831[2]
  i830.m_DragThreshold = i831[3]
  return i830
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i833 = data
  i832.m_HorizontalAxis = i833[0]
  i832.m_VerticalAxis = i833[1]
  i832.m_SubmitButton = i833[2]
  i832.m_CancelButton = i833[3]
  i832.m_InputActionsPerSecond = i833[4]
  i832.m_RepeatDelay = i833[5]
  i832.m_ForceModuleActive = !!i833[6]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i835 = data
  i834.ambientIntensity = i835[0]
  i834.reflectionIntensity = i835[1]
  i834.ambientMode = i835[2]
  i834.ambientLight = new pc.Color(i835[3], i835[4], i835[5], i835[6])
  i834.ambientSkyColor = new pc.Color(i835[7], i835[8], i835[9], i835[10])
  i834.ambientGroundColor = new pc.Color(i835[11], i835[12], i835[13], i835[14])
  i834.ambientEquatorColor = new pc.Color(i835[15], i835[16], i835[17], i835[18])
  i834.fogColor = new pc.Color(i835[19], i835[20], i835[21], i835[22])
  i834.fogEndDistance = i835[23]
  i834.fogStartDistance = i835[24]
  i834.fogDensity = i835[25]
  i834.fog = !!i835[26]
  request.r(i835[27], i835[28], 0, i834, 'skybox')
  i834.fogMode = i835[29]
  var i837 = i835[30]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i837[i + 0]) );
  }
  i834.lightmaps = i836
  i834.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i835[31], i834.lightProbes)
  i834.lightmapsMode = i835[32]
  i834.mixedBakeMode = i835[33]
  i834.environmentLightingMode = i835[34]
  i834.ambientProbe = new pc.SphericalHarmonicsL2(i835[35])
  i834.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i835[36])
  i834.useReferenceAmbientProbe = !!i835[37]
  request.r(i835[38], i835[39], 0, i834, 'customReflection')
  request.r(i835[40], i835[41], 0, i834, 'defaultReflection')
  i834.defaultReflectionMode = i835[42]
  i834.defaultReflectionResolution = i835[43]
  i834.sunLightObjectId = i835[44]
  i834.pixelLightCount = i835[45]
  i834.defaultReflectionHDR = !!i835[46]
  i834.hasLightDataAsset = !!i835[47]
  i834.hasManualGenerate = !!i835[48]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'lightmapColor')
  request.r(i841[2], i841[3], 0, i840, 'lightmapDirection')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i842 = root || new UnityEngine.LightProbes()
  var i843 = data
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i851 = data
  var i853 = i851[0]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i853[i + 0]));
  }
  i850.ShaderCompilationErrors = i852
  i850.name = i851[1]
  i850.guid = i851[2]
  var i855 = i851[3]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i850.shaderDefinedKeywords = i854
  var i857 = i851[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i857[i + 0]) );
  }
  i850.passes = i856
  var i859 = i851[5]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i859[i + 0]) );
  }
  i850.usePasses = i858
  var i861 = i851[6]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i861[i + 0]) );
  }
  i850.defaultParameterValues = i860
  request.r(i851[7], i851[8], 0, i850, 'unityFallbackShader')
  i850.readDepth = !!i851[9]
  i850.isCreatedByShaderGraph = !!i851[10]
  i850.usedBatchUniforms = i851[11]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i865 = data
  i864.shaderName = i865[0]
  i864.errorMessage = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i868 = root || new pc.UnityShaderPass()
  var i869 = data
  i868.id = i869[0]
  i868.subShaderIndex = i869[1]
  i868.name = i869[2]
  i868.passType = i869[3]
  i868.grabPassTextureName = i869[4]
  i868.usePass = !!i869[5]
  i868.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[6], i868.zTest)
  i868.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[7], i868.zWrite)
  i868.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[8], i868.culling)
  i868.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[9], i868.blending)
  i868.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[10], i868.alphaBlending)
  i868.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[11], i868.colorWriteMask)
  i868.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[12], i868.offsetUnits)
  i868.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[13], i868.offsetFactor)
  i868.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[14], i868.stencilRef)
  i868.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[15], i868.stencilReadMask)
  i868.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[16], i868.stencilWriteMask)
  i868.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[17], i868.stencilOp)
  i868.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[18], i868.stencilOpFront)
  i868.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[19], i868.stencilOpBack)
  var i871 = i869[20]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i871[i + 0]) );
  }
  i868.tags = i870
  var i873 = i869[21]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.passDefinedKeywords = i872
  var i875 = i869[22]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i875[i + 0]) );
  }
  i868.passDefinedKeywordGroups = i874
  var i877 = i869[23]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i877[i + 0]) );
  }
  i868.variants = i876
  var i879 = i869[24]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i879[i + 0]) );
  }
  i868.excludedVariants = i878
  i868.hasDepthReader = !!i869[25]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i881 = data
  i880.val = i881[0]
  i880.name = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i883 = data
  i882.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[0], i882.src)
  i882.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[1], i882.dst)
  i882.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[2], i882.op)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i885 = data
  i884.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[0], i884.pass)
  i884.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[1], i884.fail)
  i884.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[2], i884.zFail)
  i884.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[3], i884.comp)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i892.keywords = i894
  i892.hasDiscard = !!i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i899 = data
  i898.passId = i899[0]
  i898.subShaderIndex = i899[1]
  var i901 = i899[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i898.keywords = i900
  i898.vertexProgram = i899[3]
  i898.fragmentProgram = i899[4]
  i898.readDepth = !!i899[5]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'shader')
  i904.pass = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i909 = data
  i908.name = i909[0]
  i908.type = i909[1]
  i908.value = new pc.Vec4( i909[2], i909[3], i909[4], i909[5] )
  i908.textureValue = i909[6]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i911 = data
  i910.name = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'texture')
  i910.aabb = i911[3]
  i910.vertices = i911[4]
  i910.triangles = i911[5]
  i910.textureRect = UnityEngine.Rect.MinMaxRect(i911[6], i911[7], i911[8], i911[9])
  i910.packedRect = UnityEngine.Rect.MinMaxRect(i911[10], i911[11], i911[12], i911[13])
  i910.border = new pc.Vec4( i911[14], i911[15], i911[16], i911[17] )
  i910.transparency = i911[18]
  i910.bounds = i911[19]
  i910.pixelsPerUnit = i911[20]
  i910.textureWidth = i911[21]
  i910.textureHeight = i911[22]
  i910.nativeSize = new pc.Vec2( i911[23], i911[24] )
  i910.pivot = new pc.Vec2( i911[25], i911[26] )
  i910.textureRectOffset = new pc.Vec2( i911[27], i911[28] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i913 = data
  i912.name = i913[0]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i915 = data
  i914.name = i915[0]
  i914.ascent = i915[1]
  i914.originalLineHeight = i915[2]
  i914.fontSize = i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i917[i + 0]) );
  }
  i914.characterInfo = i916
  request.r(i915[5], i915[6], 0, i914, 'texture')
  i914.originalFontSize = i915[7]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i921 = data
  i920.index = i921[0]
  i920.advance = i921[1]
  i920.bearing = i921[2]
  i920.glyphWidth = i921[3]
  i920.glyphHeight = i921[4]
  i920.minX = i921[5]
  i920.maxX = i921[6]
  i920.minY = i921[7]
  i920.maxY = i921[8]
  i920.uvBottomLeftX = i921[9]
  i920.uvBottomLeftY = i921[10]
  i920.uvBottomRightX = i921[11]
  i920.uvBottomRightY = i921[12]
  i920.uvTopLeftX = i921[13]
  i920.uvTopLeftY = i921[14]
  i920.uvTopRightX = i921[15]
  i920.uvTopRightY = i921[16]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i923 = data
  i922.name = i923[0]
  i922.bytes64 = i923[1]
  i922.data = i923[2]
  return i922
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i924 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i924.atlasAssets = i926
  i924.scale = i925[1]
  request.r(i925[2], i925[3], 0, i924, 'skeletonJSON')
  i924.isUpgradingBlendModeMaterials = !!i925[4]
  i924.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i925[5], i924.blendModeMaterials)
  var i929 = i925[6]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i924.skeletonDataModifiers = i928
  var i931 = i925[7]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i924.fromAnimation = i930
  var i933 = i925[8]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i924.toAnimation = i932
  i924.duration = i925[9]
  i924.defaultMix = i925[10]
  request.r(i925[11], i925[12], 0, i924, 'controller')
  return i924
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i936 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i937 = data
  i936.applyAdditiveMaterial = !!i937[0]
  var i939 = i937[1]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i939[i + 0]));
  }
  i936.additiveMaterials = i938
  var i941 = i937[2]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i941[i + 0]));
  }
  i936.multiplyMaterials = i940
  var i943 = i937[3]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i943[i + 0]));
  }
  i936.screenMaterials = i942
  i936.requiresBlendModeMaterials = !!i937[4]
  return i936
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i946 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i947 = data
  i946.pageName = i947[0]
  request.r(i947[1], i947[2], 0, i946, 'material')
  return i946
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i950 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'atlasFile')
  var i953 = i951[2]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.materials = i952
  return i950
}

Deserializers["Item"] = function (request, data, root) {
  var i954 = root || request.c( 'Item' )
  var i955 = data
  i954.id = i955[0]
  i954.bodypartName = i955[1]
  request.r(i955[2], i955[3], 0, i954, 'preview')
  request.r(i955[4], i955[5], 0, i954, 'part')
  i954.isAd = !!i955[6]
  i954.adNum = i955[7]
  i954.price = i955[8]
  i954.bodyPart = i955[9]
  i954.specialPos = !!i955[10]
  i954.realPos = new pc.Vec3( i955[11], i955[12], i955[13] )
  i954.catalogue = i955[14]
  i954.dataAsset = i955[15]
  i954.pkTheme = i955[16]
  i954.priority = i955[17]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i959[i + 0]) );
  }
  i956.files = i958
  i956.componentToPrefabIds = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i963 = data
  i962.path = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'unityObject')
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i967[i + 0]) );
  }
  i964.scriptsExecutionOrder = i966
  var i969 = i965[1]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i969[i + 0]) );
  }
  i964.sortingLayers = i968
  var i971 = i965[2]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i971[i + 0]) );
  }
  i964.cullingLayers = i970
  i964.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i965[3], i964.timeSettings)
  i964.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i965[4], i964.physicsSettings)
  i964.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i965[5], i964.physics2DSettings)
  i964.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i965[6], i964.qualitySettings)
  i964.enableRealtimeShadows = !!i965[7]
  i964.enableAutoInstancing = !!i965[8]
  i964.enableDynamicBatching = !!i965[9]
  i964.lightmapEncodingQuality = i965[10]
  i964.desiredColorSpace = i965[11]
  var i973 = i965[12]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i964.allTags = i972
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i977 = data
  i976.name = i977[0]
  i976.value = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i981 = data
  i980.id = i981[0]
  i980.name = i981[1]
  i980.value = i981[2]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i985 = data
  i984.id = i985[0]
  i984.name = i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i987 = data
  i986.fixedDeltaTime = i987[0]
  i986.maximumDeltaTime = i987[1]
  i986.timeScale = i987[2]
  i986.maximumParticleTimestep = i987[3]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i989 = data
  i988.gravity = new pc.Vec3( i989[0], i989[1], i989[2] )
  i988.defaultSolverIterations = i989[3]
  i988.bounceThreshold = i989[4]
  i988.autoSyncTransforms = !!i989[5]
  i988.autoSimulation = !!i989[6]
  var i991 = i989[7]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i991[i + 0]) );
  }
  i988.collisionMatrix = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i995 = data
  i994.enabled = !!i995[0]
  i994.layerId = i995[1]
  i994.otherLayerId = i995[2]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'material')
  i996.gravity = new pc.Vec2( i997[2], i997[3] )
  i996.positionIterations = i997[4]
  i996.velocityIterations = i997[5]
  i996.velocityThreshold = i997[6]
  i996.maxLinearCorrection = i997[7]
  i996.maxAngularCorrection = i997[8]
  i996.maxTranslationSpeed = i997[9]
  i996.maxRotationSpeed = i997[10]
  i996.baumgarteScale = i997[11]
  i996.baumgarteTOIScale = i997[12]
  i996.timeToSleep = i997[13]
  i996.linearSleepTolerance = i997[14]
  i996.angularSleepTolerance = i997[15]
  i996.defaultContactOffset = i997[16]
  i996.autoSimulation = !!i997[17]
  i996.queriesHitTriggers = !!i997[18]
  i996.queriesStartInColliders = !!i997[19]
  i996.callbacksOnDisable = !!i997[20]
  i996.reuseCollisionCallbacks = !!i997[21]
  i996.autoSyncTransforms = !!i997[22]
  var i999 = i997[23]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i999[i + 0]) );
  }
  i996.collisionMatrix = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.layerId = i1003[1]
  i1002.otherLayerId = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1007[i + 0]) );
  }
  i1004.qualityLevels = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.names = i1008
  i1004.shadows = i1005[2]
  i1004.anisotropicFiltering = i1005[3]
  i1004.antiAliasing = i1005[4]
  i1004.lodBias = i1005[5]
  i1004.shadowCascades = i1005[6]
  i1004.shadowDistance = i1005[7]
  i1004.shadowmaskMode = i1005[8]
  i1004.shadowProjection = i1005[9]
  i1004.shadowResolution = i1005[10]
  i1004.softParticles = !!i1005[11]
  i1004.softVegetation = !!i1005[12]
  i1004.activeColorSpace = i1005[13]
  i1004.desiredColorSpace = i1005[14]
  i1004.masterTextureLimit = i1005[15]
  i1004.maxQueuedFrames = i1005[16]
  i1004.particleRaycastBudget = i1005[17]
  i1004.pixelLightCount = i1005[18]
  i1004.realtimeReflectionProbes = !!i1005[19]
  i1004.shadowCascade2Split = i1005[20]
  i1004.shadowCascade4Split = new pc.Vec3( i1005[21], i1005[22], i1005[23] )
  i1004.streamingMipmapsActive = !!i1005[24]
  i1004.vSyncCount = i1005[25]
  i1004.asyncUploadBufferSize = i1005[26]
  i1004.asyncUploadTimeSlice = i1005[27]
  i1004.billboardsFaceCameraPosition = !!i1005[28]
  i1004.shadowNearPlaneOffset = i1005[29]
  i1004.streamingMipmapsMemoryBudget = i1005[30]
  i1004.maximumLODLevel = i1005[31]
  i1004.streamingMipmapsAddAllCameras = !!i1005[32]
  i1004.streamingMipmapsMaxLevelReduction = i1005[33]
  i1004.streamingMipmapsRenderersPerFrame = i1005[34]
  i1004.resolutionScalingFixedDPIFactor = i1005[35]
  i1004.streamingMipmapsMaxFileIORequests = i1005[36]
  i1004.currentQualityLevel = i1005[37]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1015 = data
  i1014.weight = i1015[0]
  i1014.vertices = i1015[1]
  i1014.normals = i1015[2]
  i1014.tangents = i1015[3]
  return i1014
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[26],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[50],"80":[50],"81":[50],"82":[50],"83":[50],"84":[50],"85":[50],"86":[50],"87":[50],"88":[50],"89":[50],"90":[50],"91":[50],"92":[26],"93":[13],"94":[95],"96":[95],"25":[15],"97":[26],"98":[15],"99":[16,15],"9":[13],"100":[16,15],"101":[102,13],"103":[13,11],"104":[13],"105":[72],"106":[50],"107":[108],"109":[110],"111":[15],"112":[15],"28":[25],"18":[16,15],"113":[15],"27":[25],"114":[15],"40":[15],"115":[15],"116":[15],"117":[15],"118":[15],"119":[15],"41":[15],"120":[15],"121":[16,15],"122":[15],"39":[15],"123":[15],"124":[15],"30":[16,15],"125":[15],"126":[57],"127":[57],"58":[57],"128":[57],"129":[26],"130":[26],"131":[7],"132":[15,16],"133":[134]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.MonoBehaviour","SortingLayerCharacter","MonsterCreator","UnityEngine.SpriteRenderer","Spine.Unity.BoneFollower","Spine.Unity.SkeletonAnimation","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","ItemDisplay","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UI_Ingame","UnityEngine.UI.Text","UnityEngine.Font","TabMenuHandler","Tab","GridHandler","Scale","UIHandler","BreathButton","TutHand","UnityEngine.UI.ScrollRect","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","UI_Result","CharacterManager","MoneyFly","UnityEngine.UI.Outline","UI_Transition","UnityEngine.CanvasGroup","UI_Endgame","TouchController","UnityEngine.Rigidbody2D","ShopController","Item","CameraHandler","UnityEngine.AudioListener","SoundManager","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","Coffee.UIExtensions.UIParticle","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer"]

Deserializers.unityVersion = "2020.3.43f1";

Deserializers.productName = "Dance Monster: DIY Makeover";

Deserializers.lunaInitializationTime = "01/09/2024 10:38:59";

Deserializers.lunaDaysRunning = "3.0";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "Toilet_Makeover";

Deserializers.lunaAppID = "17891";

Deserializers.projectId = "c58a4003babe78546aa7e57b98321baf";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1622";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3791";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.dancemonster.diy.makeover.mixmonster";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "c7b63b36-71ad-4ef6-a4b2-820c6826e9ec";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

