<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form">
        <el-form-item label="用户名" prop="username" 
        :rules="[
            {required: true, message: '请输入用户名', trigger:'blur'},
            {min: 4, max: 10, message: '长度在4-10位字符之间', trigger:'blur'},
        ]">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" 
         :rules="[
            {required: true, message: '请输入密码', trigger:'blur'},
            {min: 6, max: 12, message: '长度在6-12位字符', trigger:'blur'},
        ]">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods:{
    // 基础班校验
    login(form){
      this.$refs[form].validate((valid)=>{
        if(valid){
          console.log(this.form);
          // 校验接口没成功
          this.axios.post('https://rapserver.sunmi.com/app/mock/340/login',this.form)
          .then(res=>{
            console.log(res);// 验证表单的data
            if(res.data.status === 200){
                localStorage.setItem('username',res.data.username);//缓存用户名
                this.$message({message:res.data.message, type:'success'});//登录成功显示
                this.$router.push('/home');//登录跳转到主页
            }
          })
          .catch(err=>{
            console.err(err);
          })
        }else{
          console.log(this.form)
        }
      })
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #409eff;
  .box-card {
    width: 450px;
    margin: 200px auto;
    text-align: center;
    .el-card_header {
      font-size: 34px;
    }
    .el-button {
      text-align: center;
      width: 100%;
    }
  }
}
</style>
