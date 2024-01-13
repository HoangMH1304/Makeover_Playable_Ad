var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.JointSpring' )
  var i1525 = data
  i1524.spring = i1525[0]
  i1524.damper = i1525[1]
  i1524.targetPosition = i1525[2]
  return i1524
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.JointMotor' )
  var i1527 = data
  i1526.m_TargetVelocity = i1527[0]
  i1526.m_Force = i1527[1]
  i1526.m_FreeSpin = i1527[2]
  return i1526
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.JointLimits' )
  var i1529 = data
  i1528.m_Min = i1529[0]
  i1528.m_Max = i1529[1]
  i1528.m_Bounciness = i1529[2]
  i1528.m_BounceMinVelocity = i1529[3]
  i1528.m_ContactDistance = i1529[4]
  i1528.minBounce = i1529[5]
  i1528.maxBounce = i1529[6]
  return i1528
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.JointDrive' )
  var i1531 = data
  i1530.m_PositionSpring = i1531[0]
  i1530.m_PositionDamper = i1531[1]
  i1530.m_MaximumForce = i1531[2]
  return i1530
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1533 = data
  i1532.m_Spring = i1533[0]
  i1532.m_Damper = i1533[1]
  return i1532
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1535 = data
  i1534.m_Limit = i1535[0]
  i1534.m_Bounciness = i1535[1]
  i1534.m_ContactDistance = i1535[2]
  return i1534
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1537 = data
  i1536.m_ExtremumSlip = i1537[0]
  i1536.m_ExtremumValue = i1537[1]
  i1536.m_AsymptoteSlip = i1537[2]
  i1536.m_AsymptoteValue = i1537[3]
  i1536.m_Stiffness = i1537[4]
  return i1536
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1539 = data
  i1538.m_LowerAngle = i1539[0]
  i1538.m_UpperAngle = i1539[1]
  return i1538
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1541 = data
  i1540.m_MotorSpeed = i1541[0]
  i1540.m_MaximumMotorTorque = i1541[1]
  return i1540
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1543 = data
  i1542.m_DampingRatio = i1543[0]
  i1542.m_Frequency = i1543[1]
  i1542.m_Angle = i1543[2]
  return i1542
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1545 = data
  i1544.m_LowerTranslation = i1545[0]
  i1544.m_UpperTranslation = i1545[1]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1546 = root || new pc.UnityMaterial()
  var i1547 = data
  i1546.name = i1547[0]
  request.r(i1547[1], i1547[2], 0, i1546, 'shader')
  i1546.renderQueue = i1547[3]
  i1546.enableInstancing = !!i1547[4]
  var i1549 = i1547[5]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1549[i + 0]) );
  }
  i1546.floatParameters = i1548
  var i1551 = i1547[6]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1551[i + 0]) );
  }
  i1546.colorParameters = i1550
  var i1553 = i1547[7]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1553[i + 0]) );
  }
  i1546.vectorParameters = i1552
  var i1555 = i1547[8]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1555[i + 0]) );
  }
  i1546.textureParameters = i1554
  var i1557 = i1547[9]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1557[i + 0]) );
  }
  i1546.materialFlags = i1556
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.value = i1561[1]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.value = new pc.Color(i1565[1], i1565[2], i1565[3], i1565[4])
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1569 = data
  i1568.name = i1569[0]
  i1568.value = new pc.Vec4( i1569[1], i1569[2], i1569[3], i1569[4] )
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1573 = data
  i1572.name = i1573[0]
  request.r(i1573[1], i1573[2], 0, i1572, 'value')
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.enabled = !!i1577[1]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1579 = data
  i1578.name = i1579[0]
  i1578.width = i1579[1]
  i1578.height = i1579[2]
  i1578.mipmapCount = i1579[3]
  i1578.anisoLevel = i1579[4]
  i1578.filterMode = i1579[5]
  i1578.hdr = !!i1579[6]
  i1578.format = i1579[7]
  i1578.wrapMode = i1579[8]
  i1578.alphaIsTransparency = !!i1579[9]
  i1578.alphaSource = i1579[10]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1581 = data
  i1580.position = new pc.Vec3( i1581[0], i1581[1], i1581[2] )
  i1580.scale = new pc.Vec3( i1581[3], i1581[4], i1581[5] )
  i1580.rotation = new pc.Quat(i1581[6], i1581[7], i1581[8], i1581[9])
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.sortingLayerIndex = i1583[1]
  i1582.sortingOrder = i1583[2]
  i1582.sortingLayerName = i1583[3]
  return i1582
}

Deserializers["SortingLayerCharacter"] = function (request, data, root) {
  var i1584 = root || request.c( 'SortingLayerCharacter' )
  var i1585 = data
  i1584.offset = i1585[0]
  i1584.isDrag = !!i1585[1]
  return i1584
}

Deserializers["MonsterCreator"] = function (request, data, root) {
  var i1586 = root || request.c( 'MonsterCreator' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'headHolder')
  request.r(i1587[2], i1587[3], 0, i1586, 'headSR')
  request.r(i1587[4], i1587[5], 0, i1586, 'eyeSR')
  request.r(i1587[6], i1587[7], 0, i1586, 'mouthSR')
  request.r(i1587[8], i1587[9], 0, i1586, 'accSR')
  request.r(i1587[10], i1587[11], 0, i1586, 'boneFollower1')
  request.r(i1587[12], i1587[13], 0, i1586, 'boneFollower2')
  request.r(i1587[14], i1587[15], 0, i1586, 'body1')
  request.r(i1587[16], i1587[17], 0, i1586, 'body2')
  return i1586
}

