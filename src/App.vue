<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, darkTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme" abstract>
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>
