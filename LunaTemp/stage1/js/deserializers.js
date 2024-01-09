var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6870 = root || request.c( 'UnityEngine.JointSpring' )
  var i6871 = data
  i6870.spring = i6871[0]
  i6870.damper = i6871[1]
  i6870.targetPosition = i6871[2]
  return i6870
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6872 = root || request.c( 'UnityEngine.JointMotor' )
  var i6873 = data
  i6872.m_TargetVelocity = i6873[0]
  i6872.m_Force = i6873[1]
  i6872.m_FreeSpin = i6873[2]
  return i6872
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6874 = root || request.c( 'UnityEngine.JointLimits' )
  var i6875 = data
  i6874.m_Min = i6875[0]
  i6874.m_Max = i6875[1]
  i6874.m_Bounciness = i6875[2]
  i6874.m_BounceMinVelocity = i6875[3]
  i6874.m_ContactDistance = i6875[4]
  i6874.minBounce = i6875[5]
  i6874.maxBounce = i6875[6]
  return i6874
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6876 = root || request.c( 'UnityEngine.JointDrive' )
  var i6877 = data
  i6876.m_PositionSpring = i6877[0]
  i6876.m_PositionDamper = i6877[1]
  i6876.m_MaximumForce = i6877[2]
  return i6876
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6878 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6879 = data
  i6878.m_Spring = i6879[0]
  i6878.m_Damper = i6879[1]
  return i6878
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6880 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6881 = data
  i6880.m_Limit = i6881[0]
  i6880.m_Bounciness = i6881[1]
  i6880.m_ContactDistance = i6881[2]
  return i6880
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6882 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6883 = data
  i6882.m_ExtremumSlip = i6883[0]
  i6882.m_ExtremumValue = i6883[1]
  i6882.m_AsymptoteSlip = i6883[2]
  i6882.m_AsymptoteValue = i6883[3]
  i6882.m_Stiffness = i6883[4]
  return i6882
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6884 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6885 = data
  i6884.m_LowerAngle = i6885[0]
  i6884.m_UpperAngle = i6885[1]
  return i6884
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6886 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6887 = data
  i6886.m_MotorSpeed = i6887[0]
  i6886.m_MaximumMotorTorque = i6887[1]
  return i6886
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6888 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6889 = data
  i6888.m_DampingRatio = i6889[0]
  i6888.m_Frequency = i6889[1]
  i6888.m_Angle = i6889[2]
  return i6888
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6890 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6891 = data
  i6890.m_LowerTranslation = i6891[0]
  i6890.m_UpperTranslation = i6891[1]
  return i6890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6892 = root || new pc.UnityMaterial()
  var i6893 = data
  i6892.name = i6893[0]
  request.r(i6893[1], i6893[2], 0, i6892, 'shader')
  i6892.renderQueue = i6893[3]
  i6892.enableInstancing = !!i6893[4]
  var i6895 = i6893[5]
  var i6894 = []
  for(var i = 0; i < i6895.length; i += 1) {
    i6894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6895[i + 0]) );
  }
  i6892.floatParameters = i6894
  var i6897 = i6893[6]
  var i6896 = []
  for(var i = 0; i < i6897.length; i += 1) {
    i6896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6897[i + 0]) );
  }
  i6892.colorParameters = i6896
  var i6899 = i6893[7]
  var i6898 = []
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6899[i + 0]) );
  }
  i6892.vectorParameters = i6898
  var i6901 = i6893[8]
  var i6900 = []
  for(var i = 0; i < i6901.length; i += 1) {
    i6900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6901[i + 0]) );
  }
  i6892.textureParameters = i6900
  var i6903 = i6893[9]
  var i6902 = []
  for(var i = 0; i < i6903.length; i += 1) {
    i6902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6903[i + 0]) );
  }
  i6892.materialFlags = i6902
  return i6892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6907 = data
  i6906.name = i6907[0]
  i6906.value = i6907[1]
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6911 = data
  i6910.name = i6911[0]
  i6910.value = new pc.Color(i6911[1], i6911[2], i6911[3], i6911[4])
  return i6910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6915 = data
  i6914.name = i6915[0]
  i6914.value = new pc.Vec4( i6915[1], i6915[2], i6915[3], i6915[4] )
  return i6914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6919 = data
  i6918.name = i6919[0]
  request.r(i6919[1], i6919[2], 0, i6918, 'value')
  return i6918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6923 = data
  i6922.name = i6923[0]
  i6922.enabled = !!i6923[1]
  return i6922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6925 = data
  i6924.name = i6925[0]
  i6924.width = i6925[1]
  i6924.height = i6925[2]
  i6924.mipmapCount = i6925[3]
  i6924.anisoLevel = i6925[4]
  i6924.filterMode = i6925[5]
  i6924.hdr = !!i6925[6]
  i6924.format = i6925[7]
  i6924.wrapMode = i6925[8]
  i6924.alphaIsTransparency = !!i6925[9]
  i6924.alphaSource = i6925[10]
  return i6924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6927 = data
  i6926.position = new pc.Vec3( i6927[0], i6927[1], i6927[2] )
  i6926.scale = new pc.Vec3( i6927[3], i6927[4], i6927[5] )
  i6926.rotation = new pc.Quat(i6927[6], i6927[7], i6927[8], i6927[9])
  return i6926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6929 = data
  i6928.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6929[0], i6928.main)
  i6928.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6929[1], i6928.colorBySpeed)
  i6928.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6929[2], i6928.colorOverLifetime)
  i6928.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6929[3], i6928.emission)
  i6928.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6929[4], i6928.rotationBySpeed)
  i6928.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6929[5], i6928.rotationOverLifetime)
  i6928.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6929[6], i6928.shape)
  i6928.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6929[7], i6928.sizeBySpeed)
  i6928.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6929[8], i6928.sizeOverLifetime)
  i6928.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6929[9], i6928.textureSheetAnimation)
  i6928.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6929[10], i6928.velocityOverLifetime)
  i6928.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6929[11], i6928.noise)
  i6928.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6929[12], i6928.inheritVelocity)
  i6928.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6929[13], i6928.forceOverLifetime)
  i6928.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6929[14], i6928.limitVelocityOverLifetime)
  i6928.useAutoRandomSeed = !!i6929[15]
  i6928.randomSeed = i6929[16]
  return i6928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6930 = root || new pc.ParticleSystemMain()
  var i6931 = data
  i6930.duration = i6931[0]
  i6930.loop = !!i6931[1]
  i6930.prewarm = !!i6931[2]
  i6930.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[3], i6930.startDelay)
  i6930.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[4], i6930.startLifetime)
  i6930.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[5], i6930.startSpeed)
  i6930.startSize3D = !!i6931[6]
  i6930.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[7], i6930.startSizeX)
  i6930.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[8], i6930.startSizeY)
  i6930.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[9], i6930.startSizeZ)
  i6930.startRotation3D = !!i6931[10]
  i6930.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[11], i6930.startRotationX)
  i6930.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[12], i6930.startRotationY)
  i6930.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[13], i6930.startRotationZ)
  i6930.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6931[14], i6930.startColor)
  i6930.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6931[15], i6930.gravityModifier)
  i6930.simulationSpace = i6931[16]
  request.r(i6931[17], i6931[18], 0, i6930, 'customSimulationSpace')
  i6930.simulationSpeed = i6931[19]
  i6930.useUnscaledTime = !!i6931[20]
  i6930.scalingMode = i6931[21]
  i6930.playOnAwake = !!i6931[22]
  i6930.maxParticles = i6931[23]
  i6930.emitterVelocityMode = i6931[24]
  i6930.stopAction = i6931[25]
  return i6930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6932 = root || new pc.MinMaxCurve()
  var i6933 = data
  i6932.mode = i6933[0]
  i6932.curveMin = new pc.AnimationCurve( { keys_flow: i6933[1] } )
  i6932.curveMax = new pc.AnimationCurve( { keys_flow: i6933[2] } )
  i6932.curveMultiplier = i6933[3]
  i6932.constantMin = i6933[4]
  i6932.constantMax = i6933[5]
  return i6932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6934 = root || new pc.MinMaxGradient()
  var i6935 = data
  i6934.mode = i6935[0]
  i6934.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6935[1], i6934.gradientMin)
  i6934.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6935[2], i6934.gradientMax)
  i6934.colorMin = new pc.Color(i6935[3], i6935[4], i6935[5], i6935[6])
  i6934.colorMax = new pc.Color(i6935[7], i6935[8], i6935[9], i6935[10])
  return i6934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6937 = data
  i6936.mode = i6937[0]
  var i6939 = i6937[1]
  var i6938 = []
  for(var i = 0; i < i6939.length; i += 1) {
    i6938.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6939[i + 0]) );
  }
  i6936.colorKeys = i6938
  var i6941 = i6937[2]
  var i6940 = []
  for(var i = 0; i < i6941.length; i += 1) {
    i6940.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6941[i + 0]) );
  }
  i6936.alphaKeys = i6940
  return i6936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6942 = root || new pc.ParticleSystemColorBySpeed()
  var i6943 = data
  i6942.enabled = !!i6943[0]
  i6942.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6943[1], i6942.color)
  i6942.range = new pc.Vec2( i6943[2], i6943[3] )
  return i6942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6947 = data
  i6946.color = new pc.Color(i6947[0], i6947[1], i6947[2], i6947[3])
  i6946.time = i6947[4]
  return i6946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6951 = data
  i6950.alpha = i6951[0]
  i6950.time = i6951[1]
  return i6950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6952 = root || new pc.ParticleSystemColorOverLifetime()
  var i6953 = data
  i6952.enabled = !!i6953[0]
  i6952.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6953[1], i6952.color)
  return i6952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6954 = root || new pc.ParticleSystemEmitter()
  var i6955 = data
  i6954.enabled = !!i6955[0]
  i6954.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6955[1], i6954.rateOverTime)
  i6954.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6955[2], i6954.rateOverDistance)
  var i6957 = i6955[3]
  var i6956 = []
  for(var i = 0; i < i6957.length; i += 1) {
    i6956.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6957[i + 0]) );
  }
  i6954.bursts = i6956
  return i6954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6960 = root || new pc.ParticleSystemBurst()
  var i6961 = data
  i6960.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6961[0], i6960.count)
  i6960.cycleCount = i6961[1]
  i6960.minCount = i6961[2]
  i6960.maxCount = i6961[3]
  i6960.repeatInterval = i6961[4]
  i6960.time = i6961[5]
  return i6960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6962 = root || new pc.ParticleSystemRotationBySpeed()
  var i6963 = data
  i6962.enabled = !!i6963[0]
  i6962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6963[1], i6962.x)
  i6962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6963[2], i6962.y)
  i6962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6963[3], i6962.z)
  i6962.separateAxes = !!i6963[4]
  i6962.range = new pc.Vec2( i6963[5], i6963[6] )
  return i6962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6964 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6965 = data
  i6964.enabled = !!i6965[0]
  i6964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6965[1], i6964.x)
  i6964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6965[2], i6964.y)
  i6964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6965[3], i6964.z)
  i6964.separateAxes = !!i6965[4]
  return i6964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6966 = root || new pc.ParticleSystemShape()
  var i6967 = data
  i6966.enabled = !!i6967[0]
  i6966.shapeType = i6967[1]
  i6966.randomDirectionAmount = i6967[2]
  i6966.sphericalDirectionAmount = i6967[3]
  i6966.randomPositionAmount = i6967[4]
  i6966.alignToDirection = !!i6967[5]
  i6966.radius = i6967[6]
  i6966.radiusMode = i6967[7]
  i6966.radiusSpread = i6967[8]
  i6966.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6967[9], i6966.radiusSpeed)
  i6966.radiusThickness = i6967[10]
  i6966.angle = i6967[11]
  i6966.length = i6967[12]
  i6966.boxThickness = new pc.Vec3( i6967[13], i6967[14], i6967[15] )
  i6966.meshShapeType = i6967[16]
  request.r(i6967[17], i6967[18], 0, i6966, 'mesh')
  request.r(i6967[19], i6967[20], 0, i6966, 'meshRenderer')
  request.r(i6967[21], i6967[22], 0, i6966, 'skinnedMeshRenderer')
  i6966.useMeshMaterialIndex = !!i6967[23]
  i6966.meshMaterialIndex = i6967[24]
  i6966.useMeshColors = !!i6967[25]
  i6966.normalOffset = i6967[26]
  i6966.arc = i6967[27]
  i6966.arcMode = i6967[28]
  i6966.arcSpread = i6967[29]
  i6966.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6967[30], i6966.arcSpeed)
  i6966.donutRadius = i6967[31]
  i6966.position = new pc.Vec3( i6967[32], i6967[33], i6967[34] )
  i6966.rotation = new pc.Vec3( i6967[35], i6967[36], i6967[37] )
  i6966.scale = new pc.Vec3( i6967[38], i6967[39], i6967[40] )
  return i6966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6968 = root || new pc.ParticleSystemSizeBySpeed()
  var i6969 = data
  i6968.enabled = !!i6969[0]
  i6968.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6969[1], i6968.x)
  i6968.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6969[2], i6968.y)
  i6968.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6969[3], i6968.z)
  i6968.separateAxes = !!i6969[4]
  i6968.range = new pc.Vec2( i6969[5], i6969[6] )
  return i6968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6970 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6971 = data
  i6970.enabled = !!i6971[0]
  i6970.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6971[1], i6970.x)
  i6970.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6971[2], i6970.y)
  i6970.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6971[3], i6970.z)
  i6970.separateAxes = !!i6971[4]
  return i6970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6972 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6973 = data
  i6972.enabled = !!i6973[0]
  i6972.mode = i6973[1]
  i6972.animation = i6973[2]
  i6972.numTilesX = i6973[3]
  i6972.numTilesY = i6973[4]
  i6972.useRandomRow = !!i6973[5]
  i6972.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6973[6], i6972.frameOverTime)
  i6972.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6973[7], i6972.startFrame)
  i6972.cycleCount = i6973[8]
  i6972.rowIndex = i6973[9]
  i6972.flipU = i6973[10]
  i6972.flipV = i6973[11]
  i6972.spriteCount = i6973[12]
  var i6975 = i6973[13]
  var i6974 = []
  for(var i = 0; i < i6975.length; i += 2) {
  request.r(i6975[i + 0], i6975[i + 1], 2, i6974, '')
  }
  i6972.sprites = i6974
  return i6972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6978 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6979 = data
  i6978.enabled = !!i6979[0]
  i6978.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[1], i6978.x)
  i6978.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[2], i6978.y)
  i6978.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[3], i6978.z)
  i6978.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[4], i6978.radial)
  i6978.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[5], i6978.speedModifier)
  i6978.space = i6979[6]
  i6978.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[7], i6978.orbitalX)
  i6978.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[8], i6978.orbitalY)
  i6978.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[9], i6978.orbitalZ)
  i6978.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[10], i6978.orbitalOffsetX)
  i6978.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[11], i6978.orbitalOffsetY)
  i6978.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6979[12], i6978.orbitalOffsetZ)
  return i6978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6980 = root || new pc.ParticleSystemNoise()
  var i6981 = data
  i6980.enabled = !!i6981[0]
  i6980.separateAxes = !!i6981[1]
  i6980.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[2], i6980.strengthX)
  i6980.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[3], i6980.strengthY)
  i6980.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[4], i6980.strengthZ)
  i6980.frequency = i6981[5]
  i6980.damping = !!i6981[6]
  i6980.octaveCount = i6981[7]
  i6980.octaveMultiplier = i6981[8]
  i6980.octaveScale = i6981[9]
  i6980.quality = i6981[10]
  i6980.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[11], i6980.scrollSpeed)
  i6980.scrollSpeedMultiplier = i6981[12]
  i6980.remapEnabled = !!i6981[13]
  i6980.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[14], i6980.remapX)
  i6980.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[15], i6980.remapY)
  i6980.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[16], i6980.remapZ)
  i6980.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[17], i6980.positionAmount)
  i6980.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[18], i6980.rotationAmount)
  i6980.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6981[19], i6980.sizeAmount)
  return i6980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6982 = root || new pc.ParticleSystemInheritVelocity()
  var i6983 = data
  i6982.enabled = !!i6983[0]
  i6982.mode = i6983[1]
  i6982.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6983[2], i6982.curve)
  return i6982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6984 = root || new pc.ParticleSystemForceOverLifetime()
  var i6985 = data
  i6984.enabled = !!i6985[0]
  i6984.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6985[1], i6984.x)
  i6984.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6985[2], i6984.y)
  i6984.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6985[3], i6984.z)
  i6984.space = i6985[4]
  i6984.randomized = !!i6985[5]
  return i6984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6986 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6987 = data
  i6986.enabled = !!i6987[0]
  i6986.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6987[1], i6986.limit)
  i6986.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6987[2], i6986.limitX)
  i6986.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6987[3], i6986.limitY)
  i6986.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6987[4], i6986.limitZ)
  i6986.dampen = i6987[5]
  i6986.separateAxes = !!i6987[6]
  i6986.space = i6987[7]
  i6986.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6987[8], i6986.drag)
  i6986.multiplyDragByParticleSize = !!i6987[9]
  i6986.multiplyDragByParticleVelocity = !!i6987[10]
  return i6986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6989 = data
  i6988.enabled = !!i6989[0]
  request.r(i6989[1], i6989[2], 0, i6988, 'sharedMaterial')
  var i6991 = i6989[3]
  var i6990 = []
  for(var i = 0; i < i6991.length; i += 2) {
  request.r(i6991[i + 0], i6991[i + 1], 2, i6990, '')
  }
  i6988.sharedMaterials = i6990
  i6988.receiveShadows = !!i6989[4]
  i6988.shadowCastingMode = i6989[5]
  i6988.sortingLayerID = i6989[6]
  i6988.sortingOrder = i6989[7]
  i6988.lightmapIndex = i6989[8]
  i6988.lightmapSceneIndex = i6989[9]
  i6988.lightmapScaleOffset = new pc.Vec4( i6989[10], i6989[11], i6989[12], i6989[13] )
  i6988.lightProbeUsage = i6989[14]
  i6988.reflectionProbeUsage = i6989[15]
  request.r(i6989[16], i6989[17], 0, i6988, 'mesh')
  i6988.meshCount = i6989[18]
  i6988.activeVertexStreamsCount = i6989[19]
  i6988.alignment = i6989[20]
  i6988.renderMode = i6989[21]
  i6988.sortMode = i6989[22]
  i6988.lengthScale = i6989[23]
  i6988.velocityScale = i6989[24]
  i6988.cameraVelocityScale = i6989[25]
  i6988.normalDirection = i6989[26]
  i6988.sortingFudge = i6989[27]
  i6988.minParticleSize = i6989[28]
  i6988.maxParticleSize = i6989[29]
  i6988.pivot = new pc.Vec3( i6989[30], i6989[31], i6989[32] )
  request.r(i6989[33], i6989[34], 0, i6988, 'trailMaterial')
  return i6988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6995 = data
  i6994.name = i6995[0]
  i6994.tagId = i6995[1]
  i6994.enabled = !!i6995[2]
  i6994.isStatic = !!i6995[3]
  i6994.layer = i6995[4]
  return i6994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6997 = data
  i6996.pivot = new pc.Vec2( i6997[0], i6997[1] )
  i6996.anchorMin = new pc.Vec2( i6997[2], i6997[3] )
  i6996.anchorMax = new pc.Vec2( i6997[4], i6997[5] )
  i6996.sizeDelta = new pc.Vec2( i6997[6], i6997[7] )
  i6996.anchoredPosition3D = new pc.Vec3( i6997[8], i6997[9], i6997[10] )
  i6996.rotation = new pc.Quat(i6997[11], i6997[12], i6997[13], i6997[14])
  i6996.scale = new pc.Vec3( i6997[15], i6997[16], i6997[17] )
  return i6996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6999 = data
  i6998.cullTransparentMesh = !!i6999[0]
  return i6998
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7000 = root || request.c( 'UnityEngine.UI.Image' )
  var i7001 = data
  request.r(i7001[0], i7001[1], 0, i7000, 'm_Sprite')
  i7000.m_Type = i7001[2]
  i7000.m_PreserveAspect = !!i7001[3]
  i7000.m_FillCenter = !!i7001[4]
  i7000.m_FillMethod = i7001[5]
  i7000.m_FillAmount = i7001[6]
  i7000.m_FillClockwise = !!i7001[7]
  i7000.m_FillOrigin = i7001[8]
  i7000.m_UseSpriteMesh = !!i7001[9]
  i7000.m_PixelsPerUnitMultiplier = i7001[10]
  request.r(i7001[11], i7001[12], 0, i7000, 'm_Material')
  i7000.m_Maskable = !!i7001[13]
  i7000.m_Color = new pc.Color(i7001[14], i7001[15], i7001[16], i7001[17])
  i7000.m_RaycastTarget = !!i7001[18]
  i7000.m_RaycastPadding = new pc.Vec4( i7001[19], i7001[20], i7001[21], i7001[22] )
  return i7000
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7002 = root || request.c( 'UnityEngine.UI.Button' )
  var i7003 = data
  i7002.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7003[0], i7002.m_OnClick)
  i7002.m_Navigation = request.d('UnityEngine.UI.Navigation', i7003[1], i7002.m_Navigation)
  i7002.m_Transition = i7003[2]
  i7002.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7003[3], i7002.m_Colors)
  i7002.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7003[4], i7002.m_SpriteState)
  i7002.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7003[5], i7002.m_AnimationTriggers)
  i7002.m_Interactable = !!i7003[6]
  request.r(i7003[7], i7003[8], 0, i7002, 'm_TargetGraphic')
  return i7002
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7004 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7005 = data
  i7004.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7005[0], i7004.m_PersistentCalls)
  return i7004
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7006 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7007 = data
  var i7009 = i7007[0]
  var i7008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7009.length; i += 1) {
    i7008.add(request.d('UnityEngine.Events.PersistentCall', i7009[i + 0]));
  }
  i7006.m_Calls = i7008
  return i7006
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7012 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7013 = data
  request.r(i7013[0], i7013[1], 0, i7012, 'm_Target')
  i7012.m_TargetAssemblyTypeName = i7013[2]
  i7012.m_MethodName = i7013[3]
  i7012.m_Mode = i7013[4]
  i7012.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7013[5], i7012.m_Arguments)
  i7012.m_CallState = i7013[6]
  return i7012
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7014 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7015 = data
  request.r(i7015[0], i7015[1], 0, i7014, 'm_ObjectArgument')
  i7014.m_ObjectArgumentAssemblyTypeName = i7015[2]
  i7014.m_IntArgument = i7015[3]
  i7014.m_FloatArgument = i7015[4]
  i7014.m_StringArgument = i7015[5]
  i7014.m_BoolArgument = !!i7015[6]
  return i7014
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7016 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7017 = data
  i7016.m_Mode = i7017[0]
  i7016.m_WrapAround = !!i7017[1]
  request.r(i7017[2], i7017[3], 0, i7016, 'm_SelectOnUp')
  request.r(i7017[4], i7017[5], 0, i7016, 'm_SelectOnDown')
  request.r(i7017[6], i7017[7], 0, i7016, 'm_SelectOnLeft')
  request.r(i7017[8], i7017[9], 0, i7016, 'm_SelectOnRight')
  return i7016
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7018 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7019 = data
  i7018.m_NormalColor = new pc.Color(i7019[0], i7019[1], i7019[2], i7019[3])
  i7018.m_HighlightedColor = new pc.Color(i7019[4], i7019[5], i7019[6], i7019[7])
  i7018.m_PressedColor = new pc.Color(i7019[8], i7019[9], i7019[10], i7019[11])
  i7018.m_SelectedColor = new pc.Color(i7019[12], i7019[13], i7019[14], i7019[15])
  i7018.m_DisabledColor = new pc.Color(i7019[16], i7019[17], i7019[18], i7019[19])
  i7018.m_ColorMultiplier = i7019[20]
  i7018.m_FadeDuration = i7019[21]
  return i7018
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7020 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7021 = data
  request.r(i7021[0], i7021[1], 0, i7020, 'm_HighlightedSprite')
  request.r(i7021[2], i7021[3], 0, i7020, 'm_PressedSprite')
  request.r(i7021[4], i7021[5], 0, i7020, 'm_SelectedSprite')
  request.r(i7021[6], i7021[7], 0, i7020, 'm_DisabledSprite')
  return i7020
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7022 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7023 = data
  i7022.m_NormalTrigger = i7023[0]
  i7022.m_HighlightedTrigger = i7023[1]
  i7022.m_PressedTrigger = i7023[2]
  i7022.m_SelectedTrigger = i7023[3]
  i7022.m_DisabledTrigger = i7023[4]
  return i7022
}

