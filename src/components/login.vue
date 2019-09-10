<template>
  <el-dialog title="登录"
             append-to-body
             width="25%"
             center
             :close-on-click-modal='false'
             :before-close='Close'
             :visible.sync="show">
    <el-form :model="form">
      <el-form-item required>
        <el-input size="small"
                  v-model="form.account"
                  placeholder="请输入手机号或邮箱"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small"
                  v-model="form.password"
                  placeholder="请输入密码"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-button size="small"
               type="primary"
               class="btn-qd"
               @click="login">登 录</el-button>
    <div class="ft1">
      <el-row>
        <el-col :span="10">
          <div class="ft1_l"
               @click="Jumpregister">
            没有账号? &nbsp;&nbsp; <span style="color:#007fff">注册</span>
          </div>
        </el-col>
        <el-col :span="6"
                :offset="8">
          <span style="color:#007fff">忘记密码</span>
        </el-col>
      </el-row>
    </div>
    <div class="ft2">
      第三方账号登录:
    </div>
    <div class="ft3">
      <el-row>
        <el-col :span="8">
          <img class="tp_img"
               src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" />
        </el-col>
        <el-col :span="8">
          <img class="tp_img"
               src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" /></el-col>
        <el-col :span="8">
          <img class="tp_img"
               src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" /></el-col>
      </el-row>
    </div>
  </el-dialog>

</template>
<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  props: {
  },
  computed: {
    show () {
      return this.$store.state.home.lgshow
    }
  },
  methods: {
    login () {
      if (!this.form.account) {
        this.$message({
          message: '账号不能为空',
          type: 'error'
        })
      }
      else if (!this.form.password) {
        this.$message({
          message: '密码不能为空',
          type: 'error'
        })
      } else {
        this.$post('/login', { account: this.form.account, password: this.form.password }).then(res => {
          if (res.status) {
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            this.Close()
            localStorage.setItem('user', res.account)
            this.$store.commit('changeLogin', true)
          }
          else {
            this.$message({
              message: '登录失败，请确认您的账号密码是否正确',
              type: 'error'
            })
          }
        })
      }
    },
    Close () {
      this.$store.commit('changeLgshow', false)
    },
    Jumpregister () {
      this.$store.commit('changeLgshow', false)
      this.$store.commit('changeRgshow', true)
    }
  }
}
</script>
<style lang="scss">
.el-dialog--center .el-dialog__body {
  padding: 10px 25px;
  .el-form-item {
    margin-bottom: 5px;
  }
}
.btn-qd {
  width: 100%;
  background-color: #007fff;
  font-size: 15px;
}
.ft1 {
  margin: 10px 0;
  .ft1_l {
    cursor: pointer;
    display: inline-block;
  }
}
.ft2 {
  margin: 0;
}
.ft3 {
  margin: 10px;
  .el-col-8 {
    text-align: center;
  }
  .tp_img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f4f8fb;
  }
}
</style>