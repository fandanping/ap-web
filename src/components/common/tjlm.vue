<template>
  <div class="tjlm">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>推荐栏目</span>
      </div>
      <div>
        <el-tag>首页</el-tag>
        <el-tag type="success">关于我</el-tag>
        <el-tag type="info">技术分享</el-tag>
        <el-tag type="warning">美学分享</el-tag>
        <el-tag type="danger">慢生活</el-tag>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'tilm'
}
</script>
<style>
  .tjlm{
    margin-top:20px;
  }
  .tjlm .el-card__header{
    background-color: sandybrown;
  }
</style>