Deserializers["Spine.Unity.BoneFollower"] = function (request, data, root) {
  var i1588 = root || request.c( 'Spine.Unity.BoneFollower' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'skeletonRenderer')
  i1588.boneName = i1589[2]
  i1588.followXYPosition = !!i1589[3]
  i1588.followZPosition = !!i1589[4]
  i1588.followBoneRotation = !!i1589[5]
  i1588.followSkeletonFlip = !!i1589[6]
  i1588.followLocalScale = !!i1589[7]
  i1588.followParentWorldScale = !!i1589[8]
  i1588.maintainedAxisOrientation = i1589[9]
  i1588.initializeOnAwake = !!i1589[10]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1591 = data
  i1590.enabled = !!i1591[0]
  request.r(i1591[1], i1591[2], 0, i1590, 'sharedMaterial')
  var i1593 = i1591[3]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 2) {
  request.r(i1593[i + 0], i1593[i + 1], 2, i1592, '')
  }
  i1590.sharedMaterials = i1592
  i1590.receiveShadows = !!i1591[4]
  i1590.shadowCastingMode = i1591[5]
  i1590.sortingLayerID = i1591[6]
  i1590.sortingOrder = i1591[7]
  i1590.lightmapIndex = i1591[8]
  i1590.lightmapSceneIndex = i1591[9]
  i1590.lightmapScaleOffset = new pc.Vec4( i1591[10], i1591[11], i1591[12], i1591[13] )
  i1590.lightProbeUsage = i1591[14]
  i1590.reflectionProbeUsage = i1591[15]
  i1590.color = new pc.Color(i1591[16], i1591[17], i1591[18], i1591[19])
  request.r(i1591[20], i1591[21], 0, i1590, 'sprite')
  i1590.flipX = !!i1591[22]
  i1590.flipY = !!i1591[23]
  i1590.drawMode = i1591[24]
  i1590.size = new pc.Vec2( i1591[25], i1591[26] )
  i1590.tileMode = i1591[27]
  i1590.adaptiveModeThreshold = i1591[28]
  i1590.maskInteraction = i1591[29]
  i1590.spriteSortPoint = i1591[30]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.tagId = i1597[1]
  i1596.enabled = !!i1597[2]
  i1596.isStatic = !!i1597[3]
  i1596.layer = i1597[4]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'sharedMesh')
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'additionalVertexStreams')
  i1600.enabled = !!i1601[2]
  request.r(i1601[3], i1601[4], 0, i1600, 'sharedMaterial')
  var i1603 = i1601[5]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 2) {
  request.r(i1603[i + 0], i1603[i + 1], 2, i1602, '')
  }
  i1600.sharedMaterials = i1602
  i1600.receiveShadows = !!i1601[6]
  i1600.shadowCastingMode = i1601[7]
  i1600.sortingLayerID = i1601[8]
  i1600.sortingOrder = i1601[9]
  i1600.lightmapIndex = i1601[10]
  i1600.lightmapSceneIndex = i1601[11]
  i1600.lightmapScaleOffset = new pc.Vec4( i1601[12], i1601[13], i1601[14], i1601[15] )
  i1600.lightProbeUsage = i1601[16]
  i1600.reflectionProbeUsage = i1601[17]
  return i1600
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1604 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1605 = data
  i1604.loop = !!i1605[0]
  i1604.timeScale = i1605[1]
  request.r(i1605[2], i1605[3], 0, i1604, 'skeletonDataAsset')
  i1604.initialSkinName = i1605[4]
  i1604.fixPrefabOverrideViaMeshFilter = i1605[5]
  i1604.initialFlipX = !!i1605[6]
  i1604.initialFlipY = !!i1605[7]
  i1604.updateWhenInvisible = i1605[8]
  i1604.zSpacing = i1605[9]
  i1604.useClipping = !!i1605[10]
  i1604.immutableTriangles = !!i1605[11]
  i1604.pmaVertexColors = !!i1605[12]
  i1604.clearStateOnDisable = !!i1605[13]
  i1604.tintBlack = !!i1605[14]
  i1604.singleSubmesh = !!i1605[15]
  i1604.fixDrawOrder = !!i1605[16]
  i1604.addNormals = !!i1605[17]
  i1604.calculateTangents = !!i1605[18]
  i1604.maskInteraction = i1605[19]
  i1604.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1605[20], i1604.maskMaterials)
  i1604.disableRenderingOnOverride = !!i1605[21]
  i1604.updateTiming = i1605[22]
  i1604.unscaledTime = !!i1605[23]
  i1604._animationName = i1605[24]
  var i1607 = i1605[25]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( i1607[i + 0] );
  }
  i1604.separatorSlotNames = i1606
  return i1604
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1608 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1609 = data
  var i1611 = i1609[0]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 2) {
  request.r(i1611[i + 0], i1611[i + 1], 2, i1610, '')
  }
  i1608.materialsMaskDisabled = i1610
  var i1613 = i1609[1]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 2) {
  request.r(i1613[i + 0], i1613[i + 1], 2, i1612, '')
  }
  i1608.materialsInsideMask = i1612
  var i1615 = i1609[2]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 2) {
  request.r(i1615[i + 0], i1615[i + 1], 2, i1614, '')
  }
  i1608.materialsOutsideMask = i1614
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.halfPrecision = !!i1619[1]
  i1618.vertexCount = i1619[2]
  i1618.aabb = i1619[3]
  var i1621 = i1619[4]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( !!i1621[i + 0] );
  }
  i1618.streams = i1620
  i1618.vertices = i1619[5]
  var i1623 = i1619[6]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1623[i + 0]) );
  }
  i1618.subMeshes = i1622
  var i1625 = i1619[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 16) {
    i1624.push( new pc.Mat4().setData(i1625[i + 0], i1625[i + 1], i1625[i + 2], i1625[i + 3],  i1625[i + 4], i1625[i + 5], i1625[i + 6], i1625[i + 7],  i1625[i + 8], i1625[i + 9], i1625[i + 10], i1625[i + 11],  i1625[i + 12], i1625[i + 13], i1625[i + 14], i1625[i + 15]) );
  }
  i1618.bindposes = i1624
  var i1627 = i1619[8]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1627[i + 0]) );
  }
  i1618.blendShapes = i1626
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1633 = data
  i1632.triangles = i1633[0]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1639 = data
  i1638.name = i1639[0]
  var i1641 = i1639[1]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1641[i + 0]) );
  }
  i1638.frames = i1640
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1643 = data
  i1642.pivot = new pc.Vec2( i1643[0], i1643[1] )
  i1642.anchorMin = new pc.Vec2( i1643[2], i1643[3] )
  i1642.anchorMax = new pc.Vec2( i1643[4], i1643[5] )
  i1642.sizeDelta = new pc.Vec2( i1643[6], i1643[7] )
  i1642.anchoredPosition3D = new pc.Vec3( i1643[8], i1643[9], i1643[10] )
  i1642.rotation = new pc.Quat(i1643[11], i1643[12], i1643[13], i1643[14])
  i1642.scale = new pc.Vec3( i1643[15], i1643[16], i1643[17] )
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1645 = data
  i1644.cullTransparentMesh = !!i1645[0]
  return i1644
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.UI.Image' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'm_Sprite')
  i1646.m_Type = i1647[2]
  i1646.m_PreserveAspect = !!i1647[3]
  i1646.m_FillCenter = !!i1647[4]
  i1646.m_FillMethod = i1647[5]
  i1646.m_FillAmount = i1647[6]
  i1646.m_FillClockwise = !!i1647[7]
  i1646.m_FillOrigin = i1647[8]
  i1646.m_UseSpriteMesh = !!i1647[9]
  i1646.m_PixelsPerUnitMultiplier = i1647[10]
  request.r(i1647[11], i1647[12], 0, i1646, 'm_Material')
  i1646.m_Maskable = !!i1647[13]
  i1646.m_Color = new pc.Color(i1647[14], i1647[15], i1647[16], i1647[17])
  i1646.m_RaycastTarget = !!i1647[18]
  i1646.m_RaycastPadding = new pc.Vec4( i1647[19], i1647[20], i1647[21], i1647[22] )
  return i1646
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.Button' )
  var i1649 = data
  i1648.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1649[0], i1648.m_OnClick)
  i1648.m_Navigation = request.d('UnityEngine.UI.Navigation', i1649[1], i1648.m_Navigation)
  i1648.m_Transition = i1649[2]
  i1648.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1649[3], i1648.m_Colors)
  i1648.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1649[4], i1648.m_SpriteState)
  i1648.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1649[5], i1648.m_AnimationTriggers)
  i1648.m_Interactable = !!i1649[6]
  request.r(i1649[7], i1649[8], 0, i1648, 'm_TargetGraphic')
  return i1648
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1651 = data
  i1650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1651[0], i1650.m_PersistentCalls)
  return i1650
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1653 = data
  var i1655 = i1653[0]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.add(request.d('UnityEngine.Events.PersistentCall', i1655[i + 0]));
  }
  i1652.m_Calls = i1654
  return i1652
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_Target')
  i1658.m_TargetAssemblyTypeName = i1659[2]
  i1658.m_MethodName = i1659[3]
  i1658.m_Mode = i1659[4]
  i1658.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1659[5], i1658.m_Arguments)
  i1658.m_CallState = i1659[6]
  return i1658
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'm_ObjectArgument')
  i1660.m_ObjectArgumentAssemblyTypeName = i1661[2]
  i1660.m_IntArgument = i1661[3]
  i1660.m_FloatArgument = i1661[4]
  i1660.m_StringArgument = i1661[5]
  i1660.m_BoolArgument = !!i1661[6]
  return i1660
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1663 = data
  i1662.m_Mode = i1663[0]
  i1662.m_WrapAround = !!i1663[1]
  request.r(i1663[2], i1663[3], 0, i1662, 'm_SelectOnUp')
  request.r(i1663[4], i1663[5], 0, i1662, 'm_SelectOnDown')
  request.r(i1663[6], i1663[7], 0, i1662, 'm_SelectOnLeft')
  request.r(i1663[8], i1663[9], 0, i1662, 'm_SelectOnRight')
  return i1662
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1665 = data
  i1664.m_NormalColor = new pc.Color(i1665[0], i1665[1], i1665[2], i1665[3])
  i1664.m_HighlightedColor = new pc.Color(i1665[4], i1665[5], i1665[6], i1665[7])
  i1664.m_PressedColor = new pc.Color(i1665[8], i1665[9], i1665[10], i1665[11])
  i1664.m_SelectedColor = new pc.Color(i1665[12], i1665[13], i1665[14], i1665[15])
  i1664.m_DisabledColor = new pc.Color(i1665[16], i1665[17], i1665[18], i1665[19])
  i1664.m_ColorMultiplier = i1665[20]
  i1664.m_FadeDuration = i1665[21]
  return i1664
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'm_HighlightedSprite')
  request.r(i1667[2], i1667[3], 0, i1666, 'm_PressedSprite')
  request.r(i1667[4], i1667[5], 0, i1666, 'm_SelectedSprite')
  request.r(i1667[6], i1667[7], 0, i1666, 'm_DisabledSprite')
  return i1666
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1669 = data
  i1668.m_NormalTrigger = i1669[0]
  i1668.m_HighlightedTrigger = i1669[1]
  i1668.m_PressedTrigger = i1669[2]
  i1668.m_SelectedTrigger = i1669[3]
  i1668.m_DisabledTrigger = i1669[4]
  return i1668
}

