<template>
  <div>
    <el-row>
      <el-col :span="18">
        <about-lefttop></about-lefttop>
        <about-leftmain></about-leftmain>
      </el-col>
      <el-col :span="6">
        <about-right></about-right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AboutLefttop from './aboutLeftTop'
import AboutLeftmain from './aboutLeftMain'
import AboutRight from './aboutRight'
export default {
  data () {
    return {

    }
  },
  components: {
    AboutLefttop,
    AboutLeftmain,
    AboutRight
  }

}
</script>