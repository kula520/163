<template>
    <div>
        <headTop></headTop>
        <div class="lunbo_div">
            <div>
                <img class="cup" src="../../assets/cup.png" />
                <span class="span_bm">
                    <span class="today_title">今日总报名数</span>
                    <br />
                    <span class="totady_pers">100</span>
                </span>
            </div>
            <div id="bm_content" class="bm_content">
                <table class="table table-condensed ">
                    <thead style="position: fixed; background-color: #eeeeee; ">
                        <tr>
                            <th style=" width: 60px; text-align: right;">用户</th>
                            <th style="width: 110px; text-align: center;">购买产品</th>
                            <th style=" width: 69px; padding-right: 30px;">时间</th>
                        </tr>
                    </thead>
                    <tbody id="tb1"></tbody>
                    <tbody id="tb2"></tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'seamlessrolling',
    components:{
        headTop
    },
    mounted(){
        var box = document.getElementById("bm_content");
        var l1 = document.getElementById("tb1");
        var l2 = document.getElementById("tb2");
        var scrollMove;
        autoScroll();
        function autoScroll() {
            var product = RenderList();
            l1.innerHTML = product;
            if (l1.offsetHeight > box.offsetHeight) {
                l2.innerHTML = l1.innerHTML;//克隆list1的数据，使得list2和list1的数据一样
                scrollMove = setInterval(scrollup, 30);//数值越大，滚动速度越慢
                box.onmouseover = function () {
                    clearInterval(scrollMove)
                }
            }
        }
        function scrollup() {
            //滚动条距离顶部的值恰好等于list1的高度时，达到滚动临界点，此时将让scrollTop=0,让list1回到初始位置，实现无缝滚动
            if (box.scrollTop >= l1.offsetHeight) {
                box.scrollTop = 0;
            } else {
                box.scrollTop++;
            }
        }
        //鼠标离开时，滚动继续
        box.onmouseout = function () {
            scrollMove = setInterval(scrollup, 30);
        }
        function RenderList() {
            var str = '';
            for (var i = 0; i < 100; i++) {
                var a = i + 1;
                str += '<tr>';
                str += '<td class="ellipsis">';
                str += '<span class="center" title="张三' + a + '" style="margin-left: 10px;">张三' + a + '</span>';
                str += '</td>';
                str += '<td class="ellipsis" title="' + a + '年级上海教育版同步课">' + a + '年级上海教育版同步课</td>';
                str += '<td class="ellipsis" title="16点46分">16点46分</td>';
                str += ' </tr>';
            }
            return str;
        }
    }
}
</script>
<style scoped>

.lunbo_div {
    width: 250px;
    height: 365px;
    background-color: #db3b3a;
    position: fixed;
    border-radius: 10px;
    margin: auto;
    left: 0;
    right: 0;
    top:100px;
    bottom: 0;
    overflow:hidden;
}

.cup {
    width: 70px;
    height: auto;
    margin-top: -17px;
    margin-left: 20px;
}

.span_bm {
            /*display: grid;*/
            float: right;
        }

        .today_title {
            display: inline-block;
            color: white;
            font-size: 14px;
            margin-right: 20px;
            margin-top: 10px;
        }

.totady_pers {
    font-size: 30px;
    color: white;
    font-weight: 600;
}

.bm_content {
    width: 240px;
    height: 295px;
    background-color: white;
    margin: 0px 5px 0 5px;
    border-radius: 3px;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    top: -5px;
}

table {
    table-layout: fixed;
    font-size: 12px;
}

thead {
    font-size: 12px;
}

.table > thead > tr > th {
    border-bottom: 1px solid #eeeeee;
    text-align: center;
}

.table > tbody + tbody {
    border-top: 0px;
}

.table img {
    width: 15px;
    border-radius: 50%;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.table {
    table-layout: fixed;
}

.center {
    vertical-align: middle;
}
</style>