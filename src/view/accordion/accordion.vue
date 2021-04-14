<template>
    <div>
        <section class="main_box">
            <div class="box" id="app">
                <ul>
                    <li :class="li.class" v-for="(li,i) in data" :key="i">
                        <a :href="li.href" target="_blank">
                            <h3>{{li.name}}</h3>
                            <p>{{li.text}}</p>
                            <img :src="li.src" alt="img">
                        </a>
                    </li>
                    <div style="clear: both"></div>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'accordion',
    data() {
        return {
            data:[
                {
                    class:"box_ul_li on",
                    href:"#",
                    src:require("../../assets/photopic/22.jpg"),
                    name:"图片1图片1图片1",
                    text:"文本1文本1文本1本1文本1文本1"
                },
                {
                    class:"box_ul_li",
                    href:"#",
                    src:require("../../assets/photopic/18.jpg"),
                    name:"图片1图片1图片1",
                    text:"文本1文本1文本1文本11文本1文本1文本1"
                },
                {
                    class:"box_ul_li",
                    href:"#",
                    src:require("../../assets/photopic/19.jpg"),
                    name:"图片1图片1图片1",
                    text:"文本1文本1文本文本1文本1文本1"
                },
                {
                    class:"box_ul_li",
                    href:"#",
                    src:require("../../assets/photopic/20.jpg"),
                    name:"图片1图片1图片1",
                    text:"文本1文本1文文本1文本1文本1文本1文本1文本1文本1文本1文本1"
                },
                {
                    class:"box_ul_li",
                    href:"#",
                    src:require("../../assets/photopic/21.jpg"),
                    name:"图片1图片1图片1",
                    text:"文本1文本1文本1"
                }
            ]
        }
    },
    mounted(){
        $(".box ul li").hover(function(){
            $(this).addClass('on').siblings().removeClass('on');
        });
    }
}
</script>
<style scoped>
.main_box{
	width: 100%;
	position: relative;
}
.box{
	width: 1232px;
	margin: 10px auto;
	padding: 15px;
}
.box_ul_li{
	width: 202px;
	height: 300px;
	box-shadow: 3px 2px 30px rgba(0,0,0,.1);
	float: left;
	text-align: center;
	position: relative;
	transition: all .6s ease-out;
}
.box ul li h3{
	padding-top: 30px;
	color: #333;
	font-size: 18px;
}
.box ul li p{
	margin-top: 7px;
	color: #666;
	font-size: 14px;
}
.box ul li img{
	width: 150px;
	position: absolute;
	right: 26px;
	bottom: 40px;
	transition: all .6s ease-out;
}
.box ul .on{
	width: 402px;
	height: 400px;
	background-color: #6ab0e8;
	text-align: left;
}
.box ul .on h3{
	padding-left: 20px;
	color: #FFF;
}
.box ul .on p{
	margin-left: 20px;
	color: #FFF;
}
.box ul .on img{
	width: 382px;
    position: absolute;
    right: 8px;
    bottom: 10px;
    border: 2px #3e3d3d solid;
}

</style>