Deserializers["ItemDisplay"] = function (request, data, root) {
  var i7024 = root || request.c( 'ItemDisplay' )
  var i7025 = data
  request.r(i7025[0], i7025[1], 0, i7024, 'item')
  request.r(i7025[2], i7025[3], 0, i7024, 'itemSprite')
  request.r(i7025[4], i7025[5], 0, i7024, 'adSlot')
  request.r(i7025[6], i7025[7], 0, i7024, 'priceSlot')
  request.r(i7025[8], i7025[9], 0, i7024, 'lockSlot')
  request.r(i7025[10], i7025[11], 0, i7024, 'fill')
  request.r(i7025[12], i7025[13], 0, i7024, 'adCount')
  request.r(i7025[14], i7025[15], 0, i7024, 'starPk')
  request.r(i7025[16], i7025[17], 0, i7024, 'handTut')
  request.r(i7025[18], i7025[19], 0, i7024, 'blockPanelTut')
  request.r(i7025[20], i7025[21], 0, i7024, 'icoAd')
  request.r(i7025[22], i7025[23], 0, i7024, 'icoSkipAd')
  return i7024
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7026 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7027 = data
  i7026.m_hasFontAssetChanged = !!i7027[0]
  request.r(i7027[1], i7027[2], 0, i7026, 'm_baseMaterial')
  i7026.m_maskOffset = new pc.Vec4( i7027[3], i7027[4], i7027[5], i7027[6] )
  i7026.m_text = i7027[7]
  i7026.m_isRightToLeft = !!i7027[8]
  request.r(i7027[9], i7027[10], 0, i7026, 'm_fontAsset')
  request.r(i7027[11], i7027[12], 0, i7026, 'm_sharedMaterial')
  var i7029 = i7027[13]
  var i7028 = []
  for(var i = 0; i < i7029.length; i += 2) {
  request.r(i7029[i + 0], i7029[i + 1], 2, i7028, '')
  }
  i7026.m_fontSharedMaterials = i7028
  request.r(i7027[14], i7027[15], 0, i7026, 'm_fontMaterial')
  var i7031 = i7027[16]
  var i7030 = []
  for(var i = 0; i < i7031.length; i += 2) {
  request.r(i7031[i + 0], i7031[i + 1], 2, i7030, '')
  }
  i7026.m_fontMaterials = i7030
  i7026.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7027[17], i7027[18], i7027[19], i7027[20])
  i7026.m_fontColor = new pc.Color(i7027[21], i7027[22], i7027[23], i7027[24])
  i7026.m_enableVertexGradient = !!i7027[25]
  i7026.m_colorMode = i7027[26]
  i7026.m_fontColorGradient = request.d('TMPro.VertexGradient', i7027[27], i7026.m_fontColorGradient)
  request.r(i7027[28], i7027[29], 0, i7026, 'm_fontColorGradientPreset')
  request.r(i7027[30], i7027[31], 0, i7026, 'm_spriteAsset')
  i7026.m_tintAllSprites = !!i7027[32]
  request.r(i7027[33], i7027[34], 0, i7026, 'm_StyleSheet')
  i7026.m_TextStyleHashCode = i7027[35]
  i7026.m_overrideHtmlColors = !!i7027[36]
  i7026.m_faceColor = UnityEngine.Color32.ConstructColor(i7027[37], i7027[38], i7027[39], i7027[40])
  i7026.m_fontSize = i7027[41]
  i7026.m_fontSizeBase = i7027[42]
  i7026.m_fontWeight = i7027[43]
  i7026.m_enableAutoSizing = !!i7027[44]
  i7026.m_fontSizeMin = i7027[45]
  i7026.m_fontSizeMax = i7027[46]
  i7026.m_fontStyle = i7027[47]
  i7026.m_HorizontalAlignment = i7027[48]
  i7026.m_VerticalAlignment = i7027[49]
  i7026.m_textAlignment = i7027[50]
  i7026.m_characterSpacing = i7027[51]
  i7026.m_wordSpacing = i7027[52]
  i7026.m_lineSpacing = i7027[53]
  i7026.m_lineSpacingMax = i7027[54]
  i7026.m_paragraphSpacing = i7027[55]
  i7026.m_charWidthMaxAdj = i7027[56]
  i7026.m_enableWordWrapping = !!i7027[57]
  i7026.m_wordWrappingRatios = i7027[58]
  i7026.m_overflowMode = i7027[59]
  request.r(i7027[60], i7027[61], 0, i7026, 'm_linkedTextComponent')
  request.r(i7027[62], i7027[63], 0, i7026, 'parentLinkedComponent')
  i7026.m_enableKerning = !!i7027[64]
  i7026.m_enableExtraPadding = !!i7027[65]
  i7026.checkPaddingRequired = !!i7027[66]
  i7026.m_isRichText = !!i7027[67]
  i7026.m_parseCtrlCharacters = !!i7027[68]
  i7026.m_isOrthographic = !!i7027[69]
  i7026.m_isCullingEnabled = !!i7027[70]
  i7026.m_horizontalMapping = i7027[71]
  i7026.m_verticalMapping = i7027[72]
  i7026.m_uvLineOffset = i7027[73]
  i7026.m_geometrySortingOrder = i7027[74]
  i7026.m_IsTextObjectScaleStatic = !!i7027[75]
  i7026.m_VertexBufferAutoSizeReduction = !!i7027[76]
  i7026.m_useMaxVisibleDescender = !!i7027[77]
  i7026.m_pageToDisplay = i7027[78]
  i7026.m_margin = new pc.Vec4( i7027[79], i7027[80], i7027[81], i7027[82] )
  i7026.m_isUsingLegacyAnimationComponent = !!i7027[83]
  i7026.m_isVolumetricText = !!i7027[84]
  request.r(i7027[85], i7027[86], 0, i7026, 'm_Material')
  i7026.m_Maskable = !!i7027[87]
  i7026.m_Color = new pc.Color(i7027[88], i7027[89], i7027[90], i7027[91])
  i7026.m_RaycastTarget = !!i7027[92]
  i7026.m_RaycastPadding = new pc.Vec4( i7027[93], i7027[94], i7027[95], i7027[96] )
  return i7026
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7032 = root || request.c( 'TMPro.VertexGradient' )
  var i7033 = data
  i7032.topLeft = new pc.Color(i7033[0], i7033[1], i7033[2], i7033[3])
  i7032.topRight = new pc.Color(i7033[4], i7033[5], i7033[6], i7033[7])
  i7032.bottomLeft = new pc.Color(i7033[8], i7033[9], i7033[10], i7033[11])
  i7032.bottomRight = new pc.Color(i7033[12], i7033[13], i7033[14], i7033[15])
  return i7032
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i7034 = root || request.c( 'UnityEngine.UI.Outline' )
  var i7035 = data
  i7034.m_EffectColor = new pc.Color(i7035[0], i7035[1], i7035[2], i7035[3])
  i7034.m_EffectDistance = new pc.Vec2( i7035[4], i7035[5] )
  i7034.m_UseGraphicAlpha = !!i7035[6]
  return i7034
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i7036 = root || request.c( 'UnityEngine.UI.Text' )
  var i7037 = data
  i7036.m_FontData = request.d('UnityEngine.UI.FontData', i7037[0], i7036.m_FontData)
  i7036.m_Text = i7037[1]
  request.r(i7037[2], i7037[3], 0, i7036, 'm_Material')
  i7036.m_Maskable = !!i7037[4]
  i7036.m_Color = new pc.Color(i7037[5], i7037[6], i7037[7], i7037[8])
  i7036.m_RaycastTarget = !!i7037[9]
  i7036.m_RaycastPadding = new pc.Vec4( i7037[10], i7037[11], i7037[12], i7037[13] )
  return i7036
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i7038 = root || request.c( 'UnityEngine.UI.FontData' )
  var i7039 = data
  request.r(i7039[0], i7039[1], 0, i7038, 'm_Font')
  i7038.m_FontSize = i7039[2]
  i7038.m_FontStyle = i7039[3]
  i7038.m_BestFit = !!i7039[4]
  i7038.m_MinSize = i7039[5]
  i7038.m_MaxSize = i7039[6]
  i7038.m_Alignment = i7039[7]
  i7038.m_AlignByGeometry = !!i7039[8]
  i7038.m_RichText = !!i7039[9]
  i7038.m_HorizontalOverflow = i7039[10]
  i7038.m_VerticalOverflow = i7039[11]
  i7038.m_LineSpacing = i7039[12]
  return i7038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7041 = data
  i7040.enabled = !!i7041[0]
  i7040.planeDistance = i7041[1]
  i7040.referencePixelsPerUnit = i7041[2]
  i7040.isFallbackOverlay = !!i7041[3]
  i7040.renderMode = i7041[4]
  i7040.renderOrder = i7041[5]
  i7040.sortingLayerName = i7041[6]
  i7040.sortingOrder = i7041[7]
  i7040.scaleFactor = i7041[8]
  request.r(i7041[9], i7041[10], 0, i7040, 'worldCamera')
  i7040.overrideSorting = !!i7041[11]
  i7040.pixelPerfect = !!i7041[12]
  i7040.targetDisplay = i7041[13]
  i7040.overridePixelPerfect = !!i7041[14]
  return i7040
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7042 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7043 = data
  i7042.m_IgnoreReversedGraphics = !!i7043[0]
  i7042.m_BlockingObjects = i7043[1]
  i7042.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7043[2] )
  return i7042
}

