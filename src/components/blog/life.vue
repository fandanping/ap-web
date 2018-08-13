<template>
  <div class="page">
    <Header> </Header>
    <div>
      <div class="main">
        <el-row :gutter="20" class="">
          <div class="main-warp">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>慢生活</el-breadcrumb-item>
            </el-breadcrumb>
            <el-col :span="15"><div class="grid-content">
              <div class="lifelist list">
                <el-card class="box-card">
                  <div class="box-header">
                    <span>文章标题--20岁开始坚持的十个生活习惯 让我在30岁拥有想要的生活</span>
                  </div>
                  <div class="detail-info-box">
                    <ul>
                      <li>编辑时间:<span>2017-03-13</span></li>
                      <li>浏览量:<span>11106</span></li>
                      <li>作者:<span>范丹平</span></li>
                    </ul>
                  </div>
                  <div class="detail-content">
                    1⃣️爱笑的女孩运气一定不会太差

                    大家都说爱笑的女孩儿运气一定不会太差，为什么？如果一定要找原因，估计是因为爱笑的女孩儿自信、乐观（可爱版的缺心眼儿）、不爱钻牛角尖、不爱生气，不放过任何机会去感受这个世界一丝一毫的温暖和明媚。

                    我笑点很低，经常是饭桌上第一个被笑话逗得捧腹大笑的人，而且在多数情况下，我都会保持微笑。陌生场合中面带微笑的女孩子往往给人亲切善良的第一印象，从而赢得更多关注，更多好感，搞不好还会吸引到你的Mr. Right😆😆。

                    笑容在职场中也是一个助推器，记得我当年刚毕业参加面试时，战绩非常好，基本参加面试的公司最后都给了offer，记得多年后我和当时面试我的投行老板聊天，她说对我的面试过程一直印象很深，因为我从一进门开始脸上就挂着真诚的微笑，让她断定我是一个阳光上进的好苗子，啊哈哈哈，希望现在她没有后悔当年的判断😜😜。

                    所以，每当看到有文章教大家表情管理，说是怕长笑纹，我都无言以对，有什么美貌比的过一张生动明媚的笑脸呢？
                    谁的生活都曾披荆斩棘，

                    谁的幸福都来之不易，

                    今天分享的这几个小小的建议和总结，

                    只是希望我们在琐碎的生活中彼此鼓励，

                    一起迎接下一个美好的十年，

                    我们善待岁月，

                    岁月也会善待我们，

                    笔芯❤
                  </div>
                  <el-button-group class="btn-pageation">
                    <el-button type="primary" icon="el-icon-arrow-left" plain>上一页</el-button>
                    <el-button type="primary" plain>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                  </el-button-group>
                </el-card>
                <el-card class="box-card">
                  <div class="box-header">
                    <span>评论区--发表评论</span>
                  </div>
                  <div class="cmment-content">
                    <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="textarea">
                    </el-input>
                    <el-button type="primary" plain class="btn-comment">发布</el-button>
                  </div>
                </el-card>
                <el-card class="box-card">
                  <div class="box-header">
                    <span>评论区--评论专区</span>
                  </div>
                  <div class="detail-comment">
                    <div class="no-img">
                      <img src="../../assets/images/no-img.jpg">
                      <div class="issue-word">
                        <p><span>fandp</span><span>2012-3-4 06:00:00</span></p>
                        <p><span>come on come on </span></p>
                      </div>
                      <div class="reply">
                        <span>1楼</span>
                      </div>
                    </div>
                  </div>
                </el-card>
                <div></div>
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
      textarea: ''
    }
  },
  methods: {
  }
}
</script>
<style>
  .lifelist{
    padding-bottom:20px;
  }
  .detail-info-box{
    height: 30px;
    color: #ac5a24;
    margin-top: 10px;
    line-height: 30px;
    border: 1px dashed #999;
    border-left: 0;
    border-right: 0;
    overflow: hidden;
  }
  .detail-info-box ul{
    width: 480px;
    margin: 0 auto;
    overflow: hidden;
  }
  .detail-info-box ul li {
    float: left;
    width: 158px;
    text-align: center;
  }
  .detail-content{
    margin-top:20px;
    margin-bottom: 20px;
  }
  .btn-comment{
    float: right;
  }
  .cmment-content{
    overflow: hidden;
  }
  .el-textarea{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .lifelist .el-card{
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .btn-pageation{
    float: right;
  }
  .no-img{
    position: relative;
    padding-left: 30px;
    padding-right:30px;
  }
  .no-img  img{
    position: absolute;
    left:0;
    top:0;
    width: 20px;
    height: 40px;

  }

  .issue-word{
    width: 200px;
  }
  .detail-comment{
    border-bottom: 1px dotted #dddddd;
    padding-bottom: 20px;
  }
  .detail-comment .reply{
    position: absolute;
    right:0;
    top:0;
  }
  .lifelist .el-card .box-header{
    margin-bottom: 20px;
  }

</style>
