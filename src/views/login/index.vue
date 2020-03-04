<template>
  <div class="login">
    <el-card class="login-card">
      <!-- 头部 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="margin-left:30px">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
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
