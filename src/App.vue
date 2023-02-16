<script setup lang="ts">
import { NConfigProvider, darkTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme" abstract>
    <router-view />
  </n-config-provider>
</template>
