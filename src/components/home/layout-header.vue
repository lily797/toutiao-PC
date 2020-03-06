<template>
  <el-row type="flex" justify="space-between" class="header">
    <el-col :span="6" class="title">
      <i class="el-icon-s-unfold"></i>
      <span>天津理工大学</span>
    </el-col>
    <el-col :span="3" class="user">
     <img src="../../assets/img/avatar.jpg" alt="">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          我是lily
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人信息</el-dropdown-item>
          <el-dropdown-item >git地址</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  padding: 10px 0;
  .title {
    display: flex;
    align-items: center;
    i {
      font-size: 19px;
      padding-right: 5px;
    }
  }
  .user {
    display: flex;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 6px;
    }
  }
}
</style>
