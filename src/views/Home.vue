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
  name: 'home',
  data () {
    return {

    };
  },
  components: {
    Pead
  },
  methods: {

  }
};
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  width: 100%;
  .main {
    width: 1200px;
    margin: 0 auto;
    .top_block {
      width: 100%;
      height: 80px;
    }
  }
}
</style>
