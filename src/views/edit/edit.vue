<template>
  <div class="markdown-edit">
    <el-row class="mark-header">
      <el-col :span="14">
        <el-input size="medium"
                  placeholder="请输入标题。。。"
                  v-model="title"></el-input>
      </el-col>
      <el-col :span="2"
              :offset="4">
        <el-button type="success"
                   icon="el-icon-s-promotion"
                   @click="Release"
                   size="small">发布</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="text"
                   class="lout"
                   icon="el-icon-top-right"
                   @click="Lout"
                   size="medium">返回</el-button>
      </el-col>
    </el-row>
    <mavon-editor ref="editor"
                  v-model="doc"> </mavon-editor>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { setTimeout } from 'timers';
export default {
  name: "Create",
  components: { mavonEditor },
  data () {
    return {
      title: '' /* 文章标题 */,
      doc: '' /* 文章内容 */,
      hideTimeout: 1000
    }
  },
  methods: {
    Release () {
      if (this.title) {
        let data = {
          title: this.title,
          author: localStorage.getItem('user'),
          time: new Date().toLocaleDateString(),
          belong: 2,
          content: this.doc
        }
        this.$post('/addarticle', data).then(res => {
          if (res.status) {
            this.$message({
              type: 'success',
              message: '发表成功'
            })
            setTimeout(() => {
              this.$router.push('/editsuccess')
            }, 1000)

          }
        })
      } else {
        this.$message({
          type: 'error',
          message: '题目不能为空'
        })
      }

    },
    //返回
    Lout () {
      this.$router.push('/index')
    }

  }
}
</script>
<style lang="scss" scoped>
.markdown-edit {
  .mark-header {
    height: 65px;
    line-height: 65px;
  }
  .markdown-body {
    height: calc(100vh - 66px);
    width: 100%;
  }
}
</style>