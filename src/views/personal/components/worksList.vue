<template>
	<div class="">
		<div id="worksList">
				<div class="item" v-for="item of list">
          <router-link :to="{path:'/player',query:{itemid:item.id}}">
					<videos :videos="item" @click.native="click"></videos>
          </router-link>
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
	components:{
		videos
	},
	data(){
		return{
			list:[],
			listName:this.$route.query.listName,
      userid:this.$route.query.userid
		}
	},
	mounted(){
		this.getvideo()
	},
	methods:{
		click(){
			console.log(1)
		},
    getvideo(){
      if(this.listName==="like"){
      	let fd = new FormData()
      	fd.append("userId",this.userid);
      	axios.post('sys/GetLikeVideo',fd).then((res)=>{
          this.list=res.data
        })
      }else{
      	let fd = new FormData()
      	fd.append("id",this.userid);
      	axios.post('sys/getPersonalPageById',fd).then((res)=>{
      	  this.list=res.data.videos
      	})
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
