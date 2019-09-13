<template>
  <div class="about-left-main">
    <el-menu class="el-menu-demo"
             active-text-color="#007fff"
             mode="horizontal">
      <el-menu-item index="1">动态</el-menu-item>
      <el-menu-item index="2">专栏</el-menu-item>
      <el-menu-item index="3">沸点</el-menu-item>
      <el-menu-item index="4">分享</el-menu-item>
      <el-submenu index="5">
        <template slot="title">更多</template>
        <el-menu-item index="5-1">
          <span @click="jump(1)">收藏集</span></el-menu-item>
        <el-menu-item index="5-2">
          <span @click="jump(2)">关注</span></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.about-left-main {
  margin-top: 20px;
  background-color: #fff;
  min-height: 200px;
}
</style>