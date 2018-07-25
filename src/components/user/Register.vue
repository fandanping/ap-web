<template>
  <div class="page page-register">
    <div class="form-wrap">
      <h3>用户注册</h3>
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
          <el-button  :loading="ifLoading" type="primary" class="btn-submit" @click="submitForm ('form')">
            注册
            <i class="fa fa-user-plus"></i>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default{
  data () {
    return {
      ifLoading: false,
      form: {
        username: '',
        password: ''
      },
      rule: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    ...mapState('userModule', [
      'registerCode'])
  },
  methods: {
    submitForm (form) {
      this.ifLoading = true
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.register({
            username: this.form.username,
            password: this.form.password
          }).then(() => {
            let code = Number(this.registerCode)
            if (code === 2) {
              this.$notify.error({
                title: '错误信息',
                message: '您输入的账号已被占用'
              })
            } else {
              this.$alert('注册成功，请您在登录页面登录', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$router.push({path: '/'})
                }
              })
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
      'register'
    ])
  }
}
</script>
