<template>
  <div id="content">
    <div v-html="compiledMarkdown"></div>
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