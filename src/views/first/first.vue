<template>
	<div id="first">
		<first-header></first-header>
		<router-view/>
	</div>
</template>

<script>
import firstHeader from './components/firstHeader.vue'
export default{
	name:'first',
	components:{
		firstHeader
	}
}
</script>

<style lang="stylus" scoped>
#first
  height:100%
</style>