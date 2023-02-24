<script setup lang="ts">
  import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle } from 'naive-ui';
  import { computed } from 'vue';

  import { useThemeStore } from '@/store/app';
  import { overrides } from '@/theme';

  const themeStroe = useThemeStore();

  const SYSTEM_THEME = computed(() => (themeStroe.darkTheme ? darkTheme : lightTheme));
</script>

<template>
  <n-config-provider :theme="SYSTEM_THEME" :theme-overrides="overrides" abstract>
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>
