import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vuelayers/dist/vuelayers.css"; // needs css-loader
import VueLayers from "vuelayers";
import { XyzSource } from "vuelayers";

Vue.config.productionTip = false;
Vue.use(VueLayers);
Vue.use(XyzSource);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
