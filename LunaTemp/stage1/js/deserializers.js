var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.JointSpring' )
  var i2661 = data
  i2660.spring = i2661[0]
  i2660.damper = i2661[1]
  i2660.targetPosition = i2661[2]
  return i2660
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.JointMotor' )
  var i2663 = data
  i2662.m_TargetVelocity = i2663[0]
  i2662.m_Force = i2663[1]
  i2662.m_FreeSpin = i2663[2]
  return i2662
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.JointLimits' )
  var i2665 = data
  i2664.m_Min = i2665[0]
  i2664.m_Max = i2665[1]
  i2664.m_Bounciness = i2665[2]
  i2664.m_BounceMinVelocity = i2665[3]
  i2664.m_ContactDistance = i2665[4]
  i2664.minBounce = i2665[5]
  i2664.maxBounce = i2665[6]
  return i2664
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.JointDrive' )
  var i2667 = data
  i2666.m_PositionSpring = i2667[0]
  i2666.m_PositionDamper = i2667[1]
  i2666.m_MaximumForce = i2667[2]
  return i2666
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2669 = data
  i2668.m_Spring = i2669[0]
  i2668.m_Damper = i2669[1]
  return i2668
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2671 = data
  i2670.m_Limit = i2671[0]
  i2670.m_Bounciness = i2671[1]
  i2670.m_ContactDistance = i2671[2]
  return i2670
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2673 = data
  i2672.m_ExtremumSlip = i2673[0]
  i2672.m_ExtremumValue = i2673[1]
  i2672.m_AsymptoteSlip = i2673[2]
  i2672.m_AsymptoteValue = i2673[3]
  i2672.m_Stiffness = i2673[4]
  return i2672
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2674 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2675 = data
  i2674.m_LowerAngle = i2675[0]
  i2674.m_UpperAngle = i2675[1]
  return i2674
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2677 = data
  i2676.m_MotorSpeed = i2677[0]
  i2676.m_MaximumMotorTorque = i2677[1]
  return i2676
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2679 = data
  i2678.m_DampingRatio = i2679[0]
  i2678.m_Frequency = i2679[1]
  i2678.m_Angle = i2679[2]
  return i2678
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2681 = data
  i2680.m_LowerTranslation = i2681[0]
  i2680.m_UpperTranslation = i2681[1]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2682 = root || new pc.UnityMaterial()
  var i2683 = data
  i2682.name = i2683[0]
  request.r(i2683[1], i2683[2], 0, i2682, 'shader')
  i2682.renderQueue = i2683[3]
  i2682.enableInstancing = !!i2683[4]
  var i2685 = i2683[5]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2685[i + 0]) );
  }
  i2682.floatParameters = i2684
  var i2687 = i2683[6]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2687[i + 0]) );
  }
  i2682.colorParameters = i2686
  var i2689 = i2683[7]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2689[i + 0]) );
  }
  i2682.vectorParameters = i2688
  var i2691 = i2683[8]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2691[i + 0]) );
  }
  i2682.textureParameters = i2690
  var i2693 = i2683[9]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2693[i + 0]) );
  }
  i2682.materialFlags = i2692
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2697 = data
  i2696.name = i2697[0]
  i2696.value = i2697[1]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2701 = data
  i2700.name = i2701[0]
  i2700.value = new pc.Color(i2701[1], i2701[2], i2701[3], i2701[4])
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2705 = data
  i2704.name = i2705[0]
  i2704.value = new pc.Vec4( i2705[1], i2705[2], i2705[3], i2705[4] )
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2709 = data
  i2708.name = i2709[0]
  request.r(i2709[1], i2709[2], 0, i2708, 'value')
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2713 = data
  i2712.name = i2713[0]
  i2712.enabled = !!i2713[1]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2715 = data
  i2714.name = i2715[0]
  i2714.width = i2715[1]
  i2714.height = i2715[2]
  i2714.mipmapCount = i2715[3]
  i2714.anisoLevel = i2715[4]
  i2714.filterMode = i2715[5]
  i2714.hdr = !!i2715[6]
  i2714.format = i2715[7]
  i2714.wrapMode = i2715[8]
  i2714.alphaIsTransparency = !!i2715[9]
  i2714.alphaSource = i2715[10]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2717 = data
  i2716.position = new pc.Vec3( i2717[0], i2717[1], i2717[2] )
  i2716.scale = new pc.Vec3( i2717[3], i2717[4], i2717[5] )
  i2716.rotation = new pc.Quat(i2717[6], i2717[7], i2717[8], i2717[9])
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2719 = data
  i2718.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2719[0], i2718.main)
  i2718.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2719[1], i2718.colorBySpeed)
  i2718.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2719[2], i2718.colorOverLifetime)
  i2718.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2719[3], i2718.emission)
  i2718.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2719[4], i2718.rotationBySpeed)
  i2718.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2719[5], i2718.rotationOverLifetime)
  i2718.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2719[6], i2718.shape)
  i2718.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2719[7], i2718.sizeBySpeed)
  i2718.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2719[8], i2718.sizeOverLifetime)
  i2718.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2719[9], i2718.textureSheetAnimation)
  i2718.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2719[10], i2718.velocityOverLifetime)
  i2718.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2719[11], i2718.noise)
  i2718.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2719[12], i2718.inheritVelocity)
  i2718.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2719[13], i2718.forceOverLifetime)
  i2718.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2719[14], i2718.limitVelocityOverLifetime)
  i2718.useAutoRandomSeed = !!i2719[15]
  i2718.randomSeed = i2719[16]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2720 = root || new pc.ParticleSystemMain()
  var i2721 = data
  i2720.duration = i2721[0]
  i2720.loop = !!i2721[1]
  i2720.prewarm = !!i2721[2]
  i2720.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[3], i2720.startDelay)
  i2720.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[4], i2720.startLifetime)
  i2720.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[5], i2720.startSpeed)
  i2720.startSize3D = !!i2721[6]
  i2720.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[7], i2720.startSizeX)
  i2720.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[8], i2720.startSizeY)
  i2720.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[9], i2720.startSizeZ)
  i2720.startRotation3D = !!i2721[10]
  i2720.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[11], i2720.startRotationX)
  i2720.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[12], i2720.startRotationY)
  i2720.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[13], i2720.startRotationZ)
  i2720.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2721[14], i2720.startColor)
  i2720.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[15], i2720.gravityModifier)
  i2720.simulationSpace = i2721[16]
  request.r(i2721[17], i2721[18], 0, i2720, 'customSimulationSpace')
  i2720.simulationSpeed = i2721[19]
  i2720.useUnscaledTime = !!i2721[20]
  i2720.scalingMode = i2721[21]
  i2720.playOnAwake = !!i2721[22]
  i2720.maxParticles = i2721[23]
  i2720.emitterVelocityMode = i2721[24]
  i2720.stopAction = i2721[25]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2722 = root || new pc.MinMaxCurve()
  var i2723 = data
  i2722.mode = i2723[0]
  i2722.curveMin = new pc.AnimationCurve( { keys_flow: i2723[1] } )
  i2722.curveMax = new pc.AnimationCurve( { keys_flow: i2723[2] } )
  i2722.curveMultiplier = i2723[3]
  i2722.constantMin = i2723[4]
  i2722.constantMax = i2723[5]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2724 = root || new pc.MinMaxGradient()
  var i2725 = data
  i2724.mode = i2725[0]
  i2724.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2725[1], i2724.gradientMin)
  i2724.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2725[2], i2724.gradientMax)
  i2724.colorMin = new pc.Color(i2725[3], i2725[4], i2725[5], i2725[6])
  i2724.colorMax = new pc.Color(i2725[7], i2725[8], i2725[9], i2725[10])
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2727 = data
  i2726.mode = i2727[0]
  var i2729 = i2727[1]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2729[i + 0]) );
  }
  i2726.colorKeys = i2728
  var i2731 = i2727[2]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2731[i + 0]) );
  }
  i2726.alphaKeys = i2730
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2732 = root || new pc.ParticleSystemColorBySpeed()
  var i2733 = data
  i2732.enabled = !!i2733[0]
  i2732.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2733[1], i2732.color)
  i2732.range = new pc.Vec2( i2733[2], i2733[3] )
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2737 = data
  i2736.color = new pc.Color(i2737[0], i2737[1], i2737[2], i2737[3])
  i2736.time = i2737[4]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2741 = data
  i2740.alpha = i2741[0]
  i2740.time = i2741[1]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2742 = root || new pc.ParticleSystemColorOverLifetime()
  var i2743 = data
  i2742.enabled = !!i2743[0]
  i2742.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2743[1], i2742.color)
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2744 = root || new pc.ParticleSystemEmitter()
  var i2745 = data
  i2744.enabled = !!i2745[0]
  i2744.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[1], i2744.rateOverTime)
  i2744.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[2], i2744.rateOverDistance)
  var i2747 = i2745[3]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2747[i + 0]) );
  }
  i2744.bursts = i2746
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2750 = root || new pc.ParticleSystemBurst()
  var i2751 = data
  i2750.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[0], i2750.count)
  i2750.cycleCount = i2751[1]
  i2750.minCount = i2751[2]
  i2750.maxCount = i2751[3]
  i2750.repeatInterval = i2751[4]
  i2750.time = i2751[5]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2752 = root || new pc.ParticleSystemRotationBySpeed()
  var i2753 = data
  i2752.enabled = !!i2753[0]
  i2752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[1], i2752.x)
  i2752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[2], i2752.y)
  i2752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[3], i2752.z)
  i2752.separateAxes = !!i2753[4]
  i2752.range = new pc.Vec2( i2753[5], i2753[6] )
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2754 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2755 = data
  i2754.enabled = !!i2755[0]
  i2754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2755[1], i2754.x)
  i2754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2755[2], i2754.y)
  i2754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2755[3], i2754.z)
  i2754.separateAxes = !!i2755[4]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2756 = root || new pc.ParticleSystemShape()
  var i2757 = data
  i2756.enabled = !!i2757[0]
  i2756.shapeType = i2757[1]
  i2756.randomDirectionAmount = i2757[2]
  i2756.sphericalDirectionAmount = i2757[3]
  i2756.randomPositionAmount = i2757[4]
  i2756.alignToDirection = !!i2757[5]
  i2756.radius = i2757[6]
  i2756.radiusMode = i2757[7]
  i2756.radiusSpread = i2757[8]
  i2756.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2757[9], i2756.radiusSpeed)
  i2756.radiusThickness = i2757[10]
  i2756.angle = i2757[11]
  i2756.length = i2757[12]
  i2756.boxThickness = new pc.Vec3( i2757[13], i2757[14], i2757[15] )
  i2756.meshShapeType = i2757[16]
  request.r(i2757[17], i2757[18], 0, i2756, 'mesh')
  request.r(i2757[19], i2757[20], 0, i2756, 'meshRenderer')
  request.r(i2757[21], i2757[22], 0, i2756, 'skinnedMeshRenderer')
  i2756.useMeshMaterialIndex = !!i2757[23]
  i2756.meshMaterialIndex = i2757[24]
  i2756.useMeshColors = !!i2757[25]
  i2756.normalOffset = i2757[26]
  i2756.arc = i2757[27]
  i2756.arcMode = i2757[28]
  i2756.arcSpread = i2757[29]
  i2756.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2757[30], i2756.arcSpeed)
  i2756.donutRadius = i2757[31]
  i2756.position = new pc.Vec3( i2757[32], i2757[33], i2757[34] )
  i2756.rotation = new pc.Vec3( i2757[35], i2757[36], i2757[37] )
  i2756.scale = new pc.Vec3( i2757[38], i2757[39], i2757[40] )
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2758 = root || new pc.ParticleSystemSizeBySpeed()
  var i2759 = data
  i2758.enabled = !!i2759[0]
  i2758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2759[1], i2758.x)
  i2758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2759[2], i2758.y)
  i2758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2759[3], i2758.z)
  i2758.separateAxes = !!i2759[4]
  i2758.range = new pc.Vec2( i2759[5], i2759[6] )
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2760 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2761 = data
  i2760.enabled = !!i2761[0]
  i2760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2761[1], i2760.x)
  i2760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2761[2], i2760.y)
  i2760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2761[3], i2760.z)
  i2760.separateAxes = !!i2761[4]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2762 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2763 = data
  i2762.enabled = !!i2763[0]
  i2762.mode = i2763[1]
  i2762.animation = i2763[2]
  i2762.numTilesX = i2763[3]
  i2762.numTilesY = i2763[4]
  i2762.useRandomRow = !!i2763[5]
  i2762.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2763[6], i2762.frameOverTime)
  i2762.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2763[7], i2762.startFrame)
  i2762.cycleCount = i2763[8]
  i2762.rowIndex = i2763[9]
  i2762.flipU = i2763[10]
  i2762.flipV = i2763[11]
  i2762.spriteCount = i2763[12]
  var i2765 = i2763[13]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 2, i2764, '')
  }
  i2762.sprites = i2764
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2768 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2769 = data
  i2768.enabled = !!i2769[0]
  i2768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[1], i2768.x)
  i2768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[2], i2768.y)
  i2768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[3], i2768.z)
  i2768.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[4], i2768.radial)
  i2768.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[5], i2768.speedModifier)
  i2768.space = i2769[6]
  i2768.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[7], i2768.orbitalX)
  i2768.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[8], i2768.orbitalY)
  i2768.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[9], i2768.orbitalZ)
  i2768.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[10], i2768.orbitalOffsetX)
  i2768.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[11], i2768.orbitalOffsetY)
  i2768.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2769[12], i2768.orbitalOffsetZ)
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2770 = root || new pc.ParticleSystemNoise()
  var i2771 = data
  i2770.enabled = !!i2771[0]
  i2770.separateAxes = !!i2771[1]
  i2770.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[2], i2770.strengthX)
  i2770.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[3], i2770.strengthY)
  i2770.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[4], i2770.strengthZ)
  i2770.frequency = i2771[5]
  i2770.damping = !!i2771[6]
  i2770.octaveCount = i2771[7]
  i2770.octaveMultiplier = i2771[8]
  i2770.octaveScale = i2771[9]
  i2770.quality = i2771[10]
  i2770.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[11], i2770.scrollSpeed)
  i2770.scrollSpeedMultiplier = i2771[12]
  i2770.remapEnabled = !!i2771[13]
  i2770.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[14], i2770.remapX)
  i2770.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[15], i2770.remapY)
  i2770.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[16], i2770.remapZ)
  i2770.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[17], i2770.positionAmount)
  i2770.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[18], i2770.rotationAmount)
  i2770.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2771[19], i2770.sizeAmount)
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2772 = root || new pc.ParticleSystemInheritVelocity()
  var i2773 = data
  i2772.enabled = !!i2773[0]
  i2772.mode = i2773[1]
  i2772.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2773[2], i2772.curve)
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2774 = root || new pc.ParticleSystemForceOverLifetime()
  var i2775 = data
  i2774.enabled = !!i2775[0]
  i2774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2775[1], i2774.x)
  i2774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2775[2], i2774.y)
  i2774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2775[3], i2774.z)
  i2774.space = i2775[4]
  i2774.randomized = !!i2775[5]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2776 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2777 = data
  i2776.enabled = !!i2777[0]
  i2776.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2777[1], i2776.limit)
  i2776.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2777[2], i2776.limitX)
  i2776.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2777[3], i2776.limitY)
  i2776.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2777[4], i2776.limitZ)
  i2776.dampen = i2777[5]
  i2776.separateAxes = !!i2777[6]
  i2776.space = i2777[7]
  i2776.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2777[8], i2776.drag)
  i2776.multiplyDragByParticleSize = !!i2777[9]
  i2776.multiplyDragByParticleVelocity = !!i2777[10]
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2779 = data
  i2778.enabled = !!i2779[0]
  request.r(i2779[1], i2779[2], 0, i2778, 'sharedMaterial')
  var i2781 = i2779[3]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 2, i2780, '')
  }
  i2778.sharedMaterials = i2780
  i2778.receiveShadows = !!i2779[4]
  i2778.shadowCastingMode = i2779[5]
  i2778.sortingLayerID = i2779[6]
  i2778.sortingOrder = i2779[7]
  i2778.lightmapIndex = i2779[8]
  i2778.lightmapSceneIndex = i2779[9]
  i2778.lightmapScaleOffset = new pc.Vec4( i2779[10], i2779[11], i2779[12], i2779[13] )
  i2778.lightProbeUsage = i2779[14]
  i2778.reflectionProbeUsage = i2779[15]
  request.r(i2779[16], i2779[17], 0, i2778, 'mesh')
  i2778.meshCount = i2779[18]
  i2778.activeVertexStreamsCount = i2779[19]
  i2778.alignment = i2779[20]
  i2778.renderMode = i2779[21]
  i2778.sortMode = i2779[22]
  i2778.lengthScale = i2779[23]
  i2778.velocityScale = i2779[24]
  i2778.cameraVelocityScale = i2779[25]
  i2778.normalDirection = i2779[26]
  i2778.sortingFudge = i2779[27]
  i2778.minParticleSize = i2779[28]
  i2778.maxParticleSize = i2779[29]
  i2778.pivot = new pc.Vec3( i2779[30], i2779[31], i2779[32] )
  request.r(i2779[33], i2779[34], 0, i2778, 'trailMaterial')
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2785 = data
  i2784.name = i2785[0]
  i2784.tagId = i2785[1]
  i2784.enabled = !!i2785[2]
  i2784.isStatic = !!i2785[3]
  i2784.layer = i2785[4]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2787 = data
  i2786.pivot = new pc.Vec2( i2787[0], i2787[1] )
  i2786.anchorMin = new pc.Vec2( i2787[2], i2787[3] )
  i2786.anchorMax = new pc.Vec2( i2787[4], i2787[5] )
  i2786.sizeDelta = new pc.Vec2( i2787[6], i2787[7] )
  i2786.anchoredPosition3D = new pc.Vec3( i2787[8], i2787[9], i2787[10] )
  i2786.rotation = new pc.Quat(i2787[11], i2787[12], i2787[13], i2787[14])
  i2786.scale = new pc.Vec3( i2787[15], i2787[16], i2787[17] )
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2789 = data
  i2788.cullTransparentMesh = !!i2789[0]
  return i2788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.UI.Image' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'm_Sprite')
  i2790.m_Type = i2791[2]
  i2790.m_PreserveAspect = !!i2791[3]
  i2790.m_FillCenter = !!i2791[4]
  i2790.m_FillMethod = i2791[5]
  i2790.m_FillAmount = i2791[6]
  i2790.m_FillClockwise = !!i2791[7]
  i2790.m_FillOrigin = i2791[8]
  i2790.m_UseSpriteMesh = !!i2791[9]
  i2790.m_PixelsPerUnitMultiplier = i2791[10]
  request.r(i2791[11], i2791[12], 0, i2790, 'm_Material')
  i2790.m_Maskable = !!i2791[13]
  i2790.m_Color = new pc.Color(i2791[14], i2791[15], i2791[16], i2791[17])
  i2790.m_RaycastTarget = !!i2791[18]
  i2790.m_RaycastPadding = new pc.Vec4( i2791[19], i2791[20], i2791[21], i2791[22] )
  return i2790
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.UI.Button' )
  var i2793 = data
  i2792.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2793[0], i2792.m_OnClick)
  i2792.m_Navigation = request.d('UnityEngine.UI.Navigation', i2793[1], i2792.m_Navigation)
  i2792.m_Transition = i2793[2]
  i2792.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2793[3], i2792.m_Colors)
  i2792.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2793[4], i2792.m_SpriteState)
  i2792.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2793[5], i2792.m_AnimationTriggers)
  i2792.m_Interactable = !!i2793[6]
  request.r(i2793[7], i2793[8], 0, i2792, 'm_TargetGraphic')
  return i2792
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2795 = data
  i2794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2795[0], i2794.m_PersistentCalls)
  return i2794
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2797 = data
  var i2799 = i2797[0]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.add(request.d('UnityEngine.Events.PersistentCall', i2799[i + 0]));
  }
  i2796.m_Calls = i2798
  return i2796
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2802 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2803 = data
  request.r(i2803[0], i2803[1], 0, i2802, 'm_Target')
  i2802.m_TargetAssemblyTypeName = i2803[2]
  i2802.m_MethodName = i2803[3]
  i2802.m_Mode = i2803[4]
  i2802.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2803[5], i2802.m_Arguments)
  i2802.m_CallState = i2803[6]
  return i2802
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2804 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'm_ObjectArgument')
  i2804.m_ObjectArgumentAssemblyTypeName = i2805[2]
  i2804.m_IntArgument = i2805[3]
  i2804.m_FloatArgument = i2805[4]
  i2804.m_StringArgument = i2805[5]
  i2804.m_BoolArgument = !!i2805[6]
  return i2804
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2807 = data
  i2806.m_Mode = i2807[0]
  i2806.m_WrapAround = !!i2807[1]
  request.r(i2807[2], i2807[3], 0, i2806, 'm_SelectOnUp')
  request.r(i2807[4], i2807[5], 0, i2806, 'm_SelectOnDown')
  request.r(i2807[6], i2807[7], 0, i2806, 'm_SelectOnLeft')
  request.r(i2807[8], i2807[9], 0, i2806, 'm_SelectOnRight')
  return i2806
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2808 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2809 = data
  i2808.m_NormalColor = new pc.Color(i2809[0], i2809[1], i2809[2], i2809[3])
  i2808.m_HighlightedColor = new pc.Color(i2809[4], i2809[5], i2809[6], i2809[7])
  i2808.m_PressedColor = new pc.Color(i2809[8], i2809[9], i2809[10], i2809[11])
  i2808.m_SelectedColor = new pc.Color(i2809[12], i2809[13], i2809[14], i2809[15])
  i2808.m_DisabledColor = new pc.Color(i2809[16], i2809[17], i2809[18], i2809[19])
  i2808.m_ColorMultiplier = i2809[20]
  i2808.m_FadeDuration = i2809[21]
  return i2808
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2811 = data
  request.r(i2811[0], i2811[1], 0, i2810, 'm_HighlightedSprite')
  request.r(i2811[2], i2811[3], 0, i2810, 'm_PressedSprite')
  request.r(i2811[4], i2811[5], 0, i2810, 'm_SelectedSprite')
  request.r(i2811[6], i2811[7], 0, i2810, 'm_DisabledSprite')
  return i2810
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2812 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2813 = data
  i2812.m_NormalTrigger = i2813[0]
  i2812.m_HighlightedTrigger = i2813[1]
  i2812.m_PressedTrigger = i2813[2]
  i2812.m_SelectedTrigger = i2813[3]
  i2812.m_DisabledTrigger = i2813[4]
  return i2812
}