Deserializers["TutHand"] = function (request, data, root) {
  var i7044 = root || request.c( 'TutHand' )
  var i7045 = data
  return i7044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7047 = data
  i7046.name = i7047[0]
  i7046.index = i7047[1]
  i7046.startup = !!i7047[2]
  return i7046
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7048 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7049 = data
  i7048.m_UiScaleMode = i7049[0]
  i7048.m_ReferencePixelsPerUnit = i7049[1]
  i7048.m_ScaleFactor = i7049[2]
  i7048.m_ReferenceResolution = new pc.Vec2( i7049[3], i7049[4] )
  i7048.m_ScreenMatchMode = i7049[5]
  i7048.m_MatchWidthOrHeight = i7049[6]
  i7048.m_PhysicalUnit = i7049[7]
  i7048.m_FallbackScreenDPI = i7049[8]
  i7048.m_DefaultSpriteDPI = i7049[9]
  i7048.m_DynamicPixelsPerUnit = i7049[10]
  i7048.m_PresetInfoIsWorld = !!i7049[11]
  return i7048
}

Deserializers["UI_Result"] = function (request, data, root) {
  var i7050 = root || request.c( 'UI_Result' )
  var i7051 = data
  request.r(i7051[0], i7051[1], 0, i7050, 'rewardPos')
  i7050.testSpin = !!i7051[2]
  request.r(i7051[3], i7051[4], 0, i7050, 'bgAnimController')
  request.r(i7051[5], i7051[6], 0, i7050, 'characterManager')
  request.r(i7051[7], i7051[8], 0, i7050, 'rewardImg')
  request.r(i7051[9], i7051[10], 0, i7050, 'youGotPanel')
  request.r(i7051[11], i7051[12], 0, i7050, 'endgameCanvasGroup')
  request.r(i7051[13], i7051[14], 0, i7050, 'tutPanel')
  request.r(i7051[15], i7051[16], 0, i7050, 'tutHand')
  request.r(i7051[17], i7051[18], 0, i7050, 'card')
  request.r(i7051[19], i7051[20], 0, i7050, 'mainCard')
  request.r(i7051[21], i7051[22], 0, i7050, 'x2Btn')
  request.r(i7051[23], i7051[24], 0, i7050, 'x2Btn_OldVersion')
  request.r(i7051[25], i7051[26], 0, i7050, 'rewardSpinZone')
  request.r(i7051[27], i7051[28], 0, i7050, 'rewardRandomZone')
  request.r(i7051[29], i7051[30], 0, i7050, 'quantity')
  request.r(i7051[31], i7051[32], 0, i7050, 'coinNum')
  request.r(i7051[33], i7051[34], 0, i7050, 'moneyText')
  var i7053 = i7051[35]
  var i7052 = []
  for(var i = 0; i < i7053.length; i += 2) {
  request.r(i7053[i + 0], i7053[i + 1], 2, i7052, '')
  }
  i7050.rewardSpr = i7052
  var i7055 = i7051[36]
  var i7054 = []
  for(var i = 0; i < i7055.length; i += 2) {
  request.r(i7055[i + 0], i7055[i + 1], 2, i7054, '')
  }
  i7050.rewardInfo = i7054
  var i7057 = i7051[37]
  var i7056 = []
  for(var i = 0; i < i7057.length; i += 2) {
  request.r(i7057[i + 0], i7057[i + 1], 2, i7056, '')
  }
  i7050.rewardOldVersionInfo = i7056
  var i7059 = i7051[38]
  var i7058 = []
  for(var i = 0; i < i7059.length; i += 2) {
  request.r(i7059[i + 0], i7059[i + 1], 2, i7058, '')
  }
  i7050.replayTxts = i7058
  request.r(i7051[39], i7051[40], 0, i7050, 'rewardCanvasGroup')
  request.r(i7051[41], i7051[42], 0, i7050, 'rewardCanvasGroupOldVer')
  request.r(i7051[43], i7051[44], 0, i7050, 'adIcon')
  request.r(i7051[45], i7051[46], 0, i7050, 'freeIcon')
  request.r(i7051[47], i7051[48], 0, i7050, 'adIconOldVer')
  request.r(i7051[49], i7051[50], 0, i7050, 'freeIconOlder')
  request.r(i7051[51], i7051[52], 0, i7050, 'spin')
  request.r(i7051[53], i7051[54], 0, i7050, 'arrowSpin')
  request.r(i7051[55], i7051[56], 0, i7050, 'arrowAnim')
  var i7061 = i7051[57]
  var i7060 = []
  for(var i = 0; i < i7061.length; i += 2) {
  request.r(i7061[i + 0], i7061[i + 1], 2, i7060, '')
  }
  i7050.adIco = i7060
  var i7063 = i7051[58]
  var i7062 = []
  for(var i = 0; i < i7063.length; i += 2) {
  request.r(i7063[i + 0], i7063[i + 1], 2, i7062, '')
  }
  i7050.skipAdIco = i7062
  return i7050
}

Deserializers["CountNumber"] = function (request, data, root) {
  var i7066 = root || request.c( 'CountNumber' )
  var i7067 = data
  i7066.countDuration = i7067[0]
  request.r(i7067[1], i7067[2], 0, i7066, 'numberText')
  i7066.automaticSetNum = !!i7067[3]
  return i7066
}

Deserializers["UI_Lobby"] = function (request, data, root) {
  var i7068 = root || request.c( 'UI_Lobby' )
  var i7069 = data
  request.r(i7069[0], i7069[1], 0, i7068, 'settingPanel')
  request.r(i7069[2], i7069[3], 0, i7068, 'adsPanel')
  request.r(i7069[4], i7069[5], 0, i7068, 'testMoney1')
  request.r(i7069[6], i7069[7], 0, i7068, 'testMoney2')
  return i7068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i7070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i7071 = data
  i7070.m_Alpha = i7071[0]
  i7070.m_Interactable = !!i7071[1]
  i7070.m_BlocksRaycasts = !!i7071[2]
  i7070.m_IgnoreParentGroups = !!i7071[3]
  i7070.enabled = !!i7071[4]
  return i7070
}

Deserializers["UI_FadeElementLobby"] = function (request, data, root) {
  var i7072 = root || request.c( 'UI_FadeElementLobby' )
  var i7073 = data
  request.r(i7073[0], i7073[1], 0, i7072, 'boosterDisplayer')
  return i7072
}

Deserializers["DragDropTut"] = function (request, data, root) {
  var i7074 = root || request.c( 'DragDropTut' )
  var i7075 = data
  return i7074
}

Deserializers["UI_Ingame"] = function (request, data, root) {
  var i7076 = root || request.c( 'UI_Ingame' )
  var i7077 = data
  request.r(i7077[0], i7077[1], 0, i7076, 'nextBtn')
  request.r(i7077[2], i7077[3], 0, i7076, 'doneBtn')
  request.r(i7077[4], i7077[5], 0, i7076, 'submitBtn')
  request.r(i7077[6], i7077[7], 0, i7076, 'battleBtn')
  var i7079 = i7077[8]
  var i7078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i7079.length; i += 2) {
  request.r(i7079[i + 0], i7079[i + 1], 1, i7078, '')
  }
  i7076.tabMenuElements = i7078
  return i7076
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i7082 = root || request.c( 'UnityEngine.UI.Slider' )
  var i7083 = data
  request.r(i7083[0], i7083[1], 0, i7082, 'm_FillRect')
  request.r(i7083[2], i7083[3], 0, i7082, 'm_HandleRect')
  i7082.m_Direction = i7083[4]
  i7082.m_MinValue = i7083[5]
  i7082.m_MaxValue = i7083[6]
  i7082.m_WholeNumbers = !!i7083[7]
  i7082.m_Value = i7083[8]
  i7082.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i7083[9], i7082.m_OnValueChanged)
  i7082.m_Navigation = request.d('UnityEngine.UI.Navigation', i7083[10], i7082.m_Navigation)
  i7082.m_Transition = i7083[11]
  i7082.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7083[12], i7082.m_Colors)
  i7082.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7083[13], i7082.m_SpriteState)
  i7082.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7083[14], i7082.m_AnimationTriggers)
  i7082.m_Interactable = !!i7083[15]
  request.r(i7083[16], i7083[17], 0, i7082, 'm_TargetGraphic')
  return i7082
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i7084 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i7085 = data
  i7084.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7085[0], i7084.m_PersistentCalls)
  return i7084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7087 = data
  request.r(i7087[0], i7087[1], 0, i7086, 'animatorController')
  request.r(i7087[2], i7087[3], 0, i7086, 'avatar')
  i7086.updateMode = i7087[4]
  i7086.hasTransformHierarchy = !!i7087[5]
  i7086.applyRootMotion = !!i7087[6]
  var i7089 = i7087[7]
  var i7088 = []
  for(var i = 0; i < i7089.length; i += 2) {
  request.r(i7089[i + 0], i7089[i + 1], 2, i7088, '')
  }
  i7086.humanBones = i7088
  i7086.enabled = !!i7087[8]
  return i7086
}

Deserializers["TabMenuHandler"] = function (request, data, root) {
  var i7092 = root || request.c( 'TabMenuHandler' )
  var i7093 = data
  request.r(i7093[0], i7093[1], 0, i7092, 'targetScaleBodyPart')
  i7092.isSliderShow = !!i7093[2]
  var i7095 = i7093[3]
  var i7094 = new (System.Collections.Generic.List$1(Bridge.ns('Tab')))
  for(var i = 0; i < i7095.length; i += 2) {
  request.r(i7095[i + 0], i7095[i + 1], 1, i7094, '')
  }
  i7092.tabSelection = i7094
  var i7097 = i7093[4]
  var i7096 = new (System.Collections.Generic.List$1(Bridge.ns('GridHandler')))
  for(var i = 0; i < i7097.length; i += 2) {
  request.r(i7097[i + 0], i7097[i + 1], 1, i7096, '')
  }
  i7092.tabContents = i7096
  request.r(i7093[5], i7093[6], 0, i7092, 'nextBtn')
  request.r(i7093[7], i7093[8], 0, i7092, 'prevBtn')
  i7092.fade = new pc.Color(i7093[9], i7093[10], i7093[11], i7093[12])
  request.r(i7093[13], i7093[14], 0, i7092, 'next_Btn')
  request.r(i7093[15], i7093[16], 0, i7092, 'done_Btn')
  request.r(i7093[17], i7093[18], 0, i7092, 'submit_Btn')
  request.r(i7093[19], i7093[20], 0, i7092, 'battle_Btn')
  request.r(i7093[21], i7093[22], 0, i7092, 'prev')
  request.r(i7093[23], i7093[24], 0, i7092, 'next')
  request.r(i7093[25], i7093[26], 0, i7092, 'subscriptionBtn')
  request.r(i7093[27], i7093[28], 0, i7092, 'scaleText')
  request.r(i7093[29], i7093[30], 0, i7092, 'slider')
  request.r(i7093[31], i7093[32], 0, i7092, 'handTut')
  return i7092
}

Deserializers["Tab"] = function (request, data, root) {
  var i7102 = root || request.c( 'Tab' )
  var i7103 = data
  request.r(i7103[0], i7103[1], 0, i7102, 'bodyPartLink')
  request.r(i7103[2], i7103[3], 0, i7102, 'bubble')
  request.r(i7103[4], i7103[5], 0, i7102, 'check')
  i7102.selected = UnityEngine.Color32.ConstructColor(i7103[6], i7103[7], i7103[8], i7103[9])
  request.r(i7103[10], i7103[11], 0, i7102, 'fill')
  return i7102
}

Deserializers["Scale"] = function (request, data, root) {
  var i7104 = root || request.c( 'Scale' )
  var i7105 = data
  return i7104
}

