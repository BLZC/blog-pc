<template>
  <div class="home">
    <Pead></Pead>
    <div class="main">
      <div class="top_block"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Pead from './layout/header'
export default {
  components: {
    Pead
  }
};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  width: 100%;
  .main {
    width: 1000px;
    margin: 0 auto;
    .top_block {
      width: 100%;
      height: 80px;
    }
  }
}
</style>