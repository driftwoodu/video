<template>
  <div class="news">
  	<news-header></news-header>
  	<news-content></news-content>
  	<news-list></news-list>
  </div>
</template>

<script>
import newsHeader from './components/newsHeader.vue'
import newsContent from './components/newsContent.vue'
import newsList from './components/newsList.vue'
export default {
  name: 'news',
  components:{
  	newsHeader,
  	newsContent,
  	newsList
  }
  
}
</script>
<style lang="stylus" scoped>
.news
  color:#fff
</style>