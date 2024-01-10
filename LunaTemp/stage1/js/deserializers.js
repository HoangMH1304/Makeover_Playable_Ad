var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointSpring' )
  var i1591 = data
  i1590.spring = i1591[0]
  i1590.damper = i1591[1]
  i1590.targetPosition = i1591[2]
  return i1590
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.JointMotor' )
  var i1593 = data
  i1592.m_TargetVelocity = i1593[0]
  i1592.m_Force = i1593[1]
  i1592.m_FreeSpin = i1593[2]
  return i1592
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.JointLimits' )
  var i1595 = data
  i1594.m_Min = i1595[0]
  i1594.m_Max = i1595[1]
  i1594.m_Bounciness = i1595[2]
  i1594.m_BounceMinVelocity = i1595[3]
  i1594.m_ContactDistance = i1595[4]
  i1594.minBounce = i1595[5]
  i1594.maxBounce = i1595[6]
  return i1594
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.JointDrive' )
  var i1597 = data
  i1596.m_PositionSpring = i1597[0]
  i1596.m_PositionDamper = i1597[1]
  i1596.m_MaximumForce = i1597[2]
  return i1596
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1599 = data
  i1598.m_Spring = i1599[0]
  i1598.m_Damper = i1599[1]
  return i1598
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1601 = data
  i1600.m_Limit = i1601[0]
  i1600.m_Bounciness = i1601[1]
  i1600.m_ContactDistance = i1601[2]
  return i1600
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1603 = data
  i1602.m_ExtremumSlip = i1603[0]
  i1602.m_ExtremumValue = i1603[1]
  i1602.m_AsymptoteSlip = i1603[2]
  i1602.m_AsymptoteValue = i1603[3]
  i1602.m_Stiffness = i1603[4]
  return i1602
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1605 = data
  i1604.m_LowerAngle = i1605[0]
  i1604.m_UpperAngle = i1605[1]
  return i1604
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1607 = data
  i1606.m_MotorSpeed = i1607[0]
  i1606.m_MaximumMotorTorque = i1607[1]
  return i1606
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1609 = data
  i1608.m_DampingRatio = i1609[0]
  i1608.m_Frequency = i1609[1]
  i1608.m_Angle = i1609[2]
  return i1608
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1611 = data
  i1610.m_LowerTranslation = i1611[0]
  i1610.m_UpperTranslation = i1611[1]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1612 = root || new pc.UnityMaterial()
  var i1613 = data
  i1612.name = i1613[0]
  request.r(i1613[1], i1613[2], 0, i1612, 'shader')
  i1612.renderQueue = i1613[3]
  i1612.enableInstancing = !!i1613[4]
  var i1615 = i1613[5]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1615[i + 0]) );
  }
  i1612.floatParameters = i1614
  var i1617 = i1613[6]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1617[i + 0]) );
  }
  i1612.colorParameters = i1616
  var i1619 = i1613[7]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1619[i + 0]) );
  }
  i1612.vectorParameters = i1618
  var i1621 = i1613[8]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1621[i + 0]) );
  }
  i1612.textureParameters = i1620
  var i1623 = i1613[9]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1623[i + 0]) );
  }
  i1612.materialFlags = i1622
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1627 = data
  i1626.name = i1627[0]
  i1626.value = i1627[1]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.value = new pc.Color(i1631[1], i1631[2], i1631[3], i1631[4])
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1635 = data
  i1634.name = i1635[0]
  i1634.value = new pc.Vec4( i1635[1], i1635[2], i1635[3], i1635[4] )
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1639 = data
  i1638.name = i1639[0]
  request.r(i1639[1], i1639[2], 0, i1638, 'value')
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.enabled = !!i1643[1]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.width = i1645[1]
  i1644.height = i1645[2]
  i1644.mipmapCount = i1645[3]
  i1644.anisoLevel = i1645[4]
  i1644.filterMode = i1645[5]
  i1644.hdr = !!i1645[6]
  i1644.format = i1645[7]
  i1644.wrapMode = i1645[8]
  i1644.alphaIsTransparency = !!i1645[9]
  i1644.alphaSource = i1645[10]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1647 = data
  i1646.position = new pc.Vec3( i1647[0], i1647[1], i1647[2] )
  i1646.scale = new pc.Vec3( i1647[3], i1647[4], i1647[5] )
  i1646.rotation = new pc.Quat(i1647[6], i1647[7], i1647[8], i1647[9])
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1649 = data
  i1648.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1649[0], i1648.main)
  i1648.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1649[1], i1648.colorBySpeed)
  i1648.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1649[2], i1648.colorOverLifetime)
  i1648.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1649[3], i1648.emission)
  i1648.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1649[4], i1648.rotationBySpeed)
  i1648.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1649[5], i1648.rotationOverLifetime)
  i1648.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1649[6], i1648.shape)
  i1648.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1649[7], i1648.sizeBySpeed)
  i1648.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1649[8], i1648.sizeOverLifetime)
  i1648.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1649[9], i1648.textureSheetAnimation)
  i1648.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1649[10], i1648.velocityOverLifetime)
  i1648.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1649[11], i1648.noise)
  i1648.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1649[12], i1648.inheritVelocity)
  i1648.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1649[13], i1648.forceOverLifetime)
  i1648.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1649[14], i1648.limitVelocityOverLifetime)
  i1648.useAutoRandomSeed = !!i1649[15]
  i1648.randomSeed = i1649[16]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1650 = root || new pc.ParticleSystemMain()
  var i1651 = data
  i1650.duration = i1651[0]
  i1650.loop = !!i1651[1]
  i1650.prewarm = !!i1651[2]
  i1650.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[3], i1650.startDelay)
  i1650.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[4], i1650.startLifetime)
  i1650.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[5], i1650.startSpeed)
  i1650.startSize3D = !!i1651[6]
  i1650.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[7], i1650.startSizeX)
  i1650.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[8], i1650.startSizeY)
  i1650.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[9], i1650.startSizeZ)
  i1650.startRotation3D = !!i1651[10]
  i1650.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[11], i1650.startRotationX)
  i1650.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[12], i1650.startRotationY)
  i1650.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[13], i1650.startRotationZ)
  i1650.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1651[14], i1650.startColor)
  i1650.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[15], i1650.gravityModifier)
  i1650.simulationSpace = i1651[16]
  request.r(i1651[17], i1651[18], 0, i1650, 'customSimulationSpace')
  i1650.simulationSpeed = i1651[19]
  i1650.useUnscaledTime = !!i1651[20]
  i1650.scalingMode = i1651[21]
  i1650.playOnAwake = !!i1651[22]
  i1650.maxParticles = i1651[23]
  i1650.emitterVelocityMode = i1651[24]
  i1650.stopAction = i1651[25]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1652 = root || new pc.MinMaxCurve()
  var i1653 = data
  i1652.mode = i1653[0]
  i1652.curveMin = new pc.AnimationCurve( { keys_flow: i1653[1] } )
  i1652.curveMax = new pc.AnimationCurve( { keys_flow: i1653[2] } )
  i1652.curveMultiplier = i1653[3]
  i1652.constantMin = i1653[4]
  i1652.constantMax = i1653[5]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1654 = root || new pc.MinMaxGradient()
  var i1655 = data
  i1654.mode = i1655[0]
  i1654.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1655[1], i1654.gradientMin)
  i1654.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1655[2], i1654.gradientMax)
  i1654.colorMin = new pc.Color(i1655[3], i1655[4], i1655[5], i1655[6])
  i1654.colorMax = new pc.Color(i1655[7], i1655[8], i1655[9], i1655[10])
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1657 = data
  i1656.mode = i1657[0]
  var i1659 = i1657[1]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1659[i + 0]) );
  }
  i1656.colorKeys = i1658
  var i1661 = i1657[2]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1661[i + 0]) );
  }
  i1656.alphaKeys = i1660
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1662 = root || new pc.ParticleSystemColorBySpeed()
  var i1663 = data
  i1662.enabled = !!i1663[0]
  i1662.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1663[1], i1662.color)
  i1662.range = new pc.Vec2( i1663[2], i1663[3] )
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1667 = data
  i1666.color = new pc.Color(i1667[0], i1667[1], i1667[2], i1667[3])
  i1666.time = i1667[4]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1671 = data
  i1670.alpha = i1671[0]
  i1670.time = i1671[1]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1672 = root || new pc.ParticleSystemColorOverLifetime()
  var i1673 = data
  i1672.enabled = !!i1673[0]
  i1672.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1673[1], i1672.color)
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1674 = root || new pc.ParticleSystemEmitter()
  var i1675 = data
  i1674.enabled = !!i1675[0]
  i1674.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[1], i1674.rateOverTime)
  i1674.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[2], i1674.rateOverDistance)
  var i1677 = i1675[3]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1677[i + 0]) );
  }
  i1674.bursts = i1676
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1680 = root || new pc.ParticleSystemBurst()
  var i1681 = data
  i1680.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1681[0], i1680.count)
  i1680.cycleCount = i1681[1]
  i1680.minCount = i1681[2]
  i1680.maxCount = i1681[3]
  i1680.repeatInterval = i1681[4]
  i1680.time = i1681[5]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1682 = root || new pc.ParticleSystemRotationBySpeed()
  var i1683 = data
  i1682.enabled = !!i1683[0]
  i1682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[1], i1682.x)
  i1682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[2], i1682.y)
  i1682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[3], i1682.z)
  i1682.separateAxes = !!i1683[4]
  i1682.range = new pc.Vec2( i1683[5], i1683[6] )
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1684 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1685 = data
  i1684.enabled = !!i1685[0]
  i1684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[1], i1684.x)
  i1684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[2], i1684.y)
  i1684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[3], i1684.z)
  i1684.separateAxes = !!i1685[4]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1686 = root || new pc.ParticleSystemShape()
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.shapeType = i1687[1]
  i1686.randomDirectionAmount = i1687[2]
  i1686.sphericalDirectionAmount = i1687[3]
  i1686.randomPositionAmount = i1687[4]
  i1686.alignToDirection = !!i1687[5]
  i1686.radius = i1687[6]
  i1686.radiusMode = i1687[7]
  i1686.radiusSpread = i1687[8]
  i1686.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1687[9], i1686.radiusSpeed)
  i1686.radiusThickness = i1687[10]
  i1686.angle = i1687[11]
  i1686.length = i1687[12]
  i1686.boxThickness = new pc.Vec3( i1687[13], i1687[14], i1687[15] )
  i1686.meshShapeType = i1687[16]
  request.r(i1687[17], i1687[18], 0, i1686, 'mesh')
  request.r(i1687[19], i1687[20], 0, i1686, 'meshRenderer')
  request.r(i1687[21], i1687[22], 0, i1686, 'skinnedMeshRenderer')
  i1686.useMeshMaterialIndex = !!i1687[23]
  i1686.meshMaterialIndex = i1687[24]
  i1686.useMeshColors = !!i1687[25]
  i1686.normalOffset = i1687[26]
  i1686.arc = i1687[27]
  i1686.arcMode = i1687[28]
  i1686.arcSpread = i1687[29]
  i1686.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1687[30], i1686.arcSpeed)
  i1686.donutRadius = i1687[31]
  i1686.position = new pc.Vec3( i1687[32], i1687[33], i1687[34] )
  i1686.rotation = new pc.Vec3( i1687[35], i1687[36], i1687[37] )
  i1686.scale = new pc.Vec3( i1687[38], i1687[39], i1687[40] )
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1688 = root || new pc.ParticleSystemSizeBySpeed()
  var i1689 = data
  i1688.enabled = !!i1689[0]
  i1688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1689[1], i1688.x)
  i1688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1689[2], i1688.y)
  i1688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1689[3], i1688.z)
  i1688.separateAxes = !!i1689[4]
  i1688.range = new pc.Vec2( i1689[5], i1689[6] )
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1690 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1691 = data
  i1690.enabled = !!i1691[0]
  i1690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[1], i1690.x)
  i1690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[2], i1690.y)
  i1690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[3], i1690.z)
  i1690.separateAxes = !!i1691[4]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1692 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1693 = data
  i1692.enabled = !!i1693[0]
  i1692.mode = i1693[1]
  i1692.animation = i1693[2]
  i1692.numTilesX = i1693[3]
  i1692.numTilesY = i1693[4]
  i1692.useRandomRow = !!i1693[5]
  i1692.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1693[6], i1692.frameOverTime)
  i1692.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1693[7], i1692.startFrame)
  i1692.cycleCount = i1693[8]
  i1692.rowIndex = i1693[9]
  i1692.flipU = i1693[10]
  i1692.flipV = i1693[11]
  i1692.spriteCount = i1693[12]
  var i1695 = i1693[13]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 2) {
  request.r(i1695[i + 0], i1695[i + 1], 2, i1694, '')
  }
  i1692.sprites = i1694
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1698 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1699 = data
  i1698.enabled = !!i1699[0]
  i1698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[1], i1698.x)
  i1698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[2], i1698.y)
  i1698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[3], i1698.z)
  i1698.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[4], i1698.radial)
  i1698.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[5], i1698.speedModifier)
  i1698.space = i1699[6]
  i1698.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[7], i1698.orbitalX)
  i1698.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[8], i1698.orbitalY)
  i1698.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[9], i1698.orbitalZ)
  i1698.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[10], i1698.orbitalOffsetX)
  i1698.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[11], i1698.orbitalOffsetY)
  i1698.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[12], i1698.orbitalOffsetZ)
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1700 = root || new pc.ParticleSystemNoise()
  var i1701 = data
  i1700.enabled = !!i1701[0]
  i1700.separateAxes = !!i1701[1]
  i1700.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[2], i1700.strengthX)
  i1700.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[3], i1700.strengthY)
  i1700.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[4], i1700.strengthZ)
  i1700.frequency = i1701[5]
  i1700.damping = !!i1701[6]
  i1700.octaveCount = i1701[7]
  i1700.octaveMultiplier = i1701[8]
  i1700.octaveScale = i1701[9]
  i1700.quality = i1701[10]
  i1700.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[11], i1700.scrollSpeed)
  i1700.scrollSpeedMultiplier = i1701[12]
  i1700.remapEnabled = !!i1701[13]
  i1700.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[14], i1700.remapX)
  i1700.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[15], i1700.remapY)
  i1700.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[16], i1700.remapZ)
  i1700.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[17], i1700.positionAmount)
  i1700.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[18], i1700.rotationAmount)
  i1700.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[19], i1700.sizeAmount)
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1702 = root || new pc.ParticleSystemInheritVelocity()
  var i1703 = data
  i1702.enabled = !!i1703[0]
  i1702.mode = i1703[1]
  i1702.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[2], i1702.curve)
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1704 = root || new pc.ParticleSystemForceOverLifetime()
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[1], i1704.x)
  i1704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[2], i1704.y)
  i1704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[3], i1704.z)
  i1704.space = i1705[4]
  i1704.randomized = !!i1705[5]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1706 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1707 = data
  i1706.enabled = !!i1707[0]
  i1706.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[1], i1706.limit)
  i1706.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[2], i1706.limitX)
  i1706.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[3], i1706.limitY)
  i1706.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[4], i1706.limitZ)
  i1706.dampen = i1707[5]
  i1706.separateAxes = !!i1707[6]
  i1706.space = i1707[7]
  i1706.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[8], i1706.drag)
  i1706.multiplyDragByParticleSize = !!i1707[9]
  i1706.multiplyDragByParticleVelocity = !!i1707[10]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1709 = data
  i1708.enabled = !!i1709[0]
  request.r(i1709[1], i1709[2], 0, i1708, 'sharedMaterial')
  var i1711 = i1709[3]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 2, i1710, '')
  }
  i1708.sharedMaterials = i1710
  i1708.receiveShadows = !!i1709[4]
  i1708.shadowCastingMode = i1709[5]
  i1708.sortingLayerID = i1709[6]
  i1708.sortingOrder = i1709[7]
  i1708.lightmapIndex = i1709[8]
  i1708.lightmapSceneIndex = i1709[9]
  i1708.lightmapScaleOffset = new pc.Vec4( i1709[10], i1709[11], i1709[12], i1709[13] )
  i1708.lightProbeUsage = i1709[14]
  i1708.reflectionProbeUsage = i1709[15]
  request.r(i1709[16], i1709[17], 0, i1708, 'mesh')
  i1708.meshCount = i1709[18]
  i1708.activeVertexStreamsCount = i1709[19]
  i1708.alignment = i1709[20]
  i1708.renderMode = i1709[21]
  i1708.sortMode = i1709[22]
  i1708.lengthScale = i1709[23]
  i1708.velocityScale = i1709[24]
  i1708.cameraVelocityScale = i1709[25]
  i1708.normalDirection = i1709[26]
  i1708.sortingFudge = i1709[27]
  i1708.minParticleSize = i1709[28]
  i1708.maxParticleSize = i1709[29]
  i1708.pivot = new pc.Vec3( i1709[30], i1709[31], i1709[32] )
  request.r(i1709[33], i1709[34], 0, i1708, 'trailMaterial')
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1715 = data
  i1714.name = i1715[0]
  i1714.tagId = i1715[1]
  i1714.enabled = !!i1715[2]
  i1714.isStatic = !!i1715[3]
  i1714.layer = i1715[4]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1717 = data
  i1716.pivot = new pc.Vec2( i1717[0], i1717[1] )
  i1716.anchorMin = new pc.Vec2( i1717[2], i1717[3] )
  i1716.anchorMax = new pc.Vec2( i1717[4], i1717[5] )
  i1716.sizeDelta = new pc.Vec2( i1717[6], i1717[7] )
  i1716.anchoredPosition3D = new pc.Vec3( i1717[8], i1717[9], i1717[10] )
  i1716.rotation = new pc.Quat(i1717[11], i1717[12], i1717[13], i1717[14])
  i1716.scale = new pc.Vec3( i1717[15], i1717[16], i1717[17] )
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1719 = data
  i1718.cullTransparentMesh = !!i1719[0]
  return i1718
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.UI.Image' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'm_Sprite')
  i1720.m_Type = i1721[2]
  i1720.m_PreserveAspect = !!i1721[3]
  i1720.m_FillCenter = !!i1721[4]
  i1720.m_FillMethod = i1721[5]
  i1720.m_FillAmount = i1721[6]
  i1720.m_FillClockwise = !!i1721[7]
  i1720.m_FillOrigin = i1721[8]
  i1720.m_UseSpriteMesh = !!i1721[9]
  i1720.m_PixelsPerUnitMultiplier = i1721[10]
  request.r(i1721[11], i1721[12], 0, i1720, 'm_Material')
  i1720.m_Maskable = !!i1721[13]
  i1720.m_Color = new pc.Color(i1721[14], i1721[15], i1721[16], i1721[17])
  i1720.m_RaycastTarget = !!i1721[18]
  i1720.m_RaycastPadding = new pc.Vec4( i1721[19], i1721[20], i1721[21], i1721[22] )
  return i1720
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.UI.Button' )
  var i1723 = data
  i1722.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1723[0], i1722.m_OnClick)
  i1722.m_Navigation = request.d('UnityEngine.UI.Navigation', i1723[1], i1722.m_Navigation)
  i1722.m_Transition = i1723[2]
  i1722.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1723[3], i1722.m_Colors)
  i1722.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1723[4], i1722.m_SpriteState)
  i1722.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1723[5], i1722.m_AnimationTriggers)
  i1722.m_Interactable = !!i1723[6]
  request.r(i1723[7], i1723[8], 0, i1722, 'm_TargetGraphic')
  return i1722
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1725 = data
  i1724.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1725[0], i1724.m_PersistentCalls)
  return i1724
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1727 = data
  var i1729 = i1727[0]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.add(request.d('UnityEngine.Events.PersistentCall', i1729[i + 0]));
  }
  i1726.m_Calls = i1728
  return i1726
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'm_Target')
  i1732.m_TargetAssemblyTypeName = i1733[2]
  i1732.m_MethodName = i1733[3]
  i1732.m_Mode = i1733[4]
  i1732.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1733[5], i1732.m_Arguments)
  i1732.m_CallState = i1733[6]
  return i1732
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'm_ObjectArgument')
  i1734.m_ObjectArgumentAssemblyTypeName = i1735[2]
  i1734.m_IntArgument = i1735[3]
  i1734.m_FloatArgument = i1735[4]
  i1734.m_StringArgument = i1735[5]
  i1734.m_BoolArgument = !!i1735[6]
  return i1734
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1737 = data
  i1736.m_Mode = i1737[0]
  i1736.m_WrapAround = !!i1737[1]
  request.r(i1737[2], i1737[3], 0, i1736, 'm_SelectOnUp')
  request.r(i1737[4], i1737[5], 0, i1736, 'm_SelectOnDown')
  request.r(i1737[6], i1737[7], 0, i1736, 'm_SelectOnLeft')
  request.r(i1737[8], i1737[9], 0, i1736, 'm_SelectOnRight')
  return i1736
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1739 = data
  i1738.m_NormalColor = new pc.Color(i1739[0], i1739[1], i1739[2], i1739[3])
  i1738.m_HighlightedColor = new pc.Color(i1739[4], i1739[5], i1739[6], i1739[7])
  i1738.m_PressedColor = new pc.Color(i1739[8], i1739[9], i1739[10], i1739[11])
  i1738.m_SelectedColor = new pc.Color(i1739[12], i1739[13], i1739[14], i1739[15])
  i1738.m_DisabledColor = new pc.Color(i1739[16], i1739[17], i1739[18], i1739[19])
  i1738.m_ColorMultiplier = i1739[20]
  i1738.m_FadeDuration = i1739[21]
  return i1738
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1741 = data
  request.r(i1741[0], i1741[1], 0, i1740, 'm_HighlightedSprite')
  request.r(i1741[2], i1741[3], 0, i1740, 'm_PressedSprite')
  request.r(i1741[4], i1741[5], 0, i1740, 'm_SelectedSprite')
  request.r(i1741[6], i1741[7], 0, i1740, 'm_DisabledSprite')
  return i1740
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1743 = data
  i1742.m_NormalTrigger = i1743[0]
  i1742.m_HighlightedTrigger = i1743[1]
  i1742.m_PressedTrigger = i1743[2]
  i1742.m_SelectedTrigger = i1743[3]
  i1742.m_DisabledTrigger = i1743[4]
  return i1742
}

