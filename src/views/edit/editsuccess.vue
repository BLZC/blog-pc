<template name="component-name">
  <div class="editsuccess">
    <img class="bgImg"
         src="https://b-gold-cdn.xitu.io/v3/static/img/panfish.ded05ef.png" />
    <div class="text">{{text}}</div>
    <div class="newArticle">
      {{title}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '发布成功！有了你的分享，掘金会变得更好！',
      title: "今天发表的"
    }
  }
}
</script>
<style lang="scss" scoped>
.editsuccess {
  background-color: #fafafa;
  .bgImg {
    height: 160px;
    width: 100px;
  }
  .text {
    text-align: center;
    color: #666;
  }
  .newArticle {
    width: 800px;
    height: 200px;
    margin: 30px auto;
    text-align: center;
    background-color: #fff;
    padding: 20px;
    font-size: 18px;
    font-weight: 550;
    color: #000;
  }
}
</style>