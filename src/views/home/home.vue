<template>
  <div class="home">
    <div class="main">
      <el-row>
        <el-col :span="16">
          <home-left></home-left>
        </el-col>
        <el-col :span="7"
                :offset="1">
          <home-right></home-right>
        </el-col>
      </el-row>

    </div>

  </div>
</template>
<script>
import HomeLeft from './home_left.vue'
import HomeRight from './home_right.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    HomeLeft,
    HomeRight
  }
}
</script>