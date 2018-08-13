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
                   <div>若说笑是醉人的风，那在这我早已把心醉透。我曾以为自己任凭春去秋来，花开花落，只有寂寞为伴。可当城院的人儿笑着说声“嗨”，晨跑时院长的一声“加油加油”，室友半夜起床给我拿药的时候，我惆怅的寂寞被扯得纷纷片片跌落尘埃。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2017-6-1" name="2">
                   <div>地球就是一个宾馆，一个大客栈，生活在地球上的每个人都不过是过客，来了，又匆匆地走了，最后什么也没有带去。他还说“长恨此身非我有”，连身体都不是你的，还有什么是你的呢？所以，要那么多房子干什么，有个地方吃就行了，有个地方住就行了。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2016-6-1" name="3">
                   <div>人的成长，靠各种材料滋养，但材料的质地有差别。在一切领域，无论是寻找合作伙伴，还是生活伴侣，咱们都得学会鉴别对方是靠什么养大的，对好材料滋养出的人，应该伸手欢迎，哪怕他是一座前情博物馆。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2014-6-1" name="4">
                   <div>不离不弃，才是真爱。你只需要记住一件事，在感情里可以轻易放弃你的人，都是不爱你的。无论他表现出多少的不舍，表现出多少纠结和痛苦。只要是轻易的放弃了你，那这个人就一定不爱你。因为相爱最重要的一点,就是不放弃。</div>
                 </el-collapse-item>
                 <el-collapse-item title="2012-6-1" name="3">
                   <div>京遇不见西雅图

                     最近网上流传一篇影评，叫《世间所有的相遇都是久别重逢》。白落梅有本散文集，也叫这个名字，矫揉造作到不可忍受。挺着大肚子的小三遇见了一个懂得爱情又真心爱她的好男人，抛弃物质选择爱情。多少人感动，多少人从此又相信真爱了。</div>
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
