<template>
  <div>
    <el-row class="content">
      <el-col :span="3" class="hidden-xs-only">
        <content-left></content-left>
      </el-col>
      <el-col :span="14"
              class="hidden-xs-only"
              :offset="3">
        <content-main></content-main>
      </el-col>
      <el-col class="hidden-sm-and-up"
              :xs="24">
        <content-main></content-main>
      </el-col>
      <el-col :span="7" class="hidden-xs-only">
        <content-right></content-right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ContentLeft from './contentleft'
import ContentMain from './contentmain'
import ContentRight from './contentright'
export default {
  data () {
    return {

    }
  },
  components: {
    ContentLeft,
    ContentMain,
    ContentRight
  }
}
</script>
<style lang="scss" scoped>
.content {
  margin: 20px 0;
  background-color: #fafafa;
}
</style>
