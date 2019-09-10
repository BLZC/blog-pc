<template>
  <el-dialog title="注册"
             append-to-body
             width="25%"
             center
             :close-on-click-modal='false'
             :before-close='Close'
             :visible.sync="show">
    <el-form :model="form">
      <el-form-item>
        <el-input size="small"
                  v-model="form.username"
                  placeholder="请输入用户名"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small"
                  v-model="form.account"
                  placeholder="请输入手机号"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small"
                  v-model="form.password"
                  placeholder="请输入密码 ( 不少于6位 ) "
                  clearable
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
import { LZCMessage } from '../common/index'
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
  },
  computed: {
    show () {
      return this.$store.state.home.rgshow
    }
  },
  methods: {

    Register () {
      if (!this.form.username) {
        LZCMessage('请输入用户名', 'error')
      } else if (!this.form.account) {
        LZCMessage('请输入账号', 'error')
      }
      else {
        this.$post('/register', { username: this.form.username, account: this.form.account, password: this.form.password }).then(res => {
          if (res.status) {
            this.$message({
              message: '注册成功！',
              type: 'success'
            })
            this.Close()
          }
          else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        })
      }
    },
    Close () {
      this.$store.commit('changeRgshow', false)
    },
    Jumplogin () {
      this.$store.commit('changeRgshow', false)
      this.$store.commit('changeLgshow', true)
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
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  color: #007fff;
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