Deserializers["ItemDisplay"] = function (request, data, root) {
  var i1744 = root || request.c( 'ItemDisplay' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'item')
  request.r(i1745[2], i1745[3], 0, i1744, 'itemSprite')
  request.r(i1745[4], i1745[5], 0, i1744, 'adSlot')
  request.r(i1745[6], i1745[7], 0, i1744, 'priceSlot')
  request.r(i1745[8], i1745[9], 0, i1744, 'lockSlot')
  request.r(i1745[10], i1745[11], 0, i1744, 'fill')
  request.r(i1745[12], i1745[13], 0, i1744, 'starPk')
  request.r(i1745[14], i1745[15], 0, i1744, 'handTut')
  request.r(i1745[16], i1745[17], 0, i1744, 'blockPanelTut')
  request.r(i1745[18], i1745[19], 0, i1744, 'icoAd')
  request.r(i1745[20], i1745[21], 0, i1744, 'icoSkipAd')
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.index = i1747[1]
  i1746.startup = !!i1747[2]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.planeDistance = i1749[1]
  i1748.referencePixelsPerUnit = i1749[2]
  i1748.isFallbackOverlay = !!i1749[3]
  i1748.renderMode = i1749[4]
  i1748.renderOrder = i1749[5]
  i1748.sortingLayerName = i1749[6]
  i1748.sortingOrder = i1749[7]
  i1748.scaleFactor = i1749[8]
  request.r(i1749[9], i1749[10], 0, i1748, 'worldCamera')
  i1748.overrideSorting = !!i1749[11]
  i1748.pixelPerfect = !!i1749[12]
  i1748.targetDisplay = i1749[13]
  i1748.overridePixelPerfect = !!i1749[14]
  return i1748
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1751 = data
  i1750.m_UiScaleMode = i1751[0]
  i1750.m_ReferencePixelsPerUnit = i1751[1]
  i1750.m_ScaleFactor = i1751[2]
  i1750.m_ReferenceResolution = new pc.Vec2( i1751[3], i1751[4] )
  i1750.m_ScreenMatchMode = i1751[5]
  i1750.m_MatchWidthOrHeight = i1751[6]
  i1750.m_PhysicalUnit = i1751[7]
  i1750.m_FallbackScreenDPI = i1751[8]
  i1750.m_DefaultSpriteDPI = i1751[9]
  i1750.m_DynamicPixelsPerUnit = i1751[10]
  i1750.m_PresetInfoIsWorld = !!i1751[11]
  return i1750
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1753 = data
  i1752.m_IgnoreReversedGraphics = !!i1753[0]
  i1752.m_BlockingObjects = i1753[1]
  i1752.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1753[2] )
  return i1752
}

