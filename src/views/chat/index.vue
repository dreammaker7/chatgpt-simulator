<script setup lang="ts">
  import { Configuration, OpenAIApi } from 'openai';
  import { onBeforeMount } from 'vue';

  onBeforeMount(async () => {
    const configuration = new Configuration({
      apiKey: 'xxx'
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Q: Where is China? A:',
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n']
    });

    console.log(response);
  });
</script>

<template>welcome to chat page!</template>
