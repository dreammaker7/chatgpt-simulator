<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent, NCard, NSpace } from "naive-ui";
</script>

<template>
  <n-layout :native-scrollbar="false" style="height: 100%" embedded>
    <n-layout-header>暗色</n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      <n-space justify="center" align="center">
        <n-card class="card">
          <strong>Hi, Welcome to ChatGPT Simulator!</strong>
        </n-card>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.n-layout-header {
  padding: 16px;
}

.n-space {
  min-height: 50vh;
}

strong {
  font-size: 18px;
  line-height: 26px;
}
</style>
