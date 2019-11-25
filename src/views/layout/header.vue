<template>
  <div class="header">
    <div class="list_item">
      <el-row>
        <el-col :span="2"
                class="item hidden-xs-only">
          <img src="../../../public/images/logo1.gif" />
        </el-col>
        <el-col :span="1"
                :xs="4"
                class="item hidden-sm-and-up">
          <img class="img" 
              @click="jump(3)"
              src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg"/>
        </el-col>
        <el-col :span="4"
                class="hidden-sm-and-up">
          <el-dropdown>
            <span class="el-dropdown-link">
              首页<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>每日一记</el-dropdown-item>
              <el-dropdown-item>读书笔记</el-dropdown-item>
              <el-dropdown-item>坑点记录</el-dropdown-item>
              <el-dropdown-item>热点新闻</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
          <el-col :span="14"
                  class="hidden-xs-only">
            <el-menu class="el-menu-demo"
                    :default-active="activeIndex"
                    active-text-color="#007fff"
                    mode="horizontal">
              <el-menu-item index="1"
                            @click="jump(4,0)">首页</el-menu-item>
              <el-menu-item index="2"
                            @click="jump(4,1)">每日一记</el-menu-item>
              <el-menu-item index="3"
                            @click="jump(4,2)">读书笔记</el-menu-item>
              <el-menu-item index="4"
                            @click="jump(4,3)">坑点记录</el-menu-item>
              <el-menu-item index="5"
                            @click="jump(4,4)">热点新闻</el-menu-item>
              <el-submenu index="6">
                <template slot="title">外链</template>
                <el-menu-item index="6-1">
                  <span @click="jump(1)">掘金</span></el-menu-item>
                <el-menu-item index="6-2">
                  <span @click="jump(2)">github</span></el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        <el-col :span="5" :xs="8" class="my-input">
          <el-input placeholder="请输入内容"
                    clearable
                    class="head_input hidden-xs-only"
                    size="medium"
                    @keyup.enter.native="Search"
                    v-model="inputText"
                    prefix-icon="el-icon-search">
          </el-input>
          <el-input placeholder="请输入内容"
                    size="small"
                    @keyup.enter.native="Search"
                    v-model="inputText"
                    class="hidden-sm-and-up"
                    prefix-icon="el-icon-search">
          </el-input>
        </el-col>
        <el-col :span="2" class="search-button">
          <el-button type="primary hidden-xs-only" size="medium" icon="el-icon-search" @click="Search">搜索</el-button>
          <el-button type="primary hidden-sm-and-up" size="small" icon="el-icon-search" @click="Search">搜索</el-button>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      //下拉菜单延时
      hideTimeout: 500,
      activeIndex: '1',
      inputText: ''  //搜索框内容
    }
  },
  methods: {
    //我的博客--页面跳转
    jump (value, index) {
      switch (value) {
        case 1:
          //跳转到我的博客
          window.open("https://www.cnblogs.com/lzcblog/", '_blank');
          break;
        case 2:
          //跳转到我的github
          window.open("https://github.com/BLZC", '_blank');
          break;
        case 4:
          //跳转到具体文章分类页面
          this.linkTo('/index', {id: index})
          break;
      }
    },
    // 内容搜索
    Search() {
      this.linkTo('/search', {searchText: this.inputText});
    },
    // 路由跳转
    linkTo(url, query){
      this.$router.push({
        path: url,
        query: query
      })
    }
  }
}
</script>
<style lang="scss">
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 100px;
  text-align: center;
}
.el-dropdown-menu {
  .el-dropdown-menu__item {
    font-size: 16px !important;
    padding: 5px 30px;
    .iconfont {
      margin-right: 10px;
    }
  }
}
.header {
  position: fixed;
  width: 100%;
  padding: 0 calc(50% - 500px);
  background-color: #fff;
  z-index: 999;
  .list_item {
    width: 100%;
    height: 60px;
    .item {
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      img {
        height: 50px;
        width: 50px;
        border-radius: 30%;
        margin-top: 5px;
      }
    }
    .el-menu-demo {
      height: 60px;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
      .el-menu-item,
      .el-submenu__title {
        text-align: center;
        font-size: 16px;
        color: #333;
      }
    }
    .head_input {
      margin-top: 12px;
    }
    .search-button {
      margin-top: 12.5px;
    }
    .el-button--medium {
      padding: 10px;
    }
  }
}

@media (max-width: 768px) {
  .img {
    height: 33px !important;
    margin-top: 13px !important;
  }
  .el-dropdown {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #007fff;
  }
  .my-input {
    margin-left: 8px;
    margin-top: 14px;
      .el-input__inner {
        background: #fafafa !important;
      }
  }
}
</style>