Deserializers["ItemDisplay"] = function (request, data, root) {
  var i2814 = root || request.c( 'ItemDisplay' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'item')
  request.r(i2815[2], i2815[3], 0, i2814, 'itemSprite')
  request.r(i2815[4], i2815[5], 0, i2814, 'adSlot')
  request.r(i2815[6], i2815[7], 0, i2814, 'priceSlot')
  request.r(i2815[8], i2815[9], 0, i2814, 'lockSlot')
  request.r(i2815[10], i2815[11], 0, i2814, 'fill')
  request.r(i2815[12], i2815[13], 0, i2814, 'starPk')
  request.r(i2815[14], i2815[15], 0, i2814, 'handTut')
  request.r(i2815[16], i2815[17], 0, i2814, 'blockPanelTut')
  request.r(i2815[18], i2815[19], 0, i2814, 'icoAd')
  request.r(i2815[20], i2815[21], 0, i2814, 'icoSkipAd')
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2817 = data
  i2816.name = i2817[0]
  i2816.index = i2817[1]
  i2816.startup = !!i2817[2]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2819 = data
  i2818.enabled = !!i2819[0]
  i2818.planeDistance = i2819[1]
  i2818.referencePixelsPerUnit = i2819[2]
  i2818.isFallbackOverlay = !!i2819[3]
  i2818.renderMode = i2819[4]
  i2818.renderOrder = i2819[5]
  i2818.sortingLayerName = i2819[6]
  i2818.sortingOrder = i2819[7]
  i2818.scaleFactor = i2819[8]
  request.r(i2819[9], i2819[10], 0, i2818, 'worldCamera')
  i2818.overrideSorting = !!i2819[11]
  i2818.pixelPerfect = !!i2819[12]
  i2818.targetDisplay = i2819[13]
  i2818.overridePixelPerfect = !!i2819[14]
  return i2818
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2821 = data
  i2820.m_UiScaleMode = i2821[0]
  i2820.m_ReferencePixelsPerUnit = i2821[1]
  i2820.m_ScaleFactor = i2821[2]
  i2820.m_ReferenceResolution = new pc.Vec2( i2821[3], i2821[4] )
  i2820.m_ScreenMatchMode = i2821[5]
  i2820.m_MatchWidthOrHeight = i2821[6]
  i2820.m_PhysicalUnit = i2821[7]
  i2820.m_FallbackScreenDPI = i2821[8]
  i2820.m_DefaultSpriteDPI = i2821[9]
  i2820.m_DynamicPixelsPerUnit = i2821[10]
  i2820.m_PresetInfoIsWorld = !!i2821[11]
  return i2820
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2822 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2823 = data
  i2822.m_IgnoreReversedGraphics = !!i2823[0]
  i2822.m_BlockingObjects = i2823[1]
  i2822.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2823[2] )
  return i2822
}

