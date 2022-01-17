import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel3d from 'vue-carousel-3d'

Vue.config.productionTip = false
Vue.use(Carousel3d)

new Vue({
  router,
  vuetify,
  mounted () {
    AOS.init({
      duration: '1200',
      delay: '500',
    })
  },
  render: h => h(App),
}).$mount('#app')
