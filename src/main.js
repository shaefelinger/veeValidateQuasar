import { createApp } from "vue";
import "quasar/dist/quasar.prod.css";
import { Quasar } from "quasar";
import App from "./App.vue";

const app = createApp(App);

app.use(Quasar);

app.mount("#app");