Deserializers["UI_Result"] = function (request, data, root) {
  var i2824 = root || request.c( 'UI_Result' )
  var i2825 = data
  request.r(i2825[0], i2825[1], 0, i2824, 'rewardPos')
  i2824.testSpin = !!i2825[2]
  request.r(i2825[3], i2825[4], 0, i2824, 'bgAnimController')
  request.r(i2825[5], i2825[6], 0, i2824, 'characterManager')
  request.r(i2825[7], i2825[8], 0, i2824, 'rewardImg')
  request.r(i2825[9], i2825[10], 0, i2824, 'youGotPanel')
  request.r(i2825[11], i2825[12], 0, i2824, 'endgameCanvasGroup')
  request.r(i2825[13], i2825[14], 0, i2824, 'tutPanel')
  request.r(i2825[15], i2825[16], 0, i2824, 'tutHand')
  request.r(i2825[17], i2825[18], 0, i2824, 'card')
  request.r(i2825[19], i2825[20], 0, i2824, 'mainCard')
  request.r(i2825[21], i2825[22], 0, i2824, 'x2Btn')
  request.r(i2825[23], i2825[24], 0, i2824, 'x2Btn_OldVersion')
  request.r(i2825[25], i2825[26], 0, i2824, 'rewardSpinZone')
  request.r(i2825[27], i2825[28], 0, i2824, 'rewardRandomZone')
  request.r(i2825[29], i2825[30], 0, i2824, 'moneyText')
  var i2827 = i2825[31]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 2, i2826, '')
  }
  i2824.rewardSpr = i2826
  var i2829 = i2825[32]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 2) {
  request.r(i2829[i + 0], i2829[i + 1], 2, i2828, '')
  }
  i2824.rewardInfo = i2828
  var i2831 = i2825[33]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 2) {
  request.r(i2831[i + 0], i2831[i + 1], 2, i2830, '')
  }
  i2824.rewardOldVersionInfo = i2830
  var i2833 = i2825[34]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 2) {
  request.r(i2833[i + 0], i2833[i + 1], 2, i2832, '')
  }
  i2824.replayTxts = i2832
  request.r(i2825[35], i2825[36], 0, i2824, 'rewardCanvasGroup')
  request.r(i2825[37], i2825[38], 0, i2824, 'rewardCanvasGroupOldVer')
  request.r(i2825[39], i2825[40], 0, i2824, 'adIcon')
  request.r(i2825[41], i2825[42], 0, i2824, 'freeIcon')
  request.r(i2825[43], i2825[44], 0, i2824, 'adIconOldVer')
  request.r(i2825[45], i2825[46], 0, i2824, 'freeIconOlder')
  request.r(i2825[47], i2825[48], 0, i2824, 'spin')
  request.r(i2825[49], i2825[50], 0, i2824, 'arrowSpin')
  request.r(i2825[51], i2825[52], 0, i2824, 'arrowAnim')
  var i2835 = i2825[53]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 2) {
  request.r(i2835[i + 0], i2835[i + 1], 2, i2834, '')
  }
  i2824.adIco = i2834
  var i2837 = i2825[54]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 2) {
  request.r(i2837[i + 0], i2837[i + 1], 2, i2836, '')
  }
  i2824.skipAdIco = i2836
  return i2824
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2840 = root || request.c( 'UnityEngine.UI.Text' )
  var i2841 = data
  i2840.m_FontData = request.d('UnityEngine.UI.FontData', i2841[0], i2840.m_FontData)
  i2840.m_Text = i2841[1]
  request.r(i2841[2], i2841[3], 0, i2840, 'm_Material')
  i2840.m_Maskable = !!i2841[4]
  i2840.m_Color = new pc.Color(i2841[5], i2841[6], i2841[7], i2841[8])
  i2840.m_RaycastTarget = !!i2841[9]
  i2840.m_RaycastPadding = new pc.Vec4( i2841[10], i2841[11], i2841[12], i2841[13] )
  return i2840
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2842 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2843 = data
  request.r(i2843[0], i2843[1], 0, i2842, 'm_Font')
  i2842.m_FontSize = i2843[2]
  i2842.m_FontStyle = i2843[3]
  i2842.m_BestFit = !!i2843[4]
  i2842.m_MinSize = i2843[5]
  i2842.m_MaxSize = i2843[6]
  i2842.m_Alignment = i2843[7]
  i2842.m_AlignByGeometry = !!i2843[8]
  i2842.m_RichText = !!i2843[9]
  i2842.m_HorizontalOverflow = i2843[10]
  i2842.m_VerticalOverflow = i2843[11]
  i2842.m_LineSpacing = i2843[12]
  return i2842
}

