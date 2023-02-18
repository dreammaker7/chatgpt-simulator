import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/layout/base/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/welcome",
    },
    {
      path: "/welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "Welcome to use ChatGPT Simulator",
      },
    },
    {
      path: "/chat",
      component: BaseLayout,
      children: [
        {
          path: "index",
          name: "Chat",
          component: () => import("@/views/chat/index.vue"),
          meta: {
            title: "Welcome to use ChatGPT Simulator",
          },
        },
      ],
    },
  ],
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
