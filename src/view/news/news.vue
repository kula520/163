<template>
    <div>
        <headTop></headTop>
        <div class="warpper">
            <div class="header">
                <a href="#">新闻</a>|
                <a href="#">体育</a>|
                <a href="#">NBA</a>|
                <a href="#">娱乐</a>|
                <a href="#">财经</a>|
                <a href="#">股票</a>|
                <a href="#">汽车</a>|
                <a href="#">汽车</a>|
                <a href="#">科技</a>|
                <a href="#">手机</a>|
                <a href="#">智能</a>|
                <a href="#">女人</a>|
                <a href="#">直播</a>|
                <a href="#">视频</a>|
                <a href="#">旅游</a>|
                <a href="#">房产</a>|
                <a href="#">家居</a>|
                <a href="#">教育</a>|
                <a href="#">读书</a>|
                <a href="#">北京</a>|
                <a href="#">健康</a>|
                <a href="#">艺术</a>
            </div>
            <div class="evaluateBd">
                <div class="evaluateTil">商品评价</div>
                <div class="hotPaiseBd">
                    <div class="hotNum"><span>好评度</span>
                        <strong>95<em>%</em></strong>
                    </div>
                    <div class="key">
                        <ul>
                            <li v-for="(item,i) in keyList" :key="i"><a href="#">{{item.key}}({{item.num}})</a></li>
                        </ul>
                    </div>
                </div>

                <div class="evaluatTab">
                    <span class="rf">时间排序</span>
                    <a class="cur">全部评价({{format(125657)}})</a>
                    <a>晒图({{format(500)}})</a>
                    <a>视频晒单({{format(600)}})</a>
                    <a>追评({{format(8000)}})</a>
                    <a>追评({{format(800)}})</a>
                    <a>好评({{format(60000)}})</a>
                    <a>中评({{format(5000)}})</a>
                    <a>差评({{format(300)}})</a>
                    <a>只看当前商品评价</a>
                </div>

                <div class="evaluatList">
                    <ul>
                        <li class="list" v-for="(item,i) in evaluatList" :key="i">
                            <div class="userInfo">
                                <img :src="item.imgSrc">
                                <h4>{{item.name}}</h4>
                                <div class="plus" v-if="item.plus == true">plus会员</div>
                            </div>
                            <div class="userMain">
                                <div class="xing">{{item.xing}}</div>
                                <p>{{item.evaluaVal}}</p>
                                <ul class="imgSmal">
                                    <li v-for="(img,j) in imgList" :key="j" @click="imgClick(img,i,j)"><img :src="img"></li>
                                </ul>
                                <div class="clear"></div>
                                <div class="imgBig"><img src="../../assets/dazhen.jpg"></div>
                                <div class="info"><span>{{item.time}}</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
import {evaluateDataList}from '../../axios/api'
import $ from 'jquery'
export default {
    name:'news',
    components:{
        headTop
    },
    data(){
        return {
            keyList:[],
            evaluatList:[],
            imgList:[]
        }
    },
    mounted(){
        this.evaluateFun()
    },
    methods:{
        evaluateFun(){
            evaluateDataList().then((res) => {      
                let data = res.articles
                this.evaluatList = data
                let keyArray = []
                let imgArray = []
                for(let i=0;i<data.length;i++){
                    let keyVal = data[i].key
                    let imgVal = data[i].picSrc
                    let keyNum = data[i].number
                    let keyObj = Object()
                    keyObj.key = keyVal.slice(0,keyVal.length-1)
                    keyObj.num = keyNum
                    if(i<12){
                        keyArray.push(keyObj)
                    }
                    if(i<6){
                        imgArray.push(imgVal)
                    }
                }
                this.keyList = keyArray
                this.imgList = imgArray
            }) 
        },
        //js将大数字单位转化成 千、万、千万、亿
        format(val) {
            let nVal= ['', '', ''];
            let fr = 1000;
            let num = 3;
            while (val / fr >= 1) {
                fr *= 10;
                num += 1;
            }
            if (num <= 4) { // 千
                nVal[1] = '千+';
                nVal[0] = parseInt(val / 1000) + '';
            } else if (num <= 8) { // 万
                const str = parseInt(num - 4) / 3 > 1 ? '千万+' : '万+';
                const fm = '万+' === str ? 10000 : 10000000;
                nVal[1] = str;
                nVal[0] = (val / fm) + '';
            } else if (num <= 16) {// 亿
                let str = (num - 8) / 3 > 1 ? '千亿+' : '亿+';
                str = (num - 8) / 4 > 1 ? '万亿+' : str;
                str= (num - 8) / 7 > 1 ? '千万亿+' : str;
                
                let fm = 1;
                if ('亿+' === str) {
                    fm = 100000000;
                } else if ('千亿+' === str) {
                    fm = 100000000000;
                } else if ('万亿+' === str) {
                    fm = 1000000000000;
                } else if ('千万亿+' === str) {
                    fm = 1000000000000000;
                }
                nVal[1] = str;
                nVal[0] = parseInt(val / fm) + '';
            }
            if (val < 1000) {
                nVal[1] = '';
                nVal[0] = val + '';
            }
            return nVal.join('');
        },
        imgClick(imgSrc,o,b){
            let imgB = $('.imgBig')
            let imgS = $('.imgSmal').eq(o)
            let imgAli = $('.imgSmal li')
            let imgli = imgS.find('li')
            imgAli.removeClass('cur')
            imgli.not(imgli.eq(b).addClass('cur')).removeClass('cur')
            imgB.not(imgB.eq(o).show()).hide()
            imgB.eq(o).find('img').attr('src',imgSrc)
        }
    }
}
</script>
<style scoped>
@import url('../../css/home.css');
@import url('../../css/news.css');
</style>