Deserializers["CountNumber"] = function (request, data, root) {
  var i2844 = root || request.c( 'CountNumber' )
  var i2845 = data
  i2844.countDuration = i2845[0]
  request.r(i2845[1], i2845[2], 0, i2844, 'numberText')
  i2844.automaticSetNum = !!i2845[3]
  return i2844
}

Deserializers["UI_Lobby"] = function (request, data, root) {
  var i2846 = root || request.c( 'UI_Lobby' )
  var i2847 = data
  request.r(i2847[0], i2847[1], 0, i2846, 'settingPanel')
  request.r(i2847[2], i2847[3], 0, i2846, 'adsPanel')
  request.r(i2847[4], i2847[5], 0, i2846, 'testMoney1')
  request.r(i2847[6], i2847[7], 0, i2846, 'testMoney2')
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2849 = data
  i2848.m_Alpha = i2849[0]
  i2848.m_Interactable = !!i2849[1]
  i2848.m_BlocksRaycasts = !!i2849[2]
  i2848.m_IgnoreParentGroups = !!i2849[3]
  i2848.enabled = !!i2849[4]
  return i2848
}

Deserializers["UI_Ingame"] = function (request, data, root) {
  var i2850 = root || request.c( 'UI_Ingame' )
  var i2851 = data
  request.r(i2851[0], i2851[1], 0, i2850, 'nextBtn')
  request.r(i2851[2], i2851[3], 0, i2850, 'doneBtn')
  request.r(i2851[4], i2851[5], 0, i2850, 'submitBtn')
  request.r(i2851[6], i2851[7], 0, i2850, 'battleBtn')
  var i2853 = i2851[8]
  var i2852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i2853.length; i += 2) {
  request.r(i2853[i + 0], i2853[i + 1], 1, i2852, '')
  }
  i2850.tabMenuElements = i2852
  return i2850
}

Deserializers["TabMenuHandler"] = function (request, data, root) {
  var i2856 = root || request.c( 'TabMenuHandler' )
  var i2857 = data
  request.r(i2857[0], i2857[1], 0, i2856, 'targetScaleBodyPart')
  i2856.isSliderShow = !!i2857[2]
  var i2859 = i2857[3]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('Tab')))
  for(var i = 0; i < i2859.length; i += 2) {
  request.r(i2859[i + 0], i2859[i + 1], 1, i2858, '')
  }
  i2856.tabSelection = i2858
  var i2861 = i2857[4]
  var i2860 = new (System.Collections.Generic.List$1(Bridge.ns('GridHandler')))
  for(var i = 0; i < i2861.length; i += 2) {
  request.r(i2861[i + 0], i2861[i + 1], 1, i2860, '')
  }
  i2856.tabContents = i2860
  request.r(i2857[5], i2857[6], 0, i2856, 'nextBtn')
  request.r(i2857[7], i2857[8], 0, i2856, 'prevBtn')
  i2856.fade = new pc.Color(i2857[9], i2857[10], i2857[11], i2857[12])
  request.r(i2857[13], i2857[14], 0, i2856, 'next_Btn')
  request.r(i2857[15], i2857[16], 0, i2856, 'done_Btn')
  request.r(i2857[17], i2857[18], 0, i2856, 'submit_Btn')
  request.r(i2857[19], i2857[20], 0, i2856, 'battle_Btn')
  request.r(i2857[21], i2857[22], 0, i2856, 'prev')
  request.r(i2857[23], i2857[24], 0, i2856, 'next')
  request.r(i2857[25], i2857[26], 0, i2856, 'subscriptionBtn')
  request.r(i2857[27], i2857[28], 0, i2856, 'slider')
  request.r(i2857[29], i2857[30], 0, i2856, 'handTut')
  return i2856
}

Deserializers["Tab"] = function (request, data, root) {
  var i2866 = root || request.c( 'Tab' )
  var i2867 = data
  request.r(i2867[0], i2867[1], 0, i2866, 'bodyPartLink')
  request.r(i2867[2], i2867[3], 0, i2866, 'bubble')
  request.r(i2867[4], i2867[5], 0, i2866, 'check')
  i2866.selected = UnityEngine.Color32.ConstructColor(i2867[6], i2867[7], i2867[8], i2867[9])
  request.r(i2867[10], i2867[11], 0, i2866, 'fill')
  return i2866
}

Deserializers["Scale"] = function (request, data, root) {
  var i2868 = root || request.c( 'Scale' )
  var i2869 = data
  return i2868
}

Deserializers["BreathButton"] = function (request, data, root) {
  var i2870 = root || request.c( 'BreathButton' )
  var i2871 = data
  i2870.constantBreath = !!i2871[0]
  i2870.increaseScale = !!i2871[1]
  i2870.delayFirstTime = i2871[2]
  return i2870
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2872 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2873 = data
  request.r(i2873[0], i2873[1], 0, i2872, 'm_Content')
  i2872.m_Horizontal = !!i2873[2]
  i2872.m_Vertical = !!i2873[3]
  i2872.m_MovementType = i2873[4]
  i2872.m_Elasticity = i2873[5]
  i2872.m_Inertia = !!i2873[6]
  i2872.m_DecelerationRate = i2873[7]
  i2872.m_ScrollSensitivity = i2873[8]
  request.r(i2873[9], i2873[10], 0, i2872, 'm_Viewport')
  request.r(i2873[11], i2873[12], 0, i2872, 'm_HorizontalScrollbar')
  request.r(i2873[13], i2873[14], 0, i2872, 'm_VerticalScrollbar')
  i2872.m_HorizontalScrollbarVisibility = i2873[15]
  i2872.m_VerticalScrollbarVisibility = i2873[16]
  i2872.m_HorizontalScrollbarSpacing = i2873[17]
  i2872.m_VerticalScrollbarSpacing = i2873[18]
  i2872.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2873[19], i2872.m_OnValueChanged)
  return i2872
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2874 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2875 = data
  i2874.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2875[0], i2874.m_PersistentCalls)
  return i2874
}

Deserializers["GridHandler"] = function (request, data, root) {
  var i2876 = root || request.c( 'GridHandler' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'content')
  request.r(i2877[2], i2877[3], 0, i2876, 'grid')
  return i2876
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2878 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2879 = data
  i2878.m_ShowMaskGraphic = !!i2879[0]
  return i2878
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i2880 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i2881 = data
  i2880.m_StartCorner = i2881[0]
  i2880.m_StartAxis = i2881[1]
  i2880.m_CellSize = new pc.Vec2( i2881[2], i2881[3] )
  i2880.m_Spacing = new pc.Vec2( i2881[4], i2881[5] )
  i2880.m_Constraint = i2881[6]
  i2880.m_ConstraintCount = i2881[7]
  i2880.m_Padding = UnityEngine.RectOffset.FromPaddings(i2881[8], i2881[9], i2881[10], i2881[11])
  i2880.m_ChildAlignment = i2881[12]
  return i2880
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2882 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2883 = data
  i2882.m_HorizontalFit = i2883[0]
  i2882.m_VerticalFit = i2883[1]
  return i2882
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2884 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2885 = data
  request.r(i2885[0], i2885[1], 0, i2884, 'skeletonDataAsset')
  request.r(i2885[2], i2885[3], 0, i2884, 'additiveMaterial')
  request.r(i2885[4], i2885[5], 0, i2884, 'multiplyMaterial')
  request.r(i2885[6], i2885[7], 0, i2884, 'screenMaterial')
  i2884.initialSkinName = i2885[8]
  i2884.initialFlipX = !!i2885[9]
  i2884.initialFlipY = !!i2885[10]
  i2884.startingAnimation = i2885[11]
  i2884.startingLoop = !!i2885[12]
  i2884.timeScale = i2885[13]
  i2884.freeze = !!i2885[14]
  i2884.layoutScaleMode = i2885[15]
  i2884.updateWhenInvisible = i2885[16]
  i2884.allowMultipleCanvasRenderers = !!i2885[17]
  var i2887 = i2885[18]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2887.length; i += 2) {
  request.r(i2887[i + 0], i2887[i + 1], 1, i2886, '')
  }
  i2884.canvasRenderers = i2886
  i2884.enableSeparatorSlots = !!i2885[19]
  i2884.updateSeparatorPartLocation = !!i2885[20]
  i2884.disableMeshAssignmentOnOverride = !!i2885[21]
  i2884.referenceSize = new pc.Vec2( i2885[22], i2885[23] )
  i2884.referenceScale = i2885[24]
  i2884.rectTransformSize = new pc.Vec2( i2885[25], i2885[26] )
  i2884.editReferenceRect = !!i2885[27]
  var i2889 = i2885[28]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( i2889[i + 0] );
  }
  i2884.separatorSlotNames = i2888
  var i2891 = i2885[29]
  var i2890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2891.length; i += 2) {
  request.r(i2891[i + 0], i2891[i + 1], 1, i2890, '')
  }
  i2884.separatorParts = i2890
  i2884.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2885[30], i2884.meshGenerator)
  i2884.updateTiming = i2885[31]
  i2884.unscaledTime = !!i2885[32]
  request.r(i2885[33], i2885[34], 0, i2884, 'm_Material')
  i2884.m_Maskable = !!i2885[35]
  i2884.m_Color = new pc.Color(i2885[36], i2885[37], i2885[38], i2885[39])
  i2884.m_RaycastTarget = !!i2885[40]
  i2884.m_RaycastPadding = new pc.Vec4( i2885[41], i2885[42], i2885[43], i2885[44] )
  return i2884
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2898 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2899 = data
  i2898.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2899[0], i2898.settings)
  return i2898
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2900 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2901 = data
  i2900.useClipping = !!i2901[0]
  i2900.zSpacing = i2901[1]
  i2900.pmaVertexColors = !!i2901[2]
  i2900.tintBlack = !!i2901[3]
  i2900.canvasGroupTintBlack = !!i2901[4]
  i2900.calculateTangents = !!i2901[5]
  i2900.addNormals = !!i2901[6]
  i2900.immutableTriangles = !!i2901[7]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2903 = data
  i2902.enabled = !!i2903[0]
  request.r(i2903[1], i2903[2], 0, i2902, 'sharedMaterial')
  var i2905 = i2903[3]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 2) {
  request.r(i2905[i + 0], i2905[i + 1], 2, i2904, '')
  }
  i2902.sharedMaterials = i2904
  i2902.receiveShadows = !!i2903[4]
  i2902.shadowCastingMode = i2903[5]
  i2902.sortingLayerID = i2903[6]
  i2902.sortingOrder = i2903[7]
  i2902.lightmapIndex = i2903[8]
  i2902.lightmapSceneIndex = i2903[9]
  i2902.lightmapScaleOffset = new pc.Vec4( i2903[10], i2903[11], i2903[12], i2903[13] )
  i2902.lightProbeUsage = i2903[14]
  i2902.reflectionProbeUsage = i2903[15]
  i2902.color = new pc.Color(i2903[16], i2903[17], i2903[18], i2903[19])
  request.r(i2903[20], i2903[21], 0, i2902, 'sprite')
  i2902.flipX = !!i2903[22]
  i2902.flipY = !!i2903[23]
  i2902.drawMode = i2903[24]
  i2902.size = new pc.Vec2( i2903[25], i2903[26] )
  i2902.tileMode = i2903[27]
  i2902.adaptiveModeThreshold = i2903[28]
  i2902.maskInteraction = i2903[29]
  i2902.spriteSortPoint = i2903[30]
  return i2902
}

