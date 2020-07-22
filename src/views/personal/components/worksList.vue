<template>
	<div class="">
		<div id="worksList">
			<router-link to="/player">
				<div class="item" v-for="item of personalDTO.videos">
					<videos :videos="item" @click.native="click"></videos>
					<div class="box">
            <div><span class="title">
            	{{item.title}}
            </span></div>
            <div>
              <span class="iconfont love">
							&#x5555;
						</span>
            <span class="likecount">
            	{{item.likecount}}
            </span>
            </div>
					</div>
				</div>
			</router-link>
		</div>
		<div class="ground">

		</div>
	</div>

</template>
<script>
import axios from 'axios'
import videos from '../../first/components/video.vue'
export default{
	name:'worksList',
  props:['personalDTO'],
	components:{
		videos
	},
	data(){
		return{
			list:[],
			listName:this.$route.query.listName
		}
	},
	created(){
		//this.getvideo()
	},
	methods:{
		click(){
			console.log(1)
		},
		getvideo(){
			axios.get('api/videos.json')
			.then(this.getvideoSucc)
		},
		getvideoSucc(res){
			if(this.listName==="like"){
				this.list=res.data.list.slice(0,4)
			}else{
				this.list=res.data.list.slice(4,8)
			}

		}
	}

}
</script>
<style lang="stylus" scoped>
.ground
  width:100%
  height:1rem
  background:#000
#worksList
  width:100%
  background:#000
  overflow:hidden
  padding:0 0.5%
	.item
      width:33%
      height:3rem
      float:left
      position:relative
    	.box
    	  position:absolute
    	  bottom:.1rem
    	  left:.2rem
    		.love
    		  font-size:.3rem
    		  color:#fff
    		.number
    		  font-size:.3rem
    		  color:#fff

















</style>
