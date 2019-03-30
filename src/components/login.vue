<template>
  <div class="login">
    <!-- 居中的盒子 -->
    <div class="box">
      <!-- 标题 -->
      <h2>用户登录</h2>
      <!-- 饿了么ui的form -->
      <el-form label-position="top" label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="loginForm.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit('loginForm')">登录</el-button>
          <el-button type="success" @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        passWord: ""
      },
      rules: {

        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        passWord: [
          { required: true, message: "密码不能为空付出", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
      submit(loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(loginForm) {
        this.$refs[loginForm].resetFields();
      }
  }
};
</script>

<style lang='scss'>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #324152;
  .box {
    width: 550px;
    padding: 35px;
    border-radius: 10px;
    // 怪异盒模型
    box-sizing: border-box;
    height: 420px;
    background: white;
    .my-btn {
      width: 100%;
    }
  }
}
</style>
