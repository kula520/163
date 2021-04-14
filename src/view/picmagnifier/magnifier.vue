<template>
    <div>        
        <headTop></headTop>
        <div class="product-intro">
            <div class="center">
                <div class="product-left">
                <div class="box" id="box">
                    <div class="smallbox">
                        <img src="../../assets/photopic/11.jpg">
                        <span class="i_box"></span>
                        <div class="search"></div>
                    </div>
                    <div class="bigbox">
                        <img src="../../assets/photopic/11.jpg" style="position: absolute;left: 0;top:0;">
                    </div>
                </div>
                    <div class="listimg">
                    <a href="javascript:;" >
                        <i class="sprite-arrow-prev" id="spec-forward">‹</i>
                    </a>
                    <a href="javascript:;" >
                        <i class="sprite-arrow-next" id="spec-backward">›</i>
                    </a>

                    <div class="list_center" id="list_center">
                        <ul style="position: absolute;top: 0;left: 0;">
                            <li><img src="../../assets/photopic/11.jpg"/></li>
                            <li><img src="../../assets/photopic/12.jpg"/></li>
                            <li><img src="../../assets/photopic/13.jpg"/></li>
                            <li><img src="../../assets/photopic/14.jpg"/></li>
                            <li><img src="../../assets/photopic/15.jpg"/></li>
                            <li><img src="../../assets/photopic/16.jpg"/></li>
                            <li><img src="../../assets/photopic/17.jpg"/></li>
                        </ul>
                    </div>
                    </div>

                </div>



            </div>
            </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'magnifier',
    components:{
        headTop
    },
    mounted(){
        window.onload=function () {
            var box = document.getElementById("box");
            var smallbox = box.children[0];
            var bigbox = box.children[1];
            var bigimg = bigbox.children[0];
            var smallpic = smallbox.children[0];
            var i_box = smallbox.children[1];
            var list_img = document.getElementById("list_center");
            var list_ul=list_img.getElementsByTagName("ul")[0];
            var list_li=list_img.getElementsByTagName("li");
            var leftpre=document.getElementById("spec-forward");
            var rightpre=document.getElementById("spec-backward");
            smallbox.onmouseover = function () {
                i_box.style.display="block";
                bigbox.style.display="block";
                smallbox.onmousemove = function (event) {
                    var event = event || window.event;
                    var pinX = event.clientX - smallbox.offsetParent.offsetLeft - i_box.offsetWidth / 2;
                    var pinY = event.clientY - smallbox.offsetParent.offsetTop - i_box.offsetHeight / 2;
                    if (pinX < 0) {
                        pinX = 0;
                    }
                    if (pinX >= smallbox.offsetWidth - i_box.offsetWidth) {
                        pinX = smallbox.offsetWidth - i_box.offsetWidth;

                    }
                    if (pinY < 0) {
                        pinY = 0;
                    }
                    if (pinY >= smallbox.offsetHeight - i_box.offsetHeight) {
                        pinY = smallbox.offsetHeight - i_box.offsetHeight;
                    }
                    i_box.style.left = pinX + "px";
                    i_box.style.top = pinY + "px";
                    bigimg.style.left = -pinX / (smallbox.offsetWidth / bigbox.offsetWidth) + "px";
                    bigimg.style.top = -pinY / (smallbox.offsetHeight / bigbox.offsetHeight) + "px";
                }
            }
            smallbox.onmouseout=function () {
                i_box.style.display="none";
                bigbox.style.display="none";
            }
            for (var i=0;i<list_li.length;i++)
            {
                (
                    function (i) {
                        var img= list_li[i];
                        img.onmouseover = function()
                        {
                            var srcImg = $('#list_center').find('li').eq(i).find('img').attr('src')
                            console.log(srcImg)
                            smallpic.src=srcImg;
                            bigimg.src=srcImg;
                        }
                    }
                )(i)
            }
            list_ul.style.width=58*list_li.length+"px";
            var i=list_li.length-5;
            var index=0;
            var indexon=-58;
            leftpre.onclick=function () {
                var leftindex=parseInt(list_ul.style.left);
                console.log(i*index);
                console.log(leftindex);
                if(leftindex>i*indexon)
                {
                    index=index+(-58);
                    list_ul.style.left=index+"px";
                }
            }
            rightpre.onclick=function () {
                var leftindex=parseInt(list_ul.style.left);
                if(leftindex<0)
                {
                    index=index-(-58);
                    list_ul.style.left=index+"px";
                }
            }
        }
    }
}
</script>
<style>
.center{ width: 1210px; margin:200px auto;}
.product-intro{margin: 10px 0px;}
.product-left{ width: 352px; float: left; padding-bottom: 15px;position: relative;}
.box{ float: left;}
.smallbox{ width: 350px; height: 350px;border:1px solid #ccc; position: relative;}
.smallbox img{ width: 350px; height: auto;vertical-align:middle;}
.i_box{width: 235px; height: 235px; border: 1px solid #CCC; position: absolute;left: 0;
top: 0;background: rgba(243,210,76,0.5);cursor: move;display: none;}
.bigbox{ width:800px;height: 800px; overflow: hidden;position: absolute;left: 352px; top:0; border: 1px solid #CCCCCC;
display: none;}
.bigbox img{width:100%;height:auto;}
.search{ width: 30px; height: 30px; position: absolute; right: 0; bottom: 0;}
.listimg{width:350px;float: left; margin: 20px 0px; position: relative;}
.list_center{ width: 290px; height: 54px; margin: 0px auto; position: relative; overflow: hidden;}
.list_center ul{ height: 54px;}
.list_center ul li{ height: 54px; width: 54px; margin: 0 2px; float: left;}
.list_center ul li img{ width: 50px;height: 50px;border: 2px solid #FFFFFF;}
.list_center ul li img:hover{border: 2px solid #e53e41;}
.listimg i{width: 22px;height: 32px;color:#CCC}
.listimg i:hover{color:#e53e41;}
.sprite-arrow-prev,.sprite-arrow-next{top:11px; position: absolute;font-size:65px;}
.sprite-arrow-prev{left: 0;}
.sprite-arrow-next{right: 0;}
</style> 