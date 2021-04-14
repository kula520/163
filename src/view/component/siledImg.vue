<template>
    <div>
        <div class="block">
            <el-carousel height="450px">
                <el-carousel-item>
                    <div class="imgTop"><img src="../../assets/siled/11.jpg">
                        <h4>悍马EV SUV将于4月4日发布</h4>
                    </div>
                    <div class="imgL lf"><img src="../../assets/siled/12.jpg">
                        <h4>悍马EV SUV将于4月4日发布</h4></div>
                    <div class="imgL rf"><img src="../../assets/siled/13.jpg">
                        <h4>悍马EV SUV将于4月4日发布</h4></div>
                    <div class="clear"></div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="imgTop"><img src="../../assets/siled/14.jpg">
                        <h4>悍马EV SUV将于4月4日发布</h4>
                    </div>
                    <div class="imgL lf"><img src="../../assets/siled/15.jpg">
                        <h4>悍马EV SUV将于4月4日发布</h4></div>
                    <div class="imgL rf"><img src="../../assets/siled/16.jpg">
                        <h4>悍马EV SUV将于4月4日发布</h4></div>
                    <div class="clear"></div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    name:'siledImg',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.imgTop{margin-bottom:10px;}
.imgTop img{width:450px;height:200px}
.imgTop h4{height:32px;line-height:32px;background-color:#f2f2f2;color:#333;padding:0 10px;font-size:14px;}
.imgL{width:220px;height:150px;}
.imgL img{width:220px;height:150px}
.imgL h4{height:28px;line-height:28px;background-color:#f2f2f2;color:#333;padding:0 10px;}
</style>
