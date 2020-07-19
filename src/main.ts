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

router.beforeEach((to, from, next)=>{
  //路由中设置的needLogin字段就在to当中
  if(window.sessionStorage.data){
   console.log(window.sessionStorage);
   // console.log(to.path) //每次跳转的路径
   if(to.path === '/'){
    //登录状态下 访问login.vue页面 会跳到index.vue
    next({path: '/index'});
   }else{
    next();
   }
  }
   // 如果没有session ,访问任何页面。都会进入到 登录页
   else if (to.path === '/') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
    next();
   }
   else {
     if(to.path ==='/registration'){
     next();
   } else{
    next({ path: '/' });// 否则 跳转到登录页面
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
