<template>
  <div class="content">
      <div class="title">{{title}}</div>
      <div class="hd4">{{time}}</div>
      <div class="markdown_content"
           v-html="compiledMarkdown"></div>
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
      content: '',  /* 文章内容 */
      time: '' //时间
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.content)
    }
  },
  mounted () {
    this.getarticleDetail()
  },
  methods: {
    //获取文章信息
    getarticleDetail () {
      let _id = this.$route.query.contentId
      this.$get('/article/'+_id).then(res => {
        this.title = res.data.title
        this.content = res.data.content
        this.time = res.data.time
      })
    }
  }
}
</script>
<style lang="scss" >
  .content {
    text-align: left;
    padding: 20px 20px 60px 20px;
    line-height: 40px;
    .title {
      font-size: 22px;
      font-weight: 550;
    }
    .hd4 {
      font-size: 14px;
      color: #999;
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
</style>