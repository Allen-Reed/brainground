<script>
  let name = ''
  let email = ''
  let body = ''
  let message = ''

  async function handleSubmit() {
    message = ''
    const res = await fetch('/contact', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        body
      })
    })
    const data = await res.json()
    message = data.message
  }
</script>

<div class="flex w-[50rem] m-auto mt-20 flex-wrap sm:flex-nowrap self-center max-w-[95%]">
  <img
    src="images/AllenPhoto1.jpg"
    alt="pure handsomness"
    class="max-w-80 w-80 h-[26rem] max-h-[26rem] border-4 rounded-lg border-surface-400 dark:border-white object-cover" />
  <div class="ml-6 w-full flex flex-col">
    <div class="ml-12 sm:ml-4">
      <div class="text-5xl w-96 font-heading-token text-surface-400 dark:text-white">
        allen reed
      </div>
      <div class="text-xl">allenduanereed@gmail.com</div>
    </div>
    <div class="w-[90%] md:w-[85%] lg:w-full p-4">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mt-4">
          <div class="text-sm ml-4 font-semibold">Name</div>
          <input class="input px-4 rounded-lg py-1" bind:value={name} />
        </div>
        <div class="mt-4">
          <div class="text-sm ml-4 font-semibold">E-mail</div>
          <input class="px-4 input rounded-lg py-1" type="email" bind:value={email} />
        </div>
        <div class="mt-4">
          <div class="text-sm ml-4 font-semibold">What's on your mind?</div>
          <textarea class="input px-4 form-textarea rounded-lg" rows="3" bind:value={body} />
          <div class="text-xs">{message}</div>
        </div>
        <div class="flex justify-end">
          <button class="btn btn-sm mt-4 w-20 rounded variant-ghost-surface" type="submit"
            >Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
<div class="flex justify-center w-full p-4">
  <div
    class="flex justify-around flex-wrap w-[50rem] mt-8 border-4 py-4 border-surface-400 dark:border-white rounded-lg">
    <div>
      <div class="font-heading-token sm:text-3xl text-center text-surface-400 dark:text-white">
        experience
      </div>
      <div class="block text-center sm:text-base text-sm mt-4">
        Sveltekit<br />tailwindcss<br />React<br />Node.js<br />Threlte<br />Prisma<br />
      </div>
    </div>
    <div>
      <div class="font-heading-token sm:text-3xl text-center text-surface-400 dark:text-white">
        loves
      </div>
      <div class="block text-center sm:text-base text-sm mt-4">
        Bass guitar<br />Milk stouts<br />Cajun food<br />Game development<br />Blender<br />Metalcore<br />
      </div>
    </div>
    <div>
      <div class="font-heading-token sm:text-3xl text-center text-surface-400 dark:text-white">
        traits
      </div>
      <div class="block text-center sm:text-base text-sm mt-4">
        Highly creative<br />Friendly<br />Very loyal<br />Extrovert<br />ENFJ-T<br />Clumsy<br />
      </div>
    </div>
  </div>
</div>
