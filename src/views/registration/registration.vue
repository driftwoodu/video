<template>
  <div>
    <p>用户名：<input type='text'  v-model="userName"></p>
    <p>密码：<input type='text'  v-model="password"></p>
    <button @click="registration()">注册</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    name:'registration',
    data(){
      return{
        userName:"",
        password:""
        }
    },
    created() {

    },
    methods:{
     registration:function(){
          let fd = new FormData();
          fd.append("userName", this.userName);
          fd.append("password",this.password);

          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }

          axios.post('http://localhost:9090/registration',fd,config).then((res)=>{
              console.log(res)
          })
     }
 }
  }
</script>
