<script>
  import { onMount } from 'svelte'
  import { Canvas } from '@threlte/core'
  import { goto } from '$app/navigation'
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

<div class="flex sm:w-full h-full flex-wrap 2xl:flex-row flex-col">
  <div class="flex justify-center 2xl:justify-end 2xl:grow 2xl:my-auto my-12">
    <div class="flex flex-col w-96">
      <div
        class="sm:text-5xl text-2xl mb-2 font-heading-token animate__animated animate__fadeInLeft flex justify-center">
        your skull is a jungle gym!
      </div>
      <div
        class="flex mx-auto 2xl:mx-0 2xl:ml-auto text-center 2xl:text-right mt-2 text-xl animate__animated animate__fadeIn sm:w-[30rem] animate__delay-1s">
        Let's see if we can entertain that impressive brain of yours with random facts, dad jokes,
        games and more...
      </div>
      <div class="flex 2xl:justify-end justify-center mt-4">
        <button
          class="btn variant-filled-secondary font-semibold animate__animated animate__fadeIn animate__delay-1s"
          on:click={() => {
            goto('/startpage')
          }}>Let's Go!</button>
      </div>
    </div>
  </div>
  <div
    class="flex 2xl:min-w-[850px] 2xl:min-h-[600px] min-w-[420px] min-h-[400px] 2xl:justify-start justify-center hover:cursor-pointer brain my-auto"
    role="button"
    tabindex="0"
    on:keydown
    on:click={() => animateCSS('.brain', 'shakeY')}>
    <Canvas rendererParameters={{ antialias: true }}>
      <Brain />
    </Canvas>
  </div>
</div>