Deserializers["UI_Result"] = function (request, data, root) {
  var i1754 = root || request.c( 'UI_Result' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'rewardPos')
  i1754.testSpin = !!i1755[2]
  request.r(i1755[3], i1755[4], 0, i1754, 'bgAnimController')
  request.r(i1755[5], i1755[6], 0, i1754, 'characterManager')
  request.r(i1755[7], i1755[8], 0, i1754, 'rewardImg')
  request.r(i1755[9], i1755[10], 0, i1754, 'youGotPanel')
  request.r(i1755[11], i1755[12], 0, i1754, 'endgameCanvasGroup')
  request.r(i1755[13], i1755[14], 0, i1754, 'tutPanel')
  request.r(i1755[15], i1755[16], 0, i1754, 'tutHand')
  request.r(i1755[17], i1755[18], 0, i1754, 'card')
  request.r(i1755[19], i1755[20], 0, i1754, 'mainCard')
  request.r(i1755[21], i1755[22], 0, i1754, 'x2Btn')
  request.r(i1755[23], i1755[24], 0, i1754, 'x2Btn_OldVersion')
  request.r(i1755[25], i1755[26], 0, i1754, 'rewardSpinZone')
  request.r(i1755[27], i1755[28], 0, i1754, 'rewardRandomZone')
  request.r(i1755[29], i1755[30], 0, i1754, 'moneyText')
  var i1757 = i1755[31]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 2) {
  request.r(i1757[i + 0], i1757[i + 1], 2, i1756, '')
  }
  i1754.rewardSpr = i1756
  var i1759 = i1755[32]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 2, i1758, '')
  }
  i1754.rewardInfo = i1758
  var i1761 = i1755[33]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 2) {
  request.r(i1761[i + 0], i1761[i + 1], 2, i1760, '')
  }
  i1754.rewardOldVersionInfo = i1760
  var i1763 = i1755[34]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 2, i1762, '')
  }
  i1754.replayTxts = i1762
  request.r(i1755[35], i1755[36], 0, i1754, 'rewardCanvasGroup')
  request.r(i1755[37], i1755[38], 0, i1754, 'rewardCanvasGroupOldVer')
  request.r(i1755[39], i1755[40], 0, i1754, 'adIcon')
  request.r(i1755[41], i1755[42], 0, i1754, 'freeIcon')
  request.r(i1755[43], i1755[44], 0, i1754, 'adIconOldVer')
  request.r(i1755[45], i1755[46], 0, i1754, 'freeIconOlder')
  request.r(i1755[47], i1755[48], 0, i1754, 'spin')
  request.r(i1755[49], i1755[50], 0, i1754, 'arrowSpin')
  request.r(i1755[51], i1755[52], 0, i1754, 'arrowAnim')
  var i1765 = i1755[53]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 2) {
  request.r(i1765[i + 0], i1765[i + 1], 2, i1764, '')
  }
  i1754.adIco = i1764
  var i1767 = i1755[54]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 2) {
  request.r(i1767[i + 0], i1767[i + 1], 2, i1766, '')
  }
  i1754.skipAdIco = i1766
  return i1754
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.UI.Text' )
  var i1771 = data
  i1770.m_FontData = request.d('UnityEngine.UI.FontData', i1771[0], i1770.m_FontData)
  i1770.m_Text = i1771[1]
  request.r(i1771[2], i1771[3], 0, i1770, 'm_Material')
  i1770.m_Maskable = !!i1771[4]
  i1770.m_Color = new pc.Color(i1771[5], i1771[6], i1771[7], i1771[8])
  i1770.m_RaycastTarget = !!i1771[9]
  i1770.m_RaycastPadding = new pc.Vec4( i1771[10], i1771[11], i1771[12], i1771[13] )
  return i1770
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'm_Font')
  i1772.m_FontSize = i1773[2]
  i1772.m_FontStyle = i1773[3]
  i1772.m_BestFit = !!i1773[4]
  i1772.m_MinSize = i1773[5]
  i1772.m_MaxSize = i1773[6]
  i1772.m_Alignment = i1773[7]
  i1772.m_AlignByGeometry = !!i1773[8]
  i1772.m_RichText = !!i1773[9]
  i1772.m_HorizontalOverflow = i1773[10]
  i1772.m_VerticalOverflow = i1773[11]
  i1772.m_LineSpacing = i1773[12]
  return i1772
}

