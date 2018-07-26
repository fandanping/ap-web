<template>
  <div class="page page-login">
    <div class="form-wrap">
      <h3>用户登录</h3>
      <el-form ref="form" :model="form" :rules="rule">
        <el-form-item prop="username"  class="form-item">
          <i class="fa fa-user"></i>
          <el-input v-model="form.username" class="input-icon"></el-input>
        </el-form-item>
        <el-form-item prop="password"  class="form-item">
          <i class="fa fa-lock"></i>
          <el-input v-model="form.password" class="input-icon"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-submit" :loading="ifLoading" @click="submitForm('form')">
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
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      ifLoading: false,
      form: {
        username: '',
        password: ''
      },
      rule: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState('userModule', [
      'loginCode', 'user', 'token'
    ])
  },
  methods: {
    submitForm (formName) {
      this.ifLoading = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login({
            username: this.form.username,
            password: this.form.password
          }).then(() => {
            let code = Number(this.loginCode)
            if (code === 2) {
              this.$notify.error({
                title: '错误信息',
                message: '您输入的账号不存在'
              })
            } else if (code === 3) {
              this.$notify.error({
                title: '错误信息',
                message: '您输入的用户名或密码有误'
              })
            } else {
              window.localStorage.setItem('token', this.token)
              window.localStorage.setItem('userId', this.user.id)
              window.localStorage.setItem('username', this.user.username)
              this.$router.push({path: '/address'})
            }
            this.ifLoading = false
          })
        } else {
          this.ifLoading = false
          return false
        }
      })
    },
    ...mapActions('userModule', [
      'login'
    ])
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
