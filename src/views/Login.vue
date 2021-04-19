<template>
  <div>
    <!-- 顶部栏 -->
    <div class="topbar">
      <!-- <img src="../img/ahpu校徽.png" alt="">
      <img src="../img/ahpufont.png" alt=""> -->
    </div>
    <!-- 中央大视图 -->
    <div class="main_view">
      <!-- 左侧登录/注册大框 -->
      <div class="left_m">

        <!-- 上部分 -->
        <div class="left_t" @click="register = true">
          注册
        </div>
        <!-- 下部分 -->
        <div class="left_b" @click="register = false">
          登录
        </div>
      </div>
      <!-- 右侧cube -->
      <div class="cube" :class="[register? 'cube-flip' : '']">
        <!-- 右侧默认界面 -->
        <form class="login_in" action="">
          <h1 class="login_name">Login</h1>
          <input type="text" placeholder="用户名">
          <input type="password" placeholder="密码">
          <input type="submit" class="btn topname" value="登 录" >
        </form>
        <!-- 右侧次页面 -->
        <form class="login_new" action="">
          <h1 class="login_new_name">注册</h1>
          <input type="text" placeholder="学号">
          <input type="password" placeholder="密码">
          <input type="submit" class="btn topname" value="注 册">
        </form>
      </div>
    </div>
    <!-- 底部栏 -->
    <div class="bottom_bar">

    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return {
        register: false,
      }
    }
  }
</script>

<style scoped>
 @import "../assets/css/login.css";
</style>