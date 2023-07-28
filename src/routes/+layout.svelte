<script>
  import '../theme.postcss'
  import '@skeletonlabs/skeleton/styles/skeleton.css'
  import '../app.postcss'
  import { goto } from '$app/navigation'
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar class="shadow-lg flex">
      <div class="flex justify-between">
        <div class="flex ml-4" on:keydown on:click={() => goto('/')} role="button" tabindex="0">
          <h1 class="text-5xl font-heading-token">brain</h1>
          <h1 class="text-5xl text-primary-500 font-heading-token dark:text-tertiary-400">
            ground
          </h1>
        </div>
        <div class="flex mr-4">
          <button
            class="btn btn-small variant-ghost-surface w-10 h-10"
            on:click={() => {
              window.open('https://github.com/Allen-Reed/brainground', '_blank')
            }}>
            <iconify-icon icon="ri:github-line" width="35" /></button>
          <button
            class="btn btn-small variant-ghost-surface w-10 h-10 ml-2"
            on:click={() => {
              window.open('https://www.linkedin.com/in/allendreed/', '_blank')
            }}>
            <iconify-icon icon="tabler:brand-linkedin" width="35" /></button>
          <button
            class="btn btn-small variant-ghost-surface w-10 h-10 ml-2"
            on:click={() => goto('/contact')}>
            <iconify-icon icon="ph:envelope-bold" width="35" /></button>
          <div class="flex my-auto ml-6">
            <LightSwitch />
          </div>
        </div>
      </div>
    </AppBar>
  </svelte:fragment>
  <!-- (sidebarLeft) -->
  <!-- (sidebarRight) -->
  <!-- (pageHeader) -->
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter">
    <div class="flex justify-end border-t border-surface-400 py-3 pr-4">
      <div class="mr-2 my-auto">Made with</div>
      <iconify-icon icon="devicon:svelte" style="font-size: 30px;" class="mr-2" />
      <iconify-icon icon="devicon:tailwindcss" style="font-size: 30px;" class="mr-2" />
      <iconify-icon
        icon="logos:threejs"
        style="font-size: 30px;"
        class="dark:fill-white fill-black mr-2" />
      <iconify-icon icon="skill-icons:illustrator" style="font-size: 30px;" class="mr-2" />
      <iconify-icon icon="simple-icons:audacity" style="font-size: 30px;" />
    </div>
  </svelte:fragment>
  <!-- (footer) -->
</AppShell>
