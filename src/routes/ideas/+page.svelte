<script>
  import Wheel from '../../lib/components/Wheel/Wheel.svelte'
  import { goto } from '$app/navigation'
  import 'animate.css'

  let category
  let color
  let hidden
  let activity = '???'

  async function fetchActivity() {
    try {
      const response = await fetch(`https://www.boredapi.com/api/activity?type=${category}`)
      const data = await response.json()
      activity = data.activity
    } catch (error) {
      console.error(error)
    }
  }
</script>

<div class="h-full">
  <div class="flex mt-36">
    <div class="flex justify-center p-10 flex-col animate__animated animate__backInLeft ml-36">
      <img src="images/brain-idea.svg" alt="brain-idea" class="h-[30rem] w-[30rem] scale-x-[-1]" />
    </div>
    <Wheel bind:category bind:hidden bind:color on:call={fetchActivity} />
    <div class="w-2/5 mr-36 my-auto">
      <div class="flex justify-center font-heading-token text-3xl">
        spin the wheel of activities!
      </div>
      <div
        class="flex justify-center font-heading-token text-4xl mt-4 animate__animated animate__fadeIn bg-white dark:bg-surface-100 rounded-full w-96 mx-auto py-2 text-surface-500">
        {#if hidden}
          <div>???</div>
        {:else}
          <div class="text-[var(--text-color)]" style="--text-color: {color}">
            {category}
          </div>
        {/if}
      </div>
      <div
        class="flex justify-center font-heading-token text-2xl mt-16 dark:text-primary-300 text-primary-500">
        suggestion:
      </div>
      {#if !hidden}
        <div class="flex justify-center font-heading-token text-5xl mt-2 text-center">
          <div class="flex justify-center w-[30rem]">
            {activity}
          </div>
        </div>
      {:else}
        <div class="flex justify-center font-heading-token text-5xl mt-2 text-center">???</div>
      {/if}
    </div>
  </div>
  <button class="btn ml-4 mt-auto" on:click={() => goto('/startpage')}
    ><iconify-icon icon="fluent-emoji-high-contrast:back-arrow" width="40" /></button>
</div>
