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
                    <el-input
                        type="password"
                        v-model="form.password"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')"
                        >登录</el-button
                    >
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { nameRule, passwordRule } from "../utils/validate.js"; //模块化导入校验的封装模块
import { setToken } from "@/utils/setToken.js"; //模块化导入存取移除登录缓存信息模块
import { login } from "@/api/api.js";
export default {
    name: "Login",
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            rules: {
                username: [{ validator: nameRule, trigger: "blur" }],
                password: [{ validator: passwordRule, trigger: "blur" }],
            },
        };
    },
    methods: {
        // 基础版校验
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                    // 把登录方法封装成api进行调用
                    // this.service.post("/login", this.form).then((res) => {
                    //   if(res.data.status === 200){
                    //     setToken('username', res.data.username);
                    //     setToken('token', res.data.token);
                    //     this.$message({message: res.data.message, type: 'success'});
                    //     this.$router.push('/home');
                    //   }
                    //     console.log(res);
                    // });

                    login(this.form).then(res => {
                        if(res.data.status === 200){
                          setToken('username', res.data.username);
                          setToken('token', res.data.token);
                          this.$message({message: res.data.message, type: 'success'});
                          this.$router.push('/home');
                        }
                    })
                } else {
                    console.error(this.form);
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
    background: url(../assets/bg.png) center no-repeat;
    background-size:cover;
    background-attachment:fixed;
    .el-card {
      background: #65768557;
    }
    .box-card {
        width: 450px;
        margin: 200px auto;
        text-align: center;
        color: #fff;
        .el-form .el-form-item__label{
          color: #fff;
        }
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
