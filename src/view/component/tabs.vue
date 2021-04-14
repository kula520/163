<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="1">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="2">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="3">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="4">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name:'tabs',
    data(){
        return {
            activeName: '1'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
@import url('../../css/tabs.css');
</style>
