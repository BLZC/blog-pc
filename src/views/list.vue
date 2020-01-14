<template>
  <div class="home">
    <div class="box-card"
          v-for="item in articles"
          :key="item.id">
      <div class="box-card-header">
          <div class="titleContainer">
            <el-row>
              <el-col :span="13"><span @click="Jumpdetail(item.id)">
                <span class="title">{{item.title}}</span></span>
              </el-col>
              <el-col :span="10" :offset="1">
                <span class="time">发布时间: {{item.time}}</span>
                &nbsp;&nbsp;
                <span class="time">最后修改时间: {{item.lastEditTime ? item.lastEditTime : '暂无修改'}}</span>
              </el-col>
            </el-row>
          </div>
      </div>
      <el-divider></el-divider>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
          this.articles = result
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
    }
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
            font-size: 16px;
            overflow: hidden;
            text-overflow:ellipsis;
            // white-space: nowrap;
        }
      }
    }
  }
}
</style>