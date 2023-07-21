<script>
  import 'animate.css'

  let joke = "Hi, bored. I'm dad..."
  const apiKey = import.meta.env.VITE_NINJAS_API

  async function fetchFact() {
    const url = `https://api.api-ninjas.com/v1/dadjokes?limit=1`

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
      joke = result[0].joke
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
</script>

<div class="h-1/3 animate__animated animate__fadeInUp w-full">
  <div class="flex justify-center text-warning-600 dark:text-warning-400 text-5xl mt-4">JOKE:</div>
  <div class="flex justify-center mt-4 text-3xl"><div class="w-1/2 text-center">{joke}</div></div>
  <div class="flex justify-center">
    <button
      on:click={fetchFact}
      class="variant-filled-primary btn font-heading-token mt-10 text-3xl">🤦</button>
  </div>
</div>
