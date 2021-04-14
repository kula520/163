<template>
<div>
  <headTop></headTop>
  <div class="bj" style="height:2000px;">
    <div class="warpperbd">
      <div class="warpper">
        <div class="topLogo">          
          <a href="#"><img src="../../assets/home/topRight.jpg"></a>
          <a href="#"><img src="../../assets/home/topBanner.jpg"></a>
          <h1 title="网易">网易</h1>
        </div>
        <topNav></topNav>
        <div class="shopImg"><img :src="banner"></div>
        <adverTitle></adverTitle>
        <div>
          <div class="w915 lf">
            <div class="w450 lf">
              <siledImg></siledImg>              
              <hoverTab :tabArray="gkkArray"></hoverTab>  
              <hoverTab :tabArray="zsglArray"></hoverTab>   
            </div>
            <div class="w450 rf">
              <hoverTab :tabArray="bjArray"></hoverTab>   
            </div>
            <div class="clear"></div>
            <div class="bannerImg"><img :src="banner"></div>
          </div>
          <div class="w250 rf">
            <div class="first">
                <div class="first-div">
                  <rightTop></rightTop>
                </div>                
            </div>
            <div class="rBanner"><img src="../../assets/siled/3.jpg"></div>
            <div class="first">
                <div class="first-div">
                  <rightTop></rightTop>
                </div>                
            </div>
            <div class="rBanner"><img src="../../assets/siled/4.jpg"></div>
            <div class="first">
                <div class="first-div">
                  <righttopTwe></righttopTwe>
                </div>                
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>  
  </div>
  <footerB></footerB>
</div>
</template>
<style scoped>
@import url('../../css/home.css');
</style>
<script>
import headTop from '../headtop/headtop'
import footerB from '../footer/footer'
import {bannerList} from '../../axios/api'
import adverTitle from '../component/advertitle'
import siledImg from '../component/siledImg'
import topNav from '../headtop/topnav'
import hoverTab from '../component/tabhover/tabhover'
import rightTop from '../component/homeright/righttop'
import righttopTwe from '../component/homeright/righttopTwe'
export default {
  name: 'home',
  data(){
    return {
      banner:'',
      bjArray:[
        {
          name:'要闻',
          title:'news'
        },
        {
          name:'北京新闻',
          title:'bjnews'
        },
        {
          name:'军事 | 航空',
          title:'jshk'
        }
      ],
      gkkArray:[
        {
          name:'网易公开课',
          title:'gkk'
        }
      ],
      zsglArray:[
        {
          name:'知识公路',
          title:'zsgl'
        }
      ]
    }
  },
  components:{
    headTop,
    footerB,
    adverTitle,
    siledImg,
    topNav,
    hoverTab,
    rightTop,
    righttopTwe
  },
  mounted(){
    this.bannerFun()
  },
  methods:{
    bannerFun(){
      bannerList().then((res) => {              
        this.banner = res.data[0].shopImg
      }) 
    }  
  }
}
</script>
<style scoped>
.el-tabs__active-bar{background-color:#ff3333;}
.el-tabs__nav-wrap::after{bottom:38px;}
.bannerImg{width:100%;height:100px;}
.bannerImg img{width:100%;height:100px;}
.rBanner{margin:10px 0;}
.first{position:relative;width:250px;overflow:hidden;}
.first .first-div:before{content:"";position:absolute;top: -50%;bottom: -50%;left: -50%;right: -50%;width: 200%;height: 200%;-webkit-transform: scale(0.5);transform: scale(0.5);border: solid 1px #ccc;box-sizing:border-box;}
</style>