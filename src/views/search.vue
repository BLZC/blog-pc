<template>
    <div class="search">
        <template v-if="articles.length <= 0">
            <div class="warnText">没有对应文章</div>
        </template>
        <template v-else>
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
            <el-divider></el-divider>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return {
            articles: []
        }
    },
    watch: {
        $route(){
            this.getData()
        }
    },
    created(){
        this.getData()
    },
    methods: {
        // 获取查询结果
        getData(){
            if(this.$route.query.searchText){
                let title = this.$route.query.searchText
                this.$get('/getArticleByTitle/'+title).then(res => {
                    this.articles = res.data
                })
            }
        },
        // 跳转文章详情页面
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
.search {
  background-color: #fff;
  .warnText {
      height: 100px;
      line-height: 100px;
      color: #999;
      font-size: 16px;
  }
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
  }
}
</style>