Deserializers["ItemDisplay"] = function (request, data, root) {
  var i1670 = root || request.c( 'ItemDisplay' )
  var i1671 = data
  i1670._id = i1671[0]
  request.r(i1671[1], i1671[2], 0, i1670, 'item')
  request.r(i1671[3], i1671[4], 0, i1670, 'iconScale')
  request.r(i1671[5], i1671[6], 0, i1670, 'itemSprite')
  request.r(i1671[7], i1671[8], 0, i1670, 'fill')
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1673 = data
  i1672.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1673[0], i1672.main)
  i1672.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1673[1], i1672.colorBySpeed)
  i1672.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1673[2], i1672.colorOverLifetime)
  i1672.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1673[3], i1672.emission)
  i1672.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1673[4], i1672.rotationBySpeed)
  i1672.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1673[5], i1672.rotationOverLifetime)
  i1672.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1673[6], i1672.shape)
  i1672.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1673[7], i1672.sizeBySpeed)
  i1672.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1673[8], i1672.sizeOverLifetime)
  i1672.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1673[9], i1672.textureSheetAnimation)
  i1672.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1673[10], i1672.velocityOverLifetime)
  i1672.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1673[11], i1672.noise)
  i1672.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1673[12], i1672.inheritVelocity)
  i1672.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1673[13], i1672.forceOverLifetime)
  i1672.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1673[14], i1672.limitVelocityOverLifetime)
  i1672.useAutoRandomSeed = !!i1673[15]
  i1672.randomSeed = i1673[16]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1674 = root || new pc.ParticleSystemMain()
  var i1675 = data
  i1674.duration = i1675[0]
  i1674.loop = !!i1675[1]
  i1674.prewarm = !!i1675[2]
  i1674.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[3], i1674.startDelay)
  i1674.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[4], i1674.startLifetime)
  i1674.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[5], i1674.startSpeed)
  i1674.startSize3D = !!i1675[6]
  i1674.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[7], i1674.startSizeX)
  i1674.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[8], i1674.startSizeY)
  i1674.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[9], i1674.startSizeZ)
  i1674.startRotation3D = !!i1675[10]
  i1674.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[11], i1674.startRotationX)
  i1674.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[12], i1674.startRotationY)
  i1674.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[13], i1674.startRotationZ)
  i1674.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1675[14], i1674.startColor)
  i1674.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[15], i1674.gravityModifier)
  i1674.simulationSpace = i1675[16]
  request.r(i1675[17], i1675[18], 0, i1674, 'customSimulationSpace')
  i1674.simulationSpeed = i1675[19]
  i1674.useUnscaledTime = !!i1675[20]
  i1674.scalingMode = i1675[21]
  i1674.playOnAwake = !!i1675[22]
  i1674.maxParticles = i1675[23]
  i1674.emitterVelocityMode = i1675[24]
  i1674.stopAction = i1675[25]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1676 = root || new pc.MinMaxCurve()
  var i1677 = data
  i1676.mode = i1677[0]
  i1676.curveMin = new pc.AnimationCurve( { keys_flow: i1677[1] } )
  i1676.curveMax = new pc.AnimationCurve( { keys_flow: i1677[2] } )
  i1676.curveMultiplier = i1677[3]
  i1676.constantMin = i1677[4]
  i1676.constantMax = i1677[5]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1678 = root || new pc.MinMaxGradient()
  var i1679 = data
  i1678.mode = i1679[0]
  i1678.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1679[1], i1678.gradientMin)
  i1678.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1679[2], i1678.gradientMax)
  i1678.colorMin = new pc.Color(i1679[3], i1679[4], i1679[5], i1679[6])
  i1678.colorMax = new pc.Color(i1679[7], i1679[8], i1679[9], i1679[10])
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1681 = data
  i1680.mode = i1681[0]
  var i1683 = i1681[1]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1683[i + 0]) );
  }
  i1680.colorKeys = i1682
  var i1685 = i1681[2]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1685[i + 0]) );
  }
  i1680.alphaKeys = i1684
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1686 = root || new pc.ParticleSystemColorBySpeed()
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1687[1], i1686.color)
  i1686.range = new pc.Vec2( i1687[2], i1687[3] )
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1691 = data
  i1690.color = new pc.Color(i1691[0], i1691[1], i1691[2], i1691[3])
  i1690.time = i1691[4]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1695 = data
  i1694.alpha = i1695[0]
  i1694.time = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1696 = root || new pc.ParticleSystemColorOverLifetime()
  var i1697 = data
  i1696.enabled = !!i1697[0]
  i1696.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1697[1], i1696.color)
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1698 = root || new pc.ParticleSystemEmitter()
  var i1699 = data
  i1698.enabled = !!i1699[0]
  i1698.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[1], i1698.rateOverTime)
  i1698.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[2], i1698.rateOverDistance)
  var i1701 = i1699[3]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1701[i + 0]) );
  }
  i1698.bursts = i1700
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1704 = root || new pc.ParticleSystemBurst()
  var i1705 = data
  i1704.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[0], i1704.count)
  i1704.cycleCount = i1705[1]
  i1704.minCount = i1705[2]
  i1704.maxCount = i1705[3]
  i1704.repeatInterval = i1705[4]
  i1704.time = i1705[5]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1706 = root || new pc.ParticleSystemRotationBySpeed()
  var i1707 = data
  i1706.enabled = !!i1707[0]
  i1706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[1], i1706.x)
  i1706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[2], i1706.y)
  i1706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[3], i1706.z)
  i1706.separateAxes = !!i1707[4]
  i1706.range = new pc.Vec2( i1707[5], i1707[6] )
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1708 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1709 = data
  i1708.enabled = !!i1709[0]
  i1708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[1], i1708.x)
  i1708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[2], i1708.y)
  i1708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[3], i1708.z)
  i1708.separateAxes = !!i1709[4]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1710 = root || new pc.ParticleSystemShape()
  var i1711 = data
  i1710.enabled = !!i1711[0]
  i1710.shapeType = i1711[1]
  i1710.randomDirectionAmount = i1711[2]
  i1710.sphericalDirectionAmount = i1711[3]
  i1710.randomPositionAmount = i1711[4]
  i1710.alignToDirection = !!i1711[5]
  i1710.radius = i1711[6]
  i1710.radiusMode = i1711[7]
  i1710.radiusSpread = i1711[8]
  i1710.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1711[9], i1710.radiusSpeed)
  i1710.radiusThickness = i1711[10]
  i1710.angle = i1711[11]
  i1710.length = i1711[12]
  i1710.boxThickness = new pc.Vec3( i1711[13], i1711[14], i1711[15] )
  i1710.meshShapeType = i1711[16]
  request.r(i1711[17], i1711[18], 0, i1710, 'mesh')
  request.r(i1711[19], i1711[20], 0, i1710, 'meshRenderer')
  request.r(i1711[21], i1711[22], 0, i1710, 'skinnedMeshRenderer')
  i1710.useMeshMaterialIndex = !!i1711[23]
  i1710.meshMaterialIndex = i1711[24]
  i1710.useMeshColors = !!i1711[25]
  i1710.normalOffset = i1711[26]
  i1710.arc = i1711[27]
  i1710.arcMode = i1711[28]
  i1710.arcSpread = i1711[29]
  i1710.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1711[30], i1710.arcSpeed)
  i1710.donutRadius = i1711[31]
  i1710.position = new pc.Vec3( i1711[32], i1711[33], i1711[34] )
  i1710.rotation = new pc.Vec3( i1711[35], i1711[36], i1711[37] )
  i1710.scale = new pc.Vec3( i1711[38], i1711[39], i1711[40] )
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1712 = root || new pc.ParticleSystemSizeBySpeed()
  var i1713 = data
  i1712.enabled = !!i1713[0]
  i1712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[1], i1712.x)
  i1712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[2], i1712.y)
  i1712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[3], i1712.z)
  i1712.separateAxes = !!i1713[4]
  i1712.range = new pc.Vec2( i1713[5], i1713[6] )
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1714 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1715 = data
  i1714.enabled = !!i1715[0]
  i1714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[1], i1714.x)
  i1714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[2], i1714.y)
  i1714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[3], i1714.z)
  i1714.separateAxes = !!i1715[4]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1716 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1717 = data
  i1716.enabled = !!i1717[0]
  i1716.mode = i1717[1]
  i1716.animation = i1717[2]
  i1716.numTilesX = i1717[3]
  i1716.numTilesY = i1717[4]
  i1716.useRandomRow = !!i1717[5]
  i1716.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[6], i1716.frameOverTime)
  i1716.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[7], i1716.startFrame)
  i1716.cycleCount = i1717[8]
  i1716.rowIndex = i1717[9]
  i1716.flipU = i1717[10]
  i1716.flipV = i1717[11]
  i1716.spriteCount = i1717[12]
  var i1719 = i1717[13]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1716.sprites = i1718
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1722 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1723 = data
  i1722.enabled = !!i1723[0]
  i1722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[1], i1722.x)
  i1722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[2], i1722.y)
  i1722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[3], i1722.z)
  i1722.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[4], i1722.radial)
  i1722.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[5], i1722.speedModifier)
  i1722.space = i1723[6]
  i1722.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[7], i1722.orbitalX)
  i1722.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[8], i1722.orbitalY)
  i1722.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[9], i1722.orbitalZ)
  i1722.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[10], i1722.orbitalOffsetX)
  i1722.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[11], i1722.orbitalOffsetY)
  i1722.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[12], i1722.orbitalOffsetZ)
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1724 = root || new pc.ParticleSystemNoise()
  var i1725 = data
  i1724.enabled = !!i1725[0]
  i1724.separateAxes = !!i1725[1]
  i1724.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[2], i1724.strengthX)
  i1724.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[3], i1724.strengthY)
  i1724.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[4], i1724.strengthZ)
  i1724.frequency = i1725[5]
  i1724.damping = !!i1725[6]
  i1724.octaveCount = i1725[7]
  i1724.octaveMultiplier = i1725[8]
  i1724.octaveScale = i1725[9]
  i1724.quality = i1725[10]
  i1724.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[11], i1724.scrollSpeed)
  i1724.scrollSpeedMultiplier = i1725[12]
  i1724.remapEnabled = !!i1725[13]
  i1724.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[14], i1724.remapX)
  i1724.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[15], i1724.remapY)
  i1724.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[16], i1724.remapZ)
  i1724.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[17], i1724.positionAmount)
  i1724.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[18], i1724.rotationAmount)
  i1724.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[19], i1724.sizeAmount)
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1726 = root || new pc.ParticleSystemInheritVelocity()
  var i1727 = data
  i1726.enabled = !!i1727[0]
  i1726.mode = i1727[1]
  i1726.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[2], i1726.curve)
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1728 = root || new pc.ParticleSystemForceOverLifetime()
  var i1729 = data
  i1728.enabled = !!i1729[0]
  i1728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[1], i1728.x)
  i1728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[2], i1728.y)
  i1728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[3], i1728.z)
  i1728.space = i1729[4]
  i1728.randomized = !!i1729[5]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1730 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1731 = data
  i1730.enabled = !!i1731[0]
  i1730.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[1], i1730.limit)
  i1730.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[2], i1730.limitX)
  i1730.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[3], i1730.limitY)
  i1730.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[4], i1730.limitZ)
  i1730.dampen = i1731[5]
  i1730.separateAxes = !!i1731[6]
  i1730.space = i1731[7]
  i1730.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[8], i1730.drag)
  i1730.multiplyDragByParticleSize = !!i1731[9]
  i1730.multiplyDragByParticleVelocity = !!i1731[10]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1733 = data
  i1732.enabled = !!i1733[0]
  request.r(i1733[1], i1733[2], 0, i1732, 'sharedMaterial')
  var i1735 = i1733[3]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 2, i1734, '')
  }
  i1732.sharedMaterials = i1734
  i1732.receiveShadows = !!i1733[4]
  i1732.shadowCastingMode = i1733[5]
  i1732.sortingLayerID = i1733[6]
  i1732.sortingOrder = i1733[7]
  i1732.lightmapIndex = i1733[8]
  i1732.lightmapSceneIndex = i1733[9]
  i1732.lightmapScaleOffset = new pc.Vec4( i1733[10], i1733[11], i1733[12], i1733[13] )
  i1732.lightProbeUsage = i1733[14]
  i1732.reflectionProbeUsage = i1733[15]
  request.r(i1733[16], i1733[17], 0, i1732, 'mesh')
  i1732.meshCount = i1733[18]
  i1732.activeVertexStreamsCount = i1733[19]
  i1732.alignment = i1733[20]
  i1732.renderMode = i1733[21]
  i1732.sortMode = i1733[22]
  i1732.lengthScale = i1733[23]
  i1732.velocityScale = i1733[24]
  i1732.cameraVelocityScale = i1733[25]
  i1732.normalDirection = i1733[26]
  i1732.sortingFudge = i1733[27]
  i1732.minParticleSize = i1733[28]
  i1732.maxParticleSize = i1733[29]
  i1732.pivot = new pc.Vec3( i1733[30], i1733[31], i1733[32] )
  request.r(i1733[33], i1733[34], 0, i1732, 'trailMaterial')
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.index = i1737[1]
  i1736.startup = !!i1737[2]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.planeDistance = i1739[1]
  i1738.referencePixelsPerUnit = i1739[2]
  i1738.isFallbackOverlay = !!i1739[3]
  i1738.renderMode = i1739[4]
  i1738.renderOrder = i1739[5]
  i1738.sortingLayerName = i1739[6]
  i1738.sortingOrder = i1739[7]
  i1738.scaleFactor = i1739[8]
  request.r(i1739[9], i1739[10], 0, i1738, 'worldCamera')
  i1738.overrideSorting = !!i1739[11]
  i1738.pixelPerfect = !!i1739[12]
  i1738.targetDisplay = i1739[13]
  i1738.overridePixelPerfect = !!i1739[14]
  return i1738
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1741 = data
  i1740.m_UiScaleMode = i1741[0]
  i1740.m_ReferencePixelsPerUnit = i1741[1]
  i1740.m_ScaleFactor = i1741[2]
  i1740.m_ReferenceResolution = new pc.Vec2( i1741[3], i1741[4] )
  i1740.m_ScreenMatchMode = i1741[5]
  i1740.m_MatchWidthOrHeight = i1741[6]
  i1740.m_PhysicalUnit = i1741[7]
  i1740.m_FallbackScreenDPI = i1741[8]
  i1740.m_DefaultSpriteDPI = i1741[9]
  i1740.m_DynamicPixelsPerUnit = i1741[10]
  i1740.m_PresetInfoIsWorld = !!i1741[11]
  return i1740
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1743 = data
  i1742.m_IgnoreReversedGraphics = !!i1743[0]
  i1742.m_BlockingObjects = i1743[1]
  i1742.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1743[2] )
  return i1742
}

