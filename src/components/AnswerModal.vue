<template>
  <div class="result-model">
    <h2>{{ isCorrect ? 'CONGRATULATIONS!' : 'Failed...' }}</h2>
    <p v-if="!isCorrect">Correct Answer: {{ correct_answer }}</p>
    <div id="result-btn-wrapper">
      <button v-if="currentIndex < 10" @click="nextQuestion">NEXT</button>
      <button v-else @click="$router.push('/result')">SHOW RESULT</button>
    </div>
 </div>
</template>

<script>
export default {
    name: 'AnswerModal',
    props: {
        isCorrect: {
            type: Boolean,
            required: true
        },
        correct_answer: {   
            type: String,
            required: false
        },
        currentIndex: {
            type: Number,
            required: true
        },
    },
    methods: {
        nextQuestion() {
            this.$emit('nextQuestion');
        }   
    },
}
</script>

<style>
.result-model {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 78vh;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    color: white;
    text-align: center;
    height: 20vh;
    width: 50vw;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: blueviolet;
}

#result-btn-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

#result-btn-wrapper button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#result-btn-wrapper button:hover {
  background-color: #45a049;
}

</style>