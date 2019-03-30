<template>
  <el-container class="index-container">
    <!-- 头部 -->
    <el-header class="index-header">
      <el-row>
        <el-col :span="2">
          <img src="../assets/logo.png" alt>
        </el-col>
        <el-col :span="20">
          <h2>不管这是个啥,反正写就对了</h2>
        </el-col>
        <el-col :span="2">
          <el-button type="success">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <!-- 主体 -->
    <el-container class="index-main">
      <!-- 左边栏 -->
      <el-aside width="200px" class="index-left">
        <el-menu router default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="users">
              <span class="el-icon-menu"></span> 选项1
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边公共区域 -->
      <el-main class="index-right">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss" scoped>
.index-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .index-header {
    height: 60px;
    background-color: #b3c0d1;
    line-height: 60px;
    h2 {
      margin: 0;
      padding: 0;
      text-align: center;
    }
  }
  .index-main {
    flex: 1;
    .index-left {
      background-color: pink;
    }
    .index-right {
      background-color: #e9eef3;
      padding-top: 0;
    }
  }
}
</style>

