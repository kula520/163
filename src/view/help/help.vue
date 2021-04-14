<template>
    <div class="w1024">
        <div class="top"><router-link tag="a" :to="{name:'home'}"><em>|</em>网易首页</router-link><a href="#">进入油箱</a><img src="../../assets/login/2.png"><span>帮助中心</span></div>
        <div class="tabs"><h4>常见问题</h4></div>
        <div class="mSearch"></div>
        <div class="helpWrap">
            <div class="leftNav lf">
                <h3>常见问题</h3>
                <ul class="lNav">
                    <li v-for="(item,index) in list" class="parLi"  :key="index">
                        <a href="javascript:void(0)" @click="showTitle(item)" :class="{cur:item.flag == true}"><b v-show="item.flag == true">-</b><b v-show="item.flag==false">+</b>{{item.name}}</a>
                        <ul v-show="item.flag" class="childLi">
                            <li class="cli" v-for="(itm,i) in item.child" :key="i" @click="rightNav(item,i)">{{itm.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="rMain rf">
                <div :is="mainWarp" class="box"></div>
                <div class="img"><img src="../../assets/help/1.jpg"></div>
            </div>
        </div>
    </div>
</template>
<script>
import usertequan from './childvue/usertequan'
import mailapp from './childvue/mailapp'
import quike from './childvue/quike'
export default {
    name:'help',
    components:{
        usertequan,
        mailapp,
        quike
    },
    data(){
        return {
            mainWarp:'',
            list: [
                {
                    name: '邮箱会员', 
                    flag: false,
                    child: [
                        {
                            name: '邮箱会员特权介绍',
                            link:'usertequan'
                        }
                    ]
                },
                {
                    name: '网易邮箱大师',
                    flag: false,
                    child: [
                        {
                            name: '邮箱大师app登录问题',
                            link:'mailapp'
                        },
                        {
                            name: '闪电邮下线问题',
                            link:'quike'
                        },
                        {
                            name: '常见问题与反馈'
                        }
                    ]
                },
                {
                    name: '账号与安全',
                    flag: false,
                    child: [
                        {name: '帐号修复指引'},
                        {name: '提升帐号安全'},
                        {name: '安全手机'}
                    ]
                },
                {
                    name: 'VIP邮箱',
                    flag: false,
                    child: [
                        {name: '搬家问题'}
                    ]
                },
                {
                    name: '登录与注册',
                    flag: false,
                    child: [
                        {name: '登录'},
                        {name: '注册'}
                    ]
                },
                {
                    name: '邮件收发',
                    flag: false,
                    child: [
                        {name: '发信'},
                        {name: '收信'},
                        {name: '退信'}
                    ]
                },
                {
                    name: '客户端',
                    flag: false,
                    child: [
                        {name: '客户端协议'},
                        {name: '常见客户端报错'},
                        {name: '客户端授权码'},
                        {name: '常见客户端设置教程'}
                    ]
                },
                {
                    name: '附件与网盘',
                    flag: false,
                    child: [
                        {name: '附件上传/下载'},
                        {name: '云附件'}
                    ]
                },
                {
                    name: '增值服务',
                    flag: false,
                    child: [
                        {name: '支付帮助'}
                    ]
                },
                {
                    name: '其他',
                    flag: false,
                    child: []
                }
            ]
        }
    },
    methods: {
        showTitle(item){
            //点击一个目录其他目录隐藏
            for(var i=0;i<this.list.length;i++){
                this.list[i].flag = false;
            }
            item.flag = true;            
            //点击一次显示子目录,再次点击隐藏子目录
            // item.flag = !item.flag;            
        },
        rightNav(o,i){
            this.mainWarp = o.child[i].link
        }
    }
}
</script>
<style scoped>
@import url('../../css/help.css');
</style>