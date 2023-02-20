<script setup lang="ts">
import { useRouter } from "vue-router";
import { NLayout, NLayoutHeader, NLayoutContent } from "naive-ui";
import { MoonOutline, SunnySharp } from "@vicons/ionicons5";
import { AngleRight } from "@vicons/fa";
import { useThemeStore } from "@/store/app";

const router = useRouter();
const themeStore = useThemeStore();
</script>

<template>
  <n-layout :native-scrollbar="false">
    <n-layout-header>
      <n-switch v-model:value="themeStore.darkTheme" class="theme-switch">
        <template #checked-icon>
          <n-icon color="#fff">
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
    <n-layout-content>
      <n-space justify="center" align="center" vertical>
        <n-card :bordered="false" embedded> <strong>A ChatGPT Simulator</strong></n-card>
        <n-button
          type="primary"
          size="large"
          icon-placement="right"
          strong
          @click="router.push('/chat')"
        >
          Start
          <template #icon>
            <n-icon>
              <AngleRight />
            </n-icon>
          </template>
        </n-button>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>

<style lang="less" scoped>
.n-layout-header {
  padding: 24px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;

  .theme-switch.n-switch--active {
    :deep(.n-switch__rail) {
      background-color: #2f2f2f;
    }
    :deep(.n-switch__button) {
      background-color: var(--n-color);
    }
  }
}

.n-space {
  min-height: 50vh;
  .n-card {
    margin-block-end: 40px;
  }
  .n-button {
    width: 200px;
  }

  strong {
    font-size: 64px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0 auto 50px;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
