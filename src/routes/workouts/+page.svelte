<script>
  import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton'
  import MathProblems from '../../lib/components/MathProblems/MathProblems.svelte'
  import { goto } from '$app/navigation'
  import 'animate.css'

  let category = 'math'
</script>

<div class="h-full my-auto">
  <div class="flex grow flex-col my-auto">
    <div class="flex justify-center">
      <div class="flex justify-end my-auto animate__animated animate__backInDown">
        <img
          src="images/brain-workout.svg"
          alt="brain-idea"
          class="h-[15rem] w-[15rem] scale-x-[-1] my-auto" />
      </div>
      <div class="mt-auto mb-4">
        <RadioGroup class="font-heading-token">
          <RadioItem bind:group={category} name="justify" value="math">math problems</RadioItem>
          <RadioItem bind:group={category} name="justify" value="chess">chess</RadioItem>
          <RadioItem bind:group={category} name="justify" value="wordle">wordle</RadioItem>
        </RadioGroup>
      </div>
    </div>
    <div class="flex h-[480px] w-[760px] border-4 dark:border-white border-surface-300 mx-auto">
      {#if category === 'math'}
        <MathProblems />
      {/if}
      {#if category === 'chess'}
        <div class="flex justify-center animate__animated animate__fadeIn mb-10">
          <iframe
            src="https://fritz.chessbase.com"
            style="width:752px;height:471px"
            title="chessbase" />
        </div>
      {/if}
      {#if category === 'wordle'}
        <div class="flex justify-center w-full" style="background-image: url('images/wordle2.jpg')">
          <iframe
            class="border-2 border-gray-700 w-[752px] h-[472px]"
            title="wordle"
            src="https://cdn.bubbleshooter.net/games/wordle/"
            frameborder="0"
            scrolling="yes" />
        </div>
      {/if}
    </div>
  </div>
  <button class="btn ml-4 mt-6" on:click={() => goto('/startpage')}
    ><iconify-icon icon="fluent-emoji-high-contrast:back-arrow" width="40" /></button>
</div>
