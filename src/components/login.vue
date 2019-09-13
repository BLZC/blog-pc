<template>
  <el-dialog title="登  录"
             append-to-body
             width="25%"
             center
             destroy-on-close
             :close-on-click-modal='false'
             :visible.sync="dialog.lgshow">
    <el-form :model="form">
      <el-form-item required>
        <el-input size="medium"
                  v-model="form.account"
                  placeholder="请输入手机号或邮箱"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="medium"
                  v-model="form.password"
                  placeholder="请输入密码"
                  show-password
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-button size="medium"
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
    dialog: {
      type: Object
    }
  },
  methods: {
    login () {
      if (!this.form.account) {
        this.$LZCMessage('账号不能为空', 'error')
      }
      else if (!this.form.password) {
        this.$LZCMessage('密码不能为空', 'error')
      } else {
        this.$post('/login', { account: this.form.account, password: this.form.password }).then(res => {
          if (res.status) {
            this.$LZCMessage('登录成功', 'success')
            localStorage.setItem('user', res.account)
            this.$store.commit('changeLogin', true)
            this.dialog.lgshow = false
          }
          else {
            this.$LZCMessage('登录失败，请确认您的账号密码是否正确', 'error')
          }
        })
      }
    },
    Jumpregister () {
      this.dialog.lgshow = false
      this.dialog.rgshow = true
    }
  }
}
</script>
<style lang="scss">
/**
* 此处样式影响register组件样式
*/
.el-dialog__title {
  font-weight: 550;
  font-size: 20px;
}
.el-dialog--center .el-dialog__body {
  padding: 10px 25px;
  .el-form-item {
    margin-bottom: 15px;
  }
}
.btn-qd {
  width: 100%;
  background-color: #007fff;
  font-size: 15px;
}
.ft1 {
  cursor: pointer;
  margin: 10px 0;
  color: #007fff;
  text-align: center;
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