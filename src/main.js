import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueParticles from "vue-particles";
import ElementUI from "element-ui";
import "@/assets/css/base.scss";
import VCharts from "v-charts";
import Echarts from "echarts";
import "echarts-gl";
import "@/assets/iconfont/iconfont.css"
import "font-awesome/css/font-awesome.css"
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.use(VCharts);
// 全局注册图标
Vue.component('icon', Icon);

Vue.config.productionTip = false;
Vue.prototype.bus = new Vue();
Vue.prototype.$echarts = Echarts;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
