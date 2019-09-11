<template name="component-name">
  <div class="contentmain">
    <div class="contentmain_head">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col :span="3">
              <div class="hd1"></div>
            </el-col>
            <el-col :span="21"
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
                     size="small">关注</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="contentmain_main">
      <div v-html="compiledMarkdown"></div>
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
      input: ''
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
    getarticleDetail () {
      this.$post('/getarticleDetail', { id: 2 }).then(res => {
        this.input = res.result.content
      })
    }
  }
}
</script>
<style lang="scss" scoped>
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
      background-image: url('https://user-gold-cdn.xitu.io/2019/8/31/16ce610b3ea04c7a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1');
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
    text-align: center;
    height: 500px;
  }
}
</style>