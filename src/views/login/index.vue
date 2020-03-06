<template>
  <div class="login">
    <el-card class="login-card">
      <!-- 头部 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form :model="formData" :rules="rules" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="formData.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="formData.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="margin-left:30px">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="formData.check">我已阅读并同意用户协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 定义表单中有值的数据 给el-form的model属性
      formData: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确' }
        ],
        check: [
          {
            validator: function (rule, value, callback) {
              // value是当前表单字段的值 checkbox的值
              if (value) {
                callback() // 满足校验直接进行下一条校验规则
              } else {
                callback(new Error('您必须同意协议'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOK => {
        if (isOK) {
          // alert('成功')
          // 发送axios验证token
          this.$axios.post('/authorizations', this.formData).then(result => {
            // console.log(result)
            window.localStorage.setItem('user-info', JSON.stringify(result.data))
            this.$router.push('/')
          }).catch(() => {
            // alert('错误')
            this.$message({
              message: '您的手机号或验证码不正确',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scped>
.login {
  width: 100%;
  height: 100vh;
  background: url(../../assets/img/login_bg.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 420px;
    height: 340px;
    .title {
      text-align: center;
      margin-bottom: 30px;
      img {
        width: 200px;
        height: 40px;
      }
    }
  }
}
</style>
