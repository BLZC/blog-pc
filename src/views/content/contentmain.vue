<template name="component-name">
  <div class="contentmain">
    <div class="contentmain_head">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col :span="3" :xs="5">
              <img class="hd1" src="../../assets/image/tx.png" />
            </el-col>
            <el-col :span="21"
                    :xs="19"
                    class="hd2">
              <div>作者&nbsp;
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/lv-3.e108c68.svg" />
              </div>
              <div class="hd4">2019年9月11日&nbsp;阅读量1982</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-button type="success"
                     plain
                     @click="Attention"
                     size="small">{{isattention ? '已关注' : '关注'}}</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="contentmain_main">
      <span class="title">{{title}}</span>
      <div class="markdown_content"
           v-html="compiledMarkdown"></div>
    </div>

  </div>
</template>
<script>
import marked from 'marked'
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
export default {
  name: 'App',
  data () {
    return {
      title: '', /* 文章题目 */
      input: '',  /* 文章内容 */
      isattention: false /* 关注 */
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.input, { sanitize: true })
    }
  },
  mounted () {
    this.getarticleDetail()
  },
  methods: {
    //获取文章信息
    getarticleDetail () {
      // let _id = this.$store.state.content.contentId
      let _id = this.$route.query.contentId
      this.$post('/getarticleDetail', { id: _id }).then(res => {
        this.title = res.result.title
        this.input = res.result.content
      })
    },
    //点关注
    Attention () {
      this.isattention = !this.isattention
    }
  }
}
</script>
<style lang="scss" >
.contentmain {
  background-color: #fff;
  .contentmain_head {
    height: 80px;
    padding: 20px;
    .hd1 {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .hd2 {
      cursor: pointer;
      text-align: left;
      font-size: 15px;
      font-weight: 550;
      .hd4 {
        cursor: text;
        font-size: 14px;
        color: #999;
        font-weight: 500;
      }
    }
  }
  .contentmain_main {
    text-align: left;
    padding: 20px;
    line-height: 40px;
    .title {
      font-size: 22px;
      font-weight: 550;
    }
    .markdown_content {
      h1 {
        font-size: 20px;
        font-weight: 550;
      }
      h2 {
        font-size: 18px;
        font-weight: 550;
      }
      h3 {
        font-size: 16px;
        font-weight: 550;
      }
      ol {
        padding-left: 20px;
      }
      pre {
        background-color: #fafafa;
        padding: 10px;
        line-height: 20px;
      }
    }
  }
}
</style>