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

  let sounds = [
    'sounds/baby-laugh-1.mp3',
    'sounds/baby-laugh-2.mp3',
    'sounds/chipmunk-laugh.mp3',
    'sounds/evil-laugh.mp3',
    'sounds/girl-laugh.wav',
    'sounds/man-laugh.mp3',
    'sounds/woman-laugh.mp3'
  ]

  let previousSound = null

  function playRandomSound() {
    let randomSound
    do {
      const randomIndex = Math.floor(Math.random() * sounds.length)
      randomSound = sounds[randomIndex]
    } while (randomSound === previousSound)

    previousSound = randomSound

    const audio = new Audio(randomSound)
    audio.volume = 0.2
    audio.play()
  }
</script>

<T.DirectionalLight position={[0, 10, 10]} />

<T.PerspectiveCamera makeDefault position={[4, 10, 4]} fov={50}>
  <OrbitControls enableDamping enableZoom={false} />
</T.PerspectiveCamera>

<T.AmbientLight />

<div>
  <GLTF
    url="/models/braincenteredscaledpink.glb"
    rotation.y={rotation}
    scale={$scale}
    on:click={() => {
      spin()
      playRandomSound()
    }}
    on:pointerenter={() => scale.set(1.1)}
    on:pointerleave={() => scale.set(1)} />
</div>
