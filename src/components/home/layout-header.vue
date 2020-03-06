<template>
  <el-row type="flex" justify="space-between" class="header">
    <el-col :span="6" class="title">
      <i class="el-icon-s-unfold"></i>
      <span>天津理工大学</span>
    </el-col>
    <el-col :span="3" class="user">
      <img :src="user.photo? user.photo:defaultImg" alt />
      <el-dropdown trigger="click" @command="commandAction">
        <span class="el-dropdown-link">
          {{user.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="out">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    // 下拉菜单触发的事件
    commandAction (command) {
      if (command === 'account') {
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/'
      } else if (command === 'out') {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    },
    // 发送aixos请求用户信息，携带token
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        this.user = res.data
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
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
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 6px;
    }
  }
}
</style>