Deserializers["CountNumber"] = function (request, data, root) {
  var i1774 = root || request.c( 'CountNumber' )
  var i1775 = data
  i1774.countDuration = i1775[0]
  request.r(i1775[1], i1775[2], 0, i1774, 'numberText')
  i1774.automaticSetNum = !!i1775[3]
  return i1774
}

Deserializers["UI_Lobby"] = function (request, data, root) {
  var i1776 = root || request.c( 'UI_Lobby' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'settingPanel')
  request.r(i1777[2], i1777[3], 0, i1776, 'adsPanel')
  request.r(i1777[4], i1777[5], 0, i1776, 'testMoney1')
  request.r(i1777[6], i1777[7], 0, i1776, 'testMoney2')
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1779 = data
  i1778.m_Alpha = i1779[0]
  i1778.m_Interactable = !!i1779[1]
  i1778.m_BlocksRaycasts = !!i1779[2]
  i1778.m_IgnoreParentGroups = !!i1779[3]
  i1778.enabled = !!i1779[4]
  return i1778
}

Deserializers["UI_Ingame"] = function (request, data, root) {
  var i1780 = root || request.c( 'UI_Ingame' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, 'nextBtn')
  request.r(i1781[2], i1781[3], 0, i1780, 'doneBtn')
  request.r(i1781[4], i1781[5], 0, i1780, 'submitBtn')
  request.r(i1781[6], i1781[7], 0, i1780, 'battleBtn')
  var i1783 = i1781[8]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1783.length; i += 2) {
  request.r(i1783[i + 0], i1783[i + 1], 1, i1782, '')
  }
  i1780.tabMenuElements = i1782
  return i1780
}

Deserializers["TabMenuHandler"] = function (request, data, root) {
  var i1786 = root || request.c( 'TabMenuHandler' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'targetScaleBodyPart')
  i1786.isSliderShow = !!i1787[2]
  var i1789 = i1787[3]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('Tab')))
  for(var i = 0; i < i1789.length; i += 2) {
  request.r(i1789[i + 0], i1789[i + 1], 1, i1788, '')
  }
  i1786.tabSelection = i1788
  var i1791 = i1787[4]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('GridHandler')))
  for(var i = 0; i < i1791.length; i += 2) {
  request.r(i1791[i + 0], i1791[i + 1], 1, i1790, '')
  }
  i1786.tabContents = i1790
  request.r(i1787[5], i1787[6], 0, i1786, 'nextBtn')
  request.r(i1787[7], i1787[8], 0, i1786, 'prevBtn')
  i1786.fade = new pc.Color(i1787[9], i1787[10], i1787[11], i1787[12])
  request.r(i1787[13], i1787[14], 0, i1786, 'next_Btn')
  request.r(i1787[15], i1787[16], 0, i1786, 'done_Btn')
  request.r(i1787[17], i1787[18], 0, i1786, 'submit_Btn')
  request.r(i1787[19], i1787[20], 0, i1786, 'battle_Btn')
  request.r(i1787[21], i1787[22], 0, i1786, 'prev')
  request.r(i1787[23], i1787[24], 0, i1786, 'next')
  request.r(i1787[25], i1787[26], 0, i1786, 'subscriptionBtn')
  request.r(i1787[27], i1787[28], 0, i1786, 'slider')
  request.r(i1787[29], i1787[30], 0, i1786, 'handTut')
  return i1786
}

Deserializers["Tab"] = function (request, data, root) {
  var i1796 = root || request.c( 'Tab' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'bodyPartLink')
  request.r(i1797[2], i1797[3], 0, i1796, 'bubble')
  request.r(i1797[4], i1797[5], 0, i1796, 'check')
  i1796.selected = UnityEngine.Color32.ConstructColor(i1797[6], i1797[7], i1797[8], i1797[9])
  request.r(i1797[10], i1797[11], 0, i1796, 'fill')
  return i1796
}

Deserializers["Scale"] = function (request, data, root) {
  var i1798 = root || request.c( 'Scale' )
  var i1799 = data
  return i1798
}

Deserializers["BreathButton"] = function (request, data, root) {
  var i1800 = root || request.c( 'BreathButton' )
  var i1801 = data
  i1800.constantBreath = !!i1801[0]
  i1800.increaseScale = !!i1801[1]
  i1800.delayFirstTime = i1801[2]
  return i1800
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'm_Content')
  i1802.m_Horizontal = !!i1803[2]
  i1802.m_Vertical = !!i1803[3]
  i1802.m_MovementType = i1803[4]
  i1802.m_Elasticity = i1803[5]
  i1802.m_Inertia = !!i1803[6]
  i1802.m_DecelerationRate = i1803[7]
  i1802.m_ScrollSensitivity = i1803[8]
  request.r(i1803[9], i1803[10], 0, i1802, 'm_Viewport')
  request.r(i1803[11], i1803[12], 0, i1802, 'm_HorizontalScrollbar')
  request.r(i1803[13], i1803[14], 0, i1802, 'm_VerticalScrollbar')
  i1802.m_HorizontalScrollbarVisibility = i1803[15]
  i1802.m_VerticalScrollbarVisibility = i1803[16]
  i1802.m_HorizontalScrollbarSpacing = i1803[17]
  i1802.m_VerticalScrollbarSpacing = i1803[18]
  i1802.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1803[19], i1802.m_OnValueChanged)
  return i1802
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1805 = data
  i1804.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1805[0], i1804.m_PersistentCalls)
  return i1804
}

