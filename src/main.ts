import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
import "./style.css";

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
