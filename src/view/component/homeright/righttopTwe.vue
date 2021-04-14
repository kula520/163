<template>
    <div>
        <div class="navTab">
            <div class="titlebd">
                <h4 class="title"><span>我的产品</span></h4>
                <span @click="allClick" v-show="goBank">全部产品&nbsp;ⓥ&nbsp;</span>
                <span @click="goBankClick" v-show="moreBtn">返回&nbsp;Ⓐ&nbsp;</span>
            </div>
        </div>
        <div class="conts" v-show="goBank">
            <div class="lists">
                <ul>
                    <li v-for="(item,i) in listOne" :key="i">
                        <img :src="item.imgSrc">
                        <div>
                            <h4>{{item.navTil}}</h4>
                            <p>{{item.title}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
        <div class="conts" v-show="moreBtn">
            <div class="topMail">
                <a href="#">免费邮</a>
                <a href="#">VIP邮箱</a>
                <a href="#">企业邮箱</a>
                <a href="#">邮箱大师</a>
                <a href="#">易信</a>
            </div>
            <div class="first">
                <div class="first-div"></div>
            </div>
            <div class="tuijianTil">
                <a href="#">新闻客户端</a>
                <a href="#">视频版</a>
                <a href="#">网易红彩</a>
            </div>
            <div class="tuijian" style="height:45px;overflow:hidden;">
                <a href="#" v-for="(item,i) in listTwe" :key="i">{{item.slice(0,item.length-1)}}</a>
            </div>
            <div class="first">
                <div class="first-div"></div>
            </div>
            <div class="closeBtn" @click="goBankClick">╳</div>
        </div>
    </div>
</template>
<script>
import {iconRightList} from '../../../axios/api'
export default {
    name:'rightTop',
    data(){
        return {
            moreBtn:false,
            goBank:true,
            listOne:[],
            listTwe:[],
            listThr:[]
        }
    },
    mounted(){
        this.iconRightListFun()
    },
    methods:{
        allClick(){
            this.moreBtn = true
            this.goBank = false
        },
        goBankClick(){            
            this.moreBtn = false
            this.goBank = true
        },
        iconRightListFun(){
            iconRightList().then((res) => {
                let arr = []
                let arrTwe = []
                let arrThr = [] 
                for(let i=0;i<res.articles.length;i++){
                    if(i<2){
                        arr.push(res.articles[i])
                    }
                    if(i<12){
                        arrTwe.push(res.articles[i].navTil)
                    }
                    if(i<4){
                        arrThr.push(res.articles[i])
                    }
                }
                this.listOne = arr
                this.listTwe = arrTwe
                this.listThr = arrThr
            })
        }
    }
}
</script>
<style scoped>
img{-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;}
.navTab{padding:1px;}
.titlebd{text-align:right;background-color:#f2f2f2;height:40px;line-height:40px;position:relative;padding:0 10px;}
.titlebd .title{display:block;width:125px;border-top:2px solid #ff3333;color:#ff3333;text-align:center;line-height:40px;position:absolute;top:-1px;left:0px;background-color:#fff;font-size:16px;}
.titlebd span{cursor:pointer;}
.conts{padding:10px 10px 0;position:relative;z-index:9;height:190px;overflow:hidden;}
.lists{width:100%;}
.lists li{height:50px;padding:0 0 30px;position:relative;}
.lists li:after{content:"";position:absolute;top:80%;bottom: -50%;left: -50%;right: -50%;width: 200%;height: 200%;-webkit-transform: scale(0.5);transform: scale(0.5);border-top: solid 1px #ccc;box-sizing:border-box;height:0px;overflow:hidden;}
.lists li img{width:50px;height:50px;margin-right:10px;float:left;}
.lists li h4,.lists li p{line-height:18px;height:18px;overflow:hidden;}
.lists li h4{margin-bottom:5px;}
.tuijianTil{border-left:2px solid #ff3333;padding-left:10px;font-size:14px;height:20px;line-height:20px;margin:0 0 10px;}
.tuijianTil a{padding-right:10px;}
.tuijian a{line-height:20px;padding:0 10px 5px 0;display:inline-block;}
.iconList{width:230px;overflow:hidden;margin-bottom:10px;}
.iconList ul{width:280px;}
.iconList li{width:50px;float:left;margin-right:10px;text-align:center;line-height:24px;}
.iconList li img{display:block;width:50px;height:50px;}
.topMail{height:30px;line-height:30px;}
.topMail a{font-size:12px;padding-right:5px;}
.first{position:relative;font-size:16px;margin:10px 0;padding-bottom:5px;}
.first .first-div:before{content:"";position:absolute;top: -50%;bottom: -50%;left: -50%;right: -50%;width: 200%;height: 200%;-webkit-transform: scale(0.5);transform: scale(0.5);border-top: solid 1px #ccc;box-sizing:border-box;height:0px;overflow:hidden;}
.closeBtn{cursor:pointer;height:30px;line-height:30px;text-align:center;color:#555;font-size:24px;}
</style>