<script>
  import { Canvas } from '@threlte/core'
  import Brain from '$lib/components/Brain.svelte'
</script>

<div class="flex w-full h-full flex-wrap 2xl:flex-row flex-col">
  <div class="flex justify-end grow my-auto">
    <div class="flex flex-col">
      <div class="text-5xl font-heading-token">turn your skull into a playground</div>
      <div class="flex justify-end mt-2 text-xl">text</div>
      <div class="flex">
        <button class="btn variant-filled-tertiary">Let's Go!</button>
      </div>
    </div>
  </div>
  <div class="flex min-w-[50%] justify-start">
    <Canvas rendererParameters={{ antialias: true }}>
      <Brain />
    </Canvas>
  </div>
</div>
