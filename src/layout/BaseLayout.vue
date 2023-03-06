<script setup lang="ts">
  import { NLayout, NLayoutContent, NLayoutHeader } from 'naive-ui';
</script>

<template>
  <n-layout has-sider>
    <n-layout>
      <n-layout-header>ChatGPT Simulator</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
  .n-layout {
    height: 100%;
  }

  .n-layout-header,
  .n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
  }

  .n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
  }

  .n-layout-content {
    background: rgba(128, 128, 128, 0.4);
  }
</style>
