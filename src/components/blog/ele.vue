<template>
  <div class="page">
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
    <div>
    <div class="main">
      <el-row :gutter="20" class="">
        <div class="main-warp">
          <el-col :span="15"><div class="grid-content">
            <div class="banner">
               <el-carousel :interval="4000" type="card" height="200px">
                 <el-carousel-item v-for="item in imagelist" :key="item.index">
                   <a :src="item.link"></a>
                 </el-carousel-item>
               </el-carousel>
            </div>
            <div class="bloglist">
              <ul>
                <li v-for="item in bloglist" :key="item.index">
                  <i class="blogpic">
                        <img :src="item.linkImage">
                  </i>
                  <div class="content">
                     <div class="blogtitle">
                        <a href="javascript:;" target="_blank"> {{item.title}}</a>
                     </div>
                    <div class="bloginfo">
                      {{item.content}}
                    </div>
                    <div class="blog-footer">
                      <p class="timeinfo">
                            <span class="lanmu">
                              <a href="#" target="_blank">个人博客</a>
                            </span>
                        <span class="date">{{item.cteateTime}}</span>
                      </p>
                      <p class="read">
                        <a class="read-more" href="javascript:;">阅读更多</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div></el-col>
          <el-col :span="9"><div class="grid-content bg-purple">
            <div class="fenlei">
              <el-tabs type="card"  class="card">
                <el-tab-pane label="最新文章" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="点击排行" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="丹平杂谈杂谈杂谈" name="丹平杂谈杂谈杂谈">丹平杂谈杂谈杂谈</el-tab-pane>
              </el-tabs>
            </div>
          </div></el-col>
        </div>
      </el-row>
    </div>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      imagelist: [
        {link: '/static/img/1.82279e5.jpg'},
        {link: '/static/img/1.82279e5.jpg'},
        {link: '/static/img/1.82279e5.jpg'},
        {link: '/static/img/1.82279e5.jpg'},
        {link: '/static/img/1.82279e5.jpg'},
        {link: '/static/img/1.82279e5.jpg'}
      ],
      bloglist: [
        {index: '1', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '/static/img/1.82279e5.jpg'},
        {index: '2', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '/static/img/1.82279e5.jpg'}
      ]
    }
  },
  methods: {

  }
}
</script>
<style>
  #app{
    margin-top:0px;
  }
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
  .main{
    font: 15px "Microsoft YaHei", Arial, Helvetica, sans-serif;
    color: #555;
    background: #f1f1f1;
    width:100%;
  }
  .main .main-warp{
     width: 1120px;
     margin:0 auto;
    margin-top:30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .bloglist {
    border: #ddd 1px solid;
    overflow: hidden;
    background: #fff;
    margin-bottom: 15px;
    text-align: left;
  }
  .bloglist ul {
    padding: 20px 20px 0 20px;
    overflow: hidden;
  }
  .bloglist ul li {
    border-bottom: dashed 1px #e5e5e5;
    overflow: hidden;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .blogpic {
    float: left;
    width: 28%;
    height: 150px;
    margin-right: 20px;
  }
  .blogpic img {
    width: 100%;
    height: 150px;
  }
  .bloglist .blogtitle{
    font-size: 20px;
    font-weight: normal;
  }
  .bloglist .bloginfo{
    margin: 15px 0;
    font-size: 14px;
    line-height: 22px;
    color:#989898
  }
  .bloglist .blog-footer{
    font-size: 12px;
  }
  .bloglist .timeinfo{
    float: left;
  }
  .bloglist .timeinfo .lanmu{
    border-right: #CCC 1px solid;
    margin-right: 10px;
    padding-right: 10px;
  }
  .bloglist .read{
    float: right;
  }
  .bloglist .read .read-more{
    background: #0077dd;
    color: #FFF;
    padding: 5px 8px;
  }
  .fenlei{
    background-color: #fff;
    box-sizing: border-box;
  }
  .fenlei .card{
    margin: 10px 0px;
  }
</style>
