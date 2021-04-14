<template>
    <div>
        <div class="headerbd">
            <div class="header">
                <div class="lf">
                    <ul class="leftNav lf">
                        <li>
                            <router-link :to="{name:'home'}">网易首页</router-link>                   
                        </li>
                        <li @mouseenter="cur=0"
                            @mouseleave="cur=-1"                        
                        ><span class="moreYy" :class="{cur:cur == 0}">应用</span>
                            <div v-show="cur==0" class="moreDown left">
                                <dl>
                                    <dt><a href="#">网易新闻</a></dt>
                                    <dt><a href="#">网易公开课</a></dt>
                                    <dt><a href="#">网易红彩</a></dt>
                                    <dt><a href="#">网易新闻视频版</a></dt>
                                    <dt><a href="#">网易严选</a></dt>
                                    <dt><a href="#">邮箱大师</a></dt>
                                    <dt><a href="#">网易云课堂</a></dt>
                                </dl>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="rf">
                    <ul class="leftNav lf">
                        <li @mouseenter="cur=1"
                            @mouseleave="cur=-1"
                            ><span class="moreYy" :class="{cur:cur == 1}">手机版</span>
                            <div v-show="cur==1" class="moreDown right">
                                <dl>
                                    <dt class="last"><img src="../../assets/ewm.png"></dt>
                                </dl>
                            </div>
                        </li>
                        <li @mouseenter="cur=2"
                            @mouseleave="cur=-1"  
                        ><span class="moreYy" :class="{cur:cur == 2}">公开课</span>
                            <div v-show="cur==2" class="moreDown right">
                                <dl>
                                    <dt><a href="#">TED</a></dt>
                                    <dt><a href="#">中国大学视频公开课</a></dt>
                                    <dt><a href="#">国际名校公开课</a></dt>
                                    <dt><a href="#">赏课·纪录片</a></dt>
                                    <dt><a href="#">付费精品课程</a></dt>
                                    <dt><a href="#">北京大学公开课</a></dt>
                                    <dt class="last"><a href="#">英语课程学习</a></dt>
                                </dl>
                            </div>
                        </li>
                        <li @mouseenter="cur=3"
                            @mouseleave="cur=-1"  
                        ><span class="moreYy" :class="{cur:cur == 3}">严选</span>
                            <div v-show="cur==3" class="moreDown right">
                                <dl>                                    
                                    <dt><a href="#">新人特价</a></dt>
                                    <dt><a href="#">9.9专区</a></dt>
                                    <dt><a href="#">新品热卖</a></dt>
                                    <dt><a href="#">人气好物</a></dt>
                                    <dt><a href="#">量贩囤货</a></dt>
                                    <dt><a href="#">居家生活</a></dt>
                                    <dt><a href="#">服饰鞋包</a></dt>
                                    <dt><a href="#">母婴亲子</a></dt>
                                    <dt class="last"><a href="#">美食酒水</a></dt>
                                </dl>
                            </div>
                        </li>
                        <li @mouseenter="cur=4"
                            @mouseleave="cur=-1"  
                        ><span class="moreYy font20" :class="{cur:cur == 4}">¥</span>
                            <div v-show="cur==4" class="moreDown right">                       
                                <dl>                                    
                                    <dt><a href="#">一卡通充值</a></dt>
                                    <dt><a href="#">一卡通购买</a></dt>
                                    <dt><a href="#">网易白金卡</a></dt>
                                    <dt><a href="#">我的网易支付</a></dt>
                                    <dt class="last"><a href="#">网易来钱-借现金</a></dt>
                                </dl>
                            </div>
                        </li>
                           
                        <li @mouseenter="cur=5"
                            @mouseleave="cur=-1"  
                        ><span class="moreYy font20" :class="{cur:cur == 5}">🛒</span>
                            <div v-show="cur==5" class="moreDown right">  
                                <dl>                                    
                                    <dt><a href="#">严选</a></dt>
                                    <dt class="last"><a href="#">我要借钱</a></dt>
                                </dl>
                            </div>
                        </li>
                        <li @mouseenter="cur=6"
                            @mouseleave="cur=-1"  
                        ><span class="moreYy font20" :class="{cur:cur == 6}">✉</span>
                            <div v-show="cur==6" class="moreDown right">                                
                                <dl>                                    
                                    <dt><a href="#">免费邮箱</a></dt> 
                                    <dt><a href="#">VIP邮箱</a></dt> 
                                    <dt><a href="#">企业邮箱</a></dt> 
                                    <dt><a href="#">免费注册</a></dt>
                                    <dt class="last"><a href="#">客户端下载</a></dt>
                                </dl>
                            </div>
                        </li>
                        <li @mouseenter="cur=7"
                            @mouseleave="cur=-1"  
                        ><span class="moreYy" :class="{cur1:cur == 7}">
                            登录
                        </span>
                            <div v-show="cur==7" class="moreDown right" style="width:240px;">   
                                <dl style="width:240px;">                                  
                                    <dt class="last">
                                        <div><el-input class="inpt" placeholder="请输入内容"></el-input></div>
                                        <div><el-input class="inpt" placeholder="请输入内容"></el-input></div>
                                        <div><el-button class="button" type="primary">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button></div>
                                        <div><a href="#" class="rf">忘记密码？</a><el-checkbox>10天内免登录</el-checkbox></div>
                                    </dt>
                                </dl>
                            </div>
                        </li>
                        <li @mouseenter="cur=8"
                            @mouseleave="cur=-1"
                        ><span class="moreYy" :class="{cur:cur == 8}">
                            <router-link :to="{name:'login'}">注册免费邮箱</router-link>
                            </span>
                            <div v-show="cur==8" class="moreDown right" style="width:200px;">   
                                <dl style="width:200px;">                                    
                                    <dt><a href="#">注册VIP邮箱（特权邮箱，付费）</a></dt> 
                                    <dt class="last"><a href="#">免费下载网易官方手机邮箱应用</a></dt>
                                </dl>
                            </div>
                        </li>
                        <li><span @click="val=2" class="font24" v-show="val==1">≡</span>
                            <span @click="val=1" class="font24" v-show="val==2">×</span>                            
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="mapNavbd" v-show="val==2" ref="treeWrap">
            <div class="mapNav">
                <ul>
                    <li><h4>新闻</h4></li>
                    <li><span>国内</span></li>
                    <li><span>国际</span></li>
                    <li><span>图片</span></li>
                    <li><span>评论</span></li>
                    <li><span>探索</span></li>
                    <li><span>军事</span></li>
                    <li><span>本地新闻</span></li>
                    <li><span>王三三</span></li>
                </ul>
                <ul>
                    <li><h4>体育</h4></li>
                    <li><span>NBA</span></li>
                    <li><span>CBA</span></li>
                    <li><span>综合</span></li>
                    <li><span>中超</span></li>
                    <li><span>国际足球</span></li>
                    <li><span>英超</span></li>
                    <li><span>西甲</span></li>
                    <li><span>意甲</span></li>
                </ul>
                <ul>
                    <li><h4>娱乐</h4></li>
                    <li><span>明星</span></li>
                    <li><span>图片</span></li>
                    <li><span>电影</span></li>
                    <li><span>电视</span></li>
                    <li><span>音乐</span></li>
                    <li><span>稿事编辑部</span></li>
                    <li><span>娱乐FOCUS</span></li>
                    <li><span>星捕快</span></li>
                </ul>
                <ul>
                    <li><h4>财经</h4></li>
                    <li><span>股票</span></li>
                    <li><span>行情</span></li>
                    <li><span>产经</span></li>
                    <li><span>新股</span></li>
                    <li><span>金融</span></li>
                    <li><span>基金</span></li>
                    <li><span>商业</span></li>
                    <li><span>理财</span></li>
                </ul>
                <ul>
                    <li><h4>汽车</h4></li>
                    <li><span>购车</span></li>
                    <li><span>行情</span></li>
                    <li><span>选车</span></li>
                    <li><span>车型库</span></li>
                    <li><span>行业</span></li>
                    <li><span>用车</span></li>
                    <li><span>汽车图片</span></li>
                </ul>
                <ul>
                    <li><h4>科技</h4></li>
                    <li><span>通信</span></li>
                    <li><span>IT</span></li>
                    <li><span>互联网</span></li>
                    <li><span>移动互联网</span></li>
                    <li><span>特别策划</span></li>
                    <li><span>五道口沙龙</span></li>
                    <li><span>易语中的</span></li>
                    <li><span>专题</span></li>
                </ul>
                <ul>
                    <li><h4>女人</h4></li>
                    <li><span>亲子</span></li>
                    <li><span>艺术</span></li>
                    <li><span>时尚</span></li>
                    <li><span>收藏</span></li>
                    <li><span>情感</span></li>
                    <li><span>星座</span></li>
                    <li><span>美容</span></li>
                </ul>
                <ul>
                    <li><h4>手机/数码</h4></li>
                    <li><span>移动</span></li>
                    <li><span>电脑</span></li>
                    <li><span>手机库</span></li>
                    <li><span>家电</span></li>
                    <li><span>智能硬件</span></li>
                    <li><span>相机</span></li>
                    <li><span>手机视频</span></li>
                </ul>
                <ul>
                    <li><h4>房产/家居</h4></li>
                    <li><span>北京房产</span></li>
                    <li><span>上海房产</span></li>
                    <li><span>广州房产</span></li>
                    <li><span>全部分站</span></li>
                    <li><span>楼盘库</span></li>
                    <li><span>家具</span></li>
                    <li><span>卫浴</span></li>
                    <li><span>衣柜</span></li>
                </ul>
                <ul>
                    <li><h4>旅游</h4></li>
                    <li><span>户外</span></li>
                    <li><span>贵州</span></li>
                    <li><span>美食</span></li>
                    <li><span>四川</span></li>
                    <li><span>景点</span></li>
                    <li><span>新疆</span></li>
                    <li><span>专题</span></li>
                    <li><span>西藏</span></li>
                </ul>
                <ul class="last">
                    <li><h4>教育</h4></li>
                    <li><span>移民</span></li>
                    <li><span>考研</span></li>
                    <li><span>留学</span></li>
                    <li><span>公务员</span></li>
                    <li><span>外语</span></li>
                    <li><span>中小学</span></li>
                    <li><span>高考</span></li>
                    <li><span>校园</span></li>
                </ul>
                <div class="clear"></div>
                <div class="mapMore">查看网易地图</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('../../css/header.css');
</style>
<script>
import {getSearchComment} from '../../axios/api'
export default {
    name:'head',
    data(){
        return {
            cur:-1,
            val:1
        }
    },
    created(){ 
        // this.getSearchComment()    
    },
    mounted(){
        document.addEventListener('mouseup',(e) =>{
            let tree = this.$refs.treeWrap
            if (tree) {
                if (!tree.contains(e.target)) {
                   this.val = 1
                }
            }
        })      
    },
    methods:{        
        getSearchComment() {  //自定义的方法
            let params = {
                // fromPlatform: this.searchPlatform,// 平台涞源
                // nickName: this.name,// 网名
                // pageSize: this.pagination.pageSize,// 每页几条数据
                // pageNum: this.pagination.pageNum,// 当前页数
            }
            // 根据昵称和平台搜索评论内容
            getSearchComment(params).then((res) => {              
                console.log(res)
            }) 
        }
    }
}
</script>