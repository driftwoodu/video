<template>
	<div id="firstRight">
		<div class="author-img">
			<router-link :to="{path:'/user',query:{user:'0', userid:item.userid}}">
				<img class="img" src="../../../../public/img/author.jpg"/>
			</router-link>
			<div class="iconfont add" v-if="show" @click="clickShow">
				&#x6666;
			</div>
		</div>
		<div :class="showColor">
			&#x5555;
		</div>
		<div class="number">{{video.likecount}}</div>
		<div class="iconfont right-icon" @click="openShare">
			&#x7777;
		</div>
		<div class="number">{{item.sharecount}}</div>
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
  data(){
  	return{
  		show:true,
  		showColor:"iconfont right-icon",
      video:{
        id:"",
        likecount:""
      }
  	}
  },
  created(){
    this.initiate();
  },
  mounted(){
    this.isFollowed()
  },
	methods:{
    isFollowed(){
      let fd = new FormData();
      fd.append("followed", this.item.userid);
      fd.append("follower", sessionStorage.getItem('id'));
      axios.post('sys/isFollowed',fd).then((res)=>{
        console.log(res.data)
        if(res.data==false){
          this.show=false
        }
        if(this.item.userid==sessionStorage.getItem('id')){
          this.show=false
        }
      })
    },
    initiate(){
      let fd = new FormData;
      fd.append("id",this.item.id);
      fd.append("userId",sessionStorage.getItem("id"));
      axios.post('sys/getVideoById',fd).then((res)=>{
      this.video.id = res.data.id;
      this.video.likecount = res.data.likecount;
      if(res.data.ifUserLiked === true){
        this.showColor="iconfont icon-red";
      }else{
        	this.showColor="iconfont right-icon";
      }
      })
    },
		openShare(){
			this.$emit('openShare')
		},
		openComment(){
			this.$emit('openComment')
		},
		clickShow(){
      let fd = new FormData();
      fd.append("followed", this.item.userid);
      fd.append("follower", sessionStorage.getItem('id'));
      fd.append("isFollow",false);
      axios.post('sys/follow',fd).then((res)=>{
        console.log("8498191561691")
      })
			if(this.show===true){
				this.show=false
			}
		},
	},
	watch:{
		loveColor(){
			if(this.showColor=this.showColor==="iconfont right-icon"){
				this.showColor="iconfont icon-red"
				let fd = new FormData();
				fd.append("videoId", this.item.id);
				fd.append("userId",sessionStorage.getItem("id"));
				axios.post('sys/increaseLike',fd).then((res)=>{
			    this.video.id = res.data.id;
			    this.video.likecount = this.video.likecount + 1;
				})
				}else{
				this.showColor="iconfont right-icon"
			  let fd = new FormData();
			  fd.append("videoId", this.item.id);
			  fd.append("userId",sessionStorage.getItem("id"));
			  axios.post('sys/decreaseLike',fd).then((res)=>{
			    this.video.id = res.data.id;
			    this.video.likecount = this.video.likecount - 1;
			  })
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
