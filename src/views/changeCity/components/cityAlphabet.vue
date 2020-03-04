<template>
<div id="cityAlphabet">
	<ul class="list">
		<li class="item" v-for="item of letter">{{item}}</li>
		
	</ul>
</div>
</template>
<script>
export default{
	name:'cityAlphabet',
	props:['cities'],
	computed:{
		letter(){
			const letter=[]
			for(let i in this.cities){
				letter.push(this.cities[i].initial)
			}
			return letter
		}
	}
}
</script>
<style lang="stylus" scoped>
.list
  position:fixed
  top:3.5rem
  right:0
  width:1rem
  z-index:20
  color:#fff
	.item
	  text-align:center
	  line-height:.4rem
	  padding-left:.5rem
</style>