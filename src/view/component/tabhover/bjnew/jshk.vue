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
        <div class="bjnewsImg">
            <ul>
                <li v-for="(item,i) in imgList" :key="i">
                    <img :src="item.imgSrc">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <div class="clear"></div>
        </div>
        <div class="first">
            <div class="first-div">
            </div>
        </div>            
        <div class="bjnews">
            <ul>
                <li v-for="(item,i) in listTwe" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="bjnewsImg">
            <ul>
                <li v-for="(item,i) in imgListTwe" :key="i">
                    <img :src="item.imgSrc">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <div class="clear"></div>
        </div>
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
           imgList:[],
           imgListTwe:[]        
        }
    },
    mounted(){        
        this.newsListOne()
        this.newsListTwe()
        this.imgListAbverFun()
    },
    methods:{
        newsListOne(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<4){
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
                    if(i<7){
                        arr.push(res.articles[i])
                    }
                }
                this.listTwe=arr
            }) 
        },
        imgListAbverFun(){
            imgListAbver().then((res) => {
                let arr = []
                let arrTwe = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<4){
                        arr.push(res.articles[i])
                    }
                    if(i<2){
                        arrTwe.push(res.articles[i])
                    }
                }
                this.imgList = arr
                this.imgListTwe = arrTwe
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
.first{position:relative;font-size:16px;margin:10px 25px 0;padding-bottom:5px;}
.first .first-div:before{content:"";position:absolute;top: -50%;bottom: -50%;left: -50%;right: -50%;width: 200%;height: 200%;-webkit-transform: scale(0.5);transform: scale(0.5);border-top: solid 1px #ccc;box-sizing:border-box;height:0px;overflow:hidden;}
</style>