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
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 30vh;
    width: 100%;
    padding: 20px;
    
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