Deserializers["GridHandler"] = function (request, data, root) {
  var i1806 = root || request.c( 'GridHandler' )
  var i1807 = data
  request.r(i1807[0], i1807[1], 0, i1806, 'content')
  request.r(i1807[2], i1807[3], 0, i1806, 'grid')
  return i1806
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1809 = data
  i1808.m_ShowMaskGraphic = !!i1809[0]
  return i1808
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1811 = data
  i1810.m_StartCorner = i1811[0]
  i1810.m_StartAxis = i1811[1]
  i1810.m_CellSize = new pc.Vec2( i1811[2], i1811[3] )
  i1810.m_Spacing = new pc.Vec2( i1811[4], i1811[5] )
  i1810.m_Constraint = i1811[6]
  i1810.m_ConstraintCount = i1811[7]
  i1810.m_Padding = UnityEngine.RectOffset.FromPaddings(i1811[8], i1811[9], i1811[10], i1811[11])
  i1810.m_ChildAlignment = i1811[12]
  return i1810
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1813 = data
  i1812.m_HorizontalFit = i1813[0]
  i1812.m_VerticalFit = i1813[1]
  return i1812
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1814 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1815 = data
  request.r(i1815[0], i1815[1], 0, i1814, 'skeletonDataAsset')
  request.r(i1815[2], i1815[3], 0, i1814, 'additiveMaterial')
  request.r(i1815[4], i1815[5], 0, i1814, 'multiplyMaterial')
  request.r(i1815[6], i1815[7], 0, i1814, 'screenMaterial')
  i1814.initialSkinName = i1815[8]
  i1814.initialFlipX = !!i1815[9]
  i1814.initialFlipY = !!i1815[10]
  i1814.startingAnimation = i1815[11]
  i1814.startingLoop = !!i1815[12]
  i1814.timeScale = i1815[13]
  i1814.freeze = !!i1815[14]
  i1814.layoutScaleMode = i1815[15]
  i1814.updateWhenInvisible = i1815[16]
  i1814.allowMultipleCanvasRenderers = !!i1815[17]
  var i1817 = i1815[18]
  var i1816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 1, i1816, '')
  }
  i1814.canvasRenderers = i1816
  i1814.enableSeparatorSlots = !!i1815[19]
  i1814.updateSeparatorPartLocation = !!i1815[20]
  i1814.disableMeshAssignmentOnOverride = !!i1815[21]
  i1814.referenceSize = new pc.Vec2( i1815[22], i1815[23] )
  i1814.referenceScale = i1815[24]
  i1814.rectTransformSize = new pc.Vec2( i1815[25], i1815[26] )
  i1814.editReferenceRect = !!i1815[27]
  var i1819 = i1815[28]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( i1819[i + 0] );
  }
  i1814.separatorSlotNames = i1818
  var i1821 = i1815[29]
  var i1820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1821.length; i += 2) {
  request.r(i1821[i + 0], i1821[i + 1], 1, i1820, '')
  }
  i1814.separatorParts = i1820
  i1814.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1815[30], i1814.meshGenerator)
  i1814.updateTiming = i1815[31]
  i1814.unscaledTime = !!i1815[32]
  request.r(i1815[33], i1815[34], 0, i1814, 'm_Material')
  i1814.m_Maskable = !!i1815[35]
  i1814.m_Color = new pc.Color(i1815[36], i1815[37], i1815[38], i1815[39])
  i1814.m_RaycastTarget = !!i1815[40]
  i1814.m_RaycastPadding = new pc.Vec4( i1815[41], i1815[42], i1815[43], i1815[44] )
  return i1814
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1828 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1829 = data
  i1828.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1829[0], i1828.settings)
  return i1828
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1830 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1831 = data
  i1830.useClipping = !!i1831[0]
  i1830.zSpacing = i1831[1]
  i1830.pmaVertexColors = !!i1831[2]
  i1830.tintBlack = !!i1831[3]
  i1830.canvasGroupTintBlack = !!i1831[4]
  i1830.calculateTangents = !!i1831[5]
  i1830.addNormals = !!i1831[6]
  i1830.immutableTriangles = !!i1831[7]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1833 = data
  i1832.enabled = !!i1833[0]
  request.r(i1833[1], i1833[2], 0, i1832, 'sharedMaterial')
  var i1835 = i1833[3]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 2) {
  request.r(i1835[i + 0], i1835[i + 1], 2, i1834, '')
  }
  i1832.sharedMaterials = i1834
  i1832.receiveShadows = !!i1833[4]
  i1832.shadowCastingMode = i1833[5]
  i1832.sortingLayerID = i1833[6]
  i1832.sortingOrder = i1833[7]
  i1832.lightmapIndex = i1833[8]
  i1832.lightmapSceneIndex = i1833[9]
  i1832.lightmapScaleOffset = new pc.Vec4( i1833[10], i1833[11], i1833[12], i1833[13] )
  i1832.lightProbeUsage = i1833[14]
  i1832.reflectionProbeUsage = i1833[15]
  i1832.color = new pc.Color(i1833[16], i1833[17], i1833[18], i1833[19])
  request.r(i1833[20], i1833[21], 0, i1832, 'sprite')
  i1832.flipX = !!i1833[22]
  i1832.flipY = !!i1833[23]
  i1832.drawMode = i1833[24]
  i1832.size = new pc.Vec2( i1833[25], i1833[26] )
  i1832.tileMode = i1833[27]
  i1832.adaptiveModeThreshold = i1833[28]
  i1832.maskInteraction = i1833[29]
  i1832.spriteSortPoint = i1833[30]
  return i1832
}

Deserializers["CharacterManager"] = function (request, data, root) {
  var i1836 = root || request.c( 'CharacterManager' )
  var i1837 = data
  i1836.monsterBody = i1837[0]
  i1836.price = i1837[1]
  i1836.currentPrice = i1837[2]
  i1836.orgPrice = i1837[3]
  i1836.spawnMoney = !!i1837[4]
  request.r(i1837[5], i1837[6], 0, i1836, 'monsterTex')
  request.r(i1837[7], i1837[8], 0, i1836, 'monsterSprite')
  i1836.moneyBoostCount = i1837[9]
  i1836.textureStr = i1837[10]
  request.r(i1837[11], i1837[12], 0, i1836, 'sortingGroup')
  request.r(i1837[13], i1837[14], 0, i1836, 'headHolder')
  var i1839 = i1837[15]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 2) {
  request.r(i1839[i + 0], i1839[i + 1], 2, i1838, '')
  }
  i1836.bodies = i1838
  var i1841 = i1837[16]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 2, i1840, '')
  }
  i1836.boneFollowers = i1840
  request.r(i1837[17], i1837[18], 0, i1836, 'headController')
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1847 = data
  i1846.enabled = !!i1847[0]
  i1846.sortingLayerIndex = i1847[1]
  i1846.sortingOrder = i1847[2]
  i1846.sortingLayerName = i1847[3]
  return i1846
}

Deserializers["SortingLayerCharacter"] = function (request, data, root) {
  var i1848 = root || request.c( 'SortingLayerCharacter' )
  var i1849 = data
  i1848.offset = i1849[0]
  i1848.isDrag = !!i1849[1]
  return i1848
}

Deserializers["Spine.Unity.BoneFollower"] = function (request, data, root) {
  var i1850 = root || request.c( 'Spine.Unity.BoneFollower' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'skeletonRenderer')
  i1850.boneName = i1851[2]
  i1850.followXYPosition = !!i1851[3]
  i1850.followZPosition = !!i1851[4]
  i1850.followBoneRotation = !!i1851[5]
  i1850.followSkeletonFlip = !!i1851[6]
  i1850.followLocalScale = !!i1851[7]
  i1850.followParentWorldScale = !!i1851[8]
  i1850.maintainedAxisOrientation = i1851[9]
  i1850.initializeOnAwake = !!i1851[10]
  return i1850
}

Deserializers["HeadController"] = function (request, data, root) {
  var i1852 = root || request.c( 'HeadController' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'eye')
  request.r(i1853[2], i1853[3], 0, i1852, 'mouth')
  request.r(i1853[4], i1853[5], 0, i1852, 'acc')
  return i1852
}

Deserializers["TouchController"] = function (request, data, root) {
  var i1854 = root || request.c( 'TouchController' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'rb')
  i1854.speed = i1855[2]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'sharedMesh')
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'additionalVertexStreams')
  i1858.enabled = !!i1859[2]
  request.r(i1859[3], i1859[4], 0, i1858, 'sharedMaterial')
  var i1861 = i1859[5]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 2, i1860, '')
  }
  i1858.sharedMaterials = i1860
  i1858.receiveShadows = !!i1859[6]
  i1858.shadowCastingMode = i1859[7]
  i1858.sortingLayerID = i1859[8]
  i1858.sortingOrder = i1859[9]
  i1858.lightmapIndex = i1859[10]
  i1858.lightmapSceneIndex = i1859[11]
  i1858.lightmapScaleOffset = new pc.Vec4( i1859[12], i1859[13], i1859[14], i1859[15] )
  i1858.lightProbeUsage = i1859[16]
  i1858.reflectionProbeUsage = i1859[17]
  return i1858
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1862 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1863 = data
  i1862.loop = !!i1863[0]
  i1862.timeScale = i1863[1]
  request.r(i1863[2], i1863[3], 0, i1862, 'skeletonDataAsset')
  i1862.initialSkinName = i1863[4]
  i1862.fixPrefabOverrideViaMeshFilter = i1863[5]
  i1862.initialFlipX = !!i1863[6]
  i1862.initialFlipY = !!i1863[7]
  i1862.updateWhenInvisible = i1863[8]
  i1862.zSpacing = i1863[9]
  i1862.useClipping = !!i1863[10]
  i1862.immutableTriangles = !!i1863[11]
  i1862.pmaVertexColors = !!i1863[12]
  i1862.clearStateOnDisable = !!i1863[13]
  i1862.tintBlack = !!i1863[14]
  i1862.singleSubmesh = !!i1863[15]
  i1862.fixDrawOrder = !!i1863[16]
  i1862.addNormals = !!i1863[17]
  i1862.calculateTangents = !!i1863[18]
  i1862.maskInteraction = i1863[19]
  i1862.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1863[20], i1862.maskMaterials)
  i1862.disableRenderingOnOverride = !!i1863[21]
  i1862.updateTiming = i1863[22]
  i1862.unscaledTime = !!i1863[23]
  i1862._animationName = i1863[24]
  var i1865 = i1863[25]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( i1865[i + 0] );
  }
  i1862.separatorSlotNames = i1864
  return i1862
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1866 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1867 = data
  var i1869 = i1867[0]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 2, i1868, '')
  }
  i1866.materialsMaskDisabled = i1868
  var i1871 = i1867[1]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1866.materialsInsideMask = i1870
  var i1873 = i1867[2]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 2) {
  request.r(i1873[i + 0], i1873[i + 1], 2, i1872, '')
  }
  i1866.materialsOutsideMask = i1872
  return i1866
}

Deserializers["BgAnimController"] = function (request, data, root) {
  var i1874 = root || request.c( 'BgAnimController' )
  var i1875 = data
  i1874.bgIdx = i1875[0]
  var i1877 = i1875[1]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 2) {
  request.r(i1877[i + 0], i1877[i + 1], 2, i1876, '')
  }
  i1874.bgAnims = i1876
  i1874.isShowAnimBg = !!i1875[2]
  return i1874
}

