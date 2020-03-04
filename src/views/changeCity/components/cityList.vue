<template>
	<div id="cityList" >
		<div class="city-box">
			<div class="box">
				<div class="title">
					当前城市
				</div>
				<div class="list">
					<div class="city-name">
						北京
					</div>
				</div>
			</div>
			<div class="box">
				<div class="title">
					热门城市
				</div>
				<div class="list">
					<div class="city-name">
						深圳
					</div>
					<div class="city-name">
						广州
					</div>
					<div class="city-name">
						上海
					</div>
					<div class="city-name">
						重庆
					</div>
				</div>
			</div>
			<div class="box" v-for="city of cities">
				<div class="initial">
					{{city.initial}}
				</div>
				<div class="item" v-for="item of city.list">
					{{item.name}}
				</div>	
			</div>	
		</div>	
	</div>
</template>
<script>
export default{
	name:'cityList',
	props:['cities']
}
</script>
<style lang="stylus" scoped>
#cityList
  width:100%
  background:#000
  color:#fff
	.city-box
	  position:absolute
	  top:.8rem
	  left:0
	  width:100%
	  background:#000
		.box
		  background:#222
		  margin-top:.2rem
			.title
			  height:.8rem
			  line-height:.8rem
			  margin-left:.3rem
			.list
			  width:100%
			  overflow:hidden
				.city-name
				  width:30%
				  height:.5rem
				  line-height:.5rem
				  font-size:.3rem
				  float:left
				  background:#333
				  margin-left:2.5%
				  margin-bottom:.2rem
				  text-align:center
			.initial
			  height:.5rem
			  line-Height:.5rem
			  background:#000
			  padding-left:.2rem
				.item
				  height:.8rem
				  line-height:.8rem
				  padding-left:.2rem
  
	
</style>