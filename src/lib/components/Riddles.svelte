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
    const url = `https://riddles-api.vercel.app/random`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response.json()
      loading = false
      question = normalizeQuestion(result.riddle)
      answer = result.answer
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
  <div class="flex justify-center text-primary-500 dark:text-primary-400 text-5xl mt-4">
    RIDDLE ME THIS:
  </div>
  <div
    class="flex justify-center mt-4 text-3xl"
    class:text-xl={question.length > 250 || answer.length > 250}
    class:text-lg={question.length > 500 || answer.length > 500}>
    {#if gameStarted && !loading}
      <div class="w-1/2 text-center capitalize">{showQuestion ? question : answer}</div>
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
        >{showQuestion ? '🤔' : '😏'}</button>
    {:else}
      <button
        on:click={() => {
          gameStarted = true
        }}
        class="variant-filled-surface btn font-heading-token mt-10 text-3xl">🤔</button>
    {/if}
  </div>
</div>
