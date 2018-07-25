<template>
  <div class="page page-login">
    <div class="form-wrap">
      <h3>用户登录</h3>
      <el-form ref="form" :model="form">
        <el-form-item prop="username"  class="form-item">
          <i class="fa fa-user"></i>
          <el-input v-model="form.username" class="input-icon"></el-input>
        </el-form-item>
        <el-form-item prop="password"  class="form-item">
          <i class="fa fa-lock"></i>
          <el-input v-model="form.password" class="input-icon"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-submit">
            登录
            <i class="fa fa-user-plus"></i>
          </el-button>
        </el-form-item>
      </el-form>
      <div class="register">
        <p>
          <router-link to="/register" tag="a">注册新用户</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
<style>
  .register p{
    float: right;
    font-size: 14px;
    color:black;
  }
  .register p a{
    text-decoration: none;
  }
</style>