Deserializers["UI_Ingame"] = function (request, data, root) {
  var i1744 = root || request.c( 'UI_Ingame' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'nextBtn')
  request.r(i1745[2], i1745[3], 0, i1744, 'doneBtn')
  var i1747 = i1745[4]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1747.length; i += 2) {
  request.r(i1747[i + 0], i1747[i + 1], 1, i1746, '')
  }
  i1744.tabMenuElements = i1746
  return i1744
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.UI.Text' )
  var i1751 = data
  i1750.m_FontData = request.d('UnityEngine.UI.FontData', i1751[0], i1750.m_FontData)
  i1750.m_Text = i1751[1]
  request.r(i1751[2], i1751[3], 0, i1750, 'm_Material')
  i1750.m_Maskable = !!i1751[4]
  i1750.m_Color = new pc.Color(i1751[5], i1751[6], i1751[7], i1751[8])
  i1750.m_RaycastTarget = !!i1751[9]
  i1750.m_RaycastPadding = new pc.Vec4( i1751[10], i1751[11], i1751[12], i1751[13] )
  return i1750
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'm_Font')
  i1752.m_FontSize = i1753[2]
  i1752.m_FontStyle = i1753[3]
  i1752.m_BestFit = !!i1753[4]
  i1752.m_MinSize = i1753[5]
  i1752.m_MaxSize = i1753[6]
  i1752.m_Alignment = i1753[7]
  i1752.m_AlignByGeometry = !!i1753[8]
  i1752.m_RichText = !!i1753[9]
  i1752.m_HorizontalOverflow = i1753[10]
  i1752.m_VerticalOverflow = i1753[11]
  i1752.m_LineSpacing = i1753[12]
  return i1752
}

