import Vue from 'vue'
import App from './App.vue'
import fa from './components/globals/Fa.vue'
import textbox from './components/globals/Textbox.vue';

Vue.config.productionTip = false

Vue.component('fa', fa);
Vue.component('textbox', textbox);
new Vue({
  render: h => h(App),
}).$mount('#app')