Deserializers["CharacterManager"] = function (request, data, root) {
  var i2906 = root || request.c( 'CharacterManager' )
  var i2907 = data
  i2906.monsterBody = i2907[0]
  i2906.price = i2907[1]
  i2906.currentPrice = i2907[2]
  i2906.orgPrice = i2907[3]
  i2906.spawnMoney = !!i2907[4]
  request.r(i2907[5], i2907[6], 0, i2906, 'monsterTex')
  request.r(i2907[7], i2907[8], 0, i2906, 'monsterSprite')
  i2906.moneyBoostCount = i2907[9]
  i2906.textureStr = i2907[10]
  request.r(i2907[11], i2907[12], 0, i2906, 'sortingGroup')
  request.r(i2907[13], i2907[14], 0, i2906, 'headHolder')
  var i2909 = i2907[15]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 2) {
  request.r(i2909[i + 0], i2909[i + 1], 2, i2908, '')
  }
  i2906.bodies = i2908
  var i2911 = i2907[16]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 2) {
  request.r(i2911[i + 0], i2911[i + 1], 2, i2910, '')
  }
  i2906.boneFollowers = i2910
  request.r(i2907[17], i2907[18], 0, i2906, 'headController')
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i2917 = data
  i2916.enabled = !!i2917[0]
  i2916.sortingLayerIndex = i2917[1]
  i2916.sortingOrder = i2917[2]
  i2916.sortingLayerName = i2917[3]
  return i2916
}

Deserializers["SortingLayerCharacter"] = function (request, data, root) {
  var i2918 = root || request.c( 'SortingLayerCharacter' )
  var i2919 = data
  i2918.offset = i2919[0]
  i2918.isDrag = !!i2919[1]
  return i2918
}

Deserializers["Spine.Unity.BoneFollower"] = function (request, data, root) {
  var i2920 = root || request.c( 'Spine.Unity.BoneFollower' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'skeletonRenderer')
  i2920.boneName = i2921[2]
  i2920.followXYPosition = !!i2921[3]
  i2920.followZPosition = !!i2921[4]
  i2920.followBoneRotation = !!i2921[5]
  i2920.followSkeletonFlip = !!i2921[6]
  i2920.followLocalScale = !!i2921[7]
  i2920.followParentWorldScale = !!i2921[8]
  i2920.maintainedAxisOrientation = i2921[9]
  i2920.initializeOnAwake = !!i2921[10]
  return i2920
}

Deserializers["HeadController"] = function (request, data, root) {
  var i2922 = root || request.c( 'HeadController' )
  var i2923 = data
  request.r(i2923[0], i2923[1], 0, i2922, 'eye')
  request.r(i2923[2], i2923[3], 0, i2922, 'mouth')
  request.r(i2923[4], i2923[5], 0, i2922, 'acc')
  return i2922
}

Deserializers["TouchController"] = function (request, data, root) {
  var i2924 = root || request.c( 'TouchController' )
  var i2925 = data
  request.r(i2925[0], i2925[1], 0, i2924, 'rb')
  i2924.speed = i2925[2]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2927 = data
  request.r(i2927[0], i2927[1], 0, i2926, 'sharedMesh')
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2929 = data
  request.r(i2929[0], i2929[1], 0, i2928, 'additionalVertexStreams')
  i2928.enabled = !!i2929[2]
  request.r(i2929[3], i2929[4], 0, i2928, 'sharedMaterial')
  var i2931 = i2929[5]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 2) {
  request.r(i2931[i + 0], i2931[i + 1], 2, i2930, '')
  }
  i2928.sharedMaterials = i2930
  i2928.receiveShadows = !!i2929[6]
  i2928.shadowCastingMode = i2929[7]
  i2928.sortingLayerID = i2929[8]
  i2928.sortingOrder = i2929[9]
  i2928.lightmapIndex = i2929[10]
  i2928.lightmapSceneIndex = i2929[11]
  i2928.lightmapScaleOffset = new pc.Vec4( i2929[12], i2929[13], i2929[14], i2929[15] )
  i2928.lightProbeUsage = i2929[16]
  i2928.reflectionProbeUsage = i2929[17]
  return i2928
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2932 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2933 = data
  i2932.loop = !!i2933[0]
  i2932.timeScale = i2933[1]
  request.r(i2933[2], i2933[3], 0, i2932, 'skeletonDataAsset')
  i2932.initialSkinName = i2933[4]
  i2932.fixPrefabOverrideViaMeshFilter = i2933[5]
  i2932.initialFlipX = !!i2933[6]
  i2932.initialFlipY = !!i2933[7]
  i2932.updateWhenInvisible = i2933[8]
  i2932.zSpacing = i2933[9]
  i2932.useClipping = !!i2933[10]
  i2932.immutableTriangles = !!i2933[11]
  i2932.pmaVertexColors = !!i2933[12]
  i2932.clearStateOnDisable = !!i2933[13]
  i2932.tintBlack = !!i2933[14]
  i2932.singleSubmesh = !!i2933[15]
  i2932.fixDrawOrder = !!i2933[16]
  i2932.addNormals = !!i2933[17]
  i2932.calculateTangents = !!i2933[18]
  i2932.maskInteraction = i2933[19]
  i2932.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2933[20], i2932.maskMaterials)
  i2932.disableRenderingOnOverride = !!i2933[21]
  i2932.updateTiming = i2933[22]
  i2932.unscaledTime = !!i2933[23]
  i2932._animationName = i2933[24]
  var i2935 = i2933[25]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( i2935[i + 0] );
  }
  i2932.separatorSlotNames = i2934
  return i2932
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2936 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2937 = data
  var i2939 = i2937[0]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 2) {
  request.r(i2939[i + 0], i2939[i + 1], 2, i2938, '')
  }
  i2936.materialsMaskDisabled = i2938
  var i2941 = i2937[1]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 2) {
  request.r(i2941[i + 0], i2941[i + 1], 2, i2940, '')
  }
  i2936.materialsInsideMask = i2940
  var i2943 = i2937[2]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 2) {
  request.r(i2943[i + 0], i2943[i + 1], 2, i2942, '')
  }
  i2936.materialsOutsideMask = i2942
  return i2936
}

Deserializers["BgAnimController"] = function (request, data, root) {
  var i2944 = root || request.c( 'BgAnimController' )
  var i2945 = data
  i2944.bgIdx = i2945[0]
  var i2947 = i2945[1]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 2) {
  request.r(i2947[i + 0], i2947[i + 1], 2, i2946, '')
  }
  i2944.bgAnims = i2946
  i2944.isShowAnimBg = !!i2945[2]
  return i2944
}

