<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, darkTheme, lightTheme } from "naive-ui";
import { useThemeStore } from "@/store/app";
import { computed } from "vue";

const themeStroe = useThemeStore();

const SYSTEM_THEME = computed(() => (themeStroe.darkTheme ? darkTheme : lightTheme));
</script>

<template>
  <n-config-provider :theme="SYSTEM_THEME" abstract>
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>
