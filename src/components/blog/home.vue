<template>
  <div class="page">
    <Header> </Header>
    <div>
    <div class="main">
      <el-row :gutter="20" class="">
        <div class="main-warp">
          <el-col :span="15"><div class="grid-content">
            <div class="banner">
               <el-carousel :interval="4000" type="card" height="280px">
                 <el-carousel-item v-for="item in imagelist" :key="item.index">
                   <img :src="item.link">
                 </el-carousel-item>
               </el-carousel>
            </div>
            <div class="bloglist list">
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
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div></el-col>
          <el-col :span="9"><div class="grid-content bg-purple">
            <EveryDay></EveryDay>
            <SideNews> </SideNews>
            <About> </About>
            <Tjlm> </Tjlm>
            <Links> </Links>
          </div></el-col>
        </div>
      </el-row>
    </div>
    </div>
  </div>

</template>

<script>
import Header from './../common/header.vue'
import SideNews from './../common/sidenews.vue'
import Tjlm from './../common/tjlm.vue'
import About from './../common/about.vue'
import Links from './../common/links.vue'
import EveryDay from './../common/everyday.vue'
export default {
  components: {
    Header,
    SideNews,
    About,
    Tjlm,
    Links,
    EveryDay
  },
  data () {
    return {
      imagelist: [
        {link: '../../../static/images/1.jpg'},
        {link: '../../../static/images/1.jpg'},
        {link: '../../../static/images/1.jpg'},
        {link: '../../../static/images/1.jpg'},
        {link: '../../../static/images/1.jpg'},
        {link: '../../../static/images/1.jpg'}
      ],
      bloglist: [
        {index: '1', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '../../../static/images/1.jpg'},
        {index: '2', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '../../../static/images/1.jpg'},
        {index: '3', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '../../../static/images/1.jpg'},
        {index: '4', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '../../../static/images/1.jpg'},
        {index: '5', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '../../../static/images/1.jpg'}
      ]
    }
  },
  methods: {

  }
}
</script>
<style>
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
</style>
