import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
console.log(process.env.VUE_APP_BASE_URL);
Vue.config.productionTip = process.env.NODE_ENV == "production";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
