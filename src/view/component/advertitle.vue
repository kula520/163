<template>
    <div class="adverListBd">
        <div class="left" @mouseenter="jyShow = true">教育</div>
        <div class="right" @mouseenter="jyShow = false">最新</div>
        <ul v-show="jyShow">
            <li v-for="(item,i) in adverListData" :key="i">{{item.name}}</li>
        </ul>
        <ul>
            <li v-for="(item,i) in adverListDataT" :key="i">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import {adverList} from '../../axios/api'
export default {
    name:'advertitle',
    data(){
        return {
            adverListData:[],
            adverListDataT:[],
            jyShow:true,
            arrayOne:['one','twe','thr'],
            arrayTwe:['for','fix','six']
        }
    },
    created(){
        this.adverListFun()
        let a = this.arrayOne
        let b = this.arrayTwe
        let ab = []
        for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){     
            let oneVal = a[i]   
            let tweVal = b[j]
            let obj = Object()
            obj.o = oneVal
            obj.t = tweVal
            ab.push(obj)
        }
        }
        console.log(ab)
    },
    mounted(){
        setInterval(function(){
            if(this.jyShow == true){
                this.jyShow = false
                console.log('1111')
            }
            if(this.jyShow == false){
                this.jyShow = true
            }
        },1000)
    },
    methods:{
        adverListFun(){
            adverList().then((res) => {   
                let data = this.getRandomArrayElements(res.articles,12)  
                let dataT = this.getRandomArrayElements(res.articles,12)  
                this.adverListData = data
                this.adverListDataT = dataT
            })
        },
        getRandomArrayElements(arr, count) {
            var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(min);
        }
    }
}
</script>
<style scoped>
@import url('../../css/compents.css');
</style>