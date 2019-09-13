<template>
  <div class="contentright">
    <div class="aboutAuthor">
      <div class="aboutt">关于作者</div>
      <div class="about1">
        <el-row>
          <el-col :span="6">
            <div class="hd1"></div>
          </el-col>
          <el-col :span="18"
                  class="hd2">
            作者&nbsp;
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/lv-3.e108c68.svg" />
          </el-col>
        </el-row>
      </div>
      <div class="item">
        <el-row>
          <el-col :span="6">
            <img class="hd"
                 src="/images/zan.png" />
          </el-col>
          <el-col :span="18">
            <div class="hdt">
              获得点赞2,871
            </div>

          </el-col>
        </el-row>

      </div>
      <div class="item">
        <el-row>
          <el-col :span="6">
            <img class="hd"
                 src="/images/yuedu.png" />
          </el-col>
          <el-col :span="18">
            <div class="hdt">
              文章被阅读78,376
            </div>

          </el-col>
        </el-row>

      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.aboutAuthor {
  text-align: left;
  background-color: #fff;
  width: 70%;
  margin: 0 25% 0 5%;
  padding: 10px;
  .aboutt {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  .about1 {
    padding: 10px 0;
    .hd1 {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-image: url('https://user-gold-cdn.xitu.io/2019/8/31/16ce610b3ea04c7a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1');
    }
    .hd2 {
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 550;
      vertical-align: middle;
    }
  }
  .item {
    .hd {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .hdt {
      font-size: 14px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>