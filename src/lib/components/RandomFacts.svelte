<script>
  import 'animate.css'

  let fact = 'You must press the 📚 button to get a fact.'
  const apiKey = import.meta.env.VITE_NINJAS_API

  async function fetchFact() {
    const url = `https://api.api-ninjas.com/v1/facts?limit=1`

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
      fact = result[0].fact
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
</script>

<div class="h-1/3 animate__animated animate__fadeInUp w-full">
  <div class="flex justify-center text-error-500 dark:text-error-400 text-5xl mt-4">FACT:</div>
  <div class="flex justify-center mt-4 text-3xl"><div class="w-1/2 text-center">{fact}</div></div>
  <div class="flex justify-center">
    <button
      on:click={fetchFact}
      class="variant-filled-warning btn font-heading-token !text-black mt-10 text-3xl">📚</button>
  </div>
</div>
