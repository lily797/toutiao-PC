<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
        <!-- 具名插槽占坑 -->
        <slot name="title"></slot>
    </el-breadcrumb-item>
</template>

<script>
export default {}
</script>

<style>
</style>
