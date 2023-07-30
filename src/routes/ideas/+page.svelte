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

<div class="">
  <div class="flex 2xl:mt-36 mt-10 flex-col xl:flex-row">
    <div
      class="flex justify-center 2xl:p-10 flex-col animate__animated animate__backInLeft 2xl:ml-36">
      <img
        src="images/brain-idea.svg"
        alt="brain-idea"
        class="2xl:h-[30rem] 2xl:w-[30rem] h-64 w-64 scale-x-[-1] self-center -mb-16 md:mb-0" />
    </div>

    <Wheel bind:category bind:hidden bind:color on:call={fetchActivity} />

    <div class="2xl:w-2/5 px-2 2xl:mr-36 2xl:my-auto">
      <div class="flex justify-center font-heading-token text-2xl 2xl:text-3xl">
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
        <div class="flex justify-center font-heading-token text-4xl 2xl:text-5xl mt-2 text-center">
          <div class="flex justify-center w-[30rem]">
            {activity}
          </div>
        </div>
      {:else}
        <div class="flex justify-center font-heading-token text-4xl 2xl:text-5xl mt-2 text-center">
          ???
        </div>
      {/if}
    </div>
  </div>
  <button class="btn ml-4 2xl:mt-auto mt-10" on:click={() => goto('/startpage')}
    ><iconify-icon icon="fluent-emoji-high-contrast:back-arrow" width="40" /></button>
</div>
