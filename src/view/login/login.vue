<template>
    <div class="loginBj">
        <div class="top"><div class="rf"><router-link tag="a" :to="{name :'help'}">帮助</router-link><em>|</em><a href="#">反馈🗨️</a></div><img src="../../assets/login/2.png"><span>|</span>中国第一大电子邮件服务商</div>
        <div class="mailMian">
            <h2>欢迎注册网易邮箱</h2>
            <div class="tabnav">
                <span @click="handleClick(0,'mftab')" :class="{cur:num==0}">免费邮箱</span>
                <span @click="handleClick(1,'viptab')" :class="{cur:num==1}">VIP邮箱</span>
            </div>
            <div :is="comtab" keep-alive></div>
        </div>
    </div>
</template>
<script>
import mftab from './mftab'
import viptab from './viptab'
export default {
    name:'login',
    data(){
        return {
            num:0,
            comtab:mftab
        }
    },
    components:{
        mftab,
        viptab
    },
    methods:{
        handleClick(o,b){
            this.num = o
            this.comtab = b
        }
    }
}
</script>
<style scoped>
.loginBj{background:#eff8ff url('../../assets/login/1.png') no-repeat bottom center fixed;background-size:1499px 630px;padding-bottom:400px;}
.top{padding:15px 20px 80px;font-size:12px;color:#555;}
.top img{height:29px;width:auto;}
.top span{padding:0 30px;}
.top em{padding:0 10px;}
.mailMian{width:500px;margin:0 auto;padding-bottom:500px;}
.mailMian h2{font-size:30px;margin-bottom:30px;}
.tabnav{height:50px;background-color:#f5f5f5;}
.tabnav span{width:250px;height:48px;border-bottom:2px solid #f5f5f5;line-height:48px;color:#555;display:block;float:left;text-align:center;font-size:20px;cursor:pointer;}
.tabnav span.cur{background-color:#fff;color:#3b78dd;border-bottom:2px solid #3b78dd;}
</style>