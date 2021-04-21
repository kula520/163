<template>
    <div>
        <headTop></headTop>    
        <div class="warper">   
            <div class="seachbox">
                <el-input 
                    class="w600" 
                    @focus="focusHandle" 
                    v-model="seachIput" 
                    placeholder="请输入内容">
                </el-input> 
                <el-button class="w180" type="primary">搜索</el-button>
                <div class="listDownbox" v-show="listShow">
                    <ul>
                        <li v-for="(item,i) in listData" @click="clickHandle(item)" :key="i">{{item.title}}</li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import headTop from '../headtop/headtop'
export default {
    name:'seachTwo',
    data() {
      return {
        seachIput: '',
        listShow:false,
        listData:[]
      }
    },
    components:{
        headTop
    },
    mounted(){
        //判断点击的是否是类型下拉区域
        document.addEventListener("click", this.bodyCloseMenus);
    },
    destroyed() {
        //销毁时清除
        document.removeEventListener("click", this.bodyCloseMenus);
    },
    methods:{
        focusHandle(){
            let that = this
            let len = that.listData.length
            if(len > 0){
                that.listShow = true 
            }
        },
        //页面其他区域点击关闭分类
        bodyCloseMenus(e) {
            if(e.target.className!='el-input__inner'){
                this.listShow=false;
            }
        },
        clickHandle(o){
            this.seachIput = o.title
        }
    },
    watch: {        
        seachIput: function () {
            this.listData = [
                {title:'历史决定论附件'},
                {title:'咯喔i问了，质询'},
                {title:'翻脸就问了老师'},
                {title:'发生的分类目录w'},
                {title:'艾弗森来得及文件'},
                {title:'啊发生的了解了我'},
                {title:'阿瑟东发那年我'},
                {title:'按项目了'},
                {title:'发我i睡觉了'},
                {title:'案说法问你啦'}
            ]
            this.listShow = true
        }
    }
}
</script>
<style scoped>
.warper{width:800px;margin:100px auto;}
.seachbox{position:relative;}
.seachbox .w600{width:680px;}
.seachbox .w180{width:100px;margin-left:10px;}
.seachbox .listDownbox{width:658px;padding:10px;border:1px solid #ccc;position:absolute;top:50px;left:0;z-index:999;background-color:#fff;}
.seachbox .listDownbox li{line-height:30px;line-height:30px;font-size:14px;cursor:pointer;}
</style>