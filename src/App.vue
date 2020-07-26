<template>
  <div id="app">
    <keep-alive>
      <router-view v-if='$route.meta.keepAlive'/>
    </keep-alive>
      <router-view v-if='!$route.meta.keepAlive'/>
  </div>
</template>
<style lang="stylus">
html,body
	height:100%
#app
	background:#000
	height:100%


</style>
