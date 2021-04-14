<template>
    <div>
        <div class="news">
            <ul>
                <li v-for="(item,i) in listOne" :key="i"><a :class="{cur:i<3}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="news">
            <ul>
                <li v-for="(item,i) in listTwe" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="news">
            <ul>
                <li v-for="(item,i) in listThr" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="news">
            <ul>
                <li v-for="(item,i) in listFor" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="news">
            <ul>
                <li v-for="(item,i) in listFix" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
        <div class="news">
            <ul>
                <li v-for="(item,i) in listSix" :key="i"><a :class="{cur:i==0}" href="#"><span></span>{{item.title}}</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import {newsList} from '../../../../axios/api'
export default {
    name:'news',
    data(){
        return {
           listOne:[],
           listTwe:[],
           listThr:[],
           listFor:[],
           listFix:[],
           listSix:[]
        }
    },
    mounted(){
        this.newsListOne()
        this.newsListTwe()
        this.newsListThr()
        this.newsListFor()
        this.newsListFix()
        this.newsListSix()
    },
    methods:{        
        newsListOne(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<5){
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
        newsListFor(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<4){
                        arr.push(res.articles[i])
                    }
                }
                this.listFor=arr
            }) 
        },
        newsListFix(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<6){
                        arr.push(res.articles[i])
                    }
                }
                this.listFix=arr
            }) 
        },
        newsListSix(){
            newsList().then((res) => {      
                let arr = []
                for(let i=0;i<res.articles.length;i++){
                    if(i<6){
                        arr.push(res.articles[i])
                    }
                }
                this.listSix=arr
            }) 
        }
    }
}
</script>
<style scoped>
.news ul{margin-bottom:10px;}
.news ul li{line-height:38px;height:38px;overflow:hidden;}
.news ul li span{width:4px;height:4px;overflow:hidden;display:block;float:left;margin:17px 10px;background-color:#ccc;}
.news ul li a{font-size:18px;}
.news ul li a.cur{font-weight:bold}
.news ul li a:hover{color:#ff3333;}
</style>