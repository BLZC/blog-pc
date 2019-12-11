<template>
  <div class="header">
    <div class="list_item">
      <el-row class="headerPc">
        <el-col :span="2"
                class="item">
          <img class="img" src="http://49.235.8.149:9001/upload/logo.jfif" />
        </el-col>
          <el-col :span="14">
            <el-menu class="el-menu"
                    :default-active="activeIndex"
                    background-color="#67C23A"
                    active-text-color="#0BF8D8"
                    text-color="#fff"
                    mode="horizontal">
              <el-menu-item v-for="item in menuList"
                            :key="item.id"
                            :index="item.index.toString()"
                            @click="jump(4,item.label)">{{item.name}}</el-menu-item>
              <el-submenu index="6">
                <template slot="title">外链</template>
                <el-menu-item index="6-1">
                  <span @click="jump(1)">掘金</span></el-menu-item>
                <el-menu-item index="6-2">
                  <span @click="jump(2)">github</span></el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        <el-col :span="5" class="my-input">
          <el-input placeholder="请输入内容"
                    clearable
                    class="head_input"
                    size="medium"
                    @keyup.enter.native="Search"
                    v-model="inputText"
                    prefix-icon="el-icon-search">
          </el-input>
        </el-col>
        <el-col :span="2" class="search-button">
          <el-button type="primary" size="medium" icon="el-icon-search" @click="Search">搜索</el-button>
        </el-col>
      </el-row>
      <div class="headerPhone">
        <el-row>
            <el-col :span="2"
                    :offset="1"
                    class="item">
            <img class="img" src="http://49.235.8.149:9001/upload/logo.jfif" />
          </el-col>
          <el-col :span="6" :offset="1">
            <el-dropdown @command="handleJump">
              <span class="el-dropdown-link">
                目录<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in menuList" :key="item.id" :command="item.label">
                  {{item.name}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
            <el-col :span="8" :offset="1" class="my-input">
            <el-input placeholder="请输入内容"
                      clearable
                      class="head_input"
                      size="small"
                      @keyup.enter.native="Search"
                      v-model="inputText"
                      prefix-icon="el-icon-search">
            </el-input>
          </el-col>
          <el-col :span="2" class="search-button">
            <el-button type="primary" size="small" icon="el-icon-search" @click="Search">搜索</el-button>
          </el-col>
        </el-row>
        <div class="menulist"></div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuList: [], //菜单
      //下拉菜单延时
      hideTimeout: 500,
      activeIndex: '1',
      inputText: '', //搜索框内容
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    getMenuList () {
        this.$get('/label').then(res =>{
          this.menuList = res.data
        })
    },
    //我的博客--页面跳转
    jump (value, index) {
      switch (value) {
        case 1:
          //跳转到我的博客
          window.open("https://www.cnblogs.com/lzcblog/", '_blank')
          break
        case 2:
          //跳转到我的github
          window.open("https://github.com/BLZC", '_blank')
          break
        case 4:
          //跳转到具体文章分类页面
          this.linkTo('/index', {id: index})
          break
      }
    },
    handleJump (index) {
      this.linkTo('/index', {id: index})
    },
    // 内容搜索
    Search() {
      this.linkTo('/search', {searchText: this.inputText})
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
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
  color: #fff;
}
@media (min-width: 768px) {
.header {
  position: fixed;
  width: 100%;
  padding: 0 calc(50% - 500px);
  background-color: #67C23A;
  color: #fff;
  z-index: 999;
  .list_item {
    .headerPhone {
      display: none;
    }
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
    .el-menu {
      height: 60px;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
      .el-menu-item,
      .el-submenu__title {
        text-align: center;
        font-size: 16px;
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
}
@media (max-width: 768px) {
  .header {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: #67C23A;
    color: #fff;
    z-index: 999;
    .list_item {
      .headerPc {
        display: none;
      }
      .headerPhone {
        display: block;
      }
      .img {
        height: 33px !important;
        margin-top: 8.5px !important;
        border-radius: 5px;
      }
      .el-dropdown-link {
        display: inline-block;
        font-size: 16px;
        color: #fff;
        padding-top: 14.5px;
      }
      .head_input {
        margin-top: 9px;
      }
      .search-button {
        margin-top: 8.5px;
      }
    }
  }
}
</style>