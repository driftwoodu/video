<template>
<div id="videos">
	<video-player 
		class='video-player-box'
		ref="videoPlayer"
		:options="playerOptions"	
	>	
	</video-player>	
</div>
</template>

<script>
export default{
	name:'videos',
	props:['videos','index'],
	data(){
		return{
			state:false,
			playerOptions:{
				controls:false,
				//autoplay:"muted",
				fluid:true,
				muted:false,
				loop:true,
				sources:[{
					type:"video/mp4",
					src:'http://192.168.10.79:8181/'+this.videos.src
				}],
			}
		}
	},
	computed:{
		player(){
			return this.$refs.videoPlayer.player
		}
	},
	methods:{
	
		judge(){
			if(this.state===false){
				this.$refs.videoPlayer.player.play()
				this.state=true
			}else{
				this.$refs.videoPlayer.player.pause()
				this.state=false
			}
		},
		play(){
			this.$refs.videoPlayer.player.load()
			this.$refs.videoPlayer.player.play()
				this.state=true
		},
		pause(){
			this.$refs.videoPlayer.player.pause()
				this.state=false
		},
		autoplay(){
			if(this.index===0){
				this.playerOptions.autoplay="muted"
			}
		}
	},
	created(){
		this.autoplay()
	}
}
</script>

<style lang="stylus" scoped>
#videos
  height:100%
	.video-player-box
	  height:100%
	  display:flex
	  margin:0 auto
	  overflow:hidden
	  align-items:center
</style>