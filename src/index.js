import "./js/common.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import firstComponent from "./components/firstComponent.vue";

window.Vue = require("vue");
import store from "./store/index";


if (process.env.NODE_ENV !== `production`) {
  async function load() {
    let resize_info = await import("./smart-gread-layer/smart-gread-layer");
    resize_info.default();
  }

  load();
}



Vue.component("example-component", firstComponent);

const app = new Vue({
  store,
  el: "#app",
});
