<template>
  <div>
    <el-row class="content">
      <el-col :span="3">
        <content-left></content-left>
      </el-col>
      <el-col :span="14">
        <content-main></content-main>
      </el-col>
      <el-col :span="7">
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
}
</style>