Deserializers["BreathButton"] = function (request, data, root) {
  var i7106 = root || request.c( 'BreathButton' )
  var i7107 = data
  i7106.constantBreath = !!i7107[0]
  i7106.increaseScale = !!i7107[1]
  i7106.delayFirstTime = i7107[2]
  return i7106
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i7108 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i7109 = data
  request.r(i7109[0], i7109[1], 0, i7108, 'm_Content')
  i7108.m_Horizontal = !!i7109[2]
  i7108.m_Vertical = !!i7109[3]
  i7108.m_MovementType = i7109[4]
  i7108.m_Elasticity = i7109[5]
  i7108.m_Inertia = !!i7109[6]
  i7108.m_DecelerationRate = i7109[7]
  i7108.m_ScrollSensitivity = i7109[8]
  request.r(i7109[9], i7109[10], 0, i7108, 'm_Viewport')
  request.r(i7109[11], i7109[12], 0, i7108, 'm_HorizontalScrollbar')
  request.r(i7109[13], i7109[14], 0, i7108, 'm_VerticalScrollbar')
  i7108.m_HorizontalScrollbarVisibility = i7109[15]
  i7108.m_VerticalScrollbarVisibility = i7109[16]
  i7108.m_HorizontalScrollbarSpacing = i7109[17]
  i7108.m_VerticalScrollbarSpacing = i7109[18]
  i7108.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i7109[19], i7108.m_OnValueChanged)
  return i7108
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i7110 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i7111 = data
  i7110.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7111[0], i7110.m_PersistentCalls)
  return i7110
}

Deserializers["GridHandler"] = function (request, data, root) {
  var i7112 = root || request.c( 'GridHandler' )
  var i7113 = data
  request.r(i7113[0], i7113[1], 0, i7112, 'content')
  request.r(i7113[2], i7113[3], 0, i7112, 'grid')
  return i7112
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i7114 = root || request.c( 'UnityEngine.UI.Mask' )
  var i7115 = data
  i7114.m_ShowMaskGraphic = !!i7115[0]
  return i7114
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i7116 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i7117 = data
  i7116.m_StartCorner = i7117[0]
  i7116.m_StartAxis = i7117[1]
  i7116.m_CellSize = new pc.Vec2( i7117[2], i7117[3] )
  i7116.m_Spacing = new pc.Vec2( i7117[4], i7117[5] )
  i7116.m_Constraint = i7117[6]
  i7116.m_ConstraintCount = i7117[7]
  i7116.m_Padding = UnityEngine.RectOffset.FromPaddings(i7117[8], i7117[9], i7117[10], i7117[11])
  i7116.m_ChildAlignment = i7117[12]
  return i7116
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i7118 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i7119 = data
  i7118.m_HorizontalFit = i7119[0]
  i7118.m_VerticalFit = i7119[1]
  return i7118
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i7120 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i7121 = data
  request.r(i7121[0], i7121[1], 0, i7120, 'm_HandleRect')
  i7120.m_Direction = i7121[2]
  i7120.m_Value = i7121[3]
  i7120.m_Size = i7121[4]
  i7120.m_NumberOfSteps = i7121[5]
  i7120.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i7121[6], i7120.m_OnValueChanged)
  i7120.m_Navigation = request.d('UnityEngine.UI.Navigation', i7121[7], i7120.m_Navigation)
  i7120.m_Transition = i7121[8]
  i7120.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7121[9], i7120.m_Colors)
  i7120.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7121[10], i7120.m_SpriteState)
  i7120.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7121[11], i7120.m_AnimationTriggers)
  i7120.m_Interactable = !!i7121[12]
  request.r(i7121[13], i7121[14], 0, i7120, 'm_TargetGraphic')
  return i7120
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i7122 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i7123 = data
  i7122.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7123[0], i7122.m_PersistentCalls)
  return i7122
}

Deserializers["LoadingAdHoz"] = function (request, data, root) {
  var i7124 = root || request.c( 'LoadingAdHoz' )
  var i7125 = data
  i7124.hasTip = !!i7125[0]
  var i7127 = i7125[1]
  var i7126 = []
  for(var i = 0; i < i7127.length; i += 2) {
  request.r(i7127[i + 0], i7127[i + 1], 2, i7126, '')
  }
  i7124.zoomAnims = i7126
  request.r(i7125[2], i7125[3], 0, i7124, 'tip')
  return i7124
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i7128 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i7129 = data
  request.r(i7129[0], i7129[1], 0, i7128, 'skeletonDataAsset')
  request.r(i7129[2], i7129[3], 0, i7128, 'additiveMaterial')
  request.r(i7129[4], i7129[5], 0, i7128, 'multiplyMaterial')
  request.r(i7129[6], i7129[7], 0, i7128, 'screenMaterial')
  i7128.initialSkinName = i7129[8]
  i7128.initialFlipX = !!i7129[9]
  i7128.initialFlipY = !!i7129[10]
  i7128.startingAnimation = i7129[11]
  i7128.startingLoop = !!i7129[12]
  i7128.timeScale = i7129[13]
  i7128.freeze = !!i7129[14]
  i7128.layoutScaleMode = i7129[15]
  i7128.updateWhenInvisible = i7129[16]
  i7128.allowMultipleCanvasRenderers = !!i7129[17]
  var i7131 = i7129[18]
  var i7130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i7131.length; i += 2) {
  request.r(i7131[i + 0], i7131[i + 1], 1, i7130, '')
  }
  i7128.canvasRenderers = i7130
  i7128.enableSeparatorSlots = !!i7129[19]
  i7128.updateSeparatorPartLocation = !!i7129[20]
  i7128.disableMeshAssignmentOnOverride = !!i7129[21]
  i7128.referenceSize = new pc.Vec2( i7129[22], i7129[23] )
  i7128.referenceScale = i7129[24]
  i7128.rectTransformSize = new pc.Vec2( i7129[25], i7129[26] )
  i7128.editReferenceRect = !!i7129[27]
  var i7133 = i7129[28]
  var i7132 = []
  for(var i = 0; i < i7133.length; i += 1) {
    i7132.push( i7133[i + 0] );
  }
  i7128.separatorSlotNames = i7132
  var i7135 = i7129[29]
  var i7134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7135.length; i += 2) {
  request.r(i7135[i + 0], i7135[i + 1], 1, i7134, '')
  }
  i7128.separatorParts = i7134
  i7128.meshGenerator = request.d('Spine.Unity.MeshGenerator', i7129[30], i7128.meshGenerator)
  i7128.updateTiming = i7129[31]
  i7128.unscaledTime = !!i7129[32]
  request.r(i7129[33], i7129[34], 0, i7128, 'm_Material')
  i7128.m_Maskable = !!i7129[35]
  i7128.m_Color = new pc.Color(i7129[36], i7129[37], i7129[38], i7129[39])
  i7128.m_RaycastTarget = !!i7129[40]
  i7128.m_RaycastPadding = new pc.Vec4( i7129[41], i7129[42], i7129[43], i7129[44] )
  return i7128
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i7142 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i7143 = data
  i7142.settings = request.d('Spine.Unity.MeshGenerator+Settings', i7143[0], i7142.settings)
  return i7142
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i7144 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i7145 = data
  i7144.useClipping = !!i7145[0]
  i7144.zSpacing = i7145[1]
  i7144.pmaVertexColors = !!i7145[2]
  i7144.tintBlack = !!i7145[3]
  i7144.canvasGroupTintBlack = !!i7145[4]
  i7144.calculateTangents = !!i7145[5]
  i7144.addNormals = !!i7145[6]
  i7144.immutableTriangles = !!i7145[7]
  return i7144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7147 = data
  i7146.enabled = !!i7147[0]
  request.r(i7147[1], i7147[2], 0, i7146, 'sharedMaterial')
  var i7149 = i7147[3]
  var i7148 = []
  for(var i = 0; i < i7149.length; i += 2) {
  request.r(i7149[i + 0], i7149[i + 1], 2, i7148, '')
  }
  i7146.sharedMaterials = i7148
  i7146.receiveShadows = !!i7147[4]
  i7146.shadowCastingMode = i7147[5]
  i7146.sortingLayerID = i7147[6]
  i7146.sortingOrder = i7147[7]
  i7146.lightmapIndex = i7147[8]
  i7146.lightmapSceneIndex = i7147[9]
  i7146.lightmapScaleOffset = new pc.Vec4( i7147[10], i7147[11], i7147[12], i7147[13] )
  i7146.lightProbeUsage = i7147[14]
  i7146.reflectionProbeUsage = i7147[15]
  i7146.color = new pc.Color(i7147[16], i7147[17], i7147[18], i7147[19])
  request.r(i7147[20], i7147[21], 0, i7146, 'sprite')
  i7146.flipX = !!i7147[22]
  i7146.flipY = !!i7147[23]
  i7146.drawMode = i7147[24]
  i7146.size = new pc.Vec2( i7147[25], i7147[26] )
  i7146.tileMode = i7147[27]
  i7146.adaptiveModeThreshold = i7147[28]
  i7146.maskInteraction = i7147[29]
  i7146.spriteSortPoint = i7147[30]
  return i7146
}

Deserializers["BGLightEffect"] = function (request, data, root) {
  var i7150 = root || request.c( 'BGLightEffect' )
  var i7151 = data
  i7150.otherColor = new pc.Color(i7151[0], i7151[1], i7151[2], i7151[3])
  return i7150
}

Deserializers["CharacterManager"] = function (request, data, root) {
  var i7152 = root || request.c( 'CharacterManager' )
  var i7153 = data
  i7152.monsterBody = i7153[0]
  i7152.price = i7153[1]
  i7152.currentPrice = i7153[2]
  i7152.orgPrice = i7153[3]
  i7152.spawnMoney = !!i7153[4]
  request.r(i7153[5], i7153[6], 0, i7152, 'monsterTex')
  request.r(i7153[7], i7153[8], 0, i7152, 'monsterSprite')
  i7152.moneyBoostCount = i7153[9]
  i7152.textureStr = i7153[10]
  request.r(i7153[11], i7153[12], 0, i7152, 'sortingGroup')
  request.r(i7153[13], i7153[14], 0, i7152, 'headHolder')
  var i7155 = i7153[15]
  var i7154 = []
  for(var i = 0; i < i7155.length; i += 2) {
  request.r(i7155[i + 0], i7155[i + 1], 2, i7154, '')
  }
  i7152.bodies = i7154
  var i7157 = i7153[16]
  var i7156 = []
  for(var i = 0; i < i7157.length; i += 2) {
  request.r(i7157[i + 0], i7157[i + 1], 2, i7156, '')
  }
  i7152.boneFollowers = i7156
  request.r(i7153[17], i7153[18], 0, i7152, 'headController')
  return i7152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7163 = data
  i7162.usedByComposite = !!i7163[0]
  i7162.autoTiling = !!i7163[1]
  i7162.size = new pc.Vec2( i7163[2], i7163[3] )
  i7162.edgeRadius = i7163[4]
  i7162.enabled = !!i7163[5]
  i7162.isTrigger = !!i7163[6]
  i7162.usedByEffector = !!i7163[7]
  i7162.density = i7163[8]
  i7162.offset = new pc.Vec2( i7163[9], i7163[10] )
  request.r(i7163[11], i7163[12], 0, i7162, 'material')
  return i7162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i7164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i7165 = data
  i7164.enabled = !!i7165[0]
  i7164.sortingLayerIndex = i7165[1]
  i7164.sortingOrder = i7165[2]
  i7164.sortingLayerName = i7165[3]
  return i7164
}

Deserializers["SortingLayerCharacter"] = function (request, data, root) {
  var i7166 = root || request.c( 'SortingLayerCharacter' )
  var i7167 = data
  i7166.offset = i7167[0]
  i7166.isDrag = !!i7167[1]
  return i7166
}

Deserializers["Spine.Unity.BoneFollower"] = function (request, data, root) {
  var i7168 = root || request.c( 'Spine.Unity.BoneFollower' )
  var i7169 = data
  request.r(i7169[0], i7169[1], 0, i7168, 'skeletonRenderer')
  i7168.boneName = i7169[2]
  i7168.followXYPosition = !!i7169[3]
  i7168.followZPosition = !!i7169[4]
  i7168.followBoneRotation = !!i7169[5]
  i7168.followSkeletonFlip = !!i7169[6]
  i7168.followLocalScale = !!i7169[7]
  i7168.followParentWorldScale = !!i7169[8]
  i7168.maintainedAxisOrientation = i7169[9]
  i7168.initializeOnAwake = !!i7169[10]
  return i7168
}

Deserializers["HeadController"] = function (request, data, root) {
  var i7170 = root || request.c( 'HeadController' )
  var i7171 = data
  request.r(i7171[0], i7171[1], 0, i7170, 'eye')
  request.r(i7171[2], i7171[3], 0, i7170, 'mouth')
  request.r(i7171[4], i7171[5], 0, i7170, 'acc')
  return i7170
}

Deserializers["TouchController"] = function (request, data, root) {
  var i7172 = root || request.c( 'TouchController' )
  var i7173 = data
  request.r(i7173[0], i7173[1], 0, i7172, 'rb')
  i7172.speed = i7173[2]
  return i7172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7175 = data
  request.r(i7175[0], i7175[1], 0, i7174, 'sharedMesh')
  return i7174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7177 = data
  request.r(i7177[0], i7177[1], 0, i7176, 'additionalVertexStreams')
  i7176.enabled = !!i7177[2]
  request.r(i7177[3], i7177[4], 0, i7176, 'sharedMaterial')
  var i7179 = i7177[5]
  var i7178 = []
  for(var i = 0; i < i7179.length; i += 2) {
  request.r(i7179[i + 0], i7179[i + 1], 2, i7178, '')
  }
  i7176.sharedMaterials = i7178
  i7176.receiveShadows = !!i7177[6]
  i7176.shadowCastingMode = i7177[7]
  i7176.sortingLayerID = i7177[8]
  i7176.sortingOrder = i7177[9]
  i7176.lightmapIndex = i7177[10]
  i7176.lightmapSceneIndex = i7177[11]
  i7176.lightmapScaleOffset = new pc.Vec4( i7177[12], i7177[13], i7177[14], i7177[15] )
  i7176.lightProbeUsage = i7177[16]
  i7176.reflectionProbeUsage = i7177[17]
  return i7176
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i7180 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i7181 = data
  i7180.loop = !!i7181[0]
  i7180.timeScale = i7181[1]
  request.r(i7181[2], i7181[3], 0, i7180, 'skeletonDataAsset')
  i7180.initialSkinName = i7181[4]
  i7180.fixPrefabOverrideViaMeshFilter = i7181[5]
  i7180.initialFlipX = !!i7181[6]
  i7180.initialFlipY = !!i7181[7]
  i7180.updateWhenInvisible = i7181[8]
  i7180.zSpacing = i7181[9]
  i7180.useClipping = !!i7181[10]
  i7180.immutableTriangles = !!i7181[11]
  i7180.pmaVertexColors = !!i7181[12]
  i7180.clearStateOnDisable = !!i7181[13]
  i7180.tintBlack = !!i7181[14]
  i7180.singleSubmesh = !!i7181[15]
  i7180.fixDrawOrder = !!i7181[16]
  i7180.addNormals = !!i7181[17]
  i7180.calculateTangents = !!i7181[18]
  i7180.maskInteraction = i7181[19]
  i7180.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i7181[20], i7180.maskMaterials)
  i7180.disableRenderingOnOverride = !!i7181[21]
  i7180.updateTiming = i7181[22]
  i7180.unscaledTime = !!i7181[23]
  i7180._animationName = i7181[24]
  var i7183 = i7181[25]
  var i7182 = []
  for(var i = 0; i < i7183.length; i += 1) {
    i7182.push( i7183[i + 0] );
  }
  i7180.separatorSlotNames = i7182
  return i7180
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i7184 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i7185 = data
  var i7187 = i7185[0]
  var i7186 = []
  for(var i = 0; i < i7187.length; i += 2) {
  request.r(i7187[i + 0], i7187[i + 1], 2, i7186, '')
  }
  i7184.materialsMaskDisabled = i7186
  var i7189 = i7185[1]
  var i7188 = []
  for(var i = 0; i < i7189.length; i += 2) {
  request.r(i7189[i + 0], i7189[i + 1], 2, i7188, '')
  }
  i7184.materialsInsideMask = i7188
  var i7191 = i7185[2]
  var i7190 = []
  for(var i = 0; i < i7191.length; i += 2) {
  request.r(i7191[i + 0], i7191[i + 1], 2, i7190, '')
  }
  i7184.materialsOutsideMask = i7190
  return i7184
}

