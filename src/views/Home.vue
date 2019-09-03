<template>
  <div class="home">

    <Head></Head>
    <Content></Content>
  </div>
</template>

<script>
import Head from './layout/header'
import Content from './layout/content'
// import Foot from './layout/footer'
export default {
  name: 'home',
  data () {
    return {

    };
  },
  components: {
    Head,
    Content,
    // Foot
  },
  methods: {

  }
};
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  width: 1200px;
  margin: 0 auto;
}
</style>
