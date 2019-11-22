<template>
  <div class="home"
       v-infinite-scroll="load"
       style="overflow:auto">
    <div class="box-card"
          v-for="item in articles"
          :key="item.id">
      <div class="box-card-header">
          <div class="titleContainer">
            <el-row>
              <el-col :span="20"><span @click="Jumpdetail(item.id)"
                  class="title">{{item.title}}</span>
              </el-col>
              <el-col :span="4"><span class="time">{{item.time}}</span></el-col>
            </el-row>
          </div>
      </div>
      <!-- <div class="box-card-bottom">
          <div class="minitem">
              <span class="lickIcon" @click="addLike"><i class="iconfont iconxihuan1"></i></span> &nbsp;
              {{likeNum || 0}}
          </div>
      </div> -->
      <el-divider></el-divider>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      likeNum: 0,
      articles: []
    }
  },
  created () {
    this.getallarticles()
  },
  watch: {
    '$route': 'getallarticles'
  },
  methods: {
    load () {

    },
    //获取文章列表
    getallarticles () {
      let _id = this.$route.query.id || 0
      this.$get('/articleByGategory/'+_id).then(res => {
        if (res.code) {
          let result = res.data
          result.forEach(element => {
            if (element.time) {
              element.time = element.time.split("T")[0]
            }
          })
          this.articles = result;
        }
      })
    },
    //跳到文章详情页
    Jumpdetail (id) {
      this.$router.push(
        {
          path: '/content',
          query: {
            contentId: id
          }
        }
      )
    },
    // 点赞
    // addLike(){
    //   this.likeNum++;
    // }
  }
}
</script>
<style lang="scss" scope>
.home {
  background-color: #fff;
  .box-card {
    &:first-child {
        padding-top: 24px;
    }
    &:last-child {
        padding-bottom: 24px; 
        .el-divider {
            display: none;
        }
    }
    text-align: left;
    .box-card-header {
        padding: 0 20px;
      .titleContainer {
          margin-bottom: 20px;
        .time {
          color: #999;
          font-size: 13px;
        }
        .title {
            cursor: pointer;
            font-weight: 600;
            font-size: 18px;
        }
      }
    }
    .box-card-bottom {
        padding: 0 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .minitem {
        cursor: pointer;
        font-size: 13px;
        line-height: 22px;
        text-align: center;
        width: 60px;
        height: 30px;
        padding: 3px;
        color: #ddd;
        .lickIcon {
          color: red;
        }
      }
    }
  }
}
</style>