Deserializers["TabMenuHandler"] = function (request, data, root) {
  var i1754 = root || request.c( 'TabMenuHandler' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'targetScaleBodyPart')
  i1754.isSliderShow = !!i1755[2]
  var i1757 = i1755[3]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('Tab')))
  for(var i = 0; i < i1757.length; i += 2) {
  request.r(i1757[i + 0], i1757[i + 1], 1, i1756, '')
  }
  i1754.tabSelection = i1756
  var i1759 = i1755[4]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('GridHandler')))
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 1, i1758, '')
  }
  i1754.tabContents = i1758
  request.r(i1755[5], i1755[6], 0, i1754, 'nextBtn')
  i1754.fade = new pc.Color(i1755[7], i1755[8], i1755[9], i1755[10])
  request.r(i1755[11], i1755[12], 0, i1754, 'next_Btn')
  request.r(i1755[13], i1755[14], 0, i1754, 'done_Btn')
  request.r(i1755[15], i1755[16], 0, i1754, 'handtut')
  request.r(i1755[17], i1755[18], 0, i1754, 'slider')
  request.r(i1755[19], i1755[20], 0, i1754, 'handTut')
  return i1754
}

Deserializers["Tab"] = function (request, data, root) {
  var i1764 = root || request.c( 'Tab' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'bodyPartLink')
  request.r(i1765[2], i1765[3], 0, i1764, 'bubble')
  request.r(i1765[4], i1765[5], 0, i1764, 'check')
  i1764.selected = UnityEngine.Color32.ConstructColor(i1765[6], i1765[7], i1765[8], i1765[9])
  request.r(i1765[10], i1765[11], 0, i1764, 'fill')
  return i1764
}

Deserializers["Scale"] = function (request, data, root) {
  var i1766 = root || request.c( 'Scale' )
  var i1767 = data
  return i1766
}

Deserializers["BreathButton"] = function (request, data, root) {
  var i1768 = root || request.c( 'BreathButton' )
  var i1769 = data
  i1768.constantBreath = !!i1769[0]
  i1768.increaseScale = !!i1769[1]
  i1768.delayFirstTime = i1769[2]
  return i1768
}

Deserializers["TutHand"] = function (request, data, root) {
  var i1770 = root || request.c( 'TutHand' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'rt')
  return i1770
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'm_Content')
  i1772.m_Horizontal = !!i1773[2]
  i1772.m_Vertical = !!i1773[3]
  i1772.m_MovementType = i1773[4]
  i1772.m_Elasticity = i1773[5]
  i1772.m_Inertia = !!i1773[6]
  i1772.m_DecelerationRate = i1773[7]
  i1772.m_ScrollSensitivity = i1773[8]
  request.r(i1773[9], i1773[10], 0, i1772, 'm_Viewport')
  request.r(i1773[11], i1773[12], 0, i1772, 'm_HorizontalScrollbar')
  request.r(i1773[13], i1773[14], 0, i1772, 'm_VerticalScrollbar')
  i1772.m_HorizontalScrollbarVisibility = i1773[15]
  i1772.m_VerticalScrollbarVisibility = i1773[16]
  i1772.m_HorizontalScrollbarSpacing = i1773[17]
  i1772.m_VerticalScrollbarSpacing = i1773[18]
  i1772.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1773[19], i1772.m_OnValueChanged)
  return i1772
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1775 = data
  i1774.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1775[0], i1774.m_PersistentCalls)
  return i1774
}

Deserializers["GridHandler"] = function (request, data, root) {
  var i1776 = root || request.c( 'GridHandler' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'content')
  request.r(i1777[2], i1777[3], 0, i1776, 'grid')
  return i1776
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1779 = data
  i1778.m_ShowMaskGraphic = !!i1779[0]
  return i1778
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1781 = data
  i1780.m_StartCorner = i1781[0]
  i1780.m_StartAxis = i1781[1]
  i1780.m_CellSize = new pc.Vec2( i1781[2], i1781[3] )
  i1780.m_Spacing = new pc.Vec2( i1781[4], i1781[5] )
  i1780.m_Constraint = i1781[6]
  i1780.m_ConstraintCount = i1781[7]
  i1780.m_Padding = UnityEngine.RectOffset.FromPaddings(i1781[8], i1781[9], i1781[10], i1781[11])
  i1780.m_ChildAlignment = i1781[12]
  return i1780
}

Deserializers["UI_Result"] = function (request, data, root) {
  var i1782 = root || request.c( 'UI_Result' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, 'moneyTxt')
  request.r(i1783[2], i1783[3], 0, i1782, 'bgAnim')
  request.r(i1783[4], i1783[5], 0, i1782, 'ingameBg')
  request.r(i1783[6], i1783[7], 0, i1782, 'characterZone')
  request.r(i1783[8], i1783[9], 0, i1782, 'characterManager')
  request.r(i1783[10], i1783[11], 0, i1782, 'extraMonster1')
  request.r(i1783[12], i1783[13], 0, i1782, 'extraMonster2')
  return i1782
}

Deserializers["MoneyFly"] = function (request, data, root) {
  var i1784 = root || request.c( 'MoneyFly' )
  var i1785 = data
  i1784.mainChar = !!i1785[0]
  request.r(i1785[1], i1785[2], 0, i1784, 'money')
  request.r(i1785[3], i1785[4], 0, i1784, 'outline')
  request.r(i1785[5], i1785[6], 0, i1784, 'moneyTxt')
  return i1784
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1787 = data
  i1786.m_EffectColor = new pc.Color(i1787[0], i1787[1], i1787[2], i1787[3])
  i1786.m_EffectDistance = new pc.Vec2( i1787[4], i1787[5] )
  i1786.m_UseGraphicAlpha = !!i1787[6]
  return i1786
}

Deserializers["UI_Transition"] = function (request, data, root) {
  var i1788 = root || request.c( 'UI_Transition' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'canvasGroup')
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1791 = data
  i1790.m_Alpha = i1791[0]
  i1790.m_Interactable = !!i1791[1]
  i1790.m_BlocksRaycasts = !!i1791[2]
  i1790.m_IgnoreParentGroups = !!i1791[3]
  i1790.enabled = !!i1791[4]
  return i1790
}

Deserializers["UI_Endgame"] = function (request, data, root) {
  var i1792 = root || request.c( 'UI_Endgame' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'canvasGroup')
  return i1792
}

Deserializers["CharacterManager"] = function (request, data, root) {
  var i1794 = root || request.c( 'CharacterManager' )
  var i1795 = data
  i1794.monsterBody = i1795[0]
  i1794.spawnMoney = !!i1795[1]
  request.r(i1795[2], i1795[3], 0, i1794, 'sortingGroup')
  request.r(i1795[4], i1795[5], 0, i1794, 'headHolder')
  var i1797 = i1795[6]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.bodies = i1796
  var i1799 = i1795[7]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 2) {
  request.r(i1799[i + 0], i1799[i + 1], 2, i1798, '')
  }
  i1794.boneFollowers = i1798
  return i1794
}

