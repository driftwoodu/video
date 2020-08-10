<template>
	<div id="comment">
		<div class="comment-header">
			<div class="number-header">
				3.2w 条评论
				<div class="iconfont icon" @click="close">
					&#x9999;
				</div>
			</div>

		</div>
		<div class="comment-list">
			<div class="item">
				<div class="img-box">
					<img class="img" src="../../../public/img/author.jpg"/>
				</div>
				<div class="comment-content">
					<div class="name">
						张三
					</div>
					<div class="content">
						我就爱学习
					</div>
				</div>
				<div class="icon-box">
					<div class="iconfont icon-love">
						&#x5555;
					</div>
					<div class="love-number">
						0
					</div>
				</div>
			</div>
			<div class="item">
				<div class="img-box">
					<img class="img" src="../../../public/img/author.jpg"/>
				</div>
				<div class="comment-content">
					<div class="name">
						张三
					</div>
					<div class="content">
						我就爱学习
					</div>
				</div>
				<div class="icon-box">
					<div class="iconfont icon-love">
						&#x5555;
					</div>
					<div class="love-number">
						0
					</div>
				</div>
			</div>
			<div class="item">
				<div class="img-box">
					<img class="img" src="../../../public/img/author.jpg"/>
				</div>
				<div class="comment-content">
					<div class="name">
						张三
					</div>
					<div class="content">
						我就爱学习
					</div>
				</div>
				<div class="icon-box">
					<div class="iconfont icon-love">
						&#x5555;
					</div>
					<div class="love-number">
						0
					</div>
				</div>
			</div>
			<div class="item">
				<div class="img-box">
					<img class="img" src="../../../public/img/author.jpg"/>
				</div>
				<div class="comment-content">
					<div class="name">
						张三
					</div>
					<div class="content">
						我就爱学习
					</div>
				</div>
				<div class="icon-box">
					<div class="iconfont icon-love">
						&#x5555;
					</div>
					<div class="love-number">
						0
					</div>
				</div>
			</div>
		</div>
		<div class="comment-footer">
      <input  type="text" v-model="commenttext" placeholder="请输入你的精彩评论">
      <button @click="comment()">发表</button>
		</div>

	</div>
</template>
<script>
  import axios from 'axios'
export default{
	name:"comment",
  props:['item'],
  data(){
    return{
      userId:"",
      videoId:"",
      commenttext:""
      }
  },
	methods:{
		close(){
			this.$emit('close')
		},comment:function(){
      let fd = new FormData();
      fd.append("videoId", this.item.id);
      fd.append("userId",sessionStorage.getItem("id"));
      fd.append("commenttext",this.commenttext);
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post('sys/comment',fd,config).then((res)=>{
          console.log(res)
      })
      //this.$router.go(0);
    }
	}
}
</script>
<style lang="stylus" scoped>
#comment
  background:#fff
  height:10rem
  border-radius:.3rem .3rem 0 0
  position:relative
  width:100%
	.comment-header
	  position:absolute
	  top:0
	  left:0
	  width:100%
	  height:.5rem
	  line-height:.5rem
		.number-header
		  width:100%
		  text-align:center
		  font-size:.3rem
		  color:#000
			.icon
			  float:right
			  margin-right:.3rem
	.comment-list
	  height:8.7rem
	  width:100%
	  overflow-x:hidden
	  overflow-y:scrolls
	  position:absolute
	  top:.5rem
	  left:0
	  color:#000
		.item
		  height:2rem
		  width:100%
			.img-box
			  float:left
			  width:.8rem
			  height:.8rem
			  border-radius:50%
			  padding:.1rem .3rem
			  margin-top:.2rem
				.img
				  width:.8rem
				  height:.8rem
				  border-radius:50%
			.comment-content
			  float:left
			  width:70%
			  height:1rem
			  margin-top:.2rem
				.name
				  width:100%
				  height:.5rem
				  line-height:.5rem
				  font-size:.35rem
				.content
				  width:100%
				  height:.5rem
				  line-height:.5rem
				  font-size:.28rem
			.icon-box
			  float:right
			  width:10%
			  height:1rem
			  text-align:center
			  margin-top:.2rem
				.icon-love
				  width:100%
				  height:.5rem
				  font-size:.3rem
				  line-height:.5rem
				.love-number
				  width:100%
				  height:.5rem
				  font-size:.3rem
				  line-height:.5rem
	.comment-footer
	  height:1.5rem
	  width:100%
	  line-height:1rem
	  font-size:.45rem
	  color:#666
	  position:absolute
	  bottom:0
	  left:0
	  padding-left:.3rem
</style>
