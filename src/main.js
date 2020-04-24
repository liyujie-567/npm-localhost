import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import plugin from './plugin/index'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(plugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