Deserializers["TouchController"] = function (request, data, root) {
  var i1804 = root || request.c( 'TouchController' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'rb')
  i1804.speed = i1805[2]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1807 = data
  i1806.bodyType = i1807[0]
  request.r(i1807[1], i1807[2], 0, i1806, 'material')
  i1806.simulated = !!i1807[3]
  i1806.useAutoMass = !!i1807[4]
  i1806.mass = i1807[5]
  i1806.drag = i1807[6]
  i1806.angularDrag = i1807[7]
  i1806.gravityScale = i1807[8]
  i1806.collisionDetectionMode = i1807[9]
  i1806.sleepMode = i1807[10]
  i1806.constraints = i1807[11]
  return i1806
}

Deserializers["ShopController"] = function (request, data, root) {
  var i1808 = root || request.c( 'ShopController' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 2) {
  request.r(i1811[i + 0], i1811[i + 1], 2, i1810, '')
  }
  i1808.heads = i1810
  var i1813 = i1809[1]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 2, i1812, '')
  }
  i1808.eyes = i1812
  var i1815 = i1809[2]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 2) {
  request.r(i1815[i + 0], i1815[i + 1], 2, i1814, '')
  }
  i1808.mouths = i1814
  var i1817 = i1809[3]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 2, i1816, '')
  }
  i1808.accs = i1816
  var i1819 = i1809[4]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 2) {
  request.r(i1819[i + 0], i1819[i + 1], 2, i1818, '')
  }
  i1808.bodies = i1818
  request.r(i1809[5], i1809[6], 0, i1808, 'headContent')
  request.r(i1809[7], i1809[8], 0, i1808, 'eyeContent')
  request.r(i1809[9], i1809[10], 0, i1808, 'mouthContent')
  request.r(i1809[11], i1809[12], 0, i1808, 'accContents')
  request.r(i1809[13], i1809[14], 0, i1808, 'bodyContent')
  request.r(i1809[15], i1809[16], 0, i1808, 'head')
  request.r(i1809[17], i1809[18], 0, i1808, 'eye')
  request.r(i1809[19], i1809[20], 0, i1808, 'mouth')
  request.r(i1809[21], i1809[22], 0, i1808, 'acc')
  request.r(i1809[23], i1809[24], 0, i1808, 'body')
  request.r(i1809[25], i1809[26], 0, i1808, 'body2')
  request.r(i1809[27], i1809[28], 0, i1808, 'headHolder')
  request.r(i1809[29], i1809[30], 0, i1808, 'boneFollower')
  request.r(i1809[31], i1809[32], 0, i1808, 'boneFollower2')
  request.r(i1809[33], i1809[34], 0, i1808, 'handTut')
  request.r(i1809[35], i1809[36], 0, i1808, 'characterManager')
  return i1808
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i1822 = root || request.c( 'UIHandler' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'limitArea')
  request.r(i1823[2], i1823[3], 0, i1822, 'curtainAnim')
  request.r(i1823[4], i1823[5], 0, i1822, 'uI_Result')
  request.r(i1823[6], i1823[7], 0, i1822, 'uI_Ingame')
  request.r(i1823[8], i1823[9], 0, i1822, 'endGamePanel')
  request.r(i1823[10], i1823[11], 0, i1822, 'transition')
  request.r(i1823[12], i1823[13], 0, i1822, 'bodyAnim')
  request.r(i1823[14], i1823[15], 0, i1822, 'bodyAnim2')
  request.r(i1823[16], i1823[17], 0, i1822, 'character')
  request.r(i1823[18], i1823[19], 0, i1822, 'moneyRain')
  return i1822
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i1824 = root || request.c( 'CameraHandler' )
  var i1825 = data
  i1824.defaultSize = i1825[0]
  i1824.aspectRatio = i1825[1]
  request.r(i1825[2], i1825[3], 0, i1824, 'characterManager')
  var i1827 = i1825[4]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 2) {
  request.r(i1827[i + 0], i1827[i + 1], 2, i1826, '')
  }
  i1824.cams = i1826
  var i1829 = i1825[5]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 2) {
  request.r(i1829[i + 0], i1829[i + 1], 2, i1828, '')
  }
  i1824.cameras = i1828
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1835 = data
  i1834.enabled = !!i1835[0]
  i1834.aspect = i1835[1]
  i1834.orthographic = !!i1835[2]
  i1834.orthographicSize = i1835[3]
  i1834.backgroundColor = new pc.Color(i1835[4], i1835[5], i1835[6], i1835[7])
  i1834.nearClipPlane = i1835[8]
  i1834.farClipPlane = i1835[9]
  i1834.fieldOfView = i1835[10]
  i1834.depth = i1835[11]
  i1834.clearFlags = i1835[12]
  i1834.cullingMask = i1835[13]
  i1834.rect = i1835[14]
  request.r(i1835[15], i1835[16], 0, i1834, 'targetTexture')
  i1834.usePhysicalProperties = !!i1835[17]
  i1834.focalLength = i1835[18]
  i1834.sensorSize = new pc.Vec2( i1835[19], i1835[20] )
  i1834.lensShift = new pc.Vec2( i1835[21], i1835[22] )
  i1834.gateFit = i1835[23]
  return i1834
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1836 = root || request.c( 'SoundManager' )
  var i1837 = data
  var i1839 = i1837[0]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('SoundAudioClip', i1839[i + 0]) );
  }
  i1836.soundAudioClips = i1838
  var i1841 = i1837[1]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('SoundAudioClip', i1841[i + 0]) );
  }
  i1836.itemClickedAudio = i1840
  return i1836
}

