import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vshare from 'vshare'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'

import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'video.js/dist/video-js.css'



Vue.config.productionTip = false
//swiper轮播
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)
Vue.use(vshare)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
