<template>
  <div class="content">
    <div class="top_block"></div>
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
.content {
  background-color: #fafafa;
  .top_block {
    width: 100%;
    height: 80px;
  }
}
</style>