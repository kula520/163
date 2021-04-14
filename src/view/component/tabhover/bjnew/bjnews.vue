<template>
    <div>
        <div class="bjnews">
            <ul>
                <li v-for="(item,i) in listOne" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="bjnews">
            <ul>
                <li v-for="(item,i) in listTwe" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="bjnews">
            <ul>
                <li v-for="(item,i) in listThr" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="bjnewsImg">
            <ul>
                <li v-for="(item,i) in imgList" :key="i">
                    <img :src="item.imgSrc">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <div class="clear"></div>
        </div>
        <div class="btnbox"><a href="#" class="btn">网易地方加盟站</a><a class="btn" href="#">海外城市展示</a><a href="#" class="rf">进入本地频道>></a><div class="clear"></div></div>
    </div>
</template>
<script>
import {newsList,imgListAbver} from '../../../../axios/api'
export default {
    name:'bjnews',
    data(){
        return {            
           listOne:[],
           listTwe:[],
           listThr:[],
           imgList:[]
        }
    },
    mounted(){        
        this.newsListOne()
        this.newsListTwe()
        this.newsListThr()
        this.imgListAbverFun()
    },
    methods:{
        newsListOne(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<6){
                        arr.push(res.articles[i])
                    }
                }
                this.listOne=arr
            }) 
        },
        newsListTwe(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<6){
                        arr.push(res.articles[i])
                    }
                }
                this.listTwe=arr
            }) 
        },
        newsListThr(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<6){
                        arr.push(res.articles[i])
                    }
                }
                this.listThr=arr
            }) 
        },
        imgListAbverFun(){
            imgListAbver().then((res) => {
                this.imgList = res.articles 
            })
        }
    }
}
</script>
<style scoped>
.bjnews ul{margin-bottom:10px;}
.bjnews ul li{line-height:38px;height:38px;overflow:hidden;}
.bjnews ul li span{width:4px;height:4px;overflow:hidden;display:block;float:left;margin:17px 10px;background-color:#ccc;}
.bjnews ul li a{font-size:18px;}
.bjnews ul li a.cur{font-weight:bold}
.bjnews ul li a:hover{color:#ff3333;}
.bjnewsImg{width:400px;overflow:hidden;margin:0 25px;}
.bjnewsImg ul{width:420px;}
.bjnewsImg li{width:190px;float:left;height:186px;line-height:18px;overflow:hidden;margin:0 10px 0 0;}
.bjnewsImg li img{width:190px;height:140px;display:block}
.bjnewsImg li p{height:36px;overflow:hidden;}
.btnbox{margin:0 25px;}
.btnbox .btn{float:left;height:30px;padding:0 15px;background-color:#fff;border:1px solid #ccc;line-height:30px;margin-right:10px;border-radius:15px;-webkit-border-radius:15px;-moz-border-radius:15px;}
.btnbox .btn:hover{background-color:#ccc;color:#ff3333;}
.btnbox a:hover{color:#ff3333;}
</style>