Deserializers["SoundAudioClip"] = function (request, data, root) {
  var i1844 = root || request.c( 'SoundAudioClip' )
  var i1845 = data
  i1844.sound = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'audioClip')
  i1844.volume = i1845[3]
  i1844.pitch = i1845[4]
  i1844.loop = !!i1845[5]
  request.r(i1845[6], i1845[7], 0, i1844, 'source')
  return i1844
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'm_FirstSelected')
  i1846.m_sendNavigationEvents = !!i1847[2]
  i1846.m_DragThreshold = i1847[3]
  return i1846
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1849 = data
  i1848.m_HorizontalAxis = i1849[0]
  i1848.m_VerticalAxis = i1849[1]
  i1848.m_SubmitButton = i1849[2]
  i1848.m_CancelButton = i1849[3]
  i1848.m_InputActionsPerSecond = i1849[4]
  i1848.m_RepeatDelay = i1849[5]
  i1848.m_ForceModuleActive = !!i1849[6]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1851 = data
  i1850.ambientIntensity = i1851[0]
  i1850.reflectionIntensity = i1851[1]
  i1850.ambientMode = i1851[2]
  i1850.ambientLight = new pc.Color(i1851[3], i1851[4], i1851[5], i1851[6])
  i1850.ambientSkyColor = new pc.Color(i1851[7], i1851[8], i1851[9], i1851[10])
  i1850.ambientGroundColor = new pc.Color(i1851[11], i1851[12], i1851[13], i1851[14])
  i1850.ambientEquatorColor = new pc.Color(i1851[15], i1851[16], i1851[17], i1851[18])
  i1850.fogColor = new pc.Color(i1851[19], i1851[20], i1851[21], i1851[22])
  i1850.fogEndDistance = i1851[23]
  i1850.fogStartDistance = i1851[24]
  i1850.fogDensity = i1851[25]
  i1850.fog = !!i1851[26]
  request.r(i1851[27], i1851[28], 0, i1850, 'skybox')
  i1850.fogMode = i1851[29]
  var i1853 = i1851[30]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1853[i + 0]) );
  }
  i1850.lightmaps = i1852
  i1850.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1851[31], i1850.lightProbes)
  i1850.lightmapsMode = i1851[32]
  i1850.mixedBakeMode = i1851[33]
  i1850.environmentLightingMode = i1851[34]
  i1850.ambientProbe = new pc.SphericalHarmonicsL2(i1851[35])
  i1850.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1851[36])
  i1850.useReferenceAmbientProbe = !!i1851[37]
  request.r(i1851[38], i1851[39], 0, i1850, 'customReflection')
  request.r(i1851[40], i1851[41], 0, i1850, 'defaultReflection')
  i1850.defaultReflectionMode = i1851[42]
  i1850.defaultReflectionResolution = i1851[43]
  i1850.sunLightObjectId = i1851[44]
  i1850.pixelLightCount = i1851[45]
  i1850.defaultReflectionHDR = !!i1851[46]
  i1850.hasLightDataAsset = !!i1851[47]
  i1850.hasManualGenerate = !!i1851[48]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'lightmapColor')
  request.r(i1857[2], i1857[3], 0, i1856, 'lightmapDirection')
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1858 = root || new UnityEngine.LightProbes()
  var i1859 = data
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1867 = data
  var i1869 = i1867[0]
  var i1868 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1869[i + 0]));
  }
  i1866.ShaderCompilationErrors = i1868
  i1866.name = i1867[1]
  i1866.guid = i1867[2]
  var i1871 = i1867[3]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( i1871[i + 0] );
  }
  i1866.shaderDefinedKeywords = i1870
  var i1873 = i1867[4]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1873[i + 0]) );
  }
  i1866.passes = i1872
  var i1875 = i1867[5]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1875[i + 0]) );
  }
  i1866.usePasses = i1874
  var i1877 = i1867[6]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1877[i + 0]) );
  }
  i1866.defaultParameterValues = i1876
  request.r(i1867[7], i1867[8], 0, i1866, 'unityFallbackShader')
  i1866.readDepth = !!i1867[9]
  i1866.isCreatedByShaderGraph = !!i1867[10]
  i1866.usedBatchUniforms = i1867[11]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1881 = data
  i1880.shaderName = i1881[0]
  i1880.errorMessage = i1881[1]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1884 = root || new pc.UnityShaderPass()
  var i1885 = data
  i1884.id = i1885[0]
  i1884.subShaderIndex = i1885[1]
  i1884.name = i1885[2]
  i1884.passType = i1885[3]
  i1884.grabPassTextureName = i1885[4]
  i1884.usePass = !!i1885[5]
  i1884.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[6], i1884.zTest)
  i1884.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[7], i1884.zWrite)
  i1884.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[8], i1884.culling)
  i1884.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1885[9], i1884.blending)
  i1884.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1885[10], i1884.alphaBlending)
  i1884.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[11], i1884.colorWriteMask)
  i1884.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[12], i1884.offsetUnits)
  i1884.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[13], i1884.offsetFactor)
  i1884.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[14], i1884.stencilRef)
  i1884.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[15], i1884.stencilReadMask)
  i1884.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[16], i1884.stencilWriteMask)
  i1884.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1885[17], i1884.stencilOp)
  i1884.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1885[18], i1884.stencilOpFront)
  i1884.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1885[19], i1884.stencilOpBack)
  var i1887 = i1885[20]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1887[i + 0]) );
  }
  i1884.tags = i1886
  var i1889 = i1885[21]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( i1889[i + 0] );
  }
  i1884.passDefinedKeywords = i1888
  var i1891 = i1885[22]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1891[i + 0]) );
  }
  i1884.passDefinedKeywordGroups = i1890
  var i1893 = i1885[23]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1893[i + 0]) );
  }
  i1884.variants = i1892
  var i1895 = i1885[24]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1895[i + 0]) );
  }
  i1884.excludedVariants = i1894
  i1884.hasDepthReader = !!i1885[25]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1897 = data
  i1896.val = i1897[0]
  i1896.name = i1897[1]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1899 = data
  i1898.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1899[0], i1898.src)
  i1898.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1899[1], i1898.dst)
  i1898.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1899[2], i1898.op)
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1901 = data
  i1900.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[0], i1900.pass)
  i1900.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[1], i1900.fail)
  i1900.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[2], i1900.zFail)
  i1900.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[3], i1900.comp)
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.value = i1905[1]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1909 = data
  var i1911 = i1909[0]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( i1911[i + 0] );
  }
  i1908.keywords = i1910
  i1908.hasDiscard = !!i1909[1]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1915 = data
  i1914.passId = i1915[0]
  i1914.subShaderIndex = i1915[1]
  var i1917 = i1915[2]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( i1917[i + 0] );
  }
  i1914.keywords = i1916
  i1914.vertexProgram = i1915[3]
  i1914.fragmentProgram = i1915[4]
  i1914.readDepth = !!i1915[5]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'shader')
  i1920.pass = i1921[2]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1925 = data
  i1924.name = i1925[0]
  i1924.type = i1925[1]
  i1924.value = new pc.Vec4( i1925[2], i1925[3], i1925[4], i1925[5] )
  i1924.textureValue = i1925[6]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1927 = data
  i1926.name = i1927[0]
  request.r(i1927[1], i1927[2], 0, i1926, 'texture')
  i1926.aabb = i1927[3]
  i1926.vertices = i1927[4]
  i1926.triangles = i1927[5]
  i1926.textureRect = UnityEngine.Rect.MinMaxRect(i1927[6], i1927[7], i1927[8], i1927[9])
  i1926.packedRect = UnityEngine.Rect.MinMaxRect(i1927[10], i1927[11], i1927[12], i1927[13])
  i1926.border = new pc.Vec4( i1927[14], i1927[15], i1927[16], i1927[17] )
  i1926.transparency = i1927[18]
  i1926.bounds = i1927[19]
  i1926.pixelsPerUnit = i1927[20]
  i1926.textureWidth = i1927[21]
  i1926.textureHeight = i1927[22]
  i1926.nativeSize = new pc.Vec2( i1927[23], i1927[24] )
  i1926.pivot = new pc.Vec2( i1927[25], i1927[26] )
  i1926.textureRectOffset = new pc.Vec2( i1927[27], i1927[28] )
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1929 = data
  i1928.name = i1929[0]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.ascent = i1931[1]
  i1930.originalLineHeight = i1931[2]
  i1930.fontSize = i1931[3]
  var i1933 = i1931[4]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1933[i + 0]) );
  }
  i1930.characterInfo = i1932
  request.r(i1931[5], i1931[6], 0, i1930, 'texture')
  i1930.originalFontSize = i1931[7]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1937 = data
  i1936.index = i1937[0]
  i1936.advance = i1937[1]
  i1936.bearing = i1937[2]
  i1936.glyphWidth = i1937[3]
  i1936.glyphHeight = i1937[4]
  i1936.minX = i1937[5]
  i1936.maxX = i1937[6]
  i1936.minY = i1937[7]
  i1936.maxY = i1937[8]
  i1936.uvBottomLeftX = i1937[9]
  i1936.uvBottomLeftY = i1937[10]
  i1936.uvBottomRightX = i1937[11]
  i1936.uvBottomRightY = i1937[12]
  i1936.uvTopLeftX = i1937[13]
  i1936.uvTopLeftY = i1937[14]
  i1936.uvTopRightX = i1937[15]
  i1936.uvTopRightY = i1937[16]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1939 = data
  i1938.name = i1939[0]
  i1938.bytes64 = i1939[1]
  i1938.data = i1939[2]
  return i1938
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1940 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1941 = data
  var i1943 = i1941[0]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 2) {
  request.r(i1943[i + 0], i1943[i + 1], 2, i1942, '')
  }
  i1940.atlasAssets = i1942
  i1940.scale = i1941[1]
  request.r(i1941[2], i1941[3], 0, i1940, 'skeletonJSON')
  i1940.isUpgradingBlendModeMaterials = !!i1941[4]
  i1940.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1941[5], i1940.blendModeMaterials)
  var i1945 = i1941[6]
  var i1944 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 1, i1944, '')
  }
  i1940.skeletonDataModifiers = i1944
  var i1947 = i1941[7]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( i1947[i + 0] );
  }
  i1940.fromAnimation = i1946
  var i1949 = i1941[8]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( i1949[i + 0] );
  }
  i1940.toAnimation = i1948
  i1940.duration = i1941[9]
  i1940.defaultMix = i1941[10]
  request.r(i1941[11], i1941[12], 0, i1940, 'controller')
  return i1940
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1952 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1953 = data
  i1952.applyAdditiveMaterial = !!i1953[0]
  var i1955 = i1953[1]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1955[i + 0]));
  }
  i1952.additiveMaterials = i1954
  var i1957 = i1953[2]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1957[i + 0]));
  }
  i1952.multiplyMaterials = i1956
  var i1959 = i1953[3]
  var i1958 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1959[i + 0]));
  }
  i1952.screenMaterials = i1958
  i1952.requiresBlendModeMaterials = !!i1953[4]
  return i1952
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1962 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1963 = data
  i1962.pageName = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'material')
  return i1962
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1966 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'atlasFile')
  var i1969 = i1967[2]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 2) {
  request.r(i1969[i + 0], i1969[i + 1], 2, i1968, '')
  }
  i1966.materials = i1968
  return i1966
}

