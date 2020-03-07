<template>
    <el-card>
        <bread-crumb slot="header">
        <span slot="title">评论列表</span>
        </bread-crumb>
        <!-- 表格组件 -->
        <!-- <el-table :data="list">
            <el-table-column label="id" prop="id"></el-table-column>
            <el-table-column label="名字" prop="name"></el-table-column>
        </el-table> -->
        <el-table :data="list">
            <el-table-column prop="title" width="500" label="标题"></el-table-column>
            <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
            <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
            <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
            <el-table-column label="操作">
                <el-button type="text">修改</el-button>
                <el-button type="text">关闭评论</el-button>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        this.list = res.data.results
        console.log(res.data.results)
      })
    },
    formatter (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>

</style>
