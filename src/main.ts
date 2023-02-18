import { createApp } from "vue";
import { createPinia } from 'pinia'

import App from "./App.vue";
import router, { setupRouter } from "./router";
import { setupNaive } from "./plugins";
import { setupStore } from "./store";

import "./app.css";

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia);

async function bootstrap() {
  const app = createApp(App);

  // 挂载状态管理
  setupStore(app);

  // 注册全局常用的 naive-ui 组件
  setupNaive(app);

  // 挂载路由
  setupRouter(app);

  // 路由准备就绪后挂载 APP 实例
  // https://router.vuejs.org/api/interfaces/router.html#isready
  await router.isReady();

  app.mount('#app');
}

void bootstrap();