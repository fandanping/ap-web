<template>
  <div>
    <div class="header">
      <div class="slogan">
        您好，欢迎您访问dan个人博客，在这里，它不仅仅是记录个人的平台，更是一个记录世界、时代的平台！
      </div>
      <div class="search">
        <el-input placeholder="请输入内容"  size="medium"></el-input>
      </div>
    </div>
    <div class="nav-warp">
      <div class="header-navigation">
        <div class="logo">
          danping 个人blog
        </div>
        <div class="nav">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2" >关于我</el-menu-item>
            <el-menu-item index="3" >技术分享</el-menu-item>
            <el-menu-item index="4" >美学分享</el-menu-item>
            <el-menu-item index="5" >慢生活</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>
<style>
  .header{
    background-color: #555;
    color:#ccc;
    vertical-align: middle;
    padding:0 20px;
    box-sizing: border-box;
    overflow: hidden;
    height:45px;
    font-size:14px;
  }
  .header .search, .slogan{
    line-height: 45px;
  }
  .header .search{
    margin-right:100px;
    float: right;
  }
  .header .slogan{
    float: left;
    margin-left:100px;
  }
  .nav-warp{
    width:100%;
    background-color: white;
    box-sizing: border-box;
  }
  .header-navigation{
    overflow: hidden;
    height:60px;
    width:1120px;
    margin:auto;
  }
  .header-navigation  .logo{
    float: left;
    line-height: 60px;
  }
  .header-navigation .nav{
    float: left;
    height:60px;
    margin-left:200px;
  }
  .header-navigation .nav ul li {
    padding-left:40px;
    padding-right:40px;
  }
</style>
