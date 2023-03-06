<script setup lang="ts">
  import { NInput, NSpin } from 'naive-ui';
  import { Configuration, CreateChatCompletionResponseChoicesInner, OpenAIApi } from 'openai';
  import { onBeforeMount, ref } from 'vue';

  const configuration = new Configuration({
    apiKey: 'your-token'
  });

  const chats = ref<CreateChatCompletionResponseChoicesInner['message'][]>([]);
  const searchValue = ref<string>('');
  const responseLoading = ref<boolean>(false);

  onBeforeMount(async () => {
    setTimeout(() => {
      onSend('你好');
    }, 300);
  });

  const onSend = async (keyword) => {
    responseLoading.value = true;
    const openai = new OpenAIApi(configuration);
    chats.value = [...chats.value, { role: 'user', content: keyword }];
    searchValue.value = '';

    const response = await openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: keyword }]
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        responseLoading.value = false;
      });

    if (!response) return;
    const data = response.data.choices[0].message;
    chats.value = [...chats.value, data];
    responseLoading.value = false;
  };
</script>

<template>
  <n-space vertical>
    <div class="block">
      <div class="message" v-for="(chat, index) in chats" :key="index">
        <div class="name">{{ chat?.role }}：</div>
        <div class="content">{{ chat?.content }}</div>
      </div>
    </div>
    <div class="loading"><n-spin size="small" v-show="responseLoading" /></div>
    <n-input
      v-model:value="searchValue"
      type="textarea"
      placeholder="输入您的聊天内容"
      :disabled="responseLoading"
      @keydown.enter="onSend(searchValue)"
    />
    <n-button block :disabled="responseLoading" @click="() => onSend(searchValue)">发送</n-button>
  </n-space>
</template>

<style lang="less">
  .message {
    display: flex;
    margin-bottom: 10px;

    .name {
      width: 70px;
      text-align: right;
    }

    .content {
      flex: 1;
    }
  }

  .loading {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
