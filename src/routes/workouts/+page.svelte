<script>
  import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton'
  import MathProblems from '../../lib/components/MathProblems/MathProblems.svelte'
  import 'animate.css'

  let category = 'math'
</script>

<div class="flex justify-between h-full my-auto">
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
          <RadioItem bind:group={category} name="justify" value="puzzle">jigsaw puzzle</RadioItem>
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
      {#if category === 'puzzle'}
        <iframe
          name="proprofs"
          id="proprofs"
          title="puzzle"
          height="471"
          width="752"
          style="overflow-x: hidden;"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          src="https://www.proprofsgames.com/jigsaw/api-game/?ew=500" />
        <div style="font-size:10px; font-family:Arial, Helvetica, sans-serif; color:black;" />
      {/if}
    </div>
  </div>
</div>