Deserializers["BgAnimController"] = function (request, data, root) {
  var i7192 = root || request.c( 'BgAnimController' )
  var i7193 = data
  i7192.bgIdx = i7193[0]
  var i7195 = i7193[1]
  var i7194 = []
  for(var i = 0; i < i7195.length; i += 2) {
  request.r(i7195[i + 0], i7195[i + 1], 2, i7194, '')
  }
  i7192.bgAnims = i7194
  i7192.isShowAnimBg = !!i7193[2]
  return i7192
}

Deserializers["ShopController"] = function (request, data, root) {
  var i7196 = root || request.c( 'ShopController' )
  var i7197 = data
  var i7199 = i7197[0]
  var i7198 = []
  for(var i = 0; i < i7199.length; i += 2) {
  request.r(i7199[i + 0], i7199[i + 1], 2, i7198, '')
  }
  i7196.heads = i7198
  var i7201 = i7197[1]
  var i7200 = []
  for(var i = 0; i < i7201.length; i += 2) {
  request.r(i7201[i + 0], i7201[i + 1], 2, i7200, '')
  }
  i7196.eyes = i7200
  var i7203 = i7197[2]
  var i7202 = []
  for(var i = 0; i < i7203.length; i += 2) {
  request.r(i7203[i + 0], i7203[i + 1], 2, i7202, '')
  }
  i7196.mouths = i7202
  var i7205 = i7197[3]
  var i7204 = []
  for(var i = 0; i < i7205.length; i += 2) {
  request.r(i7205[i + 0], i7205[i + 1], 2, i7204, '')
  }
  i7196.accs = i7204
  var i7207 = i7197[4]
  var i7206 = []
  for(var i = 0; i < i7207.length; i += 2) {
  request.r(i7207[i + 0], i7207[i + 1], 2, i7206, '')
  }
  i7196.bodies = i7206
  request.r(i7197[5], i7197[6], 0, i7196, 'headContent')
  request.r(i7197[7], i7197[8], 0, i7196, 'eyeContent')
  request.r(i7197[9], i7197[10], 0, i7196, 'mouthContent')
  request.r(i7197[11], i7197[12], 0, i7196, 'accContents')
  request.r(i7197[13], i7197[14], 0, i7196, 'bodyContent')
  var i7209 = i7197[15]
  var i7208 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7209.length; i += 2) {
  request.r(i7209[i + 0], i7209[i + 1], 1, i7208, '')
  }
  i7196.lockHead = i7208
  var i7211 = i7197[16]
  var i7210 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7211.length; i += 2) {
  request.r(i7211[i + 0], i7211[i + 1], 1, i7210, '')
  }
  i7196.lockEye = i7210
  var i7213 = i7197[17]
  var i7212 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7213.length; i += 2) {
  request.r(i7213[i + 0], i7213[i + 1], 1, i7212, '')
  }
  i7196.lockMouth = i7212
  var i7215 = i7197[18]
  var i7214 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7215.length; i += 2) {
  request.r(i7215[i + 0], i7215[i + 1], 1, i7214, '')
  }
  i7196.lockAcc = i7214
  var i7217 = i7197[19]
  var i7216 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7217.length; i += 2) {
  request.r(i7217[i + 0], i7217[i + 1], 1, i7216, '')
  }
  i7196.lockBody = i7216
  var i7219 = i7197[20]
  var i7218 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7219.length; i += 2) {
  request.r(i7219[i + 0], i7219[i + 1], 1, i7218, '')
  }
  i7196.lockItem = i7218
  request.r(i7197[21], i7197[22], 0, i7196, 'head')
  request.r(i7197[23], i7197[24], 0, i7196, 'eye')
  request.r(i7197[25], i7197[26], 0, i7196, 'mouth')
  request.r(i7197[27], i7197[28], 0, i7196, 'acc')
  request.r(i7197[29], i7197[30], 0, i7196, 'body')
  request.r(i7197[31], i7197[32], 0, i7196, 'body2')
  request.r(i7197[33], i7197[34], 0, i7196, 'headHolder')
  request.r(i7197[35], i7197[36], 0, i7196, 'boneFollower')
  request.r(i7197[37], i7197[38], 0, i7196, 'boneFollower2')
  return i7196
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i7224 = root || request.c( 'UIHandler' )
  var i7225 = data
  request.r(i7225[0], i7225[1], 0, i7224, 'curtainAnim')
  request.r(i7225[2], i7225[3], 0, i7224, 'bgAnim')
  request.r(i7225[4], i7225[5], 0, i7224, 'uI_Result')
  request.r(i7225[6], i7225[7], 0, i7224, 'uI_Ingame')
  request.r(i7225[8], i7225[9], 0, i7224, 'uI_Lobby')
  request.r(i7225[10], i7225[11], 0, i7224, 'uI_AnchorTop')
  request.r(i7225[12], i7225[13], 0, i7224, 'settingPanel')
  request.r(i7225[14], i7225[15], 0, i7224, 'internetMessagePanel')
  request.r(i7225[16], i7225[17], 0, i7224, 'iapSuccess')
  request.r(i7225[18], i7225[19], 0, i7224, 'iapFail')
  request.r(i7225[20], i7225[21], 0, i7224, 'confirmPanel')
  request.r(i7225[22], i7225[23], 0, i7224, 'needMoreCoinPanel')
  request.r(i7225[24], i7225[25], 0, i7224, 'sharePanel')
  request.r(i7225[26], i7225[27], 0, i7224, 'previewLevelChallengePanel')
  request.r(i7225[28], i7225[29], 0, i7224, 'levelSelection')
  request.r(i7225[30], i7225[31], 0, i7224, 'loadingPanel')
  request.r(i7225[32], i7225[33], 0, i7224, 'limitArea')
  request.r(i7225[34], i7225[35], 0, i7224, 'fade')
  request.r(i7225[36], i7225[37], 0, i7224, 'adBreak')
  request.r(i7225[38], i7225[39], 0, i7224, 'newModePkPopup')
  request.r(i7225[40], i7225[41], 0, i7224, 'subPanel')
  request.r(i7225[42], i7225[43], 0, i7224, 'blackScreen')
  request.r(i7225[44], i7225[45], 0, i7224, 'leaderboard')
  request.r(i7225[46], i7225[47], 0, i7224, 'goldNum')
  request.r(i7225[48], i7225[49], 0, i7224, 'ticketNum')
  request.r(i7225[50], i7225[51], 0, i7224, 'spinNum')
  request.r(i7225[52], i7225[53], 0, i7224, 'spinNum1')
  request.r(i7225[54], i7225[55], 0, i7224, 'skipAdTicket')
  request.r(i7225[56], i7225[57], 0, i7224, '_fade')
  request.r(i7225[58], i7225[59], 0, i7224, 'bodyAnim')
  request.r(i7225[60], i7225[61], 0, i7224, 'bodyAnim2')
  request.r(i7225[62], i7225[63], 0, i7224, 'bodyAnim3')
  request.r(i7225[64], i7225[65], 0, i7224, 'character')
  request.r(i7225[66], i7225[67], 0, i7224, 'noAdBtn')
  request.r(i7225[68], i7225[69], 0, i7224, 'noAdBtn_1')
  request.r(i7225[70], i7225[71], 0, i7224, 'moneyRain')
  return i7224
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i7226 = root || request.c( 'CameraHandler' )
  var i7227 = data
  i7226.defaultSize = i7227[0]
  i7226.aspectRatio = i7227[1]
  request.r(i7227[2], i7227[3], 0, i7226, 'characterManager')
  request.r(i7227[4], i7227[5], 0, i7226, 'confetti')
  var i7229 = i7227[6]
  var i7228 = []
  for(var i = 0; i < i7229.length; i += 2) {
  request.r(i7229[i + 0], i7229[i + 1], 2, i7228, '')
  }
  i7226.cams = i7228
  var i7231 = i7227[7]
  var i7230 = []
  for(var i = 0; i < i7231.length; i += 2) {
  request.r(i7231[i + 0], i7231[i + 1], 2, i7230, '')
  }
  i7226.cameras = i7230
  return i7226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7235 = data
  i7234.enabled = !!i7235[0]
  i7234.aspect = i7235[1]
  i7234.orthographic = !!i7235[2]
  i7234.orthographicSize = i7235[3]
  i7234.backgroundColor = new pc.Color(i7235[4], i7235[5], i7235[6], i7235[7])
  i7234.nearClipPlane = i7235[8]
  i7234.farClipPlane = i7235[9]
  i7234.fieldOfView = i7235[10]
  i7234.depth = i7235[11]
  i7234.clearFlags = i7235[12]
  i7234.cullingMask = i7235[13]
  i7234.rect = i7235[14]
  request.r(i7235[15], i7235[16], 0, i7234, 'targetTexture')
  i7234.usePhysicalProperties = !!i7235[17]
  i7234.focalLength = i7235[18]
  i7234.sensorSize = new pc.Vec2( i7235[19], i7235[20] )
  i7234.lensShift = new pc.Vec2( i7235[21], i7235[22] )
  i7234.gateFit = i7235[23]
  return i7234
}

Deserializers["Confetti"] = function (request, data, root) {
  var i7236 = root || request.c( 'Confetti' )
  var i7237 = data
  var i7239 = i7237[0]
  var i7238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i7239.length; i += 2) {
  request.r(i7239[i + 0], i7239[i + 1], 1, i7238, '')
  }
  i7236.fireworks = i7238
  request.r(i7237[1], i7237[2], 0, i7236, '_particleSystem')
  return i7236
}

Deserializers["GameController"] = function (request, data, root) {
  var i7242 = root || request.c( 'GameController' )
  var i7243 = data
  i7242.battlePoint = i7243[0]
  i7242.gold = i7243[1]
  i7242.ticket = i7243[2]
  i7242.spin = i7243[3]
  i7242.skipAdsTicket = i7243[4]
  i7242.usedSpin = i7243[5]
  request.r(i7243[6], i7243[7], 0, i7242, 'spinBtnEffect')
  return i7242
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i7244 = root || request.c( 'SoundManager' )
  var i7245 = data
  var i7247 = i7245[0]
  var i7246 = []
  for(var i = 0; i < i7247.length; i += 1) {
    i7246.push( request.d('SoundAudioClip', i7247[i + 0]) );
  }
  i7244.soundAudioClips = i7246
  var i7249 = i7245[1]
  var i7248 = []
  for(var i = 0; i < i7249.length; i += 1) {
    i7248.push( request.d('SoundAudioClip', i7249[i + 0]) );
  }
  i7244.itemClickedAudio = i7248
  var i7251 = i7245[2]
  var i7250 = []
  for(var i = 0; i < i7251.length; i += 1) {
    i7250.push( request.d('SoundAudioClip', i7251[i + 0]) );
  }
  i7244.textFloatInPk = i7250
  return i7244
}

Deserializers["SoundAudioClip"] = function (request, data, root) {
  var i7254 = root || request.c( 'SoundAudioClip' )
  var i7255 = data
  i7254.sound = i7255[0]
  request.r(i7255[1], i7255[2], 0, i7254, 'audioClip')
  i7254.volume = i7255[3]
  i7254.pitch = i7255[4]
  i7254.loop = !!i7255[5]
  request.r(i7255[6], i7255[7], 0, i7254, 'source')
  return i7254
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7256 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7257 = data
  request.r(i7257[0], i7257[1], 0, i7256, 'm_FirstSelected')
  i7256.m_sendNavigationEvents = !!i7257[2]
  i7256.m_DragThreshold = i7257[3]
  return i7256
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7258 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7259 = data
  i7258.m_HorizontalAxis = i7259[0]
  i7258.m_VerticalAxis = i7259[1]
  i7258.m_SubmitButton = i7259[2]
  i7258.m_CancelButton = i7259[3]
  i7258.m_InputActionsPerSecond = i7259[4]
  i7258.m_RepeatDelay = i7259[5]
  i7258.m_ForceModuleActive = !!i7259[6]
  return i7258
}

