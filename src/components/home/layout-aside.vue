<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <el-menu
      background-color="#353e4b"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">
          <span slot="title">发表文章</span>
        </el-menu-item>
        <el-menu-item index="/home/articles">
          <span slot="title">内容列表</span>
        </el-menu-item>
        <el-menu-item index="/home/comment">
          <span slot="title">评论列表</span>
        </el-menu-item>
        <el-menu-item index="/home/material">
          <span slot="title">素材管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2" >
        <template slot="title">
          <i class="el-icon-document-copy"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="/home/fansdata">
          <span slot="title">图文数据</span>
        </el-menu-item>
        <el-menu-item index="/home/fansinfo">
          <span slot="title">粉丝概况</span>
        </el-menu-item>
        <el-menu-item index="/home/fansimg">
          <span slot="title">粉丝画像</span>
        </el-menu-item>
        <el-menu-item index="/home/fanslist">
          <span slot="title">粉丝列表</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="/home/account">
        <i class="el-icon-user-solid"></i>
        <span slot="title">账户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-aside {
  .title {
    padding: 15px 0;
    text-align: center;
    background-color: #2e2f32;
    img {
      width: 120px;
      height: 30px;
    }
  }
}
</style>
