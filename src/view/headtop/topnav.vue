<template>
    <div>
        <div class="topNav">
          <ul class="bor0">
            <li>
              <h4><router-link :to="{name:'news'}">评价</router-link></h4>
              <span><router-link :to="{name:'pages'}">分页</router-link></span>
              <span><router-link :to="{name:'jdright'}">京东右侧导航</router-link></span>
            </li>
            <li>
              <h4><router-link :to="{name:'photopic'}">相册</router-link></h4>
              <span><router-link :to="{name:'bulletchat'}">弹幕</router-link></span>
              <span><router-link :to="{name:'magnMifier'}">图片放大镜</router-link></span>
            </li>
          </ul>
          <ul>
            <li>
              <h4><router-link :to="{name:'seamlessrolling'}">无缝滚动</router-link></h4>
              <span><router-link :to="{name:'accordion'}">手风琴</router-link></span>
              <span><router-link :to="{name:'allcheck'}">全选</router-link></span>
            </li>
            <li>
              <h4><router-link :to="{name:'hoverpic'}">滑动效果</router-link></h4>
              <span><router-link :to="{name:'verification'}">表单</router-link></span>
              <span><a href="#">基金</a></span>
              <span><a href="#">商业</a></span>
            </li>
          </ul>
          <ul>
            <li>
              <h4><a href="#">科技</a></h4>
              <span><a href="#">手机</a></span>
              <span><a href="#">智能</a></span>
              <span><a href="#">科学</a></span>
            </li>
            <li>
              <h4><a href="#">时尚</a></h4>
              <span><a href="#">女人</a></span>
              <span><a href="#">教育</a></span>
              <span><a href="#">亲子</a></span>
            </li>
          </ul>
          <ul class="w150">
            <li>
              <h4><a href="#">直播</a></h4>
              <span><a href="#">PGC</a></span>
              <span><a href="#">公开课</a></span>
            </li>
            <li>
              <h4><a href="#">房产</a></h4>
              <span><a href="#">家居</a></span>
              <span><a href="#">二手房</a></span>
            </li>
          </ul>
          <ul class="w150">
            <li>
              <h4><a href="#">汽车</a></h4>
              <span><a href="#">购车</a></span>
              <span><a href="#">选车</a></span>
            </li>
            <li>
              <h4><a href="#">健康</a></h4>
              <span><a href="#">酒香</a></span>
              <span><a href="#">身体课</a></span>
            </li>
          </ul> 
          <ul class="w150">
            <li>
              <h4><a href="#">北京</a></h4>
              <span><a href="#">政务</a></span>
              <span><a href="#">跟贴</a></span>
            </li>
            <li>
              <h4><a href="#">旅游</a></h4>
              <span><a href="#">双创</a></span>
              <span><a href="#">严选</a></span>
            </li>
          </ul> 
          <ul class="w100">
            <li>
              <h4><a href="#">公益</a></h4>
              <span><a href="#">网易号</a></span>
            </li>
            <li>
              <h4><a href="#">艺术</a></h4>
              <span><a href="#">收藏 </a></span>
            </li>
          </ul>      
          <div class="clear"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'topNav',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.topNav{padding:5px 0;}
.topNav ul{float:left;border-right:1px solid #ddd;padding-left:10px;width:180px;}
.topNav ul.bor0{padding:0;}
.topNav ul.w150{width:150px;}
.topNav ul.w100{width:100px;border:0;}
.topNav ul li{height:24px;line-height:24px;overflow:hidden;}
.topNav ul li h4{float:left;padding:0 20px 0 0;font-size:14px;font-weight:bold;}
.topNav ul li span{display:block;float:left;height:24px;padding-right:20px;}
</style>