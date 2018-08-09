<template>
  <div class="fenlei">
    <el-tabs type="card"  class="" v-model="activeName2">
      <el-tab-pane name="first">
        <span slot="label"><i class="el-icon-date"></i> 最新文章</span>
        <ul class="sidenews">
          <h2>最新文章</h2>
          <li v-for="item in newsList" :key="item.index">
            <i>
              <img :src="item.link">
            </i>
            <p>
              <a href="javascript:;">别让这些闹心的套路，毁了你的网页设计</a>
            </p>
            <p class="time"><a href="javascript:;">2018-08-10</a></p>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="点击排行" name="second">
        <ul class="sidenews">
          <h2>点击排行</h2>
          <li v-for="item in newsList" :key="item.index">
            <i>
              <img :src="item.link">
            </i>
            <p>
              <a href="javascript:;">别让这些闹心的套路，毁了你的网页设计</a>
            </p>
            <p class="time"><a href="javascript:;">2018-08-10</a></p>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="丹平杂谈杂谈杂谈" name="丹平杂谈杂谈杂谈">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</el-tab-pane>
    </el-tabs>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'SideNews',
  data () {
    return {
      activeName2: 'first',
      activeNames: ['1'],
      newsList: [
        {link: '/static/img/1.82279e5.jpg', title: '别让这些闹心的套路，毁了你的网页设计'},
        {link: '/static/img/1.82279e5.jpg', title: '别让这些闹心的套路，毁了你的网页设计'},
        {link: '/static/img/1.82279e5.jpg', title: '别让这些闹心的套路，毁了你的网页设计'},
        {link: '/static/img/1.82279e5.jpg', title: '别让这些闹心的套路，毁了你的网页设计'},
        {link: '/static/img/1.82279e5.jpg', title: '别让这些闹心的套路，毁了你的网页设计'}
      ],
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
        {index: '2', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '/static/img/1.82279e5.jpg'},
        {index: '3', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '/static/img/1.82279e5.jpg'},
        {index: '4', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '/static/img/1.82279e5.jpg'},
        {index: '5', title: '个人博客，我为什么要用帝国cms？', content: '选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms...', cteateTime: '2018-3-4', linkImage: '/static/img/1.82279e5.jpg'}
      ]
    }
  }
}
</script>
<style>
  .fenlei{
    background-color: #fff;
    box-sizing: border-box;
    text-align: left;
    margin-top: 20px;
  }
  .fenlei .card{
    margin: 10px 0px;
  }
  .sidenews{
    padding: 5px 10px;
  }
  .sidenews h2 {
    font-size: 18px;
    padding-bottom: 20px;
    font-weight: normal;
  }
  .sidenews li {
    margin: 0 0 20px 0;
    overflow: hidden;
  }
  .sidenews i {
    width: 100px;
    height: 75px;
    overflow: hidden;
    display: block;
    border: #efefef 1px solid;
    float: left;
    margin-right: 10px;
  }
  .sidenews img {
    height: 100%;
    max-height: 75px;
    margin: auto;
    -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    transition: all 0.5s;
  }
  .sidenews li p {
    line-height: 24px;
    color: #888;
    font-size: 15px;
  }

  .sidenews li p.time{
    font-size: 12px;
    color: #9A9A9A;
    margin-top: 10px;
  }
</style>
