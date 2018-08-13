<template>
  <div class="page">
    <Header> </Header>
    <div>
      <div class="main">
        <el-row :gutter="20" class="">
          <div class="main-warp">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>关于我</el-breadcrumb-item>
            </el-breadcrumb>
            <el-col :span="15"><div class="grid-content">
               <div class="list aboutlist">
                 <el-card class="box-card">
                   <div slot="header" class="clearfix">
                     <span>职业介绍</span>
                   </div>
                   <div>
                        本人是........
                   </div>
                 </el-card>
                 <el-card class="box-card">
                   <div slot="header" class="clearfix">
                     <span>兴趣爱好</span>
                   </div>
                   <div>
                     本人是........
                   </div>
                 </el-card>
                 <el-card class="box-card">
                   <div slot="header" class="clearfix">
                     <span>教育背景</span>
                   </div>
                   <div>
                     本人是........
                   </div>
                 </el-card>
               </div>
            </div></el-col>
            <el-col :span="9"><div class="grid-content bg-purple">
              <EveryDay></EveryDay>
              <About> </About>
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
    }
  },
  methods: {

  }
}
</script>
<style>
.aboutlist .el-card__header{

}
</style>
