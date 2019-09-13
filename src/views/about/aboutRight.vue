<template name="component-name">
  <div class="about-right">
    <div class="art">
      <div class="title">个人成就</div>
    </div>
    <div class="star">
      <el-row>
        <el-col class="item1"
                :span="12">
          <div>关注了</div>
          <div class="num">{{num1}}</div>
        </el-col>
        <el-col class="item2"
                :span="12">
          <div>关注者</div>
          <div class="num">{{num2}}</div>
        </el-col>
      </el-row>
    </div>
    <div class="otherMsg">
      <div class="otm"
           v-for="item in otherAll"
           :key="item.id">
        <el-row>
          <el-col :span="12"
                  class="col1">{{item.title}}</el-col>
          <el-col :span="12"
                  class="col2">{{item.description}}</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num1: 23,
      num2: 22,
      otherAll: [
        {
          id: 1,
          title: '收藏集',
          description: 23
        },
        {
          id: 2,
          title: '关注标签',
          description: 12
        },
        {
          id: 3,
          title: '加入时间',
          description: '2019-1-23'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.about-right {
  .art {
    width: 80%;
    height: 200px;
    margin-left: 5%;
    background-color: #fff;
    padding: 10px 20px;
    text-align: left;
    .title {
      border-bottom: 1px solid #eee;
      padding: 5px 0;
      font-weight: 550;
    }
  }
  .star {
    width: 80%;
    margin-left: 5%;
    height: 100px;
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    .item1 {
      border-right: 1px solid #eee;
    }
    .num {
      margin-top: 10px;
      font-weight: 550;
    }
  }
  .otherMsg {
    width: 80%;
    margin-left: 5%;
    height: 100px;
    margin-top: 20px;
    padding: 20px;
    .otm {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ddd;
      color: #000;
      .col1 {
        text-align: left;
      }
      .col2 {
        text-align: right;
      }
    }
  }
}
</style>