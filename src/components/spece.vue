<template>
    <div>
        <div class="aui-content specs">
            <div class="box">
                <div class="aui-padded-10 boxGoods">
                    <div class="boxGoods_img">
                        <img :src="detailData.goods.small"/>
                    </div>
                    <div class="aui-text-danger boxGoods_price">￥<em>{{detailData.goods.price}}</em></div>
                </div>
                <ul class="aui-list aui-media-list">
                    <li class="aui-list-item">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-inner">
                                <div class="aui-list-item-text">
                                    <div class="aui-list-item-title">购买数量</div>
                                    <div class="aui-list-item-right">
                                        <div class="aui-bar aui-bar-btn aui-bar-btn-sm" style="width:60%;float:right">
                                            <div class="aui-bar-btn-item">
                                                <i class="aui-iconfont aui-icon-minus" @click="des()"></i>
                                            </div>
                                            <div class="aui-bar-btn-item">
                                                <input type="number" class="aui-input aui-text-center" v-model="number"/>
                                            </div>
                                            <div class="aui-bar-btn-item">
                                                <i class="aui-iconfont aui-icon-plus" @click="add()"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 底部区域 -->
            <footer class="aui-bar aui-bar-tab">
                <div class="aui-bar-tab-item aui-bg-warning aui-text-white"  style="width: auto;" @click="addToCare()">加入购物车</div>
                <div class="aui-bar-tab-item aui-bg-danger aui-text-white" style="width: auto;">立即购买</div>
            </footer>
        </div>
    </div>
</template>

<script>
      var qs = require('qs');
      export default{
           props:['detailData'],
           data(){
              return{
                number:1
              }
           },
           created(){
           },
           methods:{
              des(){
                var _this=this;
                if(_this.number>1){
                   _this.number--;
                }
              },
              add(){
                var _this=this;
                _this.number++;
              },
              addToCare(){
                 var _this=this;
                  this.$http.post(RURL.addProduct,qs.stringify({
                     productid:_this.detailData.goods.goods_id,
                     num:_this.number
                  })).then(function(ret){
                      console.log(ret.data);
                      if(ret.data.result==1){
                         _this.$emit("addScuss",false);
                      }else{
                          alert(ret.data.message);
                      }
                  }).catch(function(errcode){
                      console.log(errcode);
                  });
              }
           },

      }
</script>

<style scoped>
      .specs{
          position:absolute;
          left:0rem;
          bottom:0rem;
          z-index:99;
          border:1px solid red;
      }
      .packageShow{overflow: hidden;}
      .packageGoods{background: #fff;overflow-y: hidden;overflow-x: scroll;}
      .packageGoods_box{height: 6rem;}
      .packageGoods_box:not(:after){content: '';display: block;clear: both;}
      .packageGoods_info{width: 4rem;}
      .packageGoods_info:not(:first-child){margin-left: 0.75rem;}
      .packageGoods_img{width: 4rem;height: 4rem;}
      .packageGoods_name{line-height: 1rem;}
        .box{ margin-bottom: 1rem; background: #fff;position: fixed;left: 0;bottom: 0;z-index: 1;}
        .box .aui-list.aui-media-list{height: 15rem;overflow-x: hidden;overflow-y: scroll;}
        .box .aui-list.aui-media-list .aui-list-item{background-color: #fff;}
        /* 商品展示 */
        .boxGoods{position: relative;padding-left: 5.5rem !important;}
        .boxGoods_img{position: absolute;left: 0.5rem;bottom: 0.5rem;width: 4.5rem;height: 4.5rem;background: #fff;border-radius: 0.25rem;-webkit-border-radius: 0.25rem;-moz-border-radius: 0.25rem;box-shadow: 0 0 0.15rem #03a9f4;-webkit-box-shadow: 0 0 0.15rem #03a9f4;-moz-box-shadow: 0 0 0.15rem #03a9f4;}

        .options{display: block !important;padding-top: 0.5rem;}
        .options:after{content: '';display: block;clear: both;}
        .options span{float: left;padding: 0 0.25rem;height: 1rem;line-height: 1rem;box-shadow: 0 0 1px #212121;-webkit-box-shadow: 0 0 1px #212121;-moz-box-shadow: 0 0 1px #212121;margin: 0 0.5rem 0.5rem 0;}
        .options span.active{box-shadow: 0 0 1px #03a9f4;-webkit-box-shadow: 0 0 1px #03a9f4;-moz-box-shadow: 0 0 1px #03a9f4;color: #03a9f4;}
</style>
