<script>
  import { onMount } from 'svelte'
  import { Canvas } from '@threlte/core'
  import Brain from '$lib/components/Brain.svelte'
  import 'animate.css'

  export const ssr = false

  onMount(async () => {
    await animateCSS('.brain', 'jello')
  })

  const animateCSS = (element, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`
      const node = document.querySelector(element)

      node.classList.add(`${prefix}animated`, animationName)

      function handleAnimationEnd(event) {
        event.stopPropagation()
        node.classList.remove(`${prefix}animated`, animationName)
        resolve('Animation ended')
      }

      node.addEventListener('animationend', handleAnimationEnd, { once: true })
    })
</script>

<div class="flex w-full h-full flex-wrap 2xl:flex-row flex-col">
  <div class="flex justify-end grow my-auto">
    <div class="flex flex-col">
      <div class="text-5xl mb-2 font-heading-token animate__animated animate__fadeInLeft">
        your skull is a jungle gym!
      </div>
      <div
        class="flex ml-auto text-right mt-2 text-xl animate__animated animate__fadeIn w-[30rem] animate__delay-1s">
        Let's see if we can entertain that impressive brain of yours with random facts, dad jokes,
        riddles and more...
      </div>
      <div class="flex justify-end mt-4">
        <button
          class="btn variant-filled-secondary font-semibold animate__animated animate__fadeIn animate__delay-1s"
          >Let's Go!</button>
      </div>
    </div>
  </div>
  <div
    class="flex min-w-[50%] justify-start hover:cursor-pointer brain"
    role="button"
    tabindex="0"
    on:keydown
    on:click={() => animateCSS('.brain', 'shakeY')}>
    <Canvas rendererParameters={{ antialias: true }}>
      <Brain />
    </Canvas>
  </div>
</div>
