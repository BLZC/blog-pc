<template name="component-name">
  <div class="contentleft">
    <div class="list">
      <div class="item"
           v-for="item in icons"
           :key="item.id">
        <el-badge :value="item.value">
          <i :class="item.className"></i>
        </el-badge>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      icons: [
        {
          id: 1,
          className: 'iconfont icondianzan',
          value: 12
        },
        {
          id: 2,
          className: 'iconfont iconpinglun',
          value: 1
        },
        {
          id: 3,
          className: 'iconfont iconai-mark'
        },
        {
          id: 4,
          className: 'iconfont iconweibo-copy'
        },
        {
          id: 5,
          className: 'iconfont iconQQ'
        },
        {
          id: 6,
          className: 'iconfont iconweixin'
        }
      ]
    }
  }
}
</script>
<style lang="scss" >
.contentleft {
  position: fixed;
  background-color: #fafafa;
  .list {
    display: flex;
    padding-left: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .item {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    line-height: 40px;
    margin-top: 20px;
    .el-badge__content {
      background-color: #ddd;
    }
    .iconfont {
      font-size: 18px;
      color: #999;
    }
  }
}
</style>