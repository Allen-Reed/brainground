<script>
  import '../theme.postcss'
  import '@skeletonlabs/skeleton/styles/skeleton.css'
  import '../app.postcss'
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar class="shadow-lg flex">
      <div class="flex justify-between">
        <div class="flex ml-4">
          <h1 class="text-5xl font-heading-token">brain</h1>
          <h1 class="text-5xl text-primary-500 font-heading-token dark:text-tertiary-400">
            ground
          </h1>
        </div>
        <div class="flex mr-4">
          <button class="btn btn-small variant-ghost-surface w-10 h-10">
            <iconify-icon icon="ri:github-line" width="35" /></button>
          <button class="btn btn-small variant-ghost-surface w-10 h-10 ml-2">
            <iconify-icon icon="tabler:brand-linkedin" width="35" /></button>
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
  <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
  <!-- (footer) -->
</AppShell>
