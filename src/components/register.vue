<template>
  <el-dialog title="注 册"
             append-to-body
             width="25%"
             center
             destroy-on-close
             :close-on-click-modal='false'
             :visible.sync="dialog.rgshow">
    <el-form :model="form">
      <el-form-item>
        <el-input size="medium"
                  v-model="form.username"
                  placeholder="请输入用户名"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="medium"
                  v-model="form.account"
                  placeholder="请输入手机号"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="medium"
                  v-model="form.password"
                  placeholder="请输入密码 ( 不少于6位 ) "
                  clearable
                  show-password
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-button size="small"
               type="primary"
               class="btn-qd"
               @click="Register">注 册</el-button>
    <div class="ft1"
         @click="Jumplogin">
      已有账号登录
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
        username: '',
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
    //注册
    Register () {
      if (!this.form.username) {
        this.$LZCMessage('请输入用户名', 'error')
      } else if (!this.form.account) {
        this.$LZCMessage('请输入账号', 'error')
      }
      else {
        this.$post('/register', { username: this.form.username, account: this.form.account, password: this.form.password }).then(res => {
          if (res.status) {
            this.$LZCMessage('注册成功!', 'success')
            this.dialog.rgshow = false
          }
          else {
            this.$LZCMessage(res.message, 'error')
          }
        })
      }
    },
    Jumplogin () {
      this.dialog.rgshow = false
      this.dialog.lgshow = true
    }
  }
}
</script>