<template>
  <div>
    <div>
      <p>用户名：<input type='text' v-model="userName"></p>
      <p>密码：<input type='text' v-model="passWord"></p>
      <button @click="login()">登录</button>
      <router-link to="/re">
        <div>
          re
        </div>
      </router-link>
    </div>
  </div>

</template>

<script>
  export default{
   name:"re"
   }
</script>

<style>

</style>
