<script>
  import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton'
  import 'animate.css'

  let category
</script>

<div class="flex justify-center flex-col my-auto h-full">
  <div class="flex justify-center">
    <img src="images/brain-thinking-left.svg" alt="brain-thinking" class="h-[15rem] w-[15rem]" />
  </div>
  <div class="flex font-heading-token text-3xl justify-center mb-2">
    let's entertain that brain!
  </div>
  <div class="flex justify-center">
    <RadioGroup class="font-heading-token w-[33rem]">
      <RadioItem bind:group={category} name="justify" value="random facts">random facts</RadioItem>
      <RadioItem bind:group={category} name="justify" value="dad jokes">dad jokes</RadioItem>
      <RadioItem bind:group={category} name="justify" value="trivia questions"
        >trivia questions</RadioItem>
      <RadioItem bind:group={category} name="justify" value="riddles">riddles</RadioItem>
    </RadioGroup>
  </div>
  <div class="flex font-heading-token text-5xl justify-center mb-2 text-surface-400 mt-10">
    {#if category}
      <div class="text-primary-500 dark:text-tertiary-400">{category}</div>
    {:else}
      choose a category
    {/if}
  </div>
</div>
