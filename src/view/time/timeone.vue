<template>
    <div>
        <headTop></headTop>
        <div style="height:100px;"></div>
        <div class="timebox2">
            <div class="timetext">
                <div class="timetexttitle">2020年元旦倒计时</div>
                <div class="timetextintro">元旦时间：2020年1月1日 农历腊月初七 星期三</div>
                <div class="timetextintro">目前距离2020年元旦还有</div>
                <div class="timecounter">
                    <span id="t_d">127 天</span>
                    <span id="t_h">10 时</span>
                    <span id="t_m">24 分</span>
                    <span id="t_s">8 秒</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'timeOne',
    data(){
      return {
        timer:Object
      }
    },
    components:{
        headTop
    },
    created(){
        this.timer = setInterval(this.getRTime, 1000);
    },
    methods:{
        getRTime() {
            var EndTime = new Date("2022/01/01 00:00:00"); //截止时间
            var NowTime = new Date();
            var t = EndTime.getTime() - NowTime.getTime();
            var d = Math.floor(t / 1000 / 60 / 60 / 24);
            var h = Math.floor(t / 1000 / 60 / 60 % 24);
            var m = Math.floor(t / 1000 / 60 % 60);
            var s = Math.floor(t / 1000 % 60);
            document.getElementById("t_d").innerHTML = d + " 天";
            document.getElementById("t_h").innerHTML = h + " 时";
            document.getElementById("t_m").innerHTML = m + " 分";
            document.getElementById("t_s").innerHTML = s + " 秒";
        }
    },
    // 销毁监听事件
    destroyed(){
        clearInterval(this.timer)
    }
}
</script>
<style scoped>
.timebox2{width:640px;background-color:#FCF3E2;padding: 1rem 0;}
.timebox2 div,timebox2 span,timebox2 div span{color: #333 !important;}
.timebox2 .timecounter span{color: #333 !important;}
.timetext{width: 100%;text-align: center;}
.timetexttitle{font-size:0.3rem;margin-bottom: 10px;color: #fff;}
.timetextintro{font-size: 0.22rem;margin-bottom: 10px;color: #fff;padding: 0 1.52rem;box-sizing: border-box;}
.timecounter{font-size: 0.6rem;}
.txt{padding: 0 0.2rem;box-sizing:border-box;}
.clearbg5{display: block;clear: both;width: 100%;height: 0.16rem;overflow: hidden;background-color: #eee;}
.txt p{line-height: 30px;margin-top: 0.2rem;}
.txt p img{width: 100%;}
.timecounter span{color: #fff;}
</style>