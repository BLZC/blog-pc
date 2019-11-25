<template name="component-name">
  <div class="contentmain">
    <div class="contentmain_head">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col :span="21"
                    :xs="19"
                    class="hd2">
              <div class="hd4">{{time}}</div>
            </el-col>
          </el-row>
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
      isattention: false, /* 关注 */
      time: '',  //时间
      comments: 1,
      mycomment: ''
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
      this.$get('/article/'+_id).then(res => {
        this.title = res.data.title
        this.input = res.data.content
        this.time = res.data.time
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
  .hd1 {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 20px;
  }
  .contentmain_head {
    height: 40px;
    padding: 20px;
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
    padding: 20px 20px 60px 20px;
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