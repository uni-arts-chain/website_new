import { createApp } from "vue";
import App from "./views/App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import UAParser from "ua-parser-js";

var uaParser = new UAParser(window.userAgent);
if (uaParser.getDevice().type !== "mobile") {
  location.href = "/";
}

createApp(App).use(store).use(router).mount("#app");