Deserializers["ShopController"] = function (request, data, root) {
  var i2948 = root || request.c( 'ShopController' )
  var i2949 = data
  var i2951 = i2949[0]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 2) {
  request.r(i2951[i + 0], i2951[i + 1], 2, i2950, '')
  }
  i2948.heads = i2950
  var i2953 = i2949[1]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 2) {
  request.r(i2953[i + 0], i2953[i + 1], 2, i2952, '')
  }
  i2948.eyes = i2952
  var i2955 = i2949[2]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 2) {
  request.r(i2955[i + 0], i2955[i + 1], 2, i2954, '')
  }
  i2948.mouths = i2954
  var i2957 = i2949[3]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 2) {
  request.r(i2957[i + 0], i2957[i + 1], 2, i2956, '')
  }
  i2948.accs = i2956
  var i2959 = i2949[4]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 2) {
  request.r(i2959[i + 0], i2959[i + 1], 2, i2958, '')
  }
  i2948.bodies = i2958
  request.r(i2949[5], i2949[6], 0, i2948, 'headContent')
  request.r(i2949[7], i2949[8], 0, i2948, 'eyeContent')
  request.r(i2949[9], i2949[10], 0, i2948, 'mouthContent')
  request.r(i2949[11], i2949[12], 0, i2948, 'accContents')
  request.r(i2949[13], i2949[14], 0, i2948, 'bodyContent')
  var i2961 = i2949[15]
  var i2960 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2961.length; i += 2) {
  request.r(i2961[i + 0], i2961[i + 1], 1, i2960, '')
  }
  i2948.lockHead = i2960
  var i2963 = i2949[16]
  var i2962 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2963.length; i += 2) {
  request.r(i2963[i + 0], i2963[i + 1], 1, i2962, '')
  }
  i2948.lockEye = i2962
  var i2965 = i2949[17]
  var i2964 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2965.length; i += 2) {
  request.r(i2965[i + 0], i2965[i + 1], 1, i2964, '')
  }
  i2948.lockMouth = i2964
  var i2967 = i2949[18]
  var i2966 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2967.length; i += 2) {
  request.r(i2967[i + 0], i2967[i + 1], 1, i2966, '')
  }
  i2948.lockAcc = i2966
  var i2969 = i2949[19]
  var i2968 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2969.length; i += 2) {
  request.r(i2969[i + 0], i2969[i + 1], 1, i2968, '')
  }
  i2948.lockBody = i2968
  var i2971 = i2949[20]
  var i2970 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2971.length; i += 2) {
  request.r(i2971[i + 0], i2971[i + 1], 1, i2970, '')
  }
  i2948.lockItem = i2970
  request.r(i2949[21], i2949[22], 0, i2948, 'head')
  request.r(i2949[23], i2949[24], 0, i2948, 'eye')
  request.r(i2949[25], i2949[26], 0, i2948, 'mouth')
  request.r(i2949[27], i2949[28], 0, i2948, 'acc')
  request.r(i2949[29], i2949[30], 0, i2948, 'body')
  request.r(i2949[31], i2949[32], 0, i2948, 'body2')
  request.r(i2949[33], i2949[34], 0, i2948, 'headHolder')
  request.r(i2949[35], i2949[36], 0, i2948, 'boneFollower')
  request.r(i2949[37], i2949[38], 0, i2948, 'boneFollower2')
  return i2948
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i2976 = root || request.c( 'UIHandler' )
  var i2977 = data
  request.r(i2977[0], i2977[1], 0, i2976, 'curtainAnim')
  request.r(i2977[2], i2977[3], 0, i2976, 'bgAnim')
  request.r(i2977[4], i2977[5], 0, i2976, 'uI_Result')
  request.r(i2977[6], i2977[7], 0, i2976, 'uI_Ingame')
  request.r(i2977[8], i2977[9], 0, i2976, 'uI_Lobby')
  request.r(i2977[10], i2977[11], 0, i2976, 'settingPanel')
  request.r(i2977[12], i2977[13], 0, i2976, 'internetMessagePanel')
  request.r(i2977[14], i2977[15], 0, i2976, 'iapSuccess')
  request.r(i2977[16], i2977[17], 0, i2976, 'iapFail')
  request.r(i2977[18], i2977[19], 0, i2976, 'confirmPanel')
  request.r(i2977[20], i2977[21], 0, i2976, 'needMoreCoinPanel')
  request.r(i2977[22], i2977[23], 0, i2976, 'sharePanel')
  request.r(i2977[24], i2977[25], 0, i2976, 'previewLevelChallengePanel')
  request.r(i2977[26], i2977[27], 0, i2976, 'levelSelection')
  request.r(i2977[28], i2977[29], 0, i2976, 'loadingPanel')
  request.r(i2977[30], i2977[31], 0, i2976, 'limitArea')
  request.r(i2977[32], i2977[33], 0, i2976, 'fade')
  request.r(i2977[34], i2977[35], 0, i2976, 'adBreak')
  request.r(i2977[36], i2977[37], 0, i2976, 'newModePkPopup')
  request.r(i2977[38], i2977[39], 0, i2976, 'subPanel')
  request.r(i2977[40], i2977[41], 0, i2976, 'blackScreen')
  request.r(i2977[42], i2977[43], 0, i2976, 'leaderboard')
  request.r(i2977[44], i2977[45], 0, i2976, '_fade')
  request.r(i2977[46], i2977[47], 0, i2976, 'bodyAnim')
  request.r(i2977[48], i2977[49], 0, i2976, 'bodyAnim2')
  request.r(i2977[50], i2977[51], 0, i2976, 'bodyAnim3')
  request.r(i2977[52], i2977[53], 0, i2976, 'character')
  request.r(i2977[54], i2977[55], 0, i2976, 'noAdBtn')
  request.r(i2977[56], i2977[57], 0, i2976, 'noAdBtn_1')
  request.r(i2977[58], i2977[59], 0, i2976, 'moneyRain')
  return i2976
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i2978 = root || request.c( 'CameraHandler' )
  var i2979 = data
  i2978.defaultSize = i2979[0]
  i2978.aspectRatio = i2979[1]
  request.r(i2979[2], i2979[3], 0, i2978, 'characterManager')
  request.r(i2979[4], i2979[5], 0, i2978, 'confetti')
  var i2981 = i2979[6]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 2) {
  request.r(i2981[i + 0], i2981[i + 1], 2, i2980, '')
  }
  i2978.cams = i2980
  var i2983 = i2979[7]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 2) {
  request.r(i2983[i + 0], i2983[i + 1], 2, i2982, '')
  }
  i2978.cameras = i2982
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2989 = data
  i2988.enabled = !!i2989[0]
  i2988.aspect = i2989[1]
  i2988.orthographic = !!i2989[2]
  i2988.orthographicSize = i2989[3]
  i2988.backgroundColor = new pc.Color(i2989[4], i2989[5], i2989[6], i2989[7])
  i2988.nearClipPlane = i2989[8]
  i2988.farClipPlane = i2989[9]
  i2988.fieldOfView = i2989[10]
  i2988.depth = i2989[11]
  i2988.clearFlags = i2989[12]
  i2988.cullingMask = i2989[13]
  i2988.rect = i2989[14]
  request.r(i2989[15], i2989[16], 0, i2988, 'targetTexture')
  i2988.usePhysicalProperties = !!i2989[17]
  i2988.focalLength = i2989[18]
  i2988.sensorSize = new pc.Vec2( i2989[19], i2989[20] )
  i2988.lensShift = new pc.Vec2( i2989[21], i2989[22] )
  i2988.gateFit = i2989[23]
  return i2988
}

Deserializers["Confetti"] = function (request, data, root) {
  var i2990 = root || request.c( 'Confetti' )
  var i2991 = data
  var i2993 = i2991[0]
  var i2992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2993.length; i += 2) {
  request.r(i2993[i + 0], i2993[i + 1], 1, i2992, '')
  }
  i2990.fireworks = i2992
  request.r(i2991[1], i2991[2], 0, i2990, '_particleSystem')
  return i2990
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2996 = root || request.c( 'SoundManager' )
  var i2997 = data
  var i2999 = i2997[0]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.push( request.d('SoundAudioClip', i2999[i + 0]) );
  }
  i2996.soundAudioClips = i2998
  var i3001 = i2997[1]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.push( request.d('SoundAudioClip', i3001[i + 0]) );
  }
  i2996.itemClickedAudio = i3000
  var i3003 = i2997[2]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('SoundAudioClip', i3003[i + 0]) );
  }
  i2996.textFloatInPk = i3002
  return i2996
}

