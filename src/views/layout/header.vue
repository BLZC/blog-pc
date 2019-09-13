<template>
  <div class="header">
    <Login :dialog="dialog"></Login>
    <Register :dialog="dialog"></Register>
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
            <el-menu-item index="1"
                          @click="jump(4,1)">JS深究</el-menu-item>
            <el-menu-item index="2"
                          @click="jump(4,2)">再探CSS</el-menu-item>
            <el-menu-item index="3"
                          @click="jump(4,3)">框架踩坑</el-menu-item>
            <el-menu-item index="4"
                          @click="jump(4,4)">深入源码</el-menu-item>
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
                    size="medium"
                    prefix-icon="el-icon-search">
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary"
                     class="head_input"
                     icon="el-icon-edit"
                     @click="Jumpedit"
                     size="medium">写文章</el-button>
        </el-col>
        <template v-if="islogin">
          <el-col :span="1"
                  class="message">
            <el-badge :value="12"
                      class="item">
              <i class="iconfont iconxiaoxi"></i>
            </el-badge>
          </el-col>
          <el-col :span="2"
                  class="information">
            <el-dropdown size="small"
                         @command="handleCommand"
                         :hide-timeout="hideTimeout"
                         placement="bottom">
              <span class="el-dropdown-link">
                <img class="touxiang"
                     src="https://user-gold-cdn.xitu.io/2019/8/14/16c8e087eb9bcf40?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                     alt="头像">
                <!-- <i class="iconfont iconxiugaitouxiang"></i> -->
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a"><i class="iconfont iconwode"></i>我的主页</el-dropdown-item>
                <el-dropdown-item command="b"><i class="iconfont icontuichu"></i>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </template>
        <template v-else>
          <el-col :span="
                                  3">
            <div class="lzc-flex lgcon">
              <div class="lgin"
                   @click="login">登录&nbsp;&nbsp;|</div>
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
      //登录--lgshow  注册--rgshow
      dialog: { lgshow: false, rgshow: false },
      //下拉菜单延时
      hideTimeout: 1000
    }
  },
  computed: {
    //用户是否登录
    islogin () {
      return this.$store.state.home.islogin
    }
  },
  created () {
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
        case 3:
          //跳转到首页
          this.$router.push({
            path: '/index',
            query: {
              id: 0
            }
          });
          break;
        case 4:
          //跳转到具体文章分类页面
          this.$router.push({
            path: '/index',
            query: {
              id: index
            }
          });
          break;
      }
    },
    //写文章
    Jumpedit () {
      this.$router.push('/edit')
    },
    //登录
    login () {
      this.dialog.lgshow = true
    },
    //注册
    register () {
      this.dialog.rgshow = true
    },
    //下拉菜单点击事件
    handleCommand (command) {
      switch (command) {
        case 'a':
          this.$router.push('/about')
          break;
        case 'b':
          this.Logout();
          break;
      }
    },
    //登出
    Logout () {
      this.$LZCMessage('退出成功', 'success')
      this.$store.commit('changeLogin', false)
      localStorage.removeItem('user')
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
  padding: 0 calc(50% - 600px);
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
        font-size: 16px;
        color: #333;
      }
    }
    .head_input {
      margin-top: 12px;
    }
    .el-button--medium {
      padding: 10px;
    }
    .el-badge__content.is-fixed {
      top: 14px !important;
    }
    .message {
      .iconfont {
        font-size: 24px;
      }
    }
    .information {
      height: 60px;
      line-height: 60px;
      .touxiang {
        cursor: pointer;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-top: 14px;
      }
    }
    .lgcon {
      height: 60px;
      line-height: 60px;
      color: #007fff;
      font-size: 18px;
      padding-left: 30px;
      cursor: pointer;
      .lgout {
        margin-left: 10px;
      }
    }
  }
}
</style>