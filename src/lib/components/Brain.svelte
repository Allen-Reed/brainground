<script>
  import { T, useFrame } from '@threlte/core'
  import { interactivity, Environment, GLTF, OrbitControls } from '@threlte/extras'
  import { spring } from 'svelte/motion'

  let rotation = 0
  useFrame((state, delta) => {
    rotation += delta
  })

  interactivity()
  const scale = spring(1)
</script>

<Environment path="/hdr/" files="desert.hdr" />

<T.PerspectiveCamera makeDefault position={[4, 10, 4]} fov={50}>
  <OrbitControls autoRotate enableDamping />
</T.PerspectiveCamera>

<T.AmbientLight />

<GLTF url="/models/braincenteredscaledpink.glb" />

<!-- <T.Mesh
  rotation.y={rotation}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
  castShadow>
  <T.BoxGeometry args={[2, 2, 2]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh> -->
