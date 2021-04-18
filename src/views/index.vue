<template>
  <div>
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default{
    name: "index",
    data(){
      return{
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(){
        this.postRequest("/user/login", this.user).then(res => {
          if (res){
            const tokenStr = res.data.header + res.data.token;
            this.$store.commit('SET_TOKEN', tokenStr)
          }
        })
      }
    }
}
</script>

<style scoped>

</style>