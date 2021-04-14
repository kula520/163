<template>
    <div class="loginBj">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">               
             <el-form-item size="24px" label="套餐:" label-width="50" prop="type" class="mt20">
                <el-radio v-model="ruleForm.radio" label="1"><span class="font24">45元/月</span></el-radio>                
                <div class="radioList">
                    <ul>
                        <li>∙ 无限邮箱容量</li>
                        <li>∙ 邮件误删恢复</li>
                        <li>∙ 64G大网盘</li>
                        <li>∙ 20G超大附件</li>
                        <li>∙ 单次群发400封</li>
                        <li>∙ 专属人工服务</li>
                    </ul>
                    <div class="clear"></div>
                </div>
            </el-form-item>  
            <el-form-item class="mt20 posi" label-width="0px" prop="mailVal">
                <el-input maxlength="30" v-model="ruleForm.mailVal" placeholder="请输入邮箱名"></el-input>
                <div class="mailB" @click="handleDown">{{ruleForm.comVal}} ∨</div>
                <ul v-show="ulShow" class="posiUl">
                    <li @click="valClick('@vip.163.com')">@vip.163.com</li>
                    <li @click="valClick('@vip.126.com')">@vip.126.com</li>
                    <li @click="valClick('@188.net')">@188.net</li>
                </ul>
            </el-form-item>    
            <el-form-item class="mt20" label-width="0px" prop="pass">
                <el-input maxlength="30" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
            </el-form-item>   
            <el-form-item class="mt20 posi" label-width="0px" prop="phone">
                <el-input maxlength="11" class="w300" v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
                <el-button @click.native="getCode" :disabled="isdisabled" class="phoneYzm" type="info">{{codeText}}</el-button>
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
                comVal:'@vip.163.com',
                radio:'1',
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
            },
            isdisabled: false,
            codeText: '获取验证码'
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
        },
        //手机验证码
        getCode:function (e){
            console.log("获取验证码");
            this.setTime();
        },
        setTime:function (){
            let time = 60;
            let i = 0;
            let that = this;
            //1.在60秒之内，button上倒计时60秒，并显示
            //2.向controller请求验证码，并发送到指定的手机号上面
            let set = setInterval(function() {
                that.codeText = (--time)+"秒后重发";
                i++;	
                //此变量用于标识只调用一次获取验证码的函数
                if (i==1) {
                    console.log("get code start1 ... ");
                    //使获取验证码按钮不可点击
                    that.isdisabled=true
                    that.getVerificationCode();
                }
            }, 1000);
            
            //60秒之后需要做的事情
            setTimeout(function() {
                //恢复获取验证码按钮可点击
                that.isdisabled=false
                that.codeText = "获取验证码";
                clearInterval(set);//清除计时器
            }, time * 1000); //60000  
        },
        getVerificationCode: function(){
            //向服务器获取验证码
            console.log("get code start2 ... ");
        }
    }
}
</script>
<style scoped>
.mt20{margin-top:20px;}
.posi{position:relative;}
.mailB{cursor:pointer;position:absolute;top:1px;right:0;width:130px;height:38px;line-height:38px;z-index:99;}
.posiUl{position:absolute;top:41px;right:0;width:130px;border:1px solid #ccc;z-index:9999;background-color:#f2f2f2;}
.posiUl li{height:40px;line-height:40px;padding-left:10px;cursor:pointer;}
.radioList{padding:10px 45px;background-color:#fff;}
.radioList li{width:200px;float:left;height:24px;line-height:24px;color:#555;}
.font24{color:#555;font-size:24px;}
.w300{width:350px;}
.phoneYzm{width:140px;position:absolute;right:0;top:1px;z-index:999;;}
</style>