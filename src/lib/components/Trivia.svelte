<script>
  import { onMount } from 'svelte'
  import 'animate.css'

  let placeholder = '...'
  let gameStarted = false
  let question = ''
  let answer = ''
  let category = 'general'
  let showQuestion = true
  let loading = true
  const apiKey = import.meta.env.VITE_NINJAS_API

  onMount(() => {
    fetchQuestion()
  })

  async function fetchQuestion() {
    const url = `https://api.api-ninjas.com/v1/trivia?category=${category}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response.json()
      loading = false
      question = normalizeQuestion(result[0].question)
      answer = result[0].answer
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  function normalizeQuestion(sentence) {
    sentence = sentence.trim()
    if (sentence.endsWith('?')) {
      return sentence
    } else {
      sentence = sentence.replace(/\.*$/, '')
      return sentence + '?'
    }
  }
</script>

<div class="h-1/3 animate__animated animate__fadeInUp w-full">
  <div class="flex justify-center mb-10">
    <label class="label w-[18rem]">
      <span>Choose a category...</span>
      <select
        class="select text-xl font-heading-token p-0"
        bind:value={category}
        on:change={() => {
          loading = true
          fetchQuestion()
          showQuestion = true
        }}>
        <option value="general">General</option>
        <option value="language">Language</option>
        <option value="sciencenature">Science and Nature</option>
        <option value="artliterature">Art and Literature</option>
        <option value="fooddrink">Food and Drink</option>
        <option value="peopleplaces">People and Places</option>
        <option value="geography">Geography</option>
        <option value="historyholidays">History and Holidays</option>
        <option value="entertainment">Entertainment</option>
        <option value="toysgames">Toys and Games</option>
        <option value="music">Music</option>
        <option value="mathematics">Mathematics</option>
        <option value="religionmythology">Religion and Mythology</option>
        <option value="sportsleisure">Sports and Leisure</option>
      </select>
    </label>
  </div>
  <div class="flex justify-center mt-4 text-3xl">
    {#if gameStarted && !loading}
      <div class="w-1/2 text-center">{showQuestion ? question : answer + '.'}</div>
    {:else}
      <div class="w-1/2 text-center">{placeholder}</div>
    {/if}
  </div>
  <div class="flex justify-center">
    {#if gameStarted}
      <button
        on:click={() => {
          if (!showQuestion) {
            loading = true
            fetchQuestion()
            showQuestion = true
          } else {
            showQuestion = false
          }
        }}
        class="variant-filled-surface btn font-heading-token mt-10 text-3xl"
        >{showQuestion ? '❓' : '❗'}</button>
    {:else}
      <button
        on:click={() => {
          gameStarted = true
        }}
        class="variant-filled-surface btn font-heading-token mt-10 text-3xl">let's go!</button>
    {/if}
  </div>
</div>
