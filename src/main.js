import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";

// Boostrap Styles
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Custom styles
import "./main.css";

createApp(App)
  .use(router)
  .mount("#app");
