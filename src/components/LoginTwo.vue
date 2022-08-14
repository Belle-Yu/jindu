<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
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
    // 校验用户名--表单校验方法
    const validateName = (rule, value, callback) => {
      // 请输入4-10位昵称--正则做校验
      let reg = /(^[a-zA-Z0-9]{4,10}$)/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入4-10位用户名"));
      } else {
        callback();
      }
    };
    // 校验密码
    const validatePass = (rule, value, callback) => {
      // 请输入6-12位密码需要包含大小写和数字以及特殊字符--正则做校验
      let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("6-12位密码需要包含大小写字母和数字及特殊符号"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 基础版校验
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          // 校验接口没成功
        //   this.axios
        //     .post("https://rapserver.sunmi.com/app/mock/340/login", this.form)
        //     .then((res) => {
        //       console.log(res); // 验证表单的data
        //       if (res.data.status === 200) {
        //         localStorage.setItem("username", res.data.username); //缓存用户名
        //         this.$message({ message: res.data.message, type: "success" }); //登录成功显示
        //         this.$router.push("/home"); //登录跳转到主页
        //       }
        //     })
        //     .catch((err) => {
        //       console.err(err);
        //     });
        // } else {
        //   console.log(this.form);
        }
      });
    },
  },
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
