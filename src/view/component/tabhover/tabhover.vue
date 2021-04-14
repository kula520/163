<template>
    <div>
        <div class="hoverTabs">
            <div class="line"></div>
            <ul>
                <li v-for="(item,i) in tabArray" 
                :key="i" 
                :class="{'cur':i==hoverIndex}">
                <a @mouseover="hoverIndex = i" 
                @mousemove="mouseOverHandle(item.title)" href="#">{{item.name}}</a></li>
            </ul>
        </div>  

        <keep-alive>     
            <div :is="newsLi" v-cloak></div>
        </keep-alive>
    </div>
</template>
<script>
import news from '../tabhover/bjnew/news'
import bjnews from '../tabhover/bjnew/bjnews'
import jshk from '../tabhover/bjnew/jshk'
import gkk from '../tabhover/gkk/gkk'
import zsgl from '../tabhover/zsgl/zsgl'
export default {
    name:'hoverTab',
    components:{
        news,
        bjnews,
        jshk,
        gkk,
        zsgl
    },
    data(){
        return {            
            newsLi:'',
            hoverIndex:0
        }
    },
    props:{
        tabArray:Array
    },
    created(){
        this.newsLi = this.tabArray[0].title
    },
    methods:{
        mouseOverHandle(obj){
            this.newsLi = obj
        } 
    }
}
</script>
<style scoped>
[v-cloak]{display:none;}
.hoverTabs{height:50px;position:relative;line-height:50px;overflow:hidden;}
.hoverTabs ul{width:100%;position:relative;z-index:99;}
.hoverTabs ul:before{content:"";position:absolute;top: -50%;bottom: -50%;left: -50%;right: -50%;width: 200%;height: 200%;-webkit-transform: scale(0.5);transform: scale(0.5);border-top: solid 1px #ccc;box-sizing:border-box;height:0px;overflow:hidden;}
.hoverTabs ul li{width:25%;float:left;border-top:2px solid #fff;text-align:center;text-align:center;}
.hoverTabs ul li a{text-decoration:none;font-size:18px;display:block;width:100%;height:50px;}
.hoverTabs ul li a:hover{color:#ff3333;}
.hoverTabs ul li.cur{border-top:2px solid #ff3333;}
</style>