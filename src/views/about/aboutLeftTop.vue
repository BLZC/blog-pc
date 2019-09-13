<template name="component-name">
  <div class="about-left-top">
    <edit-information :dialog="dialog"
                      :data="data"></edit-information>
    <el-row>
      <el-col :span="3">
        <div class="hd1"></div>
      </el-col>
      <el-col :span="10">
        <div><span class="author">作者</span>&nbsp;
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/lv-3.e108c68.svg" />
        </div>
        <div class="text">
          <div class="text1">{{text1}}</div>
          <div class="text2">{{text2}}</div>
        </div>
      </el-col>
      <el-col :span="10"
              class="hd2">
        <div class="fx lzc-flex">
          <div v-for="item in icons"
               :key="item.id"
               class="item">
            <i :class="item.className"></i>
          </div>
        </div>
        <div>
          <el-button type="primary"
                     @click="editShow"
                     plain>编辑个人资料</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EditInformation from './components/editinformation'
export default {
  data () {
    return {
      text: ['+ 你的人生格言是什么？', '+ 你有什么梦想？', '+ 你好？'],
      text1: '+ 你从事什么职业？',
      text2: '+ 你的人生格言是什么？',
      //图标管理
      icons: [
        {
          id: 1,
          className: 'iconfont iconweibo-copy'
        },
        {
          id: 2,
          className: 'iconfont icongithub'
        },
        {
          id: 3,
          className: 'iconfont iconweixin'
        }
      ],
      //编辑个人资料框
      dialog: {
        show: false
      },
      //个人资料数据
      data: {}
    }
  },
  components: {
    EditInformation
  },
  created () {
    this.changeText()
  },
  methods: {
    //实现text2数据动态改变
    changeText () {
      let i = 0
      let len = this.text.length
      setInterval(() => {
        i = i === len - 1 ? 0 : i + 1
        this.text2 = this.text[i]
      }, 3000)
    },
    //编辑个人资料
    editShow () {
      this.dialog.show = true
    }
  }
}
</script>
<style lang="scss" scoped>
.about-left-top {
  height: 150px;
  background-color: #fff;
  padding: 30px 20px;
  text-align: left;
  .hd1 {
    // cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url('https://user-gold-cdn.xitu.io/2019/8/31/16ce610b3ea04c7a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1');
    /** 
    * css实现旋转
    */
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    -o-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
  }
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(359deg);
    }
  }
  @-o-keyframes rotate {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(359deg);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .author {
    font-size: 20px;
    font-weight: 550;
  }
  .text {
    margin-top: 10px;
    .text1,
    .text2 {
      cursor: pointer;
      color: #4a68ad;
      height: 30px;
      line-height: 30px;
    }
  }
  .hd2 {
    text-align: right;
    .fx {
      height: 40px;
      margin-bottom: 20px;
      justify-content: flex-end;
      .item {
        width: 40px;
        .iconfont {
          cursor: pointer;
          font-size: 20px;
          color: #999;
        }
      }
    }
  }
}
</style>