Deserializers["ShopController"] = function (request, data, root) {
  var i1878 = root || request.c( 'ShopController' )
  var i1879 = data
  var i1881 = i1879[0]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 2) {
  request.r(i1881[i + 0], i1881[i + 1], 2, i1880, '')
  }
  i1878.heads = i1880
  var i1883 = i1879[1]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 2) {
  request.r(i1883[i + 0], i1883[i + 1], 2, i1882, '')
  }
  i1878.eyes = i1882
  var i1885 = i1879[2]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1878.mouths = i1884
  var i1887 = i1879[3]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1878.accs = i1886
  var i1889 = i1879[4]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1878.bodies = i1888
  request.r(i1879[5], i1879[6], 0, i1878, 'headContent')
  request.r(i1879[7], i1879[8], 0, i1878, 'eyeContent')
  request.r(i1879[9], i1879[10], 0, i1878, 'mouthContent')
  request.r(i1879[11], i1879[12], 0, i1878, 'accContents')
  request.r(i1879[13], i1879[14], 0, i1878, 'bodyContent')
  var i1891 = i1879[15]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1891.length; i += 2) {
  request.r(i1891[i + 0], i1891[i + 1], 1, i1890, '')
  }
  i1878.lockHead = i1890
  var i1893 = i1879[16]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 1, i1892, '')
  }
  i1878.lockEye = i1892
  var i1895 = i1879[17]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 1, i1894, '')
  }
  i1878.lockMouth = i1894
  var i1897 = i1879[18]
  var i1896 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 1, i1896, '')
  }
  i1878.lockAcc = i1896
  var i1899 = i1879[19]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 1, i1898, '')
  }
  i1878.lockBody = i1898
  var i1901 = i1879[20]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 1, i1900, '')
  }
  i1878.lockItem = i1900
  request.r(i1879[21], i1879[22], 0, i1878, 'head')
  request.r(i1879[23], i1879[24], 0, i1878, 'eye')
  request.r(i1879[25], i1879[26], 0, i1878, 'mouth')
  request.r(i1879[27], i1879[28], 0, i1878, 'acc')
  request.r(i1879[29], i1879[30], 0, i1878, 'body')
  request.r(i1879[31], i1879[32], 0, i1878, 'body2')
  request.r(i1879[33], i1879[34], 0, i1878, 'headHolder')
  request.r(i1879[35], i1879[36], 0, i1878, 'boneFollower')
  request.r(i1879[37], i1879[38], 0, i1878, 'boneFollower2')
  return i1878
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i1906 = root || request.c( 'UIHandler' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'curtainAnim')
  request.r(i1907[2], i1907[3], 0, i1906, 'bgAnim')
  request.r(i1907[4], i1907[5], 0, i1906, 'uI_Result')
  request.r(i1907[6], i1907[7], 0, i1906, 'uI_Ingame')
  request.r(i1907[8], i1907[9], 0, i1906, 'uI_Lobby')
  request.r(i1907[10], i1907[11], 0, i1906, 'settingPanel')
  request.r(i1907[12], i1907[13], 0, i1906, 'internetMessagePanel')
  request.r(i1907[14], i1907[15], 0, i1906, 'iapSuccess')
  request.r(i1907[16], i1907[17], 0, i1906, 'iapFail')
  request.r(i1907[18], i1907[19], 0, i1906, 'confirmPanel')
  request.r(i1907[20], i1907[21], 0, i1906, 'needMoreCoinPanel')
  request.r(i1907[22], i1907[23], 0, i1906, 'sharePanel')
  request.r(i1907[24], i1907[25], 0, i1906, 'previewLevelChallengePanel')
  request.r(i1907[26], i1907[27], 0, i1906, 'levelSelection')
  request.r(i1907[28], i1907[29], 0, i1906, 'loadingPanel')
  request.r(i1907[30], i1907[31], 0, i1906, 'limitArea')
  request.r(i1907[32], i1907[33], 0, i1906, 'fade')
  request.r(i1907[34], i1907[35], 0, i1906, 'adBreak')
  request.r(i1907[36], i1907[37], 0, i1906, 'newModePkPopup')
  request.r(i1907[38], i1907[39], 0, i1906, 'subPanel')
  request.r(i1907[40], i1907[41], 0, i1906, 'blackScreen')
  request.r(i1907[42], i1907[43], 0, i1906, 'leaderboard')
  request.r(i1907[44], i1907[45], 0, i1906, '_fade')
  request.r(i1907[46], i1907[47], 0, i1906, 'bodyAnim')
  request.r(i1907[48], i1907[49], 0, i1906, 'bodyAnim2')
  request.r(i1907[50], i1907[51], 0, i1906, 'bodyAnim3')
  request.r(i1907[52], i1907[53], 0, i1906, 'character')
  request.r(i1907[54], i1907[55], 0, i1906, 'noAdBtn')
  request.r(i1907[56], i1907[57], 0, i1906, 'noAdBtn_1')
  request.r(i1907[58], i1907[59], 0, i1906, 'moneyRain')
  return i1906
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i1908 = root || request.c( 'CameraHandler' )
  var i1909 = data
  i1908.defaultSize = i1909[0]
  i1908.aspectRatio = i1909[1]
  request.r(i1909[2], i1909[3], 0, i1908, 'characterManager')
  request.r(i1909[4], i1909[5], 0, i1908, 'confetti')
  var i1911 = i1909[6]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 2) {
  request.r(i1911[i + 0], i1911[i + 1], 2, i1910, '')
  }
  i1908.cams = i1910
  var i1913 = i1909[7]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 2) {
  request.r(i1913[i + 0], i1913[i + 1], 2, i1912, '')
  }
  i1908.cameras = i1912
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1919 = data
  i1918.enabled = !!i1919[0]
  i1918.aspect = i1919[1]
  i1918.orthographic = !!i1919[2]
  i1918.orthographicSize = i1919[3]
  i1918.backgroundColor = new pc.Color(i1919[4], i1919[5], i1919[6], i1919[7])
  i1918.nearClipPlane = i1919[8]
  i1918.farClipPlane = i1919[9]
  i1918.fieldOfView = i1919[10]
  i1918.depth = i1919[11]
  i1918.clearFlags = i1919[12]
  i1918.cullingMask = i1919[13]
  i1918.rect = i1919[14]
  request.r(i1919[15], i1919[16], 0, i1918, 'targetTexture')
  i1918.usePhysicalProperties = !!i1919[17]
  i1918.focalLength = i1919[18]
  i1918.sensorSize = new pc.Vec2( i1919[19], i1919[20] )
  i1918.lensShift = new pc.Vec2( i1919[21], i1919[22] )
  i1918.gateFit = i1919[23]
  return i1918
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1920 = root || request.c( 'SoundManager' )
  var i1921 = data
  var i1923 = i1921[0]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('SoundAudioClip', i1923[i + 0]) );
  }
  i1920.soundAudioClips = i1922
  var i1925 = i1921[1]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('SoundAudioClip', i1925[i + 0]) );
  }
  i1920.itemClickedAudio = i1924
  var i1927 = i1921[2]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('SoundAudioClip', i1927[i + 0]) );
  }
  i1920.textFloatInPk = i1926
  return i1920
}

