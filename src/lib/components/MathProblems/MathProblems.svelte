<script>
  import { easyMathProblems, mediumMathProblems, hardMathProblems } from './problems'

  let questionAnswered = false
  let answeredCorrectly = null
  let difficulty
  let question
  let choices = []
  let previousNumber
  let correctAnswer
  let randomNumber

  let choiceLetters = ['a.', 'b.', 'c.', 'd.', 'e.']

  function getRandomNumber(difficulty) {
    randomNumber = Math.floor(Math.random() * difficulty.length)
    if (randomNumber === previousNumber) {
      randomNumber = Math.floor(Math.random() * difficulty.length)
    } else {
      previousNumber = randomNumber
    }
  }

  function callProblem() {
    questionAnswered = false
    answeredCorrectly = null
    if (difficulty === 'easy') {
      getRandomNumber(easyMathProblems)
      question = easyMathProblems[randomNumber].problem
      choices = []
      easyMathProblems[randomNumber].choices.forEach(c => choices.push(c))
    } else if (difficulty === 'medium') {
      getRandomNumber(mediumMathProblems)
      question = mediumMathProblems[randomNumber].problem
      choices = []
      mediumMathProblems[randomNumber].choices.forEach(c => choices.push(c))
    } else {
      getRandomNumber(hardMathProblems)
      question = hardMathProblems[randomNumber].problem
      choices = []
      hardMathProblems[randomNumber].choices.forEach(c => choices.push(c))
    }
  }

  function answerProblem(answer) {
    console.log('ANSWER', answer)
    questionAnswered = true
    if (difficulty === 'easy') {
      correctAnswer = easyMathProblems[randomNumber].correctAnswer
    } else if (difficulty === 'medium') {
      correctAnswer = mediumMathProblems[randomNumber].correctAnswer
    } else {
      correctAnswer = hardMathProblems[randomNumber].correctAnswer
    }
    correctAnswer === answer ? (answeredCorrectly = true) : (answeredCorrectly = false)
  }
</script>

<div class="bg-[url('images/paper.jpg')] h-[471px] w-[760px] p-auto">
  {#if !difficulty}
    <div class="flex flex-col justify-center items-center h-full">
      <div class="text-surface-500 font-heading-token text-2xl mb-4">choose your difficulty</div>
      <div class="flex justify-center">
        <button
          class="btn text-6xl p-0"
          on:click={() => {
            difficulty = 'easy'
            callProblem()
          }}>🤪</button>
        <button
          class="btn text-6xl p-0"
          on:click={() => {
            difficulty = 'medium'
            callProblem()
          }}>😏</button>
        <button
          class="btn text-6xl p-0"
          on:click={() => {
            difficulty = 'hard'
            callProblem()
          }}>🤓</button>
      </div>
    </div>
  {:else}
    <div class="flex justify-between">
      <div class="flex p-4">
        <button
          class="btn btn-sm text-3xl p-0"
          on:click={() => {
            difficulty = 'easy'
            callProblem()
          }}>🤪</button>
        <button
          class="btn btn-sm text-3xl p-0"
          on:click={() => {
            difficulty = 'medium'
            callProblem()
          }}>😏</button>
        <button
          class="btn btn-sm text-3xl p-0"
          on:click={() => {
            difficulty = 'hard'
            callProblem()
          }}>🤓</button>
        <div class="text-surface-500 font-heading-token my-auto ml-4">{difficulty}</div>
      </div>
      {#if questionAnswered}
        <div class="m-2 text-2xl">{answeredCorrectly === true ? '✔️' : '❌'}</div>
      {/if}
    </div>
    <div class="h-[70%] py-auto w-full mt-8">
      <div>
        <div class="text-xl font-semibold flex justify-center w-full text-black">
          <div class="w-[30rem] flex justify-center">
            {question}
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mt-4">
            {#each choices as choice, index}
              <div class="text-xl w-full mt-1 text-black">
                <div
                  class="my-1 hover:cursor-pointer"
                  role="button"
                  tabindex="0"
                  on:keydown
                  on:click={() => answerProblem(choice)}
                  class:text-[#27bd06]={choice === correctAnswer}>
                  {choiceLetters[index]}
                  {choice}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button class="btn btn-sm variant-filled-tertiary font-heading-token" on:click={callProblem}
        >new problem</button>
    </div>
  {/if}
</div>