Deserializers["SoundAudioClip"] = function (request, data, root) {
  var i3006 = root || request.c( 'SoundAudioClip' )
  var i3007 = data
  i3006.sound = i3007[0]
  request.r(i3007[1], i3007[2], 0, i3006, 'audioClip')
  i3006.volume = i3007[3]
  i3006.pitch = i3007[4]
  i3006.loop = !!i3007[5]
  request.r(i3007[6], i3007[7], 0, i3006, 'source')
  return i3006
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3009 = data
  request.r(i3009[0], i3009[1], 0, i3008, 'm_FirstSelected')
  i3008.m_sendNavigationEvents = !!i3009[2]
  i3008.m_DragThreshold = i3009[3]
  return i3008
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3011 = data
  i3010.m_HorizontalAxis = i3011[0]
  i3010.m_VerticalAxis = i3011[1]
  i3010.m_SubmitButton = i3011[2]
  i3010.m_CancelButton = i3011[3]
  i3010.m_InputActionsPerSecond = i3011[4]
  i3010.m_RepeatDelay = i3011[5]
  i3010.m_ForceModuleActive = !!i3011[6]
  return i3010
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3012 = root || request.c( 'GameManager' )
  var i3013 = data
  i3012.mode = i3013[0]
  i3012.countTurn = i3013[1]
  i3012.timePerCheckInternet = i3013[2]
  i3012.data1 = i3013[3]
  i3012.data2 = i3013[4]
  i3012.data3 = i3013[5]
  i3012.dataArr1 = i3013[6]
  i3012.dataArr2 = i3013[7]
  i3012.dataArr3 = i3013[8]
  i3012.bodyPart = i3013[9]
  i3012.folderName1 = i3013[10]
  i3012.folderName2 = i3013[11]
  i3012.folderName3 = i3013[12]
  i3012.path1 = i3013[13]
  i3012.path2 = i3013[14]
  i3012.path3 = i3013[15]
  request.r(i3013[16], i3013[17], 0, i3012, 'skeleonAnimation1')
  request.r(i3013[18], i3013[19], 0, i3012, 'skeleonAnimation2')
  request.r(i3013[20], i3013[21], 0, i3012, 'skeleonAnimation3')
  request.r(i3013[22], i3013[23], 0, i3012, 'shopController')
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3015 = data
  i3014.ambientIntensity = i3015[0]
  i3014.reflectionIntensity = i3015[1]
  i3014.ambientMode = i3015[2]
  i3014.ambientLight = new pc.Color(i3015[3], i3015[4], i3015[5], i3015[6])
  i3014.ambientSkyColor = new pc.Color(i3015[7], i3015[8], i3015[9], i3015[10])
  i3014.ambientGroundColor = new pc.Color(i3015[11], i3015[12], i3015[13], i3015[14])
  i3014.ambientEquatorColor = new pc.Color(i3015[15], i3015[16], i3015[17], i3015[18])
  i3014.fogColor = new pc.Color(i3015[19], i3015[20], i3015[21], i3015[22])
  i3014.fogEndDistance = i3015[23]
  i3014.fogStartDistance = i3015[24]
  i3014.fogDensity = i3015[25]
  i3014.fog = !!i3015[26]
  request.r(i3015[27], i3015[28], 0, i3014, 'skybox')
  i3014.fogMode = i3015[29]
  var i3017 = i3015[30]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 1) {
    i3016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3017[i + 0]) );
  }
  i3014.lightmaps = i3016
  i3014.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3015[31], i3014.lightProbes)
  i3014.lightmapsMode = i3015[32]
  i3014.mixedBakeMode = i3015[33]
  i3014.environmentLightingMode = i3015[34]
  i3014.ambientProbe = new pc.SphericalHarmonicsL2(i3015[35])
  i3014.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3015[36])
  i3014.useReferenceAmbientProbe = !!i3015[37]
  request.r(i3015[38], i3015[39], 0, i3014, 'customReflection')
  request.r(i3015[40], i3015[41], 0, i3014, 'defaultReflection')
  i3014.defaultReflectionMode = i3015[42]
  i3014.defaultReflectionResolution = i3015[43]
  i3014.sunLightObjectId = i3015[44]
  i3014.pixelLightCount = i3015[45]
  i3014.defaultReflectionHDR = !!i3015[46]
  i3014.hasLightDataAsset = !!i3015[47]
  i3014.hasManualGenerate = !!i3015[48]
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3021 = data
  request.r(i3021[0], i3021[1], 0, i3020, 'lightmapColor')
  request.r(i3021[2], i3021[3], 0, i3020, 'lightmapDirection')
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3022 = root || new UnityEngine.LightProbes()
  var i3023 = data
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3031 = data
  var i3033 = i3031[0]
  var i3032 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3033[i + 0]));
  }
  i3030.ShaderCompilationErrors = i3032
  i3030.name = i3031[1]
  i3030.guid = i3031[2]
  var i3035 = i3031[3]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.push( i3035[i + 0] );
  }
  i3030.shaderDefinedKeywords = i3034
  var i3037 = i3031[4]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3037[i + 0]) );
  }
  i3030.passes = i3036
  var i3039 = i3031[5]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3039[i + 0]) );
  }
  i3030.usePasses = i3038
  var i3041 = i3031[6]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3041[i + 0]) );
  }
  i3030.defaultParameterValues = i3040
  request.r(i3031[7], i3031[8], 0, i3030, 'unityFallbackShader')
  i3030.readDepth = !!i3031[9]
  i3030.isCreatedByShaderGraph = !!i3031[10]
  i3030.usedBatchUniforms = i3031[11]
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3045 = data
  i3044.shaderName = i3045[0]
  i3044.errorMessage = i3045[1]
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3048 = root || new pc.UnityShaderPass()
  var i3049 = data
  i3048.id = i3049[0]
  i3048.subShaderIndex = i3049[1]
  i3048.name = i3049[2]
  i3048.passType = i3049[3]
  i3048.grabPassTextureName = i3049[4]
  i3048.usePass = !!i3049[5]
  i3048.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[6], i3048.zTest)
  i3048.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[7], i3048.zWrite)
  i3048.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[8], i3048.culling)
  i3048.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3049[9], i3048.blending)
  i3048.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3049[10], i3048.alphaBlending)
  i3048.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[11], i3048.colorWriteMask)
  i3048.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[12], i3048.offsetUnits)
  i3048.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[13], i3048.offsetFactor)
  i3048.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[14], i3048.stencilRef)
  i3048.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[15], i3048.stencilReadMask)
  i3048.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3049[16], i3048.stencilWriteMask)
  i3048.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3049[17], i3048.stencilOp)
  i3048.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3049[18], i3048.stencilOpFront)
  i3048.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3049[19], i3048.stencilOpBack)
  var i3051 = i3049[20]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3051[i + 0]) );
  }
  i3048.tags = i3050
  var i3053 = i3049[21]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( i3053[i + 0] );
  }
  i3048.passDefinedKeywords = i3052
  var i3055 = i3049[22]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3055[i + 0]) );
  }
  i3048.passDefinedKeywordGroups = i3054
  var i3057 = i3049[23]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3057[i + 0]) );
  }
  i3048.variants = i3056
  var i3059 = i3049[24]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3059[i + 0]) );
  }
  i3048.excludedVariants = i3058
  i3048.hasDepthReader = !!i3049[25]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3061 = data
  i3060.val = i3061[0]
  i3060.name = i3061[1]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3063 = data
  i3062.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3063[0], i3062.src)
  i3062.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3063[1], i3062.dst)
  i3062.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3063[2], i3062.op)
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3065 = data
  i3064.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3065[0], i3064.pass)
  i3064.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3065[1], i3064.fail)
  i3064.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3065[2], i3064.zFail)
  i3064.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3065[3], i3064.comp)
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3069 = data
  i3068.name = i3069[0]
  i3068.value = i3069[1]
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3073 = data
  var i3075 = i3073[0]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( i3075[i + 0] );
  }
  i3072.keywords = i3074
  i3072.hasDiscard = !!i3073[1]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3079 = data
  i3078.passId = i3079[0]
  i3078.subShaderIndex = i3079[1]
  var i3081 = i3079[2]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.push( i3081[i + 0] );
  }
  i3078.keywords = i3080
  i3078.vertexProgram = i3079[3]
  i3078.fragmentProgram = i3079[4]
  i3078.readDepth = !!i3079[5]
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3085 = data
  request.r(i3085[0], i3085[1], 0, i3084, 'shader')
  i3084.pass = i3085[2]
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3089 = data
  i3088.name = i3089[0]
  i3088.type = i3089[1]
  i3088.value = new pc.Vec4( i3089[2], i3089[3], i3089[4], i3089[5] )
  i3088.textureValue = i3089[6]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3091 = data
  i3090.name = i3091[0]
  request.r(i3091[1], i3091[2], 0, i3090, 'texture')
  i3090.aabb = i3091[3]
  i3090.vertices = i3091[4]
  i3090.triangles = i3091[5]
  i3090.textureRect = UnityEngine.Rect.MinMaxRect(i3091[6], i3091[7], i3091[8], i3091[9])
  i3090.packedRect = UnityEngine.Rect.MinMaxRect(i3091[10], i3091[11], i3091[12], i3091[13])
  i3090.border = new pc.Vec4( i3091[14], i3091[15], i3091[16], i3091[17] )
  i3090.transparency = i3091[18]
  i3090.bounds = i3091[19]
  i3090.pixelsPerUnit = i3091[20]
  i3090.textureWidth = i3091[21]
  i3090.textureHeight = i3091[22]
  i3090.nativeSize = new pc.Vec2( i3091[23], i3091[24] )
  i3090.pivot = new pc.Vec2( i3091[25], i3091[26] )
  i3090.textureRectOffset = new pc.Vec2( i3091[27], i3091[28] )
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3093 = data
  i3092.name = i3093[0]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3095 = data
  i3094.name = i3095[0]
  i3094.ascent = i3095[1]
  i3094.originalLineHeight = i3095[2]
  i3094.fontSize = i3095[3]
  var i3097 = i3095[4]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3097[i + 0]) );
  }
  i3094.characterInfo = i3096
  request.r(i3095[5], i3095[6], 0, i3094, 'texture')
  i3094.originalFontSize = i3095[7]
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3101 = data
  i3100.index = i3101[0]
  i3100.advance = i3101[1]
  i3100.bearing = i3101[2]
  i3100.glyphWidth = i3101[3]
  i3100.glyphHeight = i3101[4]
  i3100.minX = i3101[5]
  i3100.maxX = i3101[6]
  i3100.minY = i3101[7]
  i3100.maxY = i3101[8]
  i3100.uvBottomLeftX = i3101[9]
  i3100.uvBottomLeftY = i3101[10]
  i3100.uvBottomRightX = i3101[11]
  i3100.uvBottomRightY = i3101[12]
  i3100.uvTopLeftX = i3101[13]
  i3100.uvTopLeftY = i3101[14]
  i3100.uvTopRightX = i3101[15]
  i3100.uvTopRightY = i3101[16]
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3103 = data
  i3102.name = i3103[0]
  i3102.bytes64 = i3103[1]
  i3102.data = i3103[2]
  return i3102
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3104 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3105 = data
  var i3107 = i3105[0]
  var i3106 = []
  for(var i = 0; i < i3107.length; i += 2) {
  request.r(i3107[i + 0], i3107[i + 1], 2, i3106, '')
  }
  i3104.atlasAssets = i3106
  i3104.scale = i3105[1]
  request.r(i3105[2], i3105[3], 0, i3104, 'skeletonJSON')
  i3104.isUpgradingBlendModeMaterials = !!i3105[4]
  i3104.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3105[5], i3104.blendModeMaterials)
  var i3109 = i3105[6]
  var i3108 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3109.length; i += 2) {
  request.r(i3109[i + 0], i3109[i + 1], 1, i3108, '')
  }
  i3104.skeletonDataModifiers = i3108
  var i3111 = i3105[7]
  var i3110 = []
  for(var i = 0; i < i3111.length; i += 1) {
    i3110.push( i3111[i + 0] );
  }
  i3104.fromAnimation = i3110
  var i3113 = i3105[8]
  var i3112 = []
  for(var i = 0; i < i3113.length; i += 1) {
    i3112.push( i3113[i + 0] );
  }
  i3104.toAnimation = i3112
  i3104.duration = i3105[9]
  i3104.defaultMix = i3105[10]
  request.r(i3105[11], i3105[12], 0, i3104, 'controller')
  return i3104
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3116 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3117 = data
  i3116.applyAdditiveMaterial = !!i3117[0]
  var i3119 = i3117[1]
  var i3118 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3119[i + 0]));
  }
  i3116.additiveMaterials = i3118
  var i3121 = i3117[2]
  var i3120 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3121[i + 0]));
  }
  i3116.multiplyMaterials = i3120
  var i3123 = i3117[3]
  var i3122 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3123[i + 0]));
  }
  i3116.screenMaterials = i3122
  i3116.requiresBlendModeMaterials = !!i3117[4]
  return i3116
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3126 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3127 = data
  i3126.pageName = i3127[0]
  request.r(i3127[1], i3127[2], 0, i3126, 'material')
  return i3126
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3130 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3131 = data
  request.r(i3131[0], i3131[1], 0, i3130, 'atlasFile')
  var i3133 = i3131[2]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 2) {
  request.r(i3133[i + 0], i3133[i + 1], 2, i3132, '')
  }
  i3130.materials = i3132
  return i3130
}

