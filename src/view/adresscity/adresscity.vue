<template>
    <div>        
        <headTop></headTop>
        <div class="warpper">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="地址选择：">
                     <el-select 
                        v-model="selectValOne" 
                        @change="selectChangeOne">
                            <el-option
                            v-for="(item,i) in eareList"
                            :key="i"
                            :label="item.name"
                            :value="item.name">
                            </el-option>
                    </el-select>

                    <el-select 
                        v-model="selectValTwo" 
                        v-show="selectShowTwo"
                        @change="selectChangeTwo">
                            <el-option
                            v-for="(item,i) in eareListTwo"
                            :key="i"
                            :label="item.name"
                            :value="item.name">
                            </el-option>
                    </el-select>

                    <el-select 
                        v-model="selectValThr" 
                        v-show="selectShowThr"
                        @change="selectChangeThr">
                            <el-option
                            v-for="(item,i) in eareListThr"
                            :key="i"
                            :label="item"
                            :value="item">
                            </el-option>
                    </el-select>
                </el-form-item>            
            </el-form>
        </div>
    </div>
</template>
<script>

import headTop from '../headtop/headtop'
import Data from './eare'
export default {
    name:'adresscity',
    components:{
        headTop
    },
    data(){
        return {
            //一级下拉
            eareList:Data.provinceListData(),
            selectValOne:'请选择',
            //二级下拉
            eareListTwo:'',
            selectValTwo:'请选择',
            selectShowTwo:false,
            //三级下拉
            eareListThr:'',
            selectValThr:'请选择',
            selectShowThr:false
        }
    },
    methods:{
        selectChangeOne(e){
            if(e !== ''){
                this.selectShowTwo = true
                this.selectValOne = e
                let eareArray = this.eareList
                this.selectValTwo = '请选择'
                this.selectValThr = '请选择'
                this.eareListThr = ''
                for(let i=0;i<eareArray.length;i++)
                {
                    let adress = eareArray[i].name
                    if(e === adress){
                        this.eareListTwo = eareArray[i].cityList
                    }
                }
            }
        },
        selectChangeTwo(e){
            if(e !== ''){
                this.selectShowThr = true
                this.selectValTwo = e
                let eareArray = this.eareListTwo
                this.selectValThr = '请选择'
                for(let i=0;i<eareArray.length;i++)
                {
                    let adress = eareArray[i].name
                    if(e === adress){
                        this.eareListThr = eareArray[i].areaList
                    }
                }
            }
        },
        selectChangeThr(e){
            this.selectValThr = e
        }
    }
}
</script>
<style scoped>
.warpper{width:1000px;margin:100px auto;}
</style>