Deserializers["Item"] = function (request, data, root) {
  var i1970 = root || request.c( 'Item' )
  var i1971 = data
  i1970.id = i1971[0]
  i1970.bodypartName = i1971[1]
  request.r(i1971[2], i1971[3], 0, i1970, 'preview')
  request.r(i1971[4], i1971[5], 0, i1970, 'part')
  i1970.isAd = !!i1971[6]
  i1970.adNum = i1971[7]
  i1970.price = i1971[8]
  i1970.bodyPart = i1971[9]
  i1970.specialPos = !!i1971[10]
  i1970.realPos = new pc.Vec3( i1971[11], i1971[12], i1971[13] )
  i1970.catalogue = i1971[14]
  i1970.dataAsset = i1971[15]
  i1970.pkTheme = i1971[16]
  i1970.priority = i1971[17]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1973 = data
  var i1975 = i1973[0]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1975[i + 0]) );
  }
  i1972.files = i1974
  i1972.componentToPrefabIds = i1973[1]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1979 = data
  i1978.path = i1979[0]
  request.r(i1979[1], i1979[2], 0, i1978, 'unityObject')
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1981 = data
  var i1983 = i1981[0]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1983[i + 0]) );
  }
  i1980.scriptsExecutionOrder = i1982
  var i1985 = i1981[1]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1985[i + 0]) );
  }
  i1980.sortingLayers = i1984
  var i1987 = i1981[2]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1987[i + 0]) );
  }
  i1980.cullingLayers = i1986
  i1980.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1981[3], i1980.timeSettings)
  i1980.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1981[4], i1980.physicsSettings)
  i1980.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1981[5], i1980.physics2DSettings)
  i1980.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1981[6], i1980.qualitySettings)
  i1980.enableRealtimeShadows = !!i1981[7]
  i1980.enableAutoInstancing = !!i1981[8]
  i1980.enableDynamicBatching = !!i1981[9]
  i1980.lightmapEncodingQuality = i1981[10]
  i1980.desiredColorSpace = i1981[11]
  var i1989 = i1981[12]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( i1989[i + 0] );
  }
  i1980.allTags = i1988
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.value = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1997 = data
  i1996.id = i1997[0]
  i1996.name = i1997[1]
  i1996.value = i1997[2]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2001 = data
  i2000.id = i2001[0]
  i2000.name = i2001[1]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2003 = data
  i2002.fixedDeltaTime = i2003[0]
  i2002.maximumDeltaTime = i2003[1]
  i2002.timeScale = i2003[2]
  i2002.maximumParticleTimestep = i2003[3]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2005 = data
  i2004.gravity = new pc.Vec3( i2005[0], i2005[1], i2005[2] )
  i2004.defaultSolverIterations = i2005[3]
  i2004.bounceThreshold = i2005[4]
  i2004.autoSyncTransforms = !!i2005[5]
  i2004.autoSimulation = !!i2005[6]
  var i2007 = i2005[7]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2007[i + 0]) );
  }
  i2004.collisionMatrix = i2006
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2011 = data
  i2010.enabled = !!i2011[0]
  i2010.layerId = i2011[1]
  i2010.otherLayerId = i2011[2]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'material')
  i2012.gravity = new pc.Vec2( i2013[2], i2013[3] )
  i2012.positionIterations = i2013[4]
  i2012.velocityIterations = i2013[5]
  i2012.velocityThreshold = i2013[6]
  i2012.maxLinearCorrection = i2013[7]
  i2012.maxAngularCorrection = i2013[8]
  i2012.maxTranslationSpeed = i2013[9]
  i2012.maxRotationSpeed = i2013[10]
  i2012.baumgarteScale = i2013[11]
  i2012.baumgarteTOIScale = i2013[12]
  i2012.timeToSleep = i2013[13]
  i2012.linearSleepTolerance = i2013[14]
  i2012.angularSleepTolerance = i2013[15]
  i2012.defaultContactOffset = i2013[16]
  i2012.autoSimulation = !!i2013[17]
  i2012.queriesHitTriggers = !!i2013[18]
  i2012.queriesStartInColliders = !!i2013[19]
  i2012.callbacksOnDisable = !!i2013[20]
  i2012.reuseCollisionCallbacks = !!i2013[21]
  i2012.autoSyncTransforms = !!i2013[22]
  var i2015 = i2013[23]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2015[i + 0]) );
  }
  i2012.collisionMatrix = i2014
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2019 = data
  i2018.enabled = !!i2019[0]
  i2018.layerId = i2019[1]
  i2018.otherLayerId = i2019[2]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2023[i + 0]) );
  }
  i2020.qualityLevels = i2022
  var i2025 = i2021[1]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( i2025[i + 0] );
  }
  i2020.names = i2024
  i2020.shadows = i2021[2]
  i2020.anisotropicFiltering = i2021[3]
  i2020.antiAliasing = i2021[4]
  i2020.lodBias = i2021[5]
  i2020.shadowCascades = i2021[6]
  i2020.shadowDistance = i2021[7]
  i2020.shadowmaskMode = i2021[8]
  i2020.shadowProjection = i2021[9]
  i2020.shadowResolution = i2021[10]
  i2020.softParticles = !!i2021[11]
  i2020.softVegetation = !!i2021[12]
  i2020.activeColorSpace = i2021[13]
  i2020.desiredColorSpace = i2021[14]
  i2020.masterTextureLimit = i2021[15]
  i2020.maxQueuedFrames = i2021[16]
  i2020.particleRaycastBudget = i2021[17]
  i2020.pixelLightCount = i2021[18]
  i2020.realtimeReflectionProbes = !!i2021[19]
  i2020.shadowCascade2Split = i2021[20]
  i2020.shadowCascade4Split = new pc.Vec3( i2021[21], i2021[22], i2021[23] )
  i2020.streamingMipmapsActive = !!i2021[24]
  i2020.vSyncCount = i2021[25]
  i2020.asyncUploadBufferSize = i2021[26]
  i2020.asyncUploadTimeSlice = i2021[27]
  i2020.billboardsFaceCameraPosition = !!i2021[28]
  i2020.shadowNearPlaneOffset = i2021[29]
  i2020.streamingMipmapsMemoryBudget = i2021[30]
  i2020.maximumLODLevel = i2021[31]
  i2020.streamingMipmapsAddAllCameras = !!i2021[32]
  i2020.streamingMipmapsMaxLevelReduction = i2021[33]
  i2020.streamingMipmapsRenderersPerFrame = i2021[34]
  i2020.resolutionScalingFixedDPIFactor = i2021[35]
  i2020.streamingMipmapsMaxFileIORequests = i2021[36]
  i2020.currentQualityLevel = i2021[37]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2031 = data
  i2030.weight = i2031[0]
  i2030.vertices = i2031[1]
  i2030.normals = i2031[2]
  i2030.tangents = i2031[3]
  return i2030
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

Deserializers.creativeName = "ToiletMakeover";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1626";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3747";

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

Deserializers.buildID = "e41635f2-712d-4e9b-b103-1870ba5c9f70";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