Deserializers["SoundAudioClip"] = function (request, data, root) {
  var i1930 = root || request.c( 'SoundAudioClip' )
  var i1931 = data
  i1930.sound = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'audioClip')
  i1930.volume = i1931[3]
  i1930.pitch = i1931[4]
  i1930.loop = !!i1931[5]
  request.r(i1931[6], i1931[7], 0, i1930, 'source')
  return i1930
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'm_FirstSelected')
  i1932.m_sendNavigationEvents = !!i1933[2]
  i1932.m_DragThreshold = i1933[3]
  return i1932
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1935 = data
  i1934.m_HorizontalAxis = i1935[0]
  i1934.m_VerticalAxis = i1935[1]
  i1934.m_SubmitButton = i1935[2]
  i1934.m_CancelButton = i1935[3]
  i1934.m_InputActionsPerSecond = i1935[4]
  i1934.m_RepeatDelay = i1935[5]
  i1934.m_ForceModuleActive = !!i1935[6]
  return i1934
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1936 = root || request.c( 'GameManager' )
  var i1937 = data
  i1936.mode = i1937[0]
  i1936.countTurn = i1937[1]
  i1936.timePerCheckInternet = i1937[2]
  i1936.data1 = i1937[3]
  i1936.data2 = i1937[4]
  i1936.data3 = i1937[5]
  i1936.dataArr1 = i1937[6]
  i1936.dataArr2 = i1937[7]
  i1936.dataArr3 = i1937[8]
  i1936.bodyPart = i1937[9]
  i1936.folderName1 = i1937[10]
  i1936.folderName2 = i1937[11]
  i1936.folderName3 = i1937[12]
  i1936.path1 = i1937[13]
  i1936.path2 = i1937[14]
  i1936.path3 = i1937[15]
  request.r(i1937[16], i1937[17], 0, i1936, 'skeleonAnimation1')
  request.r(i1937[18], i1937[19], 0, i1936, 'skeleonAnimation2')
  request.r(i1937[20], i1937[21], 0, i1936, 'skeleonAnimation3')
  request.r(i1937[22], i1937[23], 0, i1936, 'shopController')
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1939 = data
  i1938.ambientIntensity = i1939[0]
  i1938.reflectionIntensity = i1939[1]
  i1938.ambientMode = i1939[2]
  i1938.ambientLight = new pc.Color(i1939[3], i1939[4], i1939[5], i1939[6])
  i1938.ambientSkyColor = new pc.Color(i1939[7], i1939[8], i1939[9], i1939[10])
  i1938.ambientGroundColor = new pc.Color(i1939[11], i1939[12], i1939[13], i1939[14])
  i1938.ambientEquatorColor = new pc.Color(i1939[15], i1939[16], i1939[17], i1939[18])
  i1938.fogColor = new pc.Color(i1939[19], i1939[20], i1939[21], i1939[22])
  i1938.fogEndDistance = i1939[23]
  i1938.fogStartDistance = i1939[24]
  i1938.fogDensity = i1939[25]
  i1938.fog = !!i1939[26]
  request.r(i1939[27], i1939[28], 0, i1938, 'skybox')
  i1938.fogMode = i1939[29]
  var i1941 = i1939[30]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1941[i + 0]) );
  }
  i1938.lightmaps = i1940
  i1938.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1939[31], i1938.lightProbes)
  i1938.lightmapsMode = i1939[32]
  i1938.mixedBakeMode = i1939[33]
  i1938.environmentLightingMode = i1939[34]
  i1938.ambientProbe = new pc.SphericalHarmonicsL2(i1939[35])
  i1938.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1939[36])
  i1938.useReferenceAmbientProbe = !!i1939[37]
  request.r(i1939[38], i1939[39], 0, i1938, 'customReflection')
  request.r(i1939[40], i1939[41], 0, i1938, 'defaultReflection')
  i1938.defaultReflectionMode = i1939[42]
  i1938.defaultReflectionResolution = i1939[43]
  i1938.sunLightObjectId = i1939[44]
  i1938.pixelLightCount = i1939[45]
  i1938.defaultReflectionHDR = !!i1939[46]
  i1938.hasLightDataAsset = !!i1939[47]
  i1938.hasManualGenerate = !!i1939[48]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'lightmapColor')
  request.r(i1945[2], i1945[3], 0, i1944, 'lightmapDirection')
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1946 = root || new UnityEngine.LightProbes()
  var i1947 = data
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1957[i + 0]));
  }
  i1954.ShaderCompilationErrors = i1956
  i1954.name = i1955[1]
  i1954.guid = i1955[2]
  var i1959 = i1955[3]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( i1959[i + 0] );
  }
  i1954.shaderDefinedKeywords = i1958
  var i1961 = i1955[4]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1961[i + 0]) );
  }
  i1954.passes = i1960
  var i1963 = i1955[5]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1963[i + 0]) );
  }
  i1954.usePasses = i1962
  var i1965 = i1955[6]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1965[i + 0]) );
  }
  i1954.defaultParameterValues = i1964
  request.r(i1955[7], i1955[8], 0, i1954, 'unityFallbackShader')
  i1954.readDepth = !!i1955[9]
  i1954.isCreatedByShaderGraph = !!i1955[10]
  i1954.usedBatchUniforms = i1955[11]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1969 = data
  i1968.shaderName = i1969[0]
  i1968.errorMessage = i1969[1]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1972 = root || new pc.UnityShaderPass()
  var i1973 = data
  i1972.id = i1973[0]
  i1972.subShaderIndex = i1973[1]
  i1972.name = i1973[2]
  i1972.passType = i1973[3]
  i1972.grabPassTextureName = i1973[4]
  i1972.usePass = !!i1973[5]
  i1972.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[6], i1972.zTest)
  i1972.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[7], i1972.zWrite)
  i1972.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[8], i1972.culling)
  i1972.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1973[9], i1972.blending)
  i1972.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1973[10], i1972.alphaBlending)
  i1972.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[11], i1972.colorWriteMask)
  i1972.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[12], i1972.offsetUnits)
  i1972.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[13], i1972.offsetFactor)
  i1972.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[14], i1972.stencilRef)
  i1972.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[15], i1972.stencilReadMask)
  i1972.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[16], i1972.stencilWriteMask)
  i1972.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[17], i1972.stencilOp)
  i1972.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[18], i1972.stencilOpFront)
  i1972.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[19], i1972.stencilOpBack)
  var i1975 = i1973[20]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1975[i + 0]) );
  }
  i1972.tags = i1974
  var i1977 = i1973[21]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1972.passDefinedKeywords = i1976
  var i1979 = i1973[22]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1979[i + 0]) );
  }
  i1972.passDefinedKeywordGroups = i1978
  var i1981 = i1973[23]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1981[i + 0]) );
  }
  i1972.variants = i1980
  var i1983 = i1973[24]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1983[i + 0]) );
  }
  i1972.excludedVariants = i1982
  i1972.hasDepthReader = !!i1973[25]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1985 = data
  i1984.val = i1985[0]
  i1984.name = i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1987 = data
  i1986.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[0], i1986.src)
  i1986.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[1], i1986.dst)
  i1986.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[2], i1986.op)
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1989 = data
  i1988.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[0], i1988.pass)
  i1988.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[1], i1988.fail)
  i1988.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[2], i1988.zFail)
  i1988.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[3], i1988.comp)
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.value = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( i1999[i + 0] );
  }
  i1996.keywords = i1998
  i1996.hasDiscard = !!i1997[1]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2003 = data
  i2002.passId = i2003[0]
  i2002.subShaderIndex = i2003[1]
  var i2005 = i2003[2]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( i2005[i + 0] );
  }
  i2002.keywords = i2004
  i2002.vertexProgram = i2003[3]
  i2002.fragmentProgram = i2003[4]
  i2002.readDepth = !!i2003[5]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'shader')
  i2008.pass = i2009[2]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2013 = data
  i2012.name = i2013[0]
  i2012.type = i2013[1]
  i2012.value = new pc.Vec4( i2013[2], i2013[3], i2013[4], i2013[5] )
  i2012.textureValue = i2013[6]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2015 = data
  i2014.name = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'texture')
  i2014.aabb = i2015[3]
  i2014.vertices = i2015[4]
  i2014.triangles = i2015[5]
  i2014.textureRect = UnityEngine.Rect.MinMaxRect(i2015[6], i2015[7], i2015[8], i2015[9])
  i2014.packedRect = UnityEngine.Rect.MinMaxRect(i2015[10], i2015[11], i2015[12], i2015[13])
  i2014.border = new pc.Vec4( i2015[14], i2015[15], i2015[16], i2015[17] )
  i2014.transparency = i2015[18]
  i2014.bounds = i2015[19]
  i2014.pixelsPerUnit = i2015[20]
  i2014.textureWidth = i2015[21]
  i2014.textureHeight = i2015[22]
  i2014.nativeSize = new pc.Vec2( i2015[23], i2015[24] )
  i2014.pivot = new pc.Vec2( i2015[25], i2015[26] )
  i2014.textureRectOffset = new pc.Vec2( i2015[27], i2015[28] )
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2017 = data
  i2016.name = i2017[0]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.ascent = i2019[1]
  i2018.originalLineHeight = i2019[2]
  i2018.fontSize = i2019[3]
  var i2021 = i2019[4]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2021[i + 0]) );
  }
  i2018.characterInfo = i2020
  request.r(i2019[5], i2019[6], 0, i2018, 'texture')
  i2018.originalFontSize = i2019[7]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2025 = data
  i2024.index = i2025[0]
  i2024.advance = i2025[1]
  i2024.bearing = i2025[2]
  i2024.glyphWidth = i2025[3]
  i2024.glyphHeight = i2025[4]
  i2024.minX = i2025[5]
  i2024.maxX = i2025[6]
  i2024.minY = i2025[7]
  i2024.maxY = i2025[8]
  i2024.uvBottomLeftX = i2025[9]
  i2024.uvBottomLeftY = i2025[10]
  i2024.uvBottomRightX = i2025[11]
  i2024.uvBottomRightY = i2025[12]
  i2024.uvTopLeftX = i2025[13]
  i2024.uvTopLeftY = i2025[14]
  i2024.uvTopRightX = i2025[15]
  i2024.uvTopRightY = i2025[16]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.bytes64 = i2027[1]
  i2026.data = i2027[2]
  return i2026
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2028 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2029 = data
  var i2031 = i2029[0]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 2, i2030, '')
  }
  i2028.atlasAssets = i2030
  i2028.scale = i2029[1]
  request.r(i2029[2], i2029[3], 0, i2028, 'skeletonJSON')
  i2028.isUpgradingBlendModeMaterials = !!i2029[4]
  i2028.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2029[5], i2028.blendModeMaterials)
  var i2033 = i2029[6]
  var i2032 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 1, i2032, '')
  }
  i2028.skeletonDataModifiers = i2032
  var i2035 = i2029[7]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( i2035[i + 0] );
  }
  i2028.fromAnimation = i2034
  var i2037 = i2029[8]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( i2037[i + 0] );
  }
  i2028.toAnimation = i2036
  i2028.duration = i2029[9]
  i2028.defaultMix = i2029[10]
  request.r(i2029[11], i2029[12], 0, i2028, 'controller')
  return i2028
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2040 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2041 = data
  i2040.applyAdditiveMaterial = !!i2041[0]
  var i2043 = i2041[1]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2043[i + 0]));
  }
  i2040.additiveMaterials = i2042
  var i2045 = i2041[2]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2045[i + 0]));
  }
  i2040.multiplyMaterials = i2044
  var i2047 = i2041[3]
  var i2046 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2047[i + 0]));
  }
  i2040.screenMaterials = i2046
  i2040.requiresBlendModeMaterials = !!i2041[4]
  return i2040
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2050 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2051 = data
  i2050.pageName = i2051[0]
  request.r(i2051[1], i2051[2], 0, i2050, 'material')
  return i2050
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2054 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'atlasFile')
  var i2057 = i2055[2]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 2, i2056, '')
  }
  i2054.materials = i2056
  return i2054
}

