import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import quasarUserOptions from "./quasar-user-options.js";

createApp(App).use(Quasar, quasarUserOptions).use(router).mount("#app");
