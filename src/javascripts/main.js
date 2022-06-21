import '../stylesheets/main.scss';

import Vue from 'vue';
import VueApp from './VueApp.vue';

new Vue({
  el: "#vue-root",
  render: (h) => h(VueApp)
})

