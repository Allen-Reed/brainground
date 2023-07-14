<script>
  import { T, useFrame } from '@threlte/core'
  import { interactivity, Environment, GLTF, OrbitControls } from '@threlte/extras'
  import { spring } from 'svelte/motion'

  let rotation = 0
  let multiplier = 0.02

  export const ssr = false

  useFrame(() => {
    rotation += multiplier
  })

  interactivity()
  const scale = spring(1)

  function spin() {
    multiplier = 0.05
    setTimeout(() => {
      multiplier = 0.02
    }, 800)
  }
</script>

<Environment path="/hdr/" files="desert.hdr" />

<T.PerspectiveCamera makeDefault position={[4, 10, 4]} fov={50}>
  <OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.AmbientLight />

<div>
  <GLTF
    url="/models/braincenteredscaledpink.glb"
    rotation.y={rotation}
    scale={$scale}
    on:click={spin}
    on:pointerenter={() => scale.set(1.1)}
    on:pointerleave={() => scale.set(1)} />
</div>
