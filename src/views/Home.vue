<template>
  <div class="home">
    <Pead></Pead>
    <div class="main">
      <div class="top_block"></div>
      <router-view></router-view>
    </div>
    <!-- <Foot></Foot> -->
  </div>
</template>

<script>
import Pead from './layout/header'
// import Foot from './layout/footer'
export default {
  name: 'home',
  data () {
    return {

    };
  },
  components: {
    Pead,
    // Foot
  },
  methods: {

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
@media (max-width: 768px) {
  .home {
  height: 100vh;
  width: 100%;
  .main {
    width: 100%;
    margin: 0 auto;
    .top_block {
      width: 100%;
      height: 80px;
    }
  }
}
}
</style>
