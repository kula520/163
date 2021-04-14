<template>
    <div>
        <headTop></headTop>
        <div class="photoPicMain">
            <div class="photoBig" :style="imgUrl">
                <div class="photoWarp">
                    <div class="photoNavbd">
                        <div class="bj1"></div>
                        <div class="bj2"></div>
                        <div class="photoNav">
                            <h3>Photo Album</h3>
                            <ul>
                                <li @click="clickInfo()">about us</li>
                                <li @click="clickInfo()">Photographers</li>
                                <li @click="clickInfo()">Portfolio</li>
                                <li @click="clickInfo()">Clients</li>
                                <li @click="clickInfo()">Contact us</li>
                            </ul>
                        </div>
                        <div class="bj3"></div>
                    </div>
                    <div class="photoMain">
                        <div class="photoInfobd">
                            <div class="photoInfo">OUR CLIENTS</div>
                        </div>
                        <div class="bj4"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="photoSmallBox">
                <div class="photoSmall">
                    <div class="photoSmallbd">
                        <ul id="JsmallImg">
                            <li @click="clickHandle(i)" v-for="(item,i) in smallImg" :key="i" :class="{cur:cur == i}">
                                <img :src="item.img">
                                <div class="info">
                                    <h4>{{item.til}}</h4>
                                    <div class="clear"></div>
                                    <p>{{item.time}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="prev">‹</div>
            <div class="next">›</div>
        </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'photoPic',
    components:{
        headTop
    },
    data(){
        return {
            cur:0,
            imgUrl: {
                background:'url(' + require('../../assets/photopic/1.jpg')  + ') no-repeat'
            },
            smallImg:[
                {
                    img:require('../../assets/photopic/1.jpg'),
                    time:'2021-12-01 16:20:59',
                    til:'美女影集01'
                },
                {
                    img:require('../../assets/photopic/8.jpg'),
                    time:'2021-12-02 16:20:59',
                    til:'美女影集02'
                },
                {
                    img:require('../../assets/photopic/9.jpg'),
                    time:'2021-12-03 16:20:59',
                    til:'美女影集03'
                },
                {
                    img:require('../../assets/photopic/10.jpg'),
                    time:'2021-12-04 16:20:59',
                    til:'美女影集04'
                },
                {
                    img:require('../../assets/photopic/2.jpg'),
                    time:'2021-12-05 16:20:59',
                    til:'美女影集05'
                },
                {
                    img:require('../../assets/photopic/3.jpg'),
                    time:'2021-12-06 16:20:59',
                    til:'美女影集06'
                },
                {
                    img:require('../../assets/photopic/4.jpg'),
                    time:'2021-12-07 16:20:59',
                    til:'美女影集07'
                },
                {
                    img:require('../../assets/photopic/5.jpg'),
                    time:'2021-12-08 16:20:59',
                    til:'美女影集08'
                },
                {
                    img:require('../../assets/photopic/6.jpg'),
                    time:'2021-12-09 16:20:59',
                    til:'美女影集09'
                },
                {
                    img:require('../../assets/photopic/7.jpg'),
                    time:'2021-12-10 16:20:59',
                    til:'美女影集10'
                }
            ]
        }
    },
    mounted(){
        let imgUl = $('#JsmallImg')
        let imgLi = imgUl.find('li')
        let prev = $('.prev')
        let next = $('.next')
        let _timer = {}; 
        let ulW = imgUl.width()
        let w = imgUl.find('li').length * 316;
        imgUl.css({'width':w +'px'})
        function delay_till_last(id, fn, wait) { 
            if (_timer[id]) { 
                window.clearTimeout(_timer[id]); 
                delete _timer[id]; 
            }         
            return _timer[id] = window.setTimeout(function() { 
                fn(); 
                delete _timer[id]; 
            }, wait); 
        }
        next.on('click', function() { 
            delay_till_last(imgUl, function() {//注意 id 是唯一的 
              //响应事件 
                let l = imgUl.offset().left - 50
                if(l > -(w-ulW)){
                    imgUl.stop().animate({'left':'-=316px'},300)
                }  
            },200); 
        });
        prev.on('click', function() { 
            delay_till_last(imgUl, function() {//注意 id 是唯一的 
              //响应事件 
                let l = imgUl.offset().left - 50
                if(l < 0){
                    imgUl.stop().animate({'left':'+=316px'},300)
                }  
            },200); 
        });
        imgLi.each(function(i){
            let _this = $(this)
            let trigger;
            _this.hover(function(){                
                trigger = setTimeout(function(){
                    _this.find('.info').stop(true,true).animate({"left":"0"},500)
                },300);   
            },function(){
                clearTimeout(trigger);  
                _this.find('.info').stop(true,true).animate({"left":"-180px"},300)
            })
        })
    },
    methods:{
        clickHandle(o){
            this.cur = o
            let photoMain = $('.photoMain')
            photoMain.animate({"top":'-1000px'},300)
            this.imgUrl = {
                background:'url(' + this.smallImg[o].img  + ') no-repeat'
            }
        },
        clickInfo(){
            let photoMain = $('.photoMain')
            photoMain.animate({"top":'30px'},300)
        }
    }
}
</script>
<style scoped>
.bj1{background:url('../../assets/photopic/logo1.png') no-repeat;width:183px;height:269px;}
.bj2{background:url('../../assets/photopic/logo2.png') no-repeat;width:183px;height:123px;margin-top:-100px;}
.bj3{background:url('../../assets/photopic/logo3.png') no-repeat;width:183px;height:131px;}
.bj4{background:url('../../assets/photopic/logo6.png') no-repeat;width:826px;height:101px;}
.photoPicMain{width:100%;height:950px;margin-top:45px;position:relative;background-color:#000;}
.photoBig{position:fixed;width:100%;height:950px;color:#fff;}
.photoWarp{width:1100px;position:relative;}
.photoNavbd{width:183px;overflow:hidden;margin:0 15px 0 40px;}
.photoMain{width:826px;position:absolute;top:-1000px;left:240px;}
.photoInfobd{background:url('../../assets/photopic/logo5.png') repeat-y;width:826px;}
.photoInfobd .photoInfo{padding:20px;}
.photoNav{background:url('../../assets/photopic/logo4.png') repeat-y;width:183px;padding:10px 0;text-align:center;}
.photoNav h3{font-size:16px;color:#FFE300;}
.photoNav li{height:30px;line-height:30px;color:#f2f2f2;text-transform:Uppercase;cursor:pointer;}
.photoNav li:hover{color:#FFE300}

.photoSmallBox{width:100%;height:176px;background-color:#000;padding:10px 0;position:absolute;bottom:0;left:0;z-index:99;}
.photoSmall{margin:0 50px;}
.photoSmallbd{width:100%;overflow:hidden;height:176px;position:relative;}
.photoSmallbd ul{position:absolute;top:0;left:0;}
.photoSmallbd ul li{cursor:pointer;width:300px;height:170px;float:left;margin-right:10px;border:3px solid #f2f2f2;position:relative;overflow:hidden;}
.photoSmallbd ul li.cur{border:3px solid #ff3333;}
.photoSmallbd ul li img{width:300px;height:170px;}
.photoSmallbd ul li .info{position:absolute;top:50%;left:-180px;height:60px;margin-top:-30px;z-index:999;width:180px;}
.photoSmallbd ul li .info h4{background-color:#fff;float:left;padding:0 10px;height:30px;line-height:30px;font-size:14px;color:#333;}
.photoSmallbd ul li .info p{background-color:#000;float:left;padding:0 10px;height:30px;line-height:30px;font-size:12px;color:#fff;}
.prev,.next{position:absolute;bottom:10px;width:30px;height:176px;line-height:176px;color:#fff;font-size:50px;text-align:center;z-index:199;cursor:pointer;}
.prev{left:10px;}
.next{right:10px;}
</style>