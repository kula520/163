<template>
    <div class="bj">        
        <headTop></headTop>
        <div id="box">
            <input type="text" id='dmInput'>
            <button id='send'>发送</button>
        </div>
    </div>
</template>

<script>
import headTop from '../headtop/headtop'
export default {
    name:'bulletchat',
    components:{
        headTop
    },
    mounted(){
        // document.body.style.position='fixed'; // 解决移动端 overflow: hidden;失效问题

        let dmInput = document.getElementById('dmInput')
        let send = document.getElementById('send')

        var obj = {};  //定义一个空对象
        var val = '';  //赋予初始值

        Object.defineProperty(obj, 'val', {   // 定义要修改对象的属性
            get: function () {
            return val;
        },
        set: function (newVal) { 
            val = newVal;//定义val等于修改后的内容
            document.getElementById('dmInput').value = val;//让文本框的内容等于val
        }
        });
        document.addEventListener('keyup', function (e) {
            obj.val = e.target.value;
        })
        // 添加弹幕的函数
        function addDm(){
            var x = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            var location = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
            document.body.appendChild(document.createElement("div")).classList.add('dm'+x)
            let dm = document.querySelectorAll('.dm'+x)
            dm[dm.length-1].textContent = val;
            if(x==1 || x==3){
                dm[dm.length-1].style.top = location + 'vh'
            }
            if(x==2 || x==4){
                dm[dm.length-1].style.left = location + 'vw'
            }
        }

        send.addEventListener('click',()=>{
            if(val.trim() !== ''){
                if(val.trim().length>10){
                    return alert('最多输入十个文字')
                }
                addDm()
            }
        })
    }
}
</script>
<style>
    .bj{background:url('../../assets/photopic/8.jpg') no-repeat;
         width: 100vw;
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      user-select: none;
      overflow:hidden;}
    #box{
      position: absolute;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
    }
    #dmInput{
      width: 200px;
      height: 30px;
      padding-left:10px;
      color: rgb(255, 139, 139);
      border: 1px solid white;
      border-radius: 30px;
      outline: none;
      background-color: rgba(0, 0, 0, 0.6);
    }
    #send{
      width: 60px;
      height: 32px;
      border-radius: 30px;
      outline: none;
    }
    .dm1{
      position: absolute;
      width: 200px;
      height: 40px;
      background-color: rgba(218, 112, 214, 0.6);
      border: 1px solid white;
      border-radius: 5px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 4px;
      animation: move1 3s linear;
      animation-fill-mode: forwards;
    }
    .dm2{
      position: absolute;
      width: 40px;
      height: 200px;
      background-color: rgba(218, 112, 214, 0.6);
      border: 1px solid white;
      border-radius: 4px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 4px;
      writing-mode: vertical-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/ 
      writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/  
      animation: move2 3s linear;
      animation-fill-mode: forwards;
    }
    .dm3{
      position: absolute;
      width: 200px;
      height: 40px;
      background-color: rgba(218, 112, 214, 0.6);
      border: 1px solid white;
      border-radius: 4px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 5px;
      animation: move3 3s linear;
      animation-fill-mode: forwards;
    }
    .dm4{
      position: absolute;
      width: 40px;
      height: 200px;
      background-color: rgba(218, 112, 214, 0.6);
      border: 1px solid white;
      border-radius: 5px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 4px;
      writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/ 
      writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/  
      animation: move4 3s linear;
      animation-fill-mode: forwards;
    }
    /* 从左开始运动 */
    @keyframes move1  
    {
      from {left:-200px;display: block;}
      to {left: 100vw;display: none;}
    }
    /* 从上开始运动 */
    @keyframes move2
    {
      from {top:-40px;display: block;}
      to {top: 100vh;display: none;}
    }
    /* 从右开始运动 */
    @keyframes move3
    {
      from {right:-200px;display: block;}
      to {right: 100vw;display: none;}
    }
    /* 从下开始运动 */
    @keyframes move4
    {
      from {bottom:-40px;display: block;}
      to {bottom: 100vh;display: none;}
    }
</style>