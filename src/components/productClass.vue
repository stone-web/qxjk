<template>
    <div>
        <div class="aui-row gdH">
            <div class="aui-col-xs-2"  style="overflow-y: hidden;height: 100%;background: #fff;">
                <ul class="aui-list aui-list-in left-panel">
                    <li class="aui-list-item" v-for="(item,index) in getTagList" @click="changeLabel(item.tag_id,index)" :class="{active:labelSelect==index}">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-title aui-ellipsis-1" v-text="item.tag_name" ></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="aui-col-xs-10 aui-padded-5 aui-padded-t-0" style="overflow-y: scroll;height: 100%;padding-top: 2.2rem !important;" id="classDetail">
                <!-- 右侧顶部商品分类 -->
                <div class="genreBox">
                    <div class="aui-tab" id="tab" :style="'width: '+(productClass.length*4)+'rem;'">
                        <div class="aui-tab-item" v-for="(item,index) in productClass" v-text="item.name" @click="changeGenre(item.cat_id,index)" :class="{'aui-active': genreSelect == index}">
                        </div>
                    </div>
                </div>
                <!-- 商品列表 -->
                <ul class="aui-list-view aui-grid-view">
                    <router-link class="aui-list-view-cell aui-img aui-col-xs-6 aui-padded-5" v-for="(item,index) in productLists" :to="/productDetail/+item.goods_id" :key = "item.id">
                        <div class="goodsBox aui-padded-5">
                            <div class="goodsBox_img">
                                <img class="aui-img-object" :src="item.small">
                            </div>
                            <div class="aui-img-body aui-text-left">
                                <div class="aui-ellipsis-1 goodsBox_name" v-text="item.text"></div>
                                <p class="aui-ellipsis-2 goodsBox_text"></p>
                                <p>
                                    <span class="goods-price aui-text-danger">¥<strong v-text="item.price"></strong>元</span>
                                    <i class="aui-iconfont aui-icon-cart aui-pull-right"></i>
                                </p>
                            </div>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
      export default{
           data(){
              return{
                 getTagList:[],
                 productClass:[],
                 productLists:[],
                 labelIndex:0,
                 genreIndex:0,
                 labelSelect:0,
                 genreSelect:0
              }
           },
           created(){
              this.slideData();
              this.productList();
              this.getGoodsListByTag();
           },
           methods:{
               //左边标签
               slideData(){
                  var _this=this;
                  _this.$http.get(RURL.getTagList)
                    .then(function (ret) {
                      _this.getTagList=ret.data.data;
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
               },
               //右上方分类列表
               productList(){
                  var _this=this;
                  this.$http.get(RURL.productList)
                    .then(function (ret) {
                      _this.productClass=ret.data.data;
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
               },
               //右下方产品
               getGoodsListByTag(){
                  var _this=this;
                  this.$http.get(RURL.getGoodsListByTag,{
                        params:{
                           tagid:_this.labelIndex,
                           catid:_this.genreIndex
                        }
                  }).then(function (ret) {
                      _this.productLists=ret.data.data;
                      console.log(_this.productLists);
                    })
                    .catch(function (error){
                      console.log(error);
                    });
               },
               changeLabel(tag_id,index){
                    var _this=this;
                    _this.labelIndex=tag_id;
                    _this.labelSelect=index;
                    _this.getGoodsListByTag();
               },
               changeGenre(cat_id,index){
                   var _this=this;
                   _this.genreIndex=cat_id;
                   _this.genreSelect= index;
                   _this.getGoodsListByTag();
               },

           }

      }
</script>

<style scoped>
        .aui-list.aui-list-in.left-panel .aui-list-item {
            background-position:0 bottom !important;
            min-height: auto;
            background-color: #fff
        }
        .aui-list.aui-list-in.left-panel .aui-list-item-title{
            font-size: 0.6rem;
        }
        .aui-list.aui-list-in.left-panel .aui-list-item.active .aui-list-item-title{
            color:#1dcbc9;
        }
        #classDetail .aui-grid img{
            width: 2rem;
            height:2rem;
            margin: auto auto;
        }

        .class-detail{
            font-size: 12px;
        }

        /* 右侧上方导航 */
        .genreBox{position: fixed;top: 2.2rem;left: 16.66666667%;right: 0;/* background: #fff; */overflow-x: scroll;overflow-y: hidden;z-index: 5;padding-left:0.6rem;}
        .genreBox .aui-tab-item{width: 4rem;}
        .genreBox .aui-tab-item.aui-active {color: #1dcbc9;border-bottom: 2px solid #1dcbc9;}
        /*商品展示*/
        .goodsBox{width: 100%;background: #fff;border-radius: 0.15rem;-webkit-border-radius: 0.15rem;-moz-border-radius: 0.15rem;box-shadow: 0 0 0.15rem #ddd;-webkit-box-shadow: 0 0 0.15rem #ddd;-moz-box-shadow: 0 0 0.15rem #ddd;}
        .goodsBox .goodsBox_img{width: 100%;height: 5rem;position: relative;/* overflow: hidden; */}
        .goodsBox .goodsBox_img img{width: 100%;height: 100%;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;}
        .goodsBox .goodsBox_name{height: 1rem;line-height: 1rem;font: 0.7rem;color: #515151;margin-top: 0.2rem;}
        .goodsBox .goodsBox_text{line-height: 0.8rem;font: 0.55rem;color: #858585;}
        .gdH{padding-top:2.2rem;}
</style>
