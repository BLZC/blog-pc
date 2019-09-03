<template>
  <div class="content_left"
       v-infinite-scroll="load"
       style="overflow:auto">
    <div class="fenlei">
      <div class="flitem"
           v-for="item in fenlei"
           :key="item.id">{{item.name}}</div>
    </div>
    <el-card class="box-card"
             v-for="item in articles"
             :key="item.id"
             shadow="none">
      <div slot="header"
           class="clearfix">
        <div class="top"> <span class="tp1">专栏</span>&nbsp;&nbsp;{{item.author}}&nbsp;&nbsp;&nbsp;{{item.time}}</div>
        <span class="title">{{item.title}}</span>
        <el-button style="float: right; padding: 3px 0; display:none;"
                   type="text">分享</el-button>
      </div>
      <div class="text item">
        <div class="minitem">
          <i class="iconfont icondianzan"></i>
          {{item.zan}}
        </div>
        <div class="minitem">
          <i class="iconfont iconpinglun"></i>
          {{item.pinglun}}
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fenlei: [
        {
          id: 1,
          name: '热门'
        },
        {
          id: 2,
          name: '最新'
        },
        {
          id: 3,
          name: '热榜'
        }
      ],
      articles: [
        {
          id: 1,
          title: '前端工程师如何继续保持热情',
          author: '前端小白',
          time: '2019/9/1',
          fenlei: '',
          content: '',
          zan: '123',
          pinglun: '23'
        },
        {
          id: 2,
          title: '前端工程师如何继续保持热情',
          author: '前端小白',
          time: '2019/9/1',
          fenlei: '',
          content: '',
          zan: '123',
          pinglun: '23'
        },
        {
          id: 3,
          title: '前端工程师如何继续保持热情',
          author: '前端小白',
          time: '2019/9/1',
          fenlei: '',
          content: '',
          zan: '123',
          pinglun: '23'
        },
        {
          id: 4,
          title: '前端工程师如何继续保持热情',
          author: '前端小白',
          time: '2019/9/1',
          fenlei: '',
          content: '',
          zan: '123',
          pinglun: '23'
        },
        {
          id: 5,
          title: '前端工程师如何继续保持热情',
          author: '前端小白',
          time: '2019/9/1',
          fenlei: '',
          content: '',
          zan: '123',
          pinglun: '23'
        },
        {
          id: 6,
          title: '前端工程师如何继续保持热情',
          author: '前端小白',
          time: '2019/9/1',
          fenlei: '',
          content: '',
          zan: '123',
          pinglun: '23'
        },
        {
          id: 7,
          title: '前端工程师如何继续保持热情',
          author: '前端小白',
          time: '2019/9/1',
          fenlei: '',
          content: '',
          zan: '123',
          pinglun: '23'
        }
      ]
    }
  },
  methods: {
    load () {

    }
  }
}
</script>
<style lang="scss">
.content_left {
  background-color: #fff;
  .fenlei {
    width: 100%;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #666;
    font-size: 14px;
    border-bottom: 1px solid #fafafa;
    .flitem {
      width: 60px;
      text-align: center;
      cursor: pointer;
    }
    .flitem:hover {
      color: #007fff;
    }

    .flitem:first-child {
      border-right: 1px solid #ddd;
    }
    .flitem:last-child {
      border-left: 1px solid #ddd;
    }
  }
  .el-card {
    cursor: pointer;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid #fafafa;
    text-align: left;
    .el-card__header {
      border-bottom: 0 solid #eee !important;
      padding: 20px 20px 5px 20px;
      .top {
        font-size: 13px;
        color: #666;
        padding: 0 0 10px 0;
        .tp1 {
          color: #007fff;
        }
      }
      .title {
        font-weight: 600;
      }
    }
    .el-card__body {
      padding: 5px 20px 20px 20px;
      .item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .minitem {
          font-size: 13px;
          line-height: 22px;
          text-align: center;
          width: 60px;
          height: 30px;
          border: 0.5px solid #ddd;
          padding: 3px;
          color: #ddd;
        }
      }
    }
  }
  .el-card:hover {
    .el-button {
      display: inline-block !important;
    }
  }
}
</style>