Deserializers["GameManager"] = function (request, data, root) {
  var i7260 = root || request.c( 'GameManager' )
  var i7261 = data
  i7260.mode = i7261[0]
  i7260.countTurn = i7261[1]
  i7260.timePerCheckInternet = i7261[2]
  i7260.data1 = i7261[3]
  i7260.data2 = i7261[4]
  i7260.data3 = i7261[5]
  i7260.dataArr1 = i7261[6]
  i7260.dataArr2 = i7261[7]
  i7260.dataArr3 = i7261[8]
  i7260.bodyPart = i7261[9]
  i7260.folderName1 = i7261[10]
  i7260.folderName2 = i7261[11]
  i7260.folderName3 = i7261[12]
  i7260.path1 = i7261[13]
  i7260.path2 = i7261[14]
  i7260.path3 = i7261[15]
  request.r(i7261[16], i7261[17], 0, i7260, 'skeleonAnimation1')
  request.r(i7261[18], i7261[19], 0, i7260, 'skeleonAnimation2')
  request.r(i7261[20], i7261[21], 0, i7260, 'skeleonAnimation3')
  request.r(i7261[22], i7261[23], 0, i7260, 'shopController')
  return i7260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7263 = data
  i7262.ambientIntensity = i7263[0]
  i7262.reflectionIntensity = i7263[1]
  i7262.ambientMode = i7263[2]
  i7262.ambientLight = new pc.Color(i7263[3], i7263[4], i7263[5], i7263[6])
  i7262.ambientSkyColor = new pc.Color(i7263[7], i7263[8], i7263[9], i7263[10])
  i7262.ambientGroundColor = new pc.Color(i7263[11], i7263[12], i7263[13], i7263[14])
  i7262.ambientEquatorColor = new pc.Color(i7263[15], i7263[16], i7263[17], i7263[18])
  i7262.fogColor = new pc.Color(i7263[19], i7263[20], i7263[21], i7263[22])
  i7262.fogEndDistance = i7263[23]
  i7262.fogStartDistance = i7263[24]
  i7262.fogDensity = i7263[25]
  i7262.fog = !!i7263[26]
  request.r(i7263[27], i7263[28], 0, i7262, 'skybox')
  i7262.fogMode = i7263[29]
  var i7265 = i7263[30]
  var i7264 = []
  for(var i = 0; i < i7265.length; i += 1) {
    i7264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7265[i + 0]) );
  }
  i7262.lightmaps = i7264
  i7262.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7263[31], i7262.lightProbes)
  i7262.lightmapsMode = i7263[32]
  i7262.mixedBakeMode = i7263[33]
  i7262.environmentLightingMode = i7263[34]
  i7262.ambientProbe = new pc.SphericalHarmonicsL2(i7263[35])
  i7262.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7263[36])
  i7262.useReferenceAmbientProbe = !!i7263[37]
  request.r(i7263[38], i7263[39], 0, i7262, 'customReflection')
  request.r(i7263[40], i7263[41], 0, i7262, 'defaultReflection')
  i7262.defaultReflectionMode = i7263[42]
  i7262.defaultReflectionResolution = i7263[43]
  i7262.sunLightObjectId = i7263[44]
  i7262.pixelLightCount = i7263[45]
  i7262.defaultReflectionHDR = !!i7263[46]
  i7262.hasLightDataAsset = !!i7263[47]
  i7262.hasManualGenerate = !!i7263[48]
  return i7262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7269 = data
  request.r(i7269[0], i7269[1], 0, i7268, 'lightmapColor')
  request.r(i7269[2], i7269[3], 0, i7268, 'lightmapDirection')
  return i7268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7270 = root || new UnityEngine.LightProbes()
  var i7271 = data
  return i7270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7279 = data
  var i7281 = i7279[0]
  var i7280 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7281.length; i += 1) {
    i7280.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7281[i + 0]));
  }
  i7278.ShaderCompilationErrors = i7280
  i7278.name = i7279[1]
  i7278.guid = i7279[2]
  var i7283 = i7279[3]
  var i7282 = []
  for(var i = 0; i < i7283.length; i += 1) {
    i7282.push( i7283[i + 0] );
  }
  i7278.shaderDefinedKeywords = i7282
  var i7285 = i7279[4]
  var i7284 = []
  for(var i = 0; i < i7285.length; i += 1) {
    i7284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7285[i + 0]) );
  }
  i7278.passes = i7284
  var i7287 = i7279[5]
  var i7286 = []
  for(var i = 0; i < i7287.length; i += 1) {
    i7286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7287[i + 0]) );
  }
  i7278.usePasses = i7286
  var i7289 = i7279[6]
  var i7288 = []
  for(var i = 0; i < i7289.length; i += 1) {
    i7288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7289[i + 0]) );
  }
  i7278.defaultParameterValues = i7288
  request.r(i7279[7], i7279[8], 0, i7278, 'unityFallbackShader')
  i7278.readDepth = !!i7279[9]
  i7278.isCreatedByShaderGraph = !!i7279[10]
  i7278.usedBatchUniforms = i7279[11]
  return i7278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7293 = data
  i7292.shaderName = i7293[0]
  i7292.errorMessage = i7293[1]
  return i7292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7296 = root || new pc.UnityShaderPass()
  var i7297 = data
  i7296.id = i7297[0]
  i7296.subShaderIndex = i7297[1]
  i7296.name = i7297[2]
  i7296.passType = i7297[3]
  i7296.grabPassTextureName = i7297[4]
  i7296.usePass = !!i7297[5]
  i7296.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[6], i7296.zTest)
  i7296.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[7], i7296.zWrite)
  i7296.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[8], i7296.culling)
  i7296.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7297[9], i7296.blending)
  i7296.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7297[10], i7296.alphaBlending)
  i7296.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[11], i7296.colorWriteMask)
  i7296.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[12], i7296.offsetUnits)
  i7296.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[13], i7296.offsetFactor)
  i7296.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[14], i7296.stencilRef)
  i7296.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[15], i7296.stencilReadMask)
  i7296.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7297[16], i7296.stencilWriteMask)
  i7296.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7297[17], i7296.stencilOp)
  i7296.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7297[18], i7296.stencilOpFront)
  i7296.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7297[19], i7296.stencilOpBack)
  var i7299 = i7297[20]
  var i7298 = []
  for(var i = 0; i < i7299.length; i += 1) {
    i7298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7299[i + 0]) );
  }
  i7296.tags = i7298
  var i7301 = i7297[21]
  var i7300 = []
  for(var i = 0; i < i7301.length; i += 1) {
    i7300.push( i7301[i + 0] );
  }
  i7296.passDefinedKeywords = i7300
  var i7303 = i7297[22]
  var i7302 = []
  for(var i = 0; i < i7303.length; i += 1) {
    i7302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7303[i + 0]) );
  }
  i7296.passDefinedKeywordGroups = i7302
  var i7305 = i7297[23]
  var i7304 = []
  for(var i = 0; i < i7305.length; i += 1) {
    i7304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7305[i + 0]) );
  }
  i7296.variants = i7304
  var i7307 = i7297[24]
  var i7306 = []
  for(var i = 0; i < i7307.length; i += 1) {
    i7306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7307[i + 0]) );
  }
  i7296.excludedVariants = i7306
  i7296.hasDepthReader = !!i7297[25]
  return i7296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7309 = data
  i7308.val = i7309[0]
  i7308.name = i7309[1]
  return i7308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7311 = data
  i7310.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7311[0], i7310.src)
  i7310.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7311[1], i7310.dst)
  i7310.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7311[2], i7310.op)
  return i7310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7313 = data
  i7312.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7313[0], i7312.pass)
  i7312.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7313[1], i7312.fail)
  i7312.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7313[2], i7312.zFail)
  i7312.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7313[3], i7312.comp)
  return i7312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7317 = data
  i7316.name = i7317[0]
  i7316.value = i7317[1]
  return i7316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7321 = data
  var i7323 = i7321[0]
  var i7322 = []
  for(var i = 0; i < i7323.length; i += 1) {
    i7322.push( i7323[i + 0] );
  }
  i7320.keywords = i7322
  i7320.hasDiscard = !!i7321[1]
  return i7320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7327 = data
  i7326.passId = i7327[0]
  i7326.subShaderIndex = i7327[1]
  var i7329 = i7327[2]
  var i7328 = []
  for(var i = 0; i < i7329.length; i += 1) {
    i7328.push( i7329[i + 0] );
  }
  i7326.keywords = i7328
  i7326.vertexProgram = i7327[3]
  i7326.fragmentProgram = i7327[4]
  i7326.readDepth = !!i7327[5]
  return i7326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7333 = data
  request.r(i7333[0], i7333[1], 0, i7332, 'shader')
  i7332.pass = i7333[2]
  return i7332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7337 = data
  i7336.name = i7337[0]
  i7336.type = i7337[1]
  i7336.value = new pc.Vec4( i7337[2], i7337[3], i7337[4], i7337[5] )
  i7336.textureValue = i7337[6]
  return i7336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7339 = data
  i7338.name = i7339[0]
  request.r(i7339[1], i7339[2], 0, i7338, 'texture')
  i7338.aabb = i7339[3]
  i7338.vertices = i7339[4]
  i7338.triangles = i7339[5]
  i7338.textureRect = UnityEngine.Rect.MinMaxRect(i7339[6], i7339[7], i7339[8], i7339[9])
  i7338.packedRect = UnityEngine.Rect.MinMaxRect(i7339[10], i7339[11], i7339[12], i7339[13])
  i7338.border = new pc.Vec4( i7339[14], i7339[15], i7339[16], i7339[17] )
  i7338.transparency = i7339[18]
  i7338.bounds = i7339[19]
  i7338.pixelsPerUnit = i7339[20]
  i7338.textureWidth = i7339[21]
  i7338.textureHeight = i7339[22]
  i7338.nativeSize = new pc.Vec2( i7339[23], i7339[24] )
  i7338.pivot = new pc.Vec2( i7339[25], i7339[26] )
  i7338.textureRectOffset = new pc.Vec2( i7339[27], i7339[28] )
  return i7338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7341 = data
  i7340.name = i7341[0]
  return i7340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7343 = data
  i7342.name = i7343[0]
  i7342.wrapMode = i7343[1]
  i7342.isLooping = !!i7343[2]
  i7342.length = i7343[3]
  var i7345 = i7343[4]
  var i7344 = []
  for(var i = 0; i < i7345.length; i += 1) {
    i7344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7345[i + 0]) );
  }
  i7342.curves = i7344
  var i7347 = i7343[5]
  var i7346 = []
  for(var i = 0; i < i7347.length; i += 1) {
    i7346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7347[i + 0]) );
  }
  i7342.events = i7346
  i7342.halfPrecision = !!i7343[6]
  i7342.frameRate = i7343[7]
  i7342.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7343[8], i7342.localBounds)
  i7342.hasMuscleCurves = !!i7343[9]
  var i7349 = i7343[10]
  var i7348 = []
  for(var i = 0; i < i7349.length; i += 1) {
    i7348.push( i7349[i + 0] );
  }
  i7342.clipMuscleConstant = i7348
  i7342.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7343[11], i7342.clipBindingConstant)
  return i7342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7353 = data
  i7352.path = i7353[0]
  i7352.componentType = i7353[1]
  i7352.property = i7353[2]
  i7352.keys = i7353[3]
  var i7355 = i7353[4]
  var i7354 = []
  for(var i = 0; i < i7355.length; i += 1) {
    i7354.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7355[i + 0]) );
  }
  i7352.objectReferenceKeys = i7354
  return i7352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7359 = data
  i7358.time = i7359[0]
  request.r(i7359[1], i7359[2], 0, i7358, 'value')
  return i7358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7363 = data
  i7362.functionName = i7363[0]
  i7362.floatParameter = i7363[1]
  i7362.intParameter = i7363[2]
  i7362.stringParameter = i7363[3]
  request.r(i7363[4], i7363[5], 0, i7362, 'objectReferenceParameter')
  i7362.time = i7363[6]
  return i7362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7365 = data
  i7364.center = new pc.Vec3( i7365[0], i7365[1], i7365[2] )
  i7364.extends = new pc.Vec3( i7365[3], i7365[4], i7365[5] )
  return i7364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7369 = data
  var i7371 = i7369[0]
  var i7370 = []
  for(var i = 0; i < i7371.length; i += 1) {
    i7370.push( i7371[i + 0] );
  }
  i7368.genericBindings = i7370
  var i7373 = i7369[1]
  var i7372 = []
  for(var i = 0; i < i7373.length; i += 1) {
    i7372.push( i7373[i + 0] );
  }
  i7368.pptrCurveMapping = i7372
  return i7368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7375 = data
  i7374.name = i7375[0]
  i7374.ascent = i7375[1]
  i7374.originalLineHeight = i7375[2]
  i7374.fontSize = i7375[3]
  var i7377 = i7375[4]
  var i7376 = []
  for(var i = 0; i < i7377.length; i += 1) {
    i7376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7377[i + 0]) );
  }
  i7374.characterInfo = i7376
  request.r(i7375[5], i7375[6], 0, i7374, 'texture')
  i7374.originalFontSize = i7375[7]
  return i7374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7381 = data
  i7380.index = i7381[0]
  i7380.advance = i7381[1]
  i7380.bearing = i7381[2]
  i7380.glyphWidth = i7381[3]
  i7380.glyphHeight = i7381[4]
  i7380.minX = i7381[5]
  i7380.maxX = i7381[6]
  i7380.minY = i7381[7]
  i7380.maxY = i7381[8]
  i7380.uvBottomLeftX = i7381[9]
  i7380.uvBottomLeftY = i7381[10]
  i7380.uvBottomRightX = i7381[11]
  i7380.uvBottomRightY = i7381[12]
  i7380.uvTopLeftX = i7381[13]
  i7380.uvTopLeftY = i7381[14]
  i7380.uvTopRightX = i7381[15]
  i7380.uvTopRightY = i7381[16]
  return i7380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7383 = data
  i7382.name = i7383[0]
  var i7385 = i7383[1]
  var i7384 = []
  for(var i = 0; i < i7385.length; i += 1) {
    i7384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7385[i + 0]) );
  }
  i7382.states = i7384
  var i7387 = i7383[2]
  var i7386 = []
  for(var i = 0; i < i7387.length; i += 1) {
    i7386.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7387[i + 0]) );
  }
  i7382.layers = i7386
  var i7389 = i7383[3]
  var i7388 = []
  for(var i = 0; i < i7389.length; i += 1) {
    i7388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7389[i + 0]) );
  }
  i7382.parameters = i7388
  i7382.animationClips = i7383[4]
  i7382.HasSubStateMachines = !!i7383[5]
  i7382.avatarUnsupported = i7383[6]
  return i7382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7393 = data
  i7392.cycleOffset = i7393[0]
  i7392.cycleOffsetParameter = i7393[1]
  i7392.cycleOffsetParameterActive = !!i7393[2]
  i7392.mirror = !!i7393[3]
  i7392.mirrorParameter = i7393[4]
  i7392.mirrorParameterActive = !!i7393[5]
  i7392.motionId = i7393[6]
  i7392.nameHash = i7393[7]
  i7392.fullPathHash = i7393[8]
  i7392.speed = i7393[9]
  i7392.speedParameter = i7393[10]
  i7392.speedParameterActive = !!i7393[11]
  i7392.tag = i7393[12]
  i7392.name = i7393[13]
  i7392.layer = i7393[14]
  i7392.writeDefaultValues = !!i7393[15]
  var i7395 = i7393[16]
  var i7394 = []
  for(var i = 0; i < i7395.length; i += 1) {
    i7394.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7395[i + 0]) );
  }
  i7392.transitions = i7394
  var i7397 = i7393[17]
  var i7396 = []
  for(var i = 0; i < i7397.length; i += 2) {
  request.r(i7397[i + 0], i7397[i + 1], 2, i7396, '')
  }
  i7392.behaviours = i7396
  return i7392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7401 = data
  i7400.fullPath = i7401[0]
  i7400.canTransitionToSelf = !!i7401[1]
  i7400.duration = i7401[2]
  i7400.exitTime = i7401[3]
  i7400.hasExitTime = !!i7401[4]
  i7400.hasFixedDuration = !!i7401[5]
  i7400.interruptionSource = i7401[6]
  i7400.offset = i7401[7]
  i7400.orderedInterruption = !!i7401[8]
  i7400.destinationStateNameHash = i7401[9]
  i7400.destinationStateMachineId = i7401[10]
  i7400.isExit = !!i7401[11]
  i7400.mute = !!i7401[12]
  i7400.solo = !!i7401[13]
  var i7403 = i7401[14]
  var i7402 = []
  for(var i = 0; i < i7403.length; i += 1) {
    i7402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7403[i + 0]) );
  }
  i7400.conditions = i7402
  return i7400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7409 = data
  i7408.blendingMode = i7409[0]
  i7408.defaultWeight = i7409[1]
  i7408.name = i7409[2]
  i7408.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7409[3], i7408.stateMachine)
  return i7408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7411 = data
  i7410.id = i7411[0]
  i7410.defaultStateNameHash = i7411[1]
  var i7413 = i7411[2]
  var i7412 = []
  for(var i = 0; i < i7413.length; i += 1) {
    i7412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7413[i + 0]) );
  }
  i7410.entryTransitions = i7412
  var i7415 = i7411[3]
  var i7414 = []
  for(var i = 0; i < i7415.length; i += 1) {
    i7414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7415[i + 0]) );
  }
  i7410.anyStateTransitions = i7414
  return i7410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7419 = data
  i7418.destinationStateNameHash = i7419[0]
  i7418.destinationStateMachineId = i7419[1]
  i7418.isExit = !!i7419[2]
  i7418.mute = !!i7419[3]
  i7418.solo = !!i7419[4]
  var i7421 = i7419[5]
  var i7420 = []
  for(var i = 0; i < i7421.length; i += 1) {
    i7420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7421[i + 0]) );
  }
  i7418.conditions = i7420
  return i7418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7425 = data
  i7424.defaultBool = !!i7425[0]
  i7424.defaultFloat = i7425[1]
  i7424.defaultInt = i7425[2]
  i7424.name = i7425[3]
  i7424.nameHash = i7425[4]
  i7424.type = i7425[5]
  return i7424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7427 = data
  i7426.name = i7427[0]
  i7426.bytes64 = i7427[1]
  i7426.data = i7427[2]
  return i7426
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7428 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7429 = data
  i7428.hashCode = i7429[0]
  request.r(i7429[1], i7429[2], 0, i7428, 'material')
  i7428.materialHashCode = i7429[3]
  request.r(i7429[4], i7429[5], 0, i7428, 'atlas')
  i7428.normalStyle = i7429[6]
  i7428.normalSpacingOffset = i7429[7]
  i7428.boldStyle = i7429[8]
  i7428.boldSpacing = i7429[9]
  i7428.italicStyle = i7429[10]
  i7428.tabSize = i7429[11]
  i7428.m_Version = i7429[12]
  i7428.m_SourceFontFileGUID = i7429[13]
  request.r(i7429[14], i7429[15], 0, i7428, 'm_SourceFontFile_EditorRef')
  request.r(i7429[16], i7429[17], 0, i7428, 'm_SourceFontFile')
  i7428.m_AtlasPopulationMode = i7429[18]
  i7428.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7429[19], i7428.m_FaceInfo)
  var i7431 = i7429[20]
  var i7430 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7431.length; i += 1) {
    i7430.add(request.d('UnityEngine.TextCore.Glyph', i7431[i + 0]));
  }
  i7428.m_GlyphTable = i7430
  var i7433 = i7429[21]
  var i7432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7433.length; i += 1) {
    i7432.add(request.d('TMPro.TMP_Character', i7433[i + 0]));
  }
  i7428.m_CharacterTable = i7432
  var i7435 = i7429[22]
  var i7434 = []
  for(var i = 0; i < i7435.length; i += 2) {
  request.r(i7435[i + 0], i7435[i + 1], 2, i7434, '')
  }
  i7428.m_AtlasTextures = i7434
  i7428.m_AtlasTextureIndex = i7429[23]
  i7428.m_IsMultiAtlasTexturesEnabled = !!i7429[24]
  i7428.m_ClearDynamicDataOnBuild = !!i7429[25]
  var i7437 = i7429[26]
  var i7436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7437.length; i += 1) {
    i7436.add(request.d('UnityEngine.TextCore.GlyphRect', i7437[i + 0]));
  }
  i7428.m_UsedGlyphRects = i7436
  var i7439 = i7429[27]
  var i7438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7439.length; i += 1) {
    i7438.add(request.d('UnityEngine.TextCore.GlyphRect', i7439[i + 0]));
  }
  i7428.m_FreeGlyphRects = i7438
  i7428.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7429[28], i7428.m_fontInfo)
  i7428.m_AtlasWidth = i7429[29]
  i7428.m_AtlasHeight = i7429[30]
  i7428.m_AtlasPadding = i7429[31]
  i7428.m_AtlasRenderMode = i7429[32]
  var i7441 = i7429[33]
  var i7440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7441.length; i += 1) {
    i7440.add(request.d('TMPro.TMP_Glyph', i7441[i + 0]));
  }
  i7428.m_glyphInfoList = i7440
  i7428.m_KerningTable = request.d('TMPro.KerningTable', i7429[34], i7428.m_KerningTable)
  i7428.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7429[35], i7428.m_FontFeatureTable)
  var i7443 = i7429[36]
  var i7442 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7443.length; i += 2) {
  request.r(i7443[i + 0], i7443[i + 1], 1, i7442, '')
  }
  i7428.fallbackFontAssets = i7442
  var i7445 = i7429[37]
  var i7444 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7445.length; i += 2) {
  request.r(i7445[i + 0], i7445[i + 1], 1, i7444, '')
  }
  i7428.m_FallbackFontAssetTable = i7444
  i7428.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7429[38], i7428.m_CreationSettings)
  var i7447 = i7429[39]
  var i7446 = []
  for(var i = 0; i < i7447.length; i += 1) {
    i7446.push( request.d('TMPro.TMP_FontWeightPair', i7447[i + 0]) );
  }
  i7428.m_FontWeightTable = i7446
  var i7449 = i7429[40]
  var i7448 = []
  for(var i = 0; i < i7449.length; i += 1) {
    i7448.push( request.d('TMPro.TMP_FontWeightPair', i7449[i + 0]) );
  }
  i7428.fontWeights = i7448
  return i7428
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7450 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7451 = data
  i7450.m_FaceIndex = i7451[0]
  i7450.m_FamilyName = i7451[1]
  i7450.m_StyleName = i7451[2]
  i7450.m_PointSize = i7451[3]
  i7450.m_Scale = i7451[4]
  i7450.m_LineHeight = i7451[5]
  i7450.m_AscentLine = i7451[6]
  i7450.m_CapLine = i7451[7]
  i7450.m_MeanLine = i7451[8]
  i7450.m_Baseline = i7451[9]
  i7450.m_DescentLine = i7451[10]
  i7450.m_SuperscriptOffset = i7451[11]
  i7450.m_SuperscriptSize = i7451[12]
  i7450.m_SubscriptOffset = i7451[13]
  i7450.m_SubscriptSize = i7451[14]
  i7450.m_UnderlineOffset = i7451[15]
  i7450.m_UnderlineThickness = i7451[16]
  i7450.m_StrikethroughOffset = i7451[17]
  i7450.m_StrikethroughThickness = i7451[18]
  i7450.m_TabWidth = i7451[19]
  return i7450
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7454 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7455 = data
  i7454.m_Index = i7455[0]
  i7454.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7455[1], i7454.m_Metrics)
  i7454.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7455[2], i7454.m_GlyphRect)
  i7454.m_Scale = i7455[3]
  i7454.m_AtlasIndex = i7455[4]
  return i7454
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7456 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7457 = data
  i7456.m_Width = i7457[0]
  i7456.m_Height = i7457[1]
  i7456.m_HorizontalBearingX = i7457[2]
  i7456.m_HorizontalBearingY = i7457[3]
  i7456.m_HorizontalAdvance = i7457[4]
  return i7456
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7458 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7459 = data
  i7458.m_X = i7459[0]
  i7458.m_Y = i7459[1]
  i7458.m_Width = i7459[2]
  i7458.m_Height = i7459[3]
  return i7458
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7462 = root || request.c( 'TMPro.TMP_Character' )
  var i7463 = data
  i7462.m_ElementType = i7463[0]
  i7462.m_Unicode = i7463[1]
  i7462.m_GlyphIndex = i7463[2]
  i7462.m_Scale = i7463[3]
  return i7462
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7468 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7469 = data
  i7468.Name = i7469[0]
  i7468.PointSize = i7469[1]
  i7468.Scale = i7469[2]
  i7468.CharacterCount = i7469[3]
  i7468.LineHeight = i7469[4]
  i7468.Baseline = i7469[5]
  i7468.Ascender = i7469[6]
  i7468.CapHeight = i7469[7]
  i7468.Descender = i7469[8]
  i7468.CenterLine = i7469[9]
  i7468.SuperscriptOffset = i7469[10]
  i7468.SubscriptOffset = i7469[11]
  i7468.SubSize = i7469[12]
  i7468.Underline = i7469[13]
  i7468.UnderlineThickness = i7469[14]
  i7468.strikethrough = i7469[15]
  i7468.strikethroughThickness = i7469[16]
  i7468.TabWidth = i7469[17]
  i7468.Padding = i7469[18]
  i7468.AtlasWidth = i7469[19]
  i7468.AtlasHeight = i7469[20]
  return i7468
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7472 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7473 = data
  i7472.id = i7473[0]
  i7472.x = i7473[1]
  i7472.y = i7473[2]
  i7472.width = i7473[3]
  i7472.height = i7473[4]
  i7472.xOffset = i7473[5]
  i7472.yOffset = i7473[6]
  i7472.xAdvance = i7473[7]
  i7472.scale = i7473[8]
  return i7472
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7474 = root || request.c( 'TMPro.KerningTable' )
  var i7475 = data
  var i7477 = i7475[0]
  var i7476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7477.length; i += 1) {
    i7476.add(request.d('TMPro.KerningPair', i7477[i + 0]));
  }
  i7474.kerningPairs = i7476
  return i7474
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7480 = root || request.c( 'TMPro.KerningPair' )
  var i7481 = data
  i7480.xOffset = i7481[0]
  i7480.m_FirstGlyph = i7481[1]
  i7480.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7481[2], i7480.m_FirstGlyphAdjustments)
  i7480.m_SecondGlyph = i7481[3]
  i7480.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7481[4], i7480.m_SecondGlyphAdjustments)
  i7480.m_IgnoreSpacingAdjustments = !!i7481[5]
  return i7480
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7482 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7483 = data
  var i7485 = i7483[0]
  var i7484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7485.length; i += 1) {
    i7484.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i7485[i + 0]));
  }
  i7482.m_GlyphPairAdjustmentRecords = i7484
  return i7482
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7488 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i7489 = data
  i7488.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7489[0], i7488.m_FirstAdjustmentRecord)
  i7488.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7489[1], i7488.m_SecondAdjustmentRecord)
  i7488.m_FeatureLookupFlags = i7489[2]
  return i7488
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7492 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7493 = data
  i7492.sourceFontFileName = i7493[0]
  i7492.sourceFontFileGUID = i7493[1]
  i7492.pointSizeSamplingMode = i7493[2]
  i7492.pointSize = i7493[3]
  i7492.padding = i7493[4]
  i7492.packingMode = i7493[5]
  i7492.atlasWidth = i7493[6]
  i7492.atlasHeight = i7493[7]
  i7492.characterSetSelectionMode = i7493[8]
  i7492.characterSequence = i7493[9]
  i7492.referencedFontAssetGUID = i7493[10]
  i7492.referencedTextAssetGUID = i7493[11]
  i7492.fontStyle = i7493[12]
  i7492.fontStyleModifier = i7493[13]
  i7492.renderMode = i7493[14]
  i7492.includeFontFeatures = !!i7493[15]
  return i7492
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7496 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7497 = data
  request.r(i7497[0], i7497[1], 0, i7496, 'regularTypeface')
  request.r(i7497[2], i7497[3], 0, i7496, 'italicTypeface')
  return i7496
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i7498 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i7499 = data
  var i7501 = i7499[0]
  var i7500 = []
  for(var i = 0; i < i7501.length; i += 2) {
  request.r(i7501[i + 0], i7501[i + 1], 2, i7500, '')
  }
  i7498.atlasAssets = i7500
  i7498.scale = i7499[1]
  request.r(i7499[2], i7499[3], 0, i7498, 'skeletonJSON')
  i7498.isUpgradingBlendModeMaterials = !!i7499[4]
  i7498.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i7499[5], i7498.blendModeMaterials)
  var i7503 = i7499[6]
  var i7502 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i7503.length; i += 2) {
  request.r(i7503[i + 0], i7503[i + 1], 1, i7502, '')
  }
  i7498.skeletonDataModifiers = i7502
  var i7505 = i7499[7]
  var i7504 = []
  for(var i = 0; i < i7505.length; i += 1) {
    i7504.push( i7505[i + 0] );
  }
  i7498.fromAnimation = i7504
  var i7507 = i7499[8]
  var i7506 = []
  for(var i = 0; i < i7507.length; i += 1) {
    i7506.push( i7507[i + 0] );
  }
  i7498.toAnimation = i7506
  i7498.duration = i7499[9]
  i7498.defaultMix = i7499[10]
  request.r(i7499[11], i7499[12], 0, i7498, 'controller')
  return i7498
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i7510 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i7511 = data
  i7510.applyAdditiveMaterial = !!i7511[0]
  var i7513 = i7511[1]
  var i7512 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7513.length; i += 1) {
    i7512.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7513[i + 0]));
  }
  i7510.additiveMaterials = i7512
  var i7515 = i7511[2]
  var i7514 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7515.length; i += 1) {
    i7514.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7515[i + 0]));
  }
  i7510.multiplyMaterials = i7514
  var i7517 = i7511[3]
  var i7516 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7517.length; i += 1) {
    i7516.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7517[i + 0]));
  }
  i7510.screenMaterials = i7516
  i7510.requiresBlendModeMaterials = !!i7511[4]
  return i7510
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i7520 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i7521 = data
  i7520.pageName = i7521[0]
  request.r(i7521[1], i7521[2], 0, i7520, 'material')
  return i7520
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i7524 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i7525 = data
  request.r(i7525[0], i7525[1], 0, i7524, 'atlasFile')
  var i7527 = i7525[2]
  var i7526 = []
  for(var i = 0; i < i7527.length; i += 2) {
  request.r(i7527[i + 0], i7527[i + 1], 2, i7526, '')
  }
  i7524.materials = i7526
  return i7524
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7528 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i7529 = data
  i7528.m_GlyphIndex = i7529[0]
  i7528.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i7529[1], i7528.m_GlyphValueRecord)
  return i7528
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i7530 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i7531 = data
  i7530.m_XPlacement = i7531[0]
  i7530.m_YPlacement = i7531[1]
  i7530.m_XAdvance = i7531[2]
  i7530.m_YAdvance = i7531[3]
  return i7530
}