Deserializers["Item"] = function (request, data, root) {
  var i2058 = root || request.c( 'Item' )
  var i2059 = data
  i2058.id = i2059[0]
  i2058.bodypartName = i2059[1]
  request.r(i2059[2], i2059[3], 0, i2058, 'preview')
  request.r(i2059[4], i2059[5], 0, i2058, 'part')
  i2058.isAd = !!i2059[6]
  i2058.adNum = i2059[7]
  i2058.price = i2059[8]
  i2058.bodyPart = i2059[9]
  i2058.specialPos = !!i2059[10]
  i2058.realPos = new pc.Vec3( i2059[11], i2059[12], i2059[13] )
  i2058.catalogue = i2059[14]
  i2058.dataAsset = i2059[15]
  i2058.pkTheme = i2059[16]
  i2058.priority = i2059[17]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2061 = data
  var i2063 = i2061[0]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2063[i + 0]) );
  }
  i2060.files = i2062
  i2060.componentToPrefabIds = i2061[1]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2067 = data
  i2066.path = i2067[0]
  request.r(i2067[1], i2067[2], 0, i2066, 'unityObject')
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2069 = data
  var i2071 = i2069[0]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2071[i + 0]) );
  }
  i2068.scriptsExecutionOrder = i2070
  var i2073 = i2069[1]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2073[i + 0]) );
  }
  i2068.sortingLayers = i2072
  var i2075 = i2069[2]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2075[i + 0]) );
  }
  i2068.cullingLayers = i2074
  i2068.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2069[3], i2068.timeSettings)
  i2068.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2069[4], i2068.physicsSettings)
  i2068.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2069[5], i2068.physics2DSettings)
  i2068.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2069[6], i2068.qualitySettings)
  i2068.enableRealtimeShadows = !!i2069[7]
  i2068.enableAutoInstancing = !!i2069[8]
  i2068.enableDynamicBatching = !!i2069[9]
  i2068.lightmapEncodingQuality = i2069[10]
  i2068.desiredColorSpace = i2069[11]
  var i2077 = i2069[12]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( i2077[i + 0] );
  }
  i2068.allTags = i2076
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2081 = data
  i2080.name = i2081[0]
  i2080.value = i2081[1]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2085 = data
  i2084.id = i2085[0]
  i2084.name = i2085[1]
  i2084.value = i2085[2]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2089 = data
  i2088.id = i2089[0]
  i2088.name = i2089[1]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2091 = data
  i2090.fixedDeltaTime = i2091[0]
  i2090.maximumDeltaTime = i2091[1]
  i2090.timeScale = i2091[2]
  i2090.maximumParticleTimestep = i2091[3]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2093 = data
  i2092.gravity = new pc.Vec3( i2093[0], i2093[1], i2093[2] )
  i2092.defaultSolverIterations = i2093[3]
  i2092.bounceThreshold = i2093[4]
  i2092.autoSyncTransforms = !!i2093[5]
  i2092.autoSimulation = !!i2093[6]
  var i2095 = i2093[7]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2095[i + 0]) );
  }
  i2092.collisionMatrix = i2094
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2099 = data
  i2098.enabled = !!i2099[0]
  i2098.layerId = i2099[1]
  i2098.otherLayerId = i2099[2]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'material')
  i2100.gravity = new pc.Vec2( i2101[2], i2101[3] )
  i2100.positionIterations = i2101[4]
  i2100.velocityIterations = i2101[5]
  i2100.velocityThreshold = i2101[6]
  i2100.maxLinearCorrection = i2101[7]
  i2100.maxAngularCorrection = i2101[8]
  i2100.maxTranslationSpeed = i2101[9]
  i2100.maxRotationSpeed = i2101[10]
  i2100.baumgarteScale = i2101[11]
  i2100.baumgarteTOIScale = i2101[12]
  i2100.timeToSleep = i2101[13]
  i2100.linearSleepTolerance = i2101[14]
  i2100.angularSleepTolerance = i2101[15]
  i2100.defaultContactOffset = i2101[16]
  i2100.autoSimulation = !!i2101[17]
  i2100.queriesHitTriggers = !!i2101[18]
  i2100.queriesStartInColliders = !!i2101[19]
  i2100.callbacksOnDisable = !!i2101[20]
  i2100.reuseCollisionCallbacks = !!i2101[21]
  i2100.autoSyncTransforms = !!i2101[22]
  var i2103 = i2101[23]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2103[i + 0]) );
  }
  i2100.collisionMatrix = i2102
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2107 = data
  i2106.enabled = !!i2107[0]
  i2106.layerId = i2107[1]
  i2106.otherLayerId = i2107[2]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2109 = data
  var i2111 = i2109[0]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2111[i + 0]) );
  }
  i2108.qualityLevels = i2110
  var i2113 = i2109[1]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( i2113[i + 0] );
  }
  i2108.names = i2112
  i2108.shadows = i2109[2]
  i2108.anisotropicFiltering = i2109[3]
  i2108.antiAliasing = i2109[4]
  i2108.lodBias = i2109[5]
  i2108.shadowCascades = i2109[6]
  i2108.shadowDistance = i2109[7]
  i2108.shadowmaskMode = i2109[8]
  i2108.shadowProjection = i2109[9]
  i2108.shadowResolution = i2109[10]
  i2108.softParticles = !!i2109[11]
  i2108.softVegetation = !!i2109[12]
  i2108.activeColorSpace = i2109[13]
  i2108.desiredColorSpace = i2109[14]
  i2108.masterTextureLimit = i2109[15]
  i2108.maxQueuedFrames = i2109[16]
  i2108.particleRaycastBudget = i2109[17]
  i2108.pixelLightCount = i2109[18]
  i2108.realtimeReflectionProbes = !!i2109[19]
  i2108.shadowCascade2Split = i2109[20]
  i2108.shadowCascade4Split = new pc.Vec3( i2109[21], i2109[22], i2109[23] )
  i2108.streamingMipmapsActive = !!i2109[24]
  i2108.vSyncCount = i2109[25]
  i2108.asyncUploadBufferSize = i2109[26]
  i2108.asyncUploadTimeSlice = i2109[27]
  i2108.billboardsFaceCameraPosition = !!i2109[28]
  i2108.shadowNearPlaneOffset = i2109[29]
  i2108.streamingMipmapsMemoryBudget = i2109[30]
  i2108.maximumLODLevel = i2109[31]
  i2108.streamingMipmapsAddAllCameras = !!i2109[32]
  i2108.streamingMipmapsMaxLevelReduction = i2109[33]
  i2108.streamingMipmapsRenderersPerFrame = i2109[34]
  i2108.resolutionScalingFixedDPIFactor = i2109[35]
  i2108.streamingMipmapsMaxFileIORequests = i2109[36]
  i2108.currentQualityLevel = i2109[37]
  return i2108
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[16],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[16],"93":[48],"94":[95],"96":[95],"15":[7],"97":[7],"22":[23],"98":[16],"99":[7],"100":[8,7],"42":[48],"38":[8,7],"101":[102,48],"103":[48,47],"104":[48],"105":[71],"106":[79],"107":[108],"109":[110],"111":[7],"112":[7],"18":[15],"10":[8,7],"113":[7],"17":[15],"37":[7],"35":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"36":[7],"119":[7],"120":[8,7],"121":[7],"34":[7],"122":[7],"123":[7],"23":[8,7],"124":[7],"125":[55],"126":[55],"56":[55],"127":[55],"128":[16],"129":[16],"130":[40],"131":[7,8],"132":[133]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","ItemDisplay","UnityEngine.MonoBehaviour","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UI_Result","BgAnimController","CharacterManager","CountNumber","UnityEngine.UI.Text","UnityEngine.Font","UI_Lobby","UnityEngine.CanvasGroup","UI_Ingame","TabMenuHandler","Tab","GridHandler","Scale","UIHandler","BreathButton","UnityEngine.UI.ScrollRect","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ContentSizeFitter","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.SpriteRenderer","UnityEngine.Rendering.SortingGroup","Spine.Unity.SkeletonAnimation","Spine.Unity.BoneFollower","HeadController","SortingLayerCharacter","TouchController","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","ShopController","Item","CameraHandler","UnityEngine.AudioListener","SoundManager","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CustomSlider","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","Coffee.UIExtensions.UIParticle","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer"]

Deserializers.unityVersion = "2020.3.43f1";

Deserializers.productName = "Dance Monster: DIY Makeover";

Deserializers.lunaInitializationTime = "01/09/2024 10:38:59";

Deserializers.lunaDaysRunning = "0.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "19925";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.dancemonster.diy.makeover.mixmonster";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "f18d9d93-71b8-412f-8cd0-124cad9d0f79";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

