<template>
  <div class="header">
    <Login :dialog="dialog"></Login>
    <Register :dialog="dialog"></Register>
    <div class="list_item">
      <el-row>
        <el-col :span="2"
                class="item hidden-xs-only">
          <img @click="jump(3)"
               src="../../../public/images/logo1.gif" />
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
              <el-dropdown-item>沸点</el-dropdown-item>
              <el-dropdown-item>话题</el-dropdown-item>
              <el-dropdown-item>小册</el-dropdown-item>
              <el-dropdown-item>活动</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
          <el-col :span="11"
                  class="hidden-xs-only"
                  :offset="1">
            <el-menu class="el-menu-demo"
                    active-text-color="#007fff"
                    mode="horizontal">
              <el-menu-item index="1"
                            @click="jump(4,1)">每日一记</el-menu-item>
              <el-menu-item index="2"
                            @click="jump(4,2)">读书笔记</el-menu-item>
              <el-menu-item index="3"
                            @click="jump(4,3)">坑点记录</el-menu-item>
              <el-menu-item index="4"
                            @click="jump(4,4)">技术社区</el-menu-item>
              <el-submenu index="5">
                <template slot="title">个人博客</template>
                <el-menu-item index="5-1">
                  <span @click="jump(1)">博客园</span></el-menu-item>
                <el-menu-item index="5-2">
                  <span @click="jump(2)">github</span></el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        <el-col :span="4" :xs="8" class="my-input">
          <el-input placeholder="请输入内容"
                    class="head_input hidden-xs-only"
                    size="medium"
                    prefix-icon="el-icon-search">
          </el-input>
          <el-input placeholder="请输入内容"
                    size="small"
                    class="hidden-sm-and-up"
                    prefix-icon="el-icon-search">
          </el-input>
        </el-col>
        <el-col :span="3" class="hidden-xs-only">
          <el-button type="primary"
                     class="head_input"
                     icon="el-icon-edit"
                     @click="Jumpedit"
                     size="medium">写文章</el-button>
        </el-col>
        <template v-if="islogin">
          <el-col :span="1"
                  :xs="3"
                  class="message">
            <el-badge :value="12"
                      class="item">
              <i @click="linkTo('/message')" class="iconfont iconxiaoxi"></i>
            </el-badge>
          </el-col>
          <el-col :span="2"
                  :xs="3"
                  class="information">
            <el-dropdown size="small"
                         @command="handleCommand"
                         :hide-timeout="hideTimeout"
                         hide-on-click
                         placement="bottom">
              <span class="el-dropdown-link">
                <img class="touxiang"
                     src="../../assets/image/tx.png"
                     alt="头像">
                <!-- <i class="iconfont iconxiugaitouxiang"></i> -->
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a"><i class="iconfont iconwode"></i>我的主页</el-dropdown-item>
                <el-dropdown-item command="c"><i class="iconfont iconxiaoxi"></i>我的消息</el-dropdown-item>
                <el-dropdown-item command="b"><i class="iconfont icontuichu"></i>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </template>
        <template v-else>
          <el-col :span="3"
                  :xs="7">
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
      hideTimeout: 500
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
      if(this.islogin){
        this.linkTo('/edit')
      } else {
        this.$LZCMessage('请先登录', 'error')
      }
    },
    // 路由跳转
    linkTo(url){
      this.$router.push(url)
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
          this.linkTo('/about')
          break;
        case 'b':
          this.Logout();
          break;
        case 'c':
          this.linkTo('/message');
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
  .touxiang {
  width: 31px !important;
  height: 31px !important;
  margin-top: 16px !important;
}
.lgcon {
  font-size: 16px !important;
  padding-left: 10px !important;
}
}
</style>