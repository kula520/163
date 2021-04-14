<template>
    <div>         
        <div class="bjnewsImg">
            <img src="../../../../assets/siled/2.jpg">
            <p>动漫展开播20周年纪念日</p>
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
    </div>
</template>
<script>
import {newsList} from '../../../../axios/api'
export default {
    name:'gkk',
    data(){
        return {
           listTwe:[]
        }
    },
    mounted(){
        this.newsListTwe()
    },
    methods:{ 
        newsListTwe(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<5){
                        arr.push(res.articles[i])
                    }
                }
                this.listTwe=arr
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
.bjnewsImg{width:450px;overflow:hidden;}
.bjnewsImg img{width:450px;height:118px;}
.bjnewsImg p{height:30px;line-height:30px;background-color:#ccc;color:#333;text-align:center;font-size:14px;}
.first{position:relative;font-size:16px;margin:10px 0 0;padding-bottom:5px;}
.first .first-div:before{content:"";position:absolute;top: -50%;bottom: -50%;left: -50%;right: -50%;width: 200%;height: 200%;-webkit-transform: scale(0.5);transform: scale(0.5);border-top: solid 1px #ccc;box-sizing:border-box;height:0px;overflow:hidden;}
</style>