Deserializers["Item"] = function (request, data, root) {
  var i3134 = root || request.c( 'Item' )
  var i3135 = data
  i3134.id = i3135[0]
  i3134.bodypartName = i3135[1]
  request.r(i3135[2], i3135[3], 0, i3134, 'preview')
  request.r(i3135[4], i3135[5], 0, i3134, 'part')
  i3134.isAd = !!i3135[6]
  i3134.adNum = i3135[7]
  i3134.price = i3135[8]
  i3134.bodyPart = i3135[9]
  i3134.specialPos = !!i3135[10]
  i3134.realPos = new pc.Vec3( i3135[11], i3135[12], i3135[13] )
  i3134.catalogue = i3135[14]
  i3134.dataAsset = i3135[15]
  i3134.pkTheme = i3135[16]
  i3134.priority = i3135[17]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3137 = data
  var i3139 = i3137[0]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3139[i + 0]) );
  }
  i3136.files = i3138
  i3136.componentToPrefabIds = i3137[1]
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3143 = data
  i3142.path = i3143[0]
  request.r(i3143[1], i3143[2], 0, i3142, 'unityObject')
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3145 = data
  var i3147 = i3145[0]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3147[i + 0]) );
  }
  i3144.scriptsExecutionOrder = i3146
  var i3149 = i3145[1]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3149[i + 0]) );
  }
  i3144.sortingLayers = i3148
  var i3151 = i3145[2]
  var i3150 = []
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3151[i + 0]) );
  }
  i3144.cullingLayers = i3150
  i3144.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3145[3], i3144.timeSettings)
  i3144.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3145[4], i3144.physicsSettings)
  i3144.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3145[5], i3144.physics2DSettings)
  i3144.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3145[6], i3144.qualitySettings)
  i3144.enableRealtimeShadows = !!i3145[7]
  i3144.enableAutoInstancing = !!i3145[8]
  i3144.enableDynamicBatching = !!i3145[9]
  i3144.lightmapEncodingQuality = i3145[10]
  i3144.desiredColorSpace = i3145[11]
  var i3153 = i3145[12]
  var i3152 = []
  for(var i = 0; i < i3153.length; i += 1) {
    i3152.push( i3153[i + 0] );
  }
  i3144.allTags = i3152
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3157 = data
  i3156.name = i3157[0]
  i3156.value = i3157[1]
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3161 = data
  i3160.id = i3161[0]
  i3160.name = i3161[1]
  i3160.value = i3161[2]
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3165 = data
  i3164.id = i3165[0]
  i3164.name = i3165[1]
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3167 = data
  i3166.fixedDeltaTime = i3167[0]
  i3166.maximumDeltaTime = i3167[1]
  i3166.timeScale = i3167[2]
  i3166.maximumParticleTimestep = i3167[3]
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3169 = data
  i3168.gravity = new pc.Vec3( i3169[0], i3169[1], i3169[2] )
  i3168.defaultSolverIterations = i3169[3]
  i3168.bounceThreshold = i3169[4]
  i3168.autoSyncTransforms = !!i3169[5]
  i3168.autoSimulation = !!i3169[6]
  var i3171 = i3169[7]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 1) {
    i3170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3171[i + 0]) );
  }
  i3168.collisionMatrix = i3170
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3175 = data
  i3174.enabled = !!i3175[0]
  i3174.layerId = i3175[1]
  i3174.otherLayerId = i3175[2]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3177 = data
  request.r(i3177[0], i3177[1], 0, i3176, 'material')
  i3176.gravity = new pc.Vec2( i3177[2], i3177[3] )
  i3176.positionIterations = i3177[4]
  i3176.velocityIterations = i3177[5]
  i3176.velocityThreshold = i3177[6]
  i3176.maxLinearCorrection = i3177[7]
  i3176.maxAngularCorrection = i3177[8]
  i3176.maxTranslationSpeed = i3177[9]
  i3176.maxRotationSpeed = i3177[10]
  i3176.baumgarteScale = i3177[11]
  i3176.baumgarteTOIScale = i3177[12]
  i3176.timeToSleep = i3177[13]
  i3176.linearSleepTolerance = i3177[14]
  i3176.angularSleepTolerance = i3177[15]
  i3176.defaultContactOffset = i3177[16]
  i3176.autoSimulation = !!i3177[17]
  i3176.queriesHitTriggers = !!i3177[18]
  i3176.queriesStartInColliders = !!i3177[19]
  i3176.callbacksOnDisable = !!i3177[20]
  i3176.reuseCollisionCallbacks = !!i3177[21]
  i3176.autoSyncTransforms = !!i3177[22]
  var i3179 = i3177[23]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3179[i + 0]) );
  }
  i3176.collisionMatrix = i3178
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3183 = data
  i3182.enabled = !!i3183[0]
  i3182.layerId = i3183[1]
  i3182.otherLayerId = i3183[2]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3185 = data
  var i3187 = i3185[0]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3187[i + 0]) );
  }
  i3184.qualityLevels = i3186
  var i3189 = i3185[1]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( i3189[i + 0] );
  }
  i3184.names = i3188
  i3184.shadows = i3185[2]
  i3184.anisotropicFiltering = i3185[3]
  i3184.antiAliasing = i3185[4]
  i3184.lodBias = i3185[5]
  i3184.shadowCascades = i3185[6]
  i3184.shadowDistance = i3185[7]
  i3184.shadowmaskMode = i3185[8]
  i3184.shadowProjection = i3185[9]
  i3184.shadowResolution = i3185[10]
  i3184.softParticles = !!i3185[11]
  i3184.softVegetation = !!i3185[12]
  i3184.activeColorSpace = i3185[13]
  i3184.desiredColorSpace = i3185[14]
  i3184.masterTextureLimit = i3185[15]
  i3184.maxQueuedFrames = i3185[16]
  i3184.particleRaycastBudget = i3185[17]
  i3184.pixelLightCount = i3185[18]
  i3184.realtimeReflectionProbes = !!i3185[19]
  i3184.shadowCascade2Split = i3185[20]
  i3184.shadowCascade4Split = new pc.Vec3( i3185[21], i3185[22], i3185[23] )
  i3184.streamingMipmapsActive = !!i3185[24]
  i3184.vSyncCount = i3185[25]
  i3184.asyncUploadBufferSize = i3185[26]
  i3184.asyncUploadTimeSlice = i3185[27]
  i3184.billboardsFaceCameraPosition = !!i3185[28]
  i3184.shadowNearPlaneOffset = i3185[29]
  i3184.streamingMipmapsMemoryBudget = i3185[30]
  i3184.maximumLODLevel = i3185[31]
  i3184.streamingMipmapsAddAllCameras = !!i3185[32]
  i3184.streamingMipmapsMaxLevelReduction = i3185[33]
  i3184.streamingMipmapsRenderersPerFrame = i3185[34]
  i3184.resolutionScalingFixedDPIFactor = i3185[35]
  i3184.streamingMipmapsMaxFileIORequests = i3185[36]
  i3184.currentQualityLevel = i3185[37]
  return i3184
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[16],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[16],"94":[48],"95":[96],"97":[96],"15":[7],"98":[7],"22":[23],"99":[16],"100":[7],"101":[8,7],"42":[48],"38":[8,7],"102":[103,48],"104":[48,47],"105":[48],"106":[72],"107":[80],"108":[109],"110":[111],"112":[7],"113":[7],"18":[15],"10":[8,7],"114":[7],"17":[15],"37":[7],"35":[7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[7],"36":[7],"120":[7],"121":[8,7],"122":[7],"34":[7],"123":[7],"124":[7],"23":[8,7],"125":[7],"126":[56],"127":[56],"57":[56],"128":[56],"129":[16],"130":[16],"131":[40],"132":[7,8],"133":[134]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","ItemDisplay","UnityEngine.MonoBehaviour","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UI_Result","BgAnimController","CharacterManager","CountNumber","UnityEngine.UI.Text","UnityEngine.Font","UI_Lobby","UnityEngine.CanvasGroup","UI_Ingame","TabMenuHandler","Tab","GridHandler","Scale","UIHandler","BreathButton","UnityEngine.UI.ScrollRect","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ContentSizeFitter","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.SpriteRenderer","UnityEngine.Rendering.SortingGroup","Spine.Unity.SkeletonAnimation","Spine.Unity.BoneFollower","HeadController","SortingLayerCharacter","TouchController","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","ShopController","Item","CameraHandler","Confetti","UnityEngine.AudioListener","SoundManager","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CustomSlider","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","Coffee.UIExtensions.UIParticle","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer"]

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

Deserializers.buildID = "96dd0f79-2e53-4a4b-a798-aa6e5c1d037a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

