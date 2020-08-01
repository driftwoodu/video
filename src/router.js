import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login/login.vue'
import first from './views/first/first.vue'
import follow from './views/follow/follow.vue'
import videoList from './views/first/components/videoList.vue'
import city from './views/first/components/city.vue'
import changeCity from './views/changeCity/changeCity.vue'
import followList from './views/follow/components/followList.vue'
import news from './views/news/news.vue'
import personal from './views/personal/personal.vue'
import worksList from './views/personal/components/worksList.vue'
import player from './views/player/player.vue'
import user from './views/user/user.vue'
import upload from './views/upload/upload.vue'
import registration from './views/registration/registration.vue'
import changeinformation from './views/changeinformation/changeinformation.vue'
import search from './views/search/search.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
     path: '/',
     name: 'login',
     component: login,
     meta:{
       needLogin: false
     }
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration,
      meta:{
        needLogin: false
      }
    }, {
      path: '/search',
      name: 'search',
      component: search,
      meta:{
        needLogin: false
      }
    },
    {
      path: '/index',
      name: 'home',
      component: Home,
       meta:{
      needLogin: true,
    },

      children:[{
      	path: '/',
	      name: 'first',
	      component: first,
         meta:{
          needLogin: true,
        },
	      children:[{
	      	path: '/',
		      name: 'videoList',
		      component: videoList,
           meta:{
            needLogin: true,
            keepAlive: true,
          },
	      },{
	      	path: 'city',
		      name: 'city',
		      component: city,
	      }]
      },
      {
      	path: 'follow',
	      name: 'follow',
	      component: follow,
	      children:[{
	      	path: '/',
		      name: 'followList',
		      component: followList,
	      },
	      {
	      	path: '/friend',
		      name: 'friend',
		      component: followList,
	      }
	      ]
      },{
      	path: 'news',
	      name: 'news',
	      component: news,
      },
      {
        path: 'upload',
        name: 'upload',
        component: upload,
      },
      {
      	path: 'personal',
	      name: 'personal',
	      component: personal,
	      children:[
	      {
	      	path: '/worksList',
	      	name: 'worksList',
	      	component: worksList,
	      },
	      {
	      	path: '/likeList',
	      	name: 'likeList',
	      	component: worksList,
	      },{
	      	path: '/dynamicList',
		      name: 'dynamicList',
		      component: followList,
	      }]
      }
      ]
    },
    {
    	path: '/changeCity',
      name: 'changeCity',
      component: changeCity,
    },
    {
    	path: '/changeinformation',
      name: 'changeinformation',
      component: changeinformation,
    },
    {
    	path: '/player',
      name: 'player',
      component: player,
    },
    {
    	path: '/user',
      name: 'user',
      component: user,
      children:[{
      	path: '/',
	      name: 'personals',
	      component: personal,
	      children:[
	      {
	      	path: '/',
	      	name: 'worksList',
	      	component: worksList,
	      },
	      {
	      	path: '/likeListUser',
	      	name: 'likeList',
	      	component: worksList,
	      },{
	      	path: '/dynamicListUser',
		      name: 'dynamicList',
		      component: followList,
	      }]
	    }]
    }
  ]
})
