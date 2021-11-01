import { createApp } from "vue";
import App from "./views/App.vue";
import inject from "@/modules/mobile/inject";
import Icon from "@/plugins/icon";
import router from "./router";
import store from "./store";
import UAParser from "ua-parser-js";

var uaParser = new UAParser(window.userAgent);
if (uaParser.getDevice().type !== "mobile") {
  location.href = "/";
}

createApp(App).use(store).use(router).use(inject).use(Icon).mount("#app");
