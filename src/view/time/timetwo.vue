<template>
    <div>
        <headTop></headTop>
        <div style="height:100px;"></div>
        <div class="container">
            <div class="balloon white">
                <div class="star-red"></div>
                <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
                </div>
                <div class="triangle"></div>
                <div class="string"></div>
            </div>
            <div class="balloon red">
                <div class="star"></div>
                <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
                </div>
                <div class="triangle"></div>
                <div class="string"></div>
            </div>
            <div class="balloon blue">
                <div class="star"></div>
                <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
                </div>
                <div class="triangle"></div>
                <div class="string"></div>
            </div>
            <div id="timer"></div>
            <h1>每年10月1日倒计时</h1>
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
        const year = new Date().getFullYear();
        const fourthOfJuly = new Date(year, 9, 1).getTime();
        // countdown
        this.timer = setInterval(function() {
            // get today's date
            const today = new Date().getTime();
            // get the difference
            const diff = fourthOfJuly - today;
            // math
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);
            // display
            document.getElementById("timer").innerHTML =
                "<div class=\"days\"> \
            <div class=\"numbers\">" + days + "</div>天</div> \
            <div class=\"hours\"> \
            <div class=\"numbers\">" + hours + "</div>时</div> \
            <div class=\"minutes\"> \
            <div class=\"numbers\">" + minutes + "</div>分</div> \
            <div class=\"seconds\"> \
            <div class=\"numbers\">" + seconds + "</div>秒</div> \
            </div>";
        }, 1000);
    },
    destroyed(){
        clearInterval(this.timer)
    }
}
</script>
<style>
body{background-color:#183059;}
.container {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 650px;
  height: 480px;
}

h1 {
  font-family: "Lato", sans-serif;
  text-align: center;
  margin-top: 2em;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #F6F4F3;
}

#timer {
  color: #F6F4F3;
  text-align: center;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-size: .7em;
  letter-spacing: 5px;
  margin-top: 25%;
}

.days, .hours, .minutes, .seconds {
  display: inline-block;
  padding: 20px;
  width: 100px;
  border-radius: 5px;
}

.days {
  background: #EF2F3C;
}

.hours {
  background: #F6F4F3;
  color: #183059;
}

.minutes {
  background: #276FBF;
}

.seconds {
  background: #F0A202;
}

.numbers {
  font-family: "Montserrat", sans-serif;
  color: #183059;
  font-size: 5em;
}

.white {
  position: absolute;
  background: #F6F4F3;
  height: 85px;
  width: 75px;
  left: 30%;
  top: 2%;
}
.white .triangle {
  border-bottom: 14px solid #F6F4F3;
}
.white .string {
  background: #F6F4F3;
  border: 1px solid #F6F4F3;
}

.red {
  position: absolute;
  background: #EF2F3C;
  left: 18%;
  top: 9%;
  height: 65px;
  width: 70px;
}
.red .triangle {
  border-bottom: 14px solid #EF2F3C;
}
.red .string {
  background: #EF2F3C;
  border: 1px solid #EF2F3C;
}

.blue {
  position: absolute;
  background: #276FBF;
  height: 80px;
  width: 80px;
  left: 60%;
  top: 5%;
}
.blue .triangle {
  border-bottom: 14px solid #276FBF;
}
.blue .string {
  background: #276FBF;
  border: 1px solid #276FBF;
}

.balloon {
  border: 1px solid #000;
  border-radius: 50% 50% 50% 50%/ 40% 40% 60% 60%;
  z-index: 2;
}

.eye {
  position: absolute;
  width: 7px;
  height: 7px;
  top: 40%;
  left: 22%;
  background: #000;
  border-radius: 50%;
}
.eye:after {
  content: '';
  left: 35px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #000;
  position: absolute;
}

.mouth {
  position: absolute;
  top: 45%;
  left: 43%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.happy {
  border: 2px solid;
  border-color: transparent #000 #000 transparent;
  transform: rotate(45deg);
}

.triangle {
  position: absolute;
  left: 40%;
  bottom: -10%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
}

.string {
  position: absolute;
  height: 70px;
  width: 1px;
  left: 48%;
  top: 100%;
  z-index: -1;
}

.star {
  width: 20px;
  height: 20px;
  background: #F6F4F3;
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.star-red {
  width: 30px;
  height: 30px;
  margin-left: 51px;
  margin-top: -5px;
  background: #EF2F3C;
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}


</style>