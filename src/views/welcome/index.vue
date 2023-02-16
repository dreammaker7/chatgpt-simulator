<script setup lang="ts">
import { NLayout, NCard, NSpace } from "naive-ui";
</script>

<template>
  <n-layout embedded content-style="padding: 24px;">
    <n-space justify="center" align="center" style="height: 100%">
      <n-card class="card">
        <strong>Hi, Welcome to ChatGPT Simulator!</strong>
      </n-card>
    </n-space>
  </n-layout>
</template>

<style scoped>
.n-layout {
  height: 100%;
}

strong {
  font-size: 18px;
  line-height: 26px;
}
</style>
