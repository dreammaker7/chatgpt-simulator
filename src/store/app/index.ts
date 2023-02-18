import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const darkTheme = ref(false)

  // 是否暗黑主题
  const isDarkTheme = computed(() => darkTheme.value)

  return { darkTheme, isDarkTheme }
})