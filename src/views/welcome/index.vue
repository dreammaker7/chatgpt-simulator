<script setup lang="ts">
import { useRouter } from "vue-router";
import { NLayout, NLayoutHeader, NLayoutContent, NCard, NSpace } from "naive-ui";
import { MoonOutline, SunnySharp } from "@vicons/ionicons5";
import { useThemeStore } from "@/store/app";

const router = useRouter();
const themeStore = useThemeStore();
</script>

<template>
  <n-layout :native-scrollbar="false" style="height: 100%" embedded>
    <n-layout-header>
      <n-switch v-model:value="themeStore.darkTheme" class="theme-switch">
        <template #checked-icon>
          <n-icon size="12" color="#fff">
            <MoonOutline />
          </n-icon>
        </template>
        <template #unchecked-icon>
          <n-icon>
            <SunnySharp />
          </n-icon>
        </template>
      </n-switch>
    </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      <n-space justify="center" align="center">
        <n-card class="card">
          <strong>Hi，欢迎使用 ChatGPT 模拟器!</strong>
          <template #action
            ><n-button type="primary" @click="router.push('/chat')"> To Chat </n-button>
          </template>
        </n-card>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>

<style lang="less" scoped>
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

.theme-switch.n-switch--active {
  :deep(.n-switch__rail) {
    background-color: #2f2f2f;
  }
  :deep(.n-switch__button) {
    background-color: var(--n-color);
  }
}
</style>
