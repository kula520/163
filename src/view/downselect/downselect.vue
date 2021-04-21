<template>
    <div>        
        <headTop></headTop>
        <div class="mainWarpper">
            <dl class="topmenu">
                <dt>
                    <div class="selectlist">
                        <div class="select_textdiv">
                            <input type="hidden" value=""/>
                            <p class="s_text">附近</p><span class="down">﹀</span>
                        </div>
                        <div class="select_textul">
                            <ul class="select_first_ul">
                                <li class="focus">
                                    <p>附近</p>
                                    <ul class="select_second_ul" style="display: block;">
                                        <li>附近(智能范围)</li>
                                        <li>500</li>
                                        <li>1000</li>
                                        <li>1500</li>
                                        <li>2000</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>热门商城</p>
                                    <ul class="select_second_ul">
                                        <li>全部商城</li>
                                        <li>市中心区</li>
                                        <li>华侨城</li>
                                        <li>海岸城</li>
                                        <li>蛇口</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>福田区</p>
                                    <ul class="select_second_ul">
                                        <li>全部南山区</li>
                                        <li>华侨城</li>
                                        <li>蛇口</li>
                                        <li>南头</li>
                                        <li>南头中心区</li>
                                        <li>南油</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>光明新区</p>
                                    <ul class="select_second_ul">
                                        <li>全部南山区</li>
                                        <li>华侨城</li>
                                        <li>蛇口</li>
                                        <li>南头</li>
                                        <li>南头中心区</li>
                                        <li>南油</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>龙岗区</p>
                                    <ul class="select_second_ul">
                                        <li>全部南山区</li>
                                        <li>华侨城</li>
                                        <li>蛇口</li>
                                        <li>南头</li>
                                        <li>南头中心区</li>
                                        <li>南油</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>福田区</p>
                                    <ul class="select_second_ul">
                                        <li>全部南山区</li>
                                        <li>华侨城</li>
                                        <li>蛇口</li>
                                        <li>南头</li>
                                        <li>南头中心区</li>
                                        <li>南油</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>宝安区</p>
                                    <ul class="select_second_ul">
                                        <li>全部南山区</li>
                                        <li>华侨城</li>
                                        <li>蛇口</li>
                                        <li>南头</li>
                                        <li>南头中心区</li>
                                        <li>南油</li>
                                    </ul>
                                </li><li>
                                    <p>罗湖区</p>
                                    <ul class="select_second_ul">
                                        <li>全部南山区</li>
                                        <li>华侨城</li>
                                        <li>蛇口</li>
                                        <li>南头</li>
                                        <li>南头中心区</li>
                                        <li>南油</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>	
                </dt>
                <dt>
                    <div class="selectlist">
                        <div class="select_textdiv">
                            <input type="hidden" value=""/>
                            <p class="s_text">智能排序</p><span class="down">﹀</span>
                        </div>
                        <div class="select_textul">
                            <ul class="select_first_ul">
                                <li class="focus">
                                    <p>智能排序</p>
                                    <ul class="select_second_ul" style="display: block;">
                                        <li>离我最近</li>
                                        <li>人气最高</li>
                                        <li>评价最好</li>
                                        <li>口味最佳</li>
                                        <li>环境最佳</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>热门商城</p>
                                    <ul class="select_second_ul">
                                        <li>全部商城</li>
                                        <li>市中心区</li>
                                        <li>华侨城</li>
                                        <li>海岸城</li>
                                        <li>蛇口</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>	
                </dt>
                <dt>
                    <div class="selectlist">
                        <div class="select_textdiv">
                            <input type="hidden" value=""/>
                            <p class="s_text">美食</p><span class="down">﹀</span>
                        </div>
                        <div class="select_textul">
                            <ul class="select_first_ul">
                                <li>
                                    <p>西餐</p>
                                    
                                </li>
                                <li>
                                    <p>中餐</p>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>	
                </dt>
            </dl>
        </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'downselect',
    components:{
        headTop
    },
    mounted(){
        var v_width= $(document.body).width();
        $(".select_textul").width(v_width);
        
        $(".select_textdiv").click(function(){
            $(this).parent().parent().siblings().find(".select_textul").hide();
            $(".select_textdiv").removeClass("divfocus");
            $(this).addClass("divfocus");
            $(this).siblings(".select_textul").fadeToggle(500);
            var lilength = $(this).siblings(".select_textul").find("li.focus").has(".select_second_ul").length;
            if(lilength > 0){
                $(this).siblings(".select_textul").find("li.focus>.select_second_ul").show();
            }else{
                $(".select_first_ul>li>p").css("width","100%");
            }
        })
        $(".select_first_ul>li>p").click(function(){
            $(".select_second_ul").hide();
            $(this).parent("li").addClass("focus").siblings("li").removeClass("focus");
            var ynul = $(this).parent("li").has(".select_second_ul").length;
            if(ynul == 0){
                
                var choose = $(this).text();
                $(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(choose);
                $(this).parents(".select_textul").siblings("input").val(choose);
                $(this).parents(".select_textul").fadeOut(300);
            }else{
                $(".select_second_ul").hide();
                $(this).siblings(".select_second_ul").show();
                event.stopPropagation();
                chooseclick();
            }
            
        });
        
        chooseclick();
        function chooseclick(){
            $(".select_second_ul>li").click(function(){
                var choose = $(this).text();
                $(this).addClass("focusli").siblings("li").removeClass("focusli");
                $(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(choose);
                $(this).parents(".select_textul").siblings("input").val(choose);
                $(this).parents(".select_textul").fadeOut(300);
                
                event.stopPropagation();
            });
        }
    }
}
</script>
<style scoped>
.mainWarpper{margin:100px auto;}
.clear{ clear:both;font-size: 0;line-height: 0;height: 0;}

.topmenu{
	width:100%;
}
.topmenu dt{
	width:33.3%;
	float:left;
}
.selectlist{
	width:100%;
	height:auto;
	box-sizing: border-box;
}
.select_textdiv{
	height:3rem;
	width:100%;
	line-height: 3rem;
	text-align: center;
	border-bottom: 2px solid #b3b3b3;
	position:relative;
	border-left:2px solid -webkit-linear-gradient(red, blue);
}
.select_textul{
	width:100%;
	line-height: 3rem;
	box-sizing: border-box;
	display: none;
	width: 980px;
    max-height: 20rem;
    overflow-y: scroll;
}
.select_first_ul{
	width: 100%;
    /*background: #eaeaea;*/
    position: absolute;
    box-sizing: border-box;
    left: 0;
}
.select_first_ul>li{
	padding: 0 0.5rem;
	box-sizing: border-box;
}
.select_first_ul>li>p{
	width: 50%;
    padding: 0 1rem;
    box-sizing: border-box;
    border-bottom:1px #b1b1b1 solid;
}
.focus>p{
	border-bottom:1px #FF9800 solid !important;
	color:#FF9800;
}
.select_second_ul{
	width: 50%;
    position: absolute;
    right: 0px;
    top: 0;
    background: #fff;
    display: none;
    box-sizing: border-box;
    padding-left: 0.5rem;
    /*z-index: 1;*/
}

.down{
	position: absolute;
    top: 0;
    right: 0.5rem;
    display: inline-block;
    width:1rem;
    height:100%;
}
.down img{
	width:1rem;
	margin-top: 1rem;
}
.divfocus::after{
	position: absolute;
	bottom:0;
	left:46%;
	border-bottom:0.5rem solid #FF9800;
	border-left:0.5rem solid transparent;
	border-right:0.5rem solid transparent;
	content: "";
}
.focusli{
	background: #ffc107;
	color: #FFFFFF;
}
.select_second_ul>li{
	padding: 0 0.5rem;
	box-sizing: border-box;
	border-bottom: 1px solid #eaeaea;
}
</style>