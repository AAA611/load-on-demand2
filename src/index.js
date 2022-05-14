import Vue from 'vue'
import App from './pages/App.vue'
import { Button } from 'qingui2'

Vue.use(Button)
// Vue.use(Card)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
