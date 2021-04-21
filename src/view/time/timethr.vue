<template>
    <div>
        <headTop></headTop>
        <div style="height:100px;"></div>
        <div class="se-kl">
          <div class="se-cn">倒计时</div>
          <div class="se-en">COUNT DOWN</div>
          <i class="se-io"></i>
          <div class="se-info">距离结束还剩</div>
          <div class="se-count">
              <div class="se-day"></div>
              <div class="se-hour"><span class="se-txt">00</span></div>
              <div class="se-min"><span class="se-txt">00</span></div>
              <div class="se-sec"><span class="se-txt">00</span></div>
          </div>
      </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
import js from './js'

export default {
    name:'timeThr',
    data(){
      return {
        timer:Object
      }
    },
    components:{
        headTop
    }
}
</script>
<style>
.se-kl {
    width: 190px;
    height: 275px;
    background-color: #e83632;
    margin: 100px auto;
    position: relative;
}

.se-cn {
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 34px;
    color: #fff;
}

.se-en {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.5);
}

.se-io {
    width: 20px;
    height: 33px;
    position: absolute;
    left: 85px;
    top: 126px;
    display: block;
}

.se-info {
    position: absolute;
    top: 170px;
    text-align: center;
    width: 100%;
    font-size: 16px;
    color: #fff;
}

.se-count {
    position: absolute;
    top: 212px;
    left: 30px;
    height: 40px;
}

.se-day {
    display: none;
}

.se-hour,
.se-min,
.se-sec {
    position: relative;
    background-color: #2f3430;
    width: 40px;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    margin-right: 5px;
}

.se-txt {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
}

.se-txt:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e83632;
}
</style>