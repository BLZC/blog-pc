<template>
  <div class="header">
    <Login :show="lgshow"></Login>
    <Register :show="rgshow"></Register>
    <div class="list_item">
      <el-row>
        <el-col :span="2"
                class="item">
          <img @click="jump(3)"
               src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" />
        </el-col>
        <el-col :span="11"
                :offset="1">
          <el-menu class="el-menu-demo"
                   active-text-color="#007fff"
                   mode="horizontal">
            <el-menu-item index="1">JS深究</el-menu-item>
            <el-menu-item index="2">再探CSS</el-menu-item>
            <el-menu-item index="3">框架踩坑</el-menu-item>
            <el-menu-item index="4">深入源码</el-menu-item>
            <el-submenu index="5">
              <template slot="title">个人博客</template>
              <el-menu-item index="5-1">
                <span @click="jump(1)">博客园</span></el-menu-item>
              <el-menu-item index="5-2">
                <span @click="jump(2)">github</span></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="请输入内容"
                    class="head_input"
                    prefix-icon="el-icon-search">
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary"
                     class="head_input"
                     icon="el-icon-edit"
                     @click="Jumpedit"
                     size="small">写文章</el-button>
        </el-col>
        <template v-if="islogin">
          <el-col :span="1"
                  class="message">
            <el-badge :value="12"
                      style="cursor:pointer"
                      class="item">
              <i class="iconfont iconxiaoxi"></i>
            </el-badge>
          </el-col>
          <el-col :span="1"
                  class="information">
            <el-dropdown size="small"
                         style="cursor:pointer"
                         @command="handleCommand"
                         :hide-timeout="hideTimeout"
                         placement="bottom">
              <span class="el-dropdown-link">
                <i class="iconfont iconxiugaitouxiang"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">查看个人信息</el-dropdown-item>
                <el-dropdown-item command="b">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </template>
        <template v-else>
          <el-col :span="
                                  3">
            <div class="lzc-flex lgcon">
              <div class="lgin"
                   @click="login">登录</div>
              <div class="lgout"
                   @click="register">注册</div>
            </div>
          </el-col>
        </template>
      </el-row>

    </div>
  </div>
</template>
<script>
import Login from '../../components/login'
import Register from '../../components/register'
export default {
  data () {
    return {
      activeIndex: 1,
      lgshow: false,
      rgshow: false,
      hideTimeout: 1000
    }
  },
  computed: {
    //用户是否登录
    islogin () {
      return this.$store.state.home.islogin
    }
  },
  mounted () {
    //解决vux中数据刷新后清除的问题
    if (localStorage.getItem('user')) {
      this.$store.commit('changeLogin', true)
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    //我的博客--页面跳转
    jump (value) {
      switch (value) {
        case 1:
          window.open("https://www.cnblogs.com/lzcblog/", '_blank');
          break;
        case 2:
          window.open("https://github.com/BLZC", '_blank');
          break;
        case 3:
          this.$router.push('/index');
          break;
      }
    },
    //写文章
    Jumpedit () {
      this.$router.push('/edit')
    },
    //登录
    login () {
      this.$store.commit('changeLgshow', true)
    },
    //注册
    register () {
      this.$store.commit('changeRgshow', true)
    },
    handleCommand (command) {
      switch (command) {
        case 'a':

          break;
        case 'b':
          this.Logout();
          break;
      }
    },
    //登出
    Logout () {
      this.$message({
        message: '退出成功',
        type: 'success'
      })
      this.$store.commit('changeLogin', false)
      localStorage.removeItem('user')
    }
  }
}
</script>
<style lang="scss" scope>
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 100px;
  text-align: center;
}
.header {
  position: fixed;
  width: 100vw;
  margin-left: -40px;
  padding: 0 calc(50% - 580px);
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
        height: 33px;
        margin-top: 13px;
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
        font-size: 15px;
      }
    }
    .head_input {
      height: 30px;
      margin-top: 15px;
      .el-input__inner {
        height: 30px;
        line-height: 30px;
      }
      .el-input__icon {
        line-height: 30px !important;
      }
    }
    .el-badge__content.is-fixed {
      top: 14px !important;
    }
    .information {
      height: 60px;
      line-height: 60px;
    }
    .lgcon {
      height: 60px;
      line-height: 60px;
      color: #007fff;
      padding-left: 30px;
      cursor: pointer;
      .lgout {
        margin-left: 10px;
      }
    }
  }
}
</style>