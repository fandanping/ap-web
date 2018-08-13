<template>
  <div class="page">
    <Header> </Header>
    <div>
      <div class="main">
        <el-row :gutter="20" class="">
          <div class="main-warp">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>在线留言</el-breadcrumb-item>
            </el-breadcrumb>
            <el-col :span="15"><div class="grid-content">
              <div class="messagelist list">
                <el-card class="box-card">
                  <div class="box-header">
                    <span>留言区--发表留言</span>
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
                    <span>留言区--留言专区</span>
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
  .messagelist{
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
  .messagelist .el-card{
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
  .messagelist .el-card .box-header{
    margin-bottom: 20px;
  }

</style>
