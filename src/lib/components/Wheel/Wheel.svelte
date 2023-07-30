<script>
  import './wheel.css'
  import { onMount, createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function handleClick() {
    dispatch('call')
  }

  export let category = '???'
  export let hidden = false
  export let color
  let disabled = false
  let container
  let rotationAngle = 45
  let index
  let divs
  let clicked = false
  let lastIndex = null
  let categories = [
    'music',
    'relaxation',
    'cooking',
    'charity',
    'diy',
    'social',
    'recreational',
    'education'
  ]

  let colorMap = {
    education: '#3f51b5',
    recreational: '#ff9800',
    social: '#e91e63',
    diy: '#4caf50',
    charity: '#009688',
    cooking: '#795548',
    relaxation: '#9c27b0',
    music: '#f44336'
  }

  onMount(() => {
    container = document.querySelector('.container')
    divs = document.querySelectorAll('.container > div')
  })

  function getDiv() {
    const randomNumber = Math.floor(Math.random() * divs.length)
    index = randomNumber !== 0 ? randomNumber : randomNumber + 1
    category = categories[index]
    color = colorMap[category]
    categories.unshift(...categories.splice(index, categories.length - index))
  }

  function spin() {
    hidden = true
    disabled = true
    getDiv()
    rotationAngle += index * 405
    container.style.transform = `rotate(${rotationAngle}deg)`
    setTimeout(() => {
      hidden = false
      disabled = false
    }, 5000)
  }
</script>

<div class="my-auto scale-[.7] 2xl:scale-100 flex flex-col self-center">
  <div class="w-full">
    {#if !clicked}
      <div
        class="flex justify-center mb-2 animate__animated animate__bounce animate__delay-1s font-heading-token w-full">
        click the wheel!
      </div>
    {/if}
    <div class="flex justify-center mb-2 animate__animated animate__bounce animate__delay-1s">
      <iconify-icon icon="icomoon-free:arrow-down" width="60" style="color: white;" />
    </div>
  </div>
  <div
    class="container w-[500px] h-[500px] !max-w-[500px] !min-w-[500px] !max-h-[500px] !min-h-[500px]"
    on:keydown
    on:click={() => {
      clicked = true
      if (!disabled) {
        spin()
        handleClick()
      }
    }}
    role="button"
    tabindex="0">
    <div class="education 2xl:w-60 w-20"><iconify-icon icon="octicon:book-16" width="60" /></div>
    <div class="recreational 2xl:w-60 w-20"><iconify-icon icon="bx:happy" width="60" /></div>
    <div class="social 2xl:w-60 w-20"><iconify-icon icon="raphael:people" width="60" /></div>
    <div class="diy 2xl:w-60 w-20"><iconify-icon icon="ion:hammer" width="60" /></div>
    <div class="charity 2xl:w-60 w-20"><iconify-icon icon="mdi:charity" width="60" /></div>
    <div class="cooking 2xl:w-60 w-20"><iconify-icon icon="la:cookie-bite" width="60" /></div>
    <div class="relaxation 2xl:w-60 w-20">
      <iconify-icon icon="material-symbols:chair" width="60" />
    </div>
    <div class="music 2xl:w-60 w-40"><iconify-icon icon="majesticons:music" width="60" /></div>
  </div>
</div>
