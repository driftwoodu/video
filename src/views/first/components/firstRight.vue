<template>
	<div id="firstRight">
		<div class="author-img">
			<router-link :to="{path:'/user',query:{user:'true'}}">
				<img class="img" src="../../../../public/img/author.jpg"/>
			</router-link>
			<div class="iconfont add" v-if="show" @click="clickShow">
				&#x6666;
			</div>
		</div>
		<div :class="showColor" @click="click">
			&#x5555;
		</div>
		<div class="number">{{item.likeCount}}</div>
		<div class="iconfont right-icon" @click="openComment">
			&#x1111;
		</div>
		<div class="number">{{item.commentCount}}</div>
		<div class="iconfont right-icon" @click="openShare">
			&#x7777;
		</div>
		<div class="number">{{item.shareCount}}</div>
		<div class="around" >
			<img class="img" src="../../../../public/img/music.jpg"/>
		</div>
	</div>
</template>

<script>
  import axios from 'axios'
export default{
	name:'firstRight',
	props:['item','loveColor'],
	methods:{
		openShare(){
			this.$emit('openShare')
		},
		openComment(){
			this.$emit('openComment')
		},
		clickShow(){
			if(this.show===true){
				this.show=false
			}
		},
		click(){
        if(this.showColor=this.showColor==="iconfont right-icon"){
				this.showColor="iconfont icon-red"
				let fd = new FormData();
				fd.append("videoid", item.id);
				fd.append("liked",1);

				let config = {
				  headers: {
				    'Content-Type': 'multipart/form-data'
				  }
				}
				axios.post('http://localhost:9090/like',fd,config).then((res)=>{

				})
				}else{
				this.showColor="iconfont right-icon"
        let fd = new FormData();
        fd.append("videoid", item.id);
        fd.append("liked",-1);

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.post('http://localhost:9090/like',fd,config).then((res)=>{

        })
				}		}
	},
	data(){
		return{
			show:true,
			showColor:"iconfont right-icon"
		}
	},
	watch:{
		loveColor(){
			if(this.showColor==="iconfont right-icon"){
				this.showColor="iconfont icon-red"
			}
		}
	}

}
</script>

<style lang="stylus" scoped>

#firstRight
  width:1rem
  margin:0 auto
	.author-img
	  border-radius:50%
	  border:.02rem solid #fff
	  width:1rem
	  height:1rem
	  position:relative
		.img
		  width:1rem
		  height:1rem
		  border-radius:50%
		.add
		  background:red
		  width:.35rem
		  height:.35rem
		  line-height:.35rem
		  border-radius:50%
		  position:absolute
		  bottom:-.175rem
		  left:.325rem
		  color:#fff
		  text-align:center
	.around
	  border-radius:50%
	  margin-top:.4rem
	  width:1rem
	  height:1rem
	  position:relative
	  animation:changDeg 2s linear 0.2s infinite
	.right-icon
	  width:1rem
	  height:.8rem
	  margin-top:.3rem
	  text-align:center
	  line-height:.8rem
	  color:#fff
	  font-size:.6rem
	.icon-red
	  width:1rem
	  height:.8rem
	  margin-top:.3rem
	  text-align:center
	  line-height:.8rem
	  color:red
	  font-size:.6rem
	.number
	  font-size:.25rem
	  text-align:center



@keyframes changDeg{
	0%{
		transform:rotate(0deg);
	}
	100%{
		transform:rotate(360deg);
	}
}



</style>