Deserializers["Item"] = function (request, data, root) {
  var i7532 = root || request.c( 'Item' )
  var i7533 = data
  i7532.id = i7533[0]
  i7532.bodypartName = i7533[1]
  request.r(i7533[2], i7533[3], 0, i7532, 'preview')
  request.r(i7533[4], i7533[5], 0, i7532, 'part')
  i7532.isAd = !!i7533[6]
  i7532.adNum = i7533[7]
  i7532.price = i7533[8]
  i7532.bodyPart = i7533[9]
  i7532.specialPos = !!i7533[10]
  i7532.realPos = new pc.Vec3( i7533[11], i7533[12], i7533[13] )
  i7532.catalogue = i7533[14]
  i7532.dataAsset = i7533[15]
  i7532.pkTheme = i7533[16]
  i7532.priority = i7533[17]
  return i7532
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7534 = root || request.c( 'TMPro.TMP_Settings' )
  var i7535 = data
  i7534.m_enableWordWrapping = !!i7535[0]
  i7534.m_enableKerning = !!i7535[1]
  i7534.m_enableExtraPadding = !!i7535[2]
  i7534.m_enableTintAllSprites = !!i7535[3]
  i7534.m_enableParseEscapeCharacters = !!i7535[4]
  i7534.m_EnableRaycastTarget = !!i7535[5]
  i7534.m_GetFontFeaturesAtRuntime = !!i7535[6]
  i7534.m_missingGlyphCharacter = i7535[7]
  i7534.m_warningsDisabled = !!i7535[8]
  request.r(i7535[9], i7535[10], 0, i7534, 'm_defaultFontAsset')
  i7534.m_defaultFontAssetPath = i7535[11]
  i7534.m_defaultFontSize = i7535[12]
  i7534.m_defaultAutoSizeMinRatio = i7535[13]
  i7534.m_defaultAutoSizeMaxRatio = i7535[14]
  i7534.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7535[15], i7535[16] )
  i7534.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7535[17], i7535[18] )
  i7534.m_autoSizeTextContainer = !!i7535[19]
  i7534.m_IsTextObjectScaleStatic = !!i7535[20]
  var i7537 = i7535[21]
  var i7536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7537.length; i += 2) {
  request.r(i7537[i + 0], i7537[i + 1], 1, i7536, '')
  }
  i7534.m_fallbackFontAssets = i7536
  i7534.m_matchMaterialPreset = !!i7535[22]
  request.r(i7535[23], i7535[24], 0, i7534, 'm_defaultSpriteAsset')
  i7534.m_defaultSpriteAssetPath = i7535[25]
  i7534.m_enableEmojiSupport = !!i7535[26]
  i7534.m_MissingCharacterSpriteUnicode = i7535[27]
  i7534.m_defaultColorGradientPresetsPath = i7535[28]
  request.r(i7535[29], i7535[30], 0, i7534, 'm_defaultStyleSheet')
  i7534.m_StyleSheetsResourcePath = i7535[31]
  request.r(i7535[32], i7535[33], 0, i7534, 'm_leadingCharacters')
  request.r(i7535[34], i7535[35], 0, i7534, 'm_followingCharacters')
  i7534.m_UseModernHangulLineBreakingRules = !!i7535[36]
  return i7534
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7538 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7539 = data
  i7538.hashCode = i7539[0]
  request.r(i7539[1], i7539[2], 0, i7538, 'material')
  i7538.materialHashCode = i7539[3]
  request.r(i7539[4], i7539[5], 0, i7538, 'spriteSheet')
  var i7541 = i7539[6]
  var i7540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7541.length; i += 1) {
    i7540.add(request.d('TMPro.TMP_Sprite', i7541[i + 0]));
  }
  i7538.spriteInfoList = i7540
  var i7543 = i7539[7]
  var i7542 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7543.length; i += 2) {
  request.r(i7543[i + 0], i7543[i + 1], 1, i7542, '')
  }
  i7538.fallbackSpriteAssets = i7542
  i7538.m_Version = i7539[8]
  i7538.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7539[9], i7538.m_FaceInfo)
  var i7545 = i7539[10]
  var i7544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7545.length; i += 1) {
    i7544.add(request.d('TMPro.TMP_SpriteCharacter', i7545[i + 0]));
  }
  i7538.m_SpriteCharacterTable = i7544
  var i7547 = i7539[11]
  var i7546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7547.length; i += 1) {
    i7546.add(request.d('TMPro.TMP_SpriteGlyph', i7547[i + 0]));
  }
  i7538.m_SpriteGlyphTable = i7546
  return i7538
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7550 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7551 = data
  i7550.name = i7551[0]
  i7550.hashCode = i7551[1]
  i7550.unicode = i7551[2]
  i7550.pivot = new pc.Vec2( i7551[3], i7551[4] )
  request.r(i7551[5], i7551[6], 0, i7550, 'sprite')
  i7550.id = i7551[7]
  i7550.x = i7551[8]
  i7550.y = i7551[9]
  i7550.width = i7551[10]
  i7550.height = i7551[11]
  i7550.xOffset = i7551[12]
  i7550.yOffset = i7551[13]
  i7550.xAdvance = i7551[14]
  i7550.scale = i7551[15]
  return i7550
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7556 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7557 = data
  i7556.m_Name = i7557[0]
  i7556.m_HashCode = i7557[1]
  i7556.m_ElementType = i7557[2]
  i7556.m_Unicode = i7557[3]
  i7556.m_GlyphIndex = i7557[4]
  i7556.m_Scale = i7557[5]
  return i7556
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7560 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7561 = data
  request.r(i7561[0], i7561[1], 0, i7560, 'sprite')
  i7560.m_Index = i7561[2]
  i7560.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7561[3], i7560.m_Metrics)
  i7560.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7561[4], i7560.m_GlyphRect)
  i7560.m_Scale = i7561[5]
  i7560.m_AtlasIndex = i7561[6]
  return i7560
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7562 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7563 = data
  var i7565 = i7563[0]
  var i7564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7565.length; i += 1) {
    i7564.add(request.d('TMPro.TMP_Style', i7565[i + 0]));
  }
  i7562.m_StyleList = i7564
  return i7562
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7568 = root || request.c( 'TMPro.TMP_Style' )
  var i7569 = data
  i7568.m_Name = i7569[0]
  i7568.m_HashCode = i7569[1]
  i7568.m_OpeningDefinition = i7569[2]
  i7568.m_ClosingDefinition = i7569[3]
  i7568.m_OpeningTagArray = i7569[4]
  i7568.m_ClosingTagArray = i7569[5]
  i7568.m_OpeningTagUnicodeArray = i7569[6]
  i7568.m_ClosingTagUnicodeArray = i7569[7]
  return i7568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7571 = data
  var i7573 = i7571[0]
  var i7572 = []
  for(var i = 0; i < i7573.length; i += 1) {
    i7572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7573[i + 0]) );
  }
  i7570.files = i7572
  i7570.componentToPrefabIds = i7571[1]
  return i7570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7577 = data
  i7576.path = i7577[0]
  request.r(i7577[1], i7577[2], 0, i7576, 'unityObject')
  return i7576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7579 = data
  var i7581 = i7579[0]
  var i7580 = []
  for(var i = 0; i < i7581.length; i += 1) {
    i7580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7581[i + 0]) );
  }
  i7578.scriptsExecutionOrder = i7580
  var i7583 = i7579[1]
  var i7582 = []
  for(var i = 0; i < i7583.length; i += 1) {
    i7582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7583[i + 0]) );
  }
  i7578.sortingLayers = i7582
  var i7585 = i7579[2]
  var i7584 = []
  for(var i = 0; i < i7585.length; i += 1) {
    i7584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7585[i + 0]) );
  }
  i7578.cullingLayers = i7584
  i7578.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7579[3], i7578.timeSettings)
  i7578.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7579[4], i7578.physicsSettings)
  i7578.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7579[5], i7578.physics2DSettings)
  i7578.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7579[6], i7578.qualitySettings)
  i7578.enableRealtimeShadows = !!i7579[7]
  i7578.enableAutoInstancing = !!i7579[8]
  i7578.enableDynamicBatching = !!i7579[9]
  i7578.lightmapEncodingQuality = i7579[10]
  i7578.desiredColorSpace = i7579[11]
  var i7587 = i7579[12]
  var i7586 = []
  for(var i = 0; i < i7587.length; i += 1) {
    i7586.push( i7587[i + 0] );
  }
  i7578.allTags = i7586
  return i7578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7591 = data
  i7590.name = i7591[0]
  i7590.value = i7591[1]
  return i7590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7595 = data
  i7594.id = i7595[0]
  i7594.name = i7595[1]
  i7594.value = i7595[2]
  return i7594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7599 = data
  i7598.id = i7599[0]
  i7598.name = i7599[1]
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7601 = data
  i7600.fixedDeltaTime = i7601[0]
  i7600.maximumDeltaTime = i7601[1]
  i7600.timeScale = i7601[2]
  i7600.maximumParticleTimestep = i7601[3]
  return i7600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7603 = data
  i7602.gravity = new pc.Vec3( i7603[0], i7603[1], i7603[2] )
  i7602.defaultSolverIterations = i7603[3]
  i7602.bounceThreshold = i7603[4]
  i7602.autoSyncTransforms = !!i7603[5]
  i7602.autoSimulation = !!i7603[6]
  var i7605 = i7603[7]
  var i7604 = []
  for(var i = 0; i < i7605.length; i += 1) {
    i7604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7605[i + 0]) );
  }
  i7602.collisionMatrix = i7604
  return i7602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7609 = data
  i7608.enabled = !!i7609[0]
  i7608.layerId = i7609[1]
  i7608.otherLayerId = i7609[2]
  return i7608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7611 = data
  request.r(i7611[0], i7611[1], 0, i7610, 'material')
  i7610.gravity = new pc.Vec2( i7611[2], i7611[3] )
  i7610.positionIterations = i7611[4]
  i7610.velocityIterations = i7611[5]
  i7610.velocityThreshold = i7611[6]
  i7610.maxLinearCorrection = i7611[7]
  i7610.maxAngularCorrection = i7611[8]
  i7610.maxTranslationSpeed = i7611[9]
  i7610.maxRotationSpeed = i7611[10]
  i7610.baumgarteScale = i7611[11]
  i7610.baumgarteTOIScale = i7611[12]
  i7610.timeToSleep = i7611[13]
  i7610.linearSleepTolerance = i7611[14]
  i7610.angularSleepTolerance = i7611[15]
  i7610.defaultContactOffset = i7611[16]
  i7610.autoSimulation = !!i7611[17]
  i7610.queriesHitTriggers = !!i7611[18]
  i7610.queriesStartInColliders = !!i7611[19]
  i7610.callbacksOnDisable = !!i7611[20]
  i7610.reuseCollisionCallbacks = !!i7611[21]
  i7610.autoSyncTransforms = !!i7611[22]
  var i7613 = i7611[23]
  var i7612 = []
  for(var i = 0; i < i7613.length; i += 1) {
    i7612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7613[i + 0]) );
  }
  i7610.collisionMatrix = i7612
  return i7610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7617 = data
  i7616.enabled = !!i7617[0]
  i7616.layerId = i7617[1]
  i7616.otherLayerId = i7617[2]
  return i7616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7619 = data
  var i7621 = i7619[0]
  var i7620 = []
  for(var i = 0; i < i7621.length; i += 1) {
    i7620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7621[i + 0]) );
  }
  i7618.qualityLevels = i7620
  var i7623 = i7619[1]
  var i7622 = []
  for(var i = 0; i < i7623.length; i += 1) {
    i7622.push( i7623[i + 0] );
  }
  i7618.names = i7622
  i7618.shadows = i7619[2]
  i7618.anisotropicFiltering = i7619[3]
  i7618.antiAliasing = i7619[4]
  i7618.lodBias = i7619[5]
  i7618.shadowCascades = i7619[6]
  i7618.shadowDistance = i7619[7]
  i7618.shadowmaskMode = i7619[8]
  i7618.shadowProjection = i7619[9]
  i7618.shadowResolution = i7619[10]
  i7618.softParticles = !!i7619[11]
  i7618.softVegetation = !!i7619[12]
  i7618.activeColorSpace = i7619[13]
  i7618.desiredColorSpace = i7619[14]
  i7618.masterTextureLimit = i7619[15]
  i7618.maxQueuedFrames = i7619[16]
  i7618.particleRaycastBudget = i7619[17]
  i7618.pixelLightCount = i7619[18]
  i7618.realtimeReflectionProbes = !!i7619[19]
  i7618.shadowCascade2Split = i7619[20]
  i7618.shadowCascade4Split = new pc.Vec3( i7619[21], i7619[22], i7619[23] )
  i7618.streamingMipmapsActive = !!i7619[24]
  i7618.vSyncCount = i7619[25]
  i7618.asyncUploadBufferSize = i7619[26]
  i7618.asyncUploadTimeSlice = i7619[27]
  i7618.billboardsFaceCameraPosition = !!i7619[28]
  i7618.shadowNearPlaneOffset = i7619[29]
  i7618.streamingMipmapsMemoryBudget = i7619[30]
  i7618.maximumLODLevel = i7619[31]
  i7618.streamingMipmapsAddAllCameras = !!i7619[32]
  i7618.streamingMipmapsMaxLevelReduction = i7619[33]
  i7618.streamingMipmapsRenderersPerFrame = i7619[34]
  i7618.resolutionScalingFixedDPIFactor = i7619[35]
  i7618.streamingMipmapsMaxFileIORequests = i7619[36]
  i7618.currentQualityLevel = i7619[37]
  return i7618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7629 = data
  i7628.mode = i7629[0]
  i7628.parameter = i7629[1]
  i7628.threshold = i7629[2]
  return i7628
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7630 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7631 = data
  i7630.xPlacement = i7631[0]
  i7630.yPlacement = i7631[1]
  i7630.xAdvance = i7631[2]
  i7630.yAdvance = i7631[3]
  return i7630
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[86],"87":[23],"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[89],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[97],"105":[97],"106":[97],"107":[97],"108":[97],"109":[97],"110":[23],"111":[61],"112":[113],"114":[113],"20":[7],"115":[7],"28":[15],"116":[23],"117":[7],"118":[8,7],"54":[61],"49":[8,7],"119":[36,61],"120":[61,60],"121":[61],"122":[89],"123":[97],"124":[125],"126":[127],"128":[7],"129":[8,7],"130":[61],"131":[8,7],"132":[7],"133":[61,7],"15":[7,8],"134":[7],"135":[7],"136":[7],"21":[20],"10":[8,7],"137":[7],"24":[20],"46":[7],"44":[7],"138":[7],"139":[7],"140":[7],"141":[7],"142":[7],"45":[7],"143":[7],"144":[8,7],"145":[7],"43":[7],"47":[7],"34":[7],"18":[8,7],"146":[7],"147":[70],"148":[70],"71":[70],"149":[70],"150":[23],"151":[23],"152":[51],"153":[7,8],"154":[155]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","ItemDisplay","UnityEngine.MonoBehaviour","UnityEngine.GameObject","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Outline","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Canvas","UnityEngine.UI.GraphicRaycaster","TutHand","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UI_Result","BgAnimController","CharacterManager","CountNumber","UI_Lobby","UnityEngine.CanvasGroup","UI_FadeElementLobby","DragDropTut","UI_Ingame","UnityEngine.UI.Slider","TabMenuHandler","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Tab","GridHandler","Scale","UIHandler","BreathButton","UnityEngine.UI.ScrollRect","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.Scrollbar","LoadingAdHoz","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.SpriteRenderer","BGLightEffect","UnityEngine.Rendering.SortingGroup","Spine.Unity.SkeletonAnimation","Spine.Unity.BoneFollower","HeadController","UnityEngine.BoxCollider2D","SortingLayerCharacter","TouchController","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","ShopController","Item","CameraHandler","Confetti","UnityEngine.AudioListener","GameController","SoundManager","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CustomSlider","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","Coffee.UIExtensions.UIParticle","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer"]

Deserializers.unityVersion = "2020.3.43f1";

Deserializers.productName = "Dance Monster: DIY Makeover";

Deserializers.lunaInitializationTime = "01/09/2024 10:38:59";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "19925";

Deserializers.projectId = "c58a4003babe78546aa7e57b98321baf";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

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

Deserializers.buildID = "694d350e-04ae-458d-9c5c-39cd60d5ed1a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

