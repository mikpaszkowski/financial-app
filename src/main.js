import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import { $dbApi } from "./api/databaseAPI";
import plugin from "./plugins/apiPlugin";

axios.defaults.baseURL = "http://localhost:3000";

const app = createApp(App);

app.mixin({
  computed: {
    $dbApi: () => $dbApi
  }
});

app
  .use(store)
  .use(router)
  .mount("#app");
