<template>
 <div class="page">
   <Header> </Header>
   <div>
     <div class="main">
       <el-row :gutter="20" class="">
         <div class="main-warp">
           <el-breadcrumb separator-class="el-icon-arrow-right">
             <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
             <el-breadcrumb-item>心情随笔</el-breadcrumb-item>
           </el-breadcrumb>
           <el-col :span="15"><div class="grid-content">
             <div class="moodlist list">
               <el-collapse v-model="activeName" accordion>
                 <el-collapse-item title="2018-6-1" name="1">
                   <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                         在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2017-6-1" name="2">
                   <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                         页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2016-6-1" name="3">
                   <div>简化流程：设计简洁直观的操作流程；
                        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2014-6-1" name="4">
                   <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2012-6-1" name="3">
                   <div>简化流程：设计简洁直观的操作流程；
                     清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                     帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2010-6-1" name="4">
                   <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                     结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                 </el-collapse-item>
               </el-collapse>
             </div>
             <el-pagination
               background
               layout="prev, pager, next"
               :total="1000">
             </el-pagination>
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
      activeName: '1'
    }
  },
  methods: {

  }
}
</script>
<style>

</style>
