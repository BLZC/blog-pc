<template name="component-name">
  <div class="content_right">
    <div class="author_list">
      <div class="top_title">
        🎖️作者榜
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.content_right {
  background-color: #fff;
  position: fixed;
  .author_list {
    width: 300px;
    height: 400px;
    background-color: #fff;
    padding: 10px 20px;
    .top_title {
      text-align: left;
      font-size: 14px;
      color: #666;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>