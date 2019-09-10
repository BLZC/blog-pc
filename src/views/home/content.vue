<template>
  <div class="content">
    <div class="main">
      <el-row>
        <el-col :span="16">
          <content-left></content-left>
        </el-col>
        <el-col :span="7"
                :offset="1">
          <content-right></content-right>
        </el-col>
      </el-row>

    </div>

  </div>
</template>
<script>
import ContentLeft from './content_left.vue'
import ContentRight from './content_right.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    ContentLeft,
    ContentRight
  }
}
</script>
<style lang="scss" scoped>
</style>