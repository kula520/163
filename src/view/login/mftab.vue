<template>
    <div class="loginBj">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item class="mt20 posi" label-width="0px" prop="mailVal">
                <el-input placeholder="请输入邮箱名" maxlength="30" v-model="ruleForm.mailVal"></el-input>
                <div class="mailB" @click="handleDown">{{ruleForm.comVal}} ∨</div>
                <ul v-show="ulShow" class="posiUl">
                    <li @click="valClick('@163.com')">@163.com</li>
                    <li @click="valClick('@126.com')">@126.com</li>
                    <li @click="valClick('@yarh.net')">@yarh.net</li>
                </ul>
            </el-form-item>    
            <el-form-item class="mt20" label-width="0px" prop="pass">
                <el-input maxlength="30" placeholder="请输入密码" v-model="ruleForm.pass"></el-input>
            </el-form-item>   
            <el-form-item class="mt20" label-width="0px" prop="phone">
                <el-input placeholder="请输入手机号" maxlength="11" v-model="ruleForm.phone"></el-input>
            </el-form-item>   
             <el-form-item prop="type">
                    <el-checkbox v-model="ruleForm.type" label="同意《服务条款》、《隐私政策》和《儿童隐私政策》"></el-checkbox>
            </el-form-item>  
            <el-form-item>                
                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
            </el-form-item>       
        </el-form>
    </div>
</template>
<script>
import {loginAxios} from '../../axios/api'
export default {
    name:'login',
    data(){
         var validateMailVal = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('邮箱不能为空'));
            } else if (value.length > 10){
                callback(new Error('邮箱名不能超过10个字符'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var passVal = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('6~16个字符，区分大小写'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var phoneVal = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('可通过改手机号找回密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        return {
            ulShow:false,
            ruleForm: {
                mailVal: '',
                pass:'',
                phone:'',
                type:'',
                comVal:'@163.com'
            },
            rules: {
                mailVal: [
                     { validator: validateMailVal, trigger: 'blur' }
                ],
                pass:[
                    { validator: passVal, trigger: 'blur'}
                ],
                phone:[
                    { validator: phoneVal, trigger: 'blur'}
                ]
            }
        }
    },
    mounted(){
        document.addEventListener('click', this.hidder,true);
    },
    methods:{
        submitForm(formName) {
            
            this.$refs[formName].validate((valid) => {
            if (valid) {
                loginAxios('11111','2222222').then(() => {
                    alert('提交成功')
                }) 
            } else {
                this.$message.error('请认真填写资料！');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleDown(){
            this.ulShow = true
        },
        valClick(o){
            this.ruleForm.comVal = o
            this.ulShow = false;
        },
        hidder (e) {
            //判断点击的位置在弹出框之外
            if (e.srcElement.className !== '') {
                this.ulShow = false;    //等于false隐藏弹出框
            }
        }
    }
}
</script>
<style scoped>
.mt20{margin-top:20px;}
.posi{position:relative;}
.mailB{cursor:pointer;position:absolute;top:1px;right:0;width:100px;height:38px;line-height:38px;z-index:99;}
.posiUl{position:absolute;top:41px;right:0;width:130px;border:1px solid #ccc;z-index:9999;background-color:#f2f2f2;}
.posiUl li{height:40px;line-height:40px;padding-left:10px;cursor:pointer;}
</style>