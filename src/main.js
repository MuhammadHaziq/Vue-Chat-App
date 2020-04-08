import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import VueChatScroll from "vue-chat-scroll";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.use(VueChatScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
