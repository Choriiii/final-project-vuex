<template>
  <div id="question-wrapper">
    <p>{{ question.question }}</p>
  </div>
</template>

<script>
export default {
    name: 'QuestionCompo',
    props: {
        question: {
            type: Object,
            required: true
        }
    },
}
</script>

<style>
#question-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 20px;
    min-height: 30vh;
    width: 100%;
    padding: 50px;
    background-color: rgba(255, 255, 255, 0.1)    
}

#question-wrapper p {
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    font-size: 1.2em;
    line-height: 1.5;
    text-align: center;
}

</style>