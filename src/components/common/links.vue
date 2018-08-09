<template>
   <div class="links">
     <el-card class="box-card">
       <div slot="header" class="clearfix">
         <span>友情链接</span>
       </div>
       <div>
         <el-tag>A网站</el-tag>
         <el-tag type="success">B网站</el-tag>
         <el-tag type="info">C网站</el-tag>
         <el-tag type="warning">D网站</el-tag>
       </div>
     </el-card>
   </div>
</template>
<script>
export default {
  name: 'links'
}
</script>
<style>
  .links{
    margin-top:20px;
  }
  .links .el-card__header{
    background-color: #E6A23C;
  }
</style>
