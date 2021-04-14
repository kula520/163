<template>
    <div>
        <headTop></headTop>
        <div class="jdRight">
            <div class="jdL"><img @click="openHandle" src="../../assets/jdright/1.png">
                <div class="jdnav">
                    <i>🙍‍♂️</i>
                    <div class="info">用户信息</div>
                </div>
                <div class="clear"></div>
                <div class="jdnav">
                    <i>🚚</i>
                    <div class="info">购物车</div>
                </div>
                <div class="clear"></div>
                <div class="jdnav">
                    <i>❤️</i>
                    <div class="info">收&nbsp;藏</div>
                </div>
                <div class="clear"></div>
                <div class="upTop" @click="upTop">
                    <i>up</i>
                </div>
            </div>
            <div class="jdR">123123123123123</div>
            <div class="clear"></div>
        </div>
        <div style="width:100%;height:3000px;background-color:#f2f2f2;">
            <p>alsjdflajsdlfjalsjdfljasdfouij230</p>
        </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'jd',
    data(){
        return {
            showRight:true
        }
    },
    components:{
        headTop
    },
    mounted(){
        let h = $(window).height()
        let jdR = $('.jdRight')
        jdR.css({'height':h}) 
        this
        let jdnav = $('.jdnav')
        let info = $('.info')
        jdnav.each(function(i){
            let time;
            $(this).hover(function(){
                time = setTimeout(function(){
                    info.eq(i).stop().animate({right:'0'},300)
                },300)
            },function(){
                clearTimeout(time)
                info.animate({right:'-100px'},0)
            });
        })
    },
    methods:{
        openHandle(){
            let jdRight = $('.jdRight')
            if(this.showRight == true){                
                jdRight.animate({right:'0'},300)
                this.showRight = false
                return false
            } else {                
                jdRight.animate({right:'-200px'},300)
                this.showRight = true
                return false
            }
        },
        upTop(){
            $('body,html').animate({
                scrollTop: 0
            }, 300);
        }
    }
}
</script>
<style scoped>
.jdRight{width:300px;z-index:99;top:45px;right:-200px;position:fixed;overflow:hidden;text-align:right;}
.jdRight img{cursor: pointer;}
.jdRight .jdL{overflow:hidden;width:94px;position:relative;height:100%;float:left;border-right:6px solid #7a6e6e;}
.jdRight .jdL .jdnav{width:35px;height:35px;float:right;position:relative;margin-bottom:1px;cursor:pointer;}
.jdRight .jdL .jdnav i,.jdRight .jdL .jdnav .info{position:absolute;top:0;line-height:35px;color:#fff;background-color:#7a6e6e;border-radius: 5px 0 0 5px;-webkit-border-radius: 5px 0 0 5px;-moz-border-radius: 5px 0 0 5px;}
.jdRight .jdL .jdnav i{position:absolute;top:0;right:0;display:block;width:35px;height:35px;line-height:35px;text-align:center;z-index:999}
.jdRight .jdL .jdnav .info{z-index:99;right:-100px;background-color:#ff3333;padding:0 10px;width:75px;text-align:left;}
.jdRight .jdL .jdnav:hover i{background-color:#ff3333;}
.jdRight .jdL .upTop{position:absolute;right:0;width:35px;height:35px;line-height:35px;text-align:center;z-index:999;color:#fff;background-color:#7a6e6e;border-radius: 5px 0 0 5px;-webkit-border-radius: 5px 0 0 5px;-moz-border-radius: 5px 0 0 5px;cursor:pointer;}
.jdRight .jdR{background-color:#7a6e6e;height:100%;float:right;width:180px;overflow:hidden;cursor:pointer;color:#fff;padding:10px;}
</style>