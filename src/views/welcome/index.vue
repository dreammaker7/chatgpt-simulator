<script setup lang="ts">
  import { AngleRight } from '@vicons/fa';
  import { MoonOutline, SunnySharp } from '@vicons/ionicons5';
  import { NH2, NLayout, NLayoutContent, NLayoutHeader, NP, NSwitch } from 'naive-ui';
  import { useRouter } from 'vue-router';

  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { useThemeStore } from '@/store/app';

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
      <n-space justify="center" align="center" vertical class="content">
        <n-space justify="center" align="center" class="animate-block">
          <svg-icon style="font-size: 80px" name="chatgpt" :spin="{ duration: 12 }" />
        </n-space>
        <n-card embedded>
          <n-h2>A ChatGPT Simulator</n-h2>
          <n-p> 涵盖全部 ChatGPT 的 API 使用案例，键入你的 Open AI Key，让我们现在开始吧！</n-p>
        </n-card>
        <n-button type="primary" size="large" icon-placement="right" strong @click="router.push('/chat/index')">
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

  .content {
    text-align: center;
    min-height: 80vh;

    .n-h2 {
      font-size: 54px;
      line-height: 1.25;
      font-weight: 900;
      letter-spacing: -1.5px;
      max-width: 960px;
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .n-p {
      font-size: 16px;
    }

    .n-button {
      margin-top: 40px;
      width: 200px;
    }
  }

  @property --rotate {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0deg;
  }

  .animate-block {
    width: 150px;
    height: 150px;
    aspect-ratio: 1;
    color: #ccc;
    background: none;
    border: none;
    border-radius: 20px;
    position: relative;
    z-index: 0;
    box-shadow: 0 0 0 1px #666;
    margin-block-end: 10vh;

    &:before {
      content: '';
      position: absolute;
      inset: -8px;
      padding: 8px;
      border-radius: 28px;
      background: conic-gradient(
        from var(--rotate, 0deg),
        #21d4fd,
        #0000 30deg 120deg,
        #b721ff 150deg 180deg,
        #0000 210deg 300deg,
        #21d4fd 330deg
      );
      mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: intersect;
      animation: 120s linear 0s infinite rotateSolid;
      background-color: #222;
    }

    &:after {
      content: '';
      position: absolute;
      inset: -100px;
      background: radial-gradient(70px at left 150px top 120px, #21d4fd 98%, #0000),
        radial-gradient(70px at right 150px bottom 120px, #b721ff 98%, #0000);
      filter: blur(60px);
      opacity: 0.4;
      animation: 120s linear 0s infinite rotateShadow;
    }
  }

  @keyframes rotateSolid {
    from {
      --rotate: 0deg;
    }

    to {
      --rotate: 3600deg;
    }
  }

  @keyframes rotateShadow {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(3600deg);
    }
  }
</style>
