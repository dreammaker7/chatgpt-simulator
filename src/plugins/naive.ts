import * as NaiveUI from 'naive-ui';
import type { App } from 'vue';

const naive = NaiveUI.create({
  components: [NaiveUI.NButton, NaiveUI.NIcon, NaiveUI.NLayout, NaiveUI.NSpace, NaiveUI.NTooltip, NaiveUI.NCard]
});

export function setupNaive(app: App<Element>) {
  app.use(naive);
}
