<template>
  <el-container>
    <el-aside style="width:200px;height:100vh;background:#323745">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>上</el-header>
      <el-main>中</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  // name: "Home",
  components: {
    'layout-aside': layoutAside
  }
}
</script>
