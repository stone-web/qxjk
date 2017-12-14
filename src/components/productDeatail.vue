<template>
    <div>
        <div class="swiper-container" id="banner">
            <a class="linkTo" name='goods'></a>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in detailData.goodsPhono">
                    <img :src="item.big"/>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="aui-list  aui-margin-b-10 aui-padded-15">
            <div class="aui-content">
                <h3 class="product-name" v-text="detailData.goods.name"></h3>
                <h4></h4>
                <div class="prod-price">
                    <span class="yang-pic"></span>
                    <span class="yang-pic-price" id="jdPrice-copy">
                        <span class="big-price" v-text="detailData.goods.price"></span>
                        <s class="small-price"></s>
                    </span>
                </div>
            </div>
        </div>
        <div class="aui-content safeguard">
            <section class="aui-grid aui-margin-b-10">
                <div class="aui-row">
                    <div class="aui-col-xs-4">
                        <i class="aui-iconfont aui-icon-home"></i>
                        <div class="aui-grid-label">基地直供</div>
                    </div>
                    <div class="aui-col-xs-4">
                        <i class="aui-iconfont aui-icon-cart"></i>
                        <div class="aui-grid-label">百倍赔偿</div>
                    </div>
                    <div class="aui-col-xs-4">
                        <i class="aui-iconfont aui-icon-map"></i>
                        <div class="aui-grid-label">溯源保障</div>
                    </div>
                </div>
            </section>
        </div>
        <div class="aui-content evaluate aui-margin-b-10" id="product-detaile">
            <a class="linkTo" name='detail'></a>
            <ul class="aui-list aui-list-in">
                <li class="aui-list-item">
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-title">商品评价</div>
                        <div class="aui-list-item-right">
                            <span class="evaluate-num"><i>12</i>个评价,好评率为<i>98%</i></span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="aui-card-list-content">
                <ul class="aui-list aui-media-list">
                    <li class="aui-list-item aui-list-item-middle">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-media" style="width:4rem;">
                                <img src="../../static/images/header.png" class="aui-img-round aui-list-img-sm">
                            </div>
                            <div class="aui-list-item-inner aui-list-item-arrow">
                                <div class="aui-list-item-text">
                                  <div class="aui-list-item-title health-name">
                                     <div class="userlevelstar">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                     </div>
                                     <span class="evaluate-name">时晋涛</span>
                                     <span class="evaluate-content">此用户暂时没有评价</span>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            <div class="more-evaluate">
                <span>更多评价</span>
            </div>
            </div>
        </div>
        <div class="aui-content detail">
            <a class="linkTo" name='more'></a>
            <div class="aui-content aui-margin-b-10">
                <ul class="aui-list aui-list-in" style="background-image:none;">
                    <li class="aui-list-item">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-title">不合适人群</div>
                        </div>
                    </li>
                </ul>
                <ul class="aui-list aui-media-list">
                    <li class="aui-list-item aui-list-item-middle">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-media">
                                批次:
                            </div>
                            <div class="aui-list-item-inner">
                                PT-201721564613
                                <span class="source item-right">溯源</span>
                            </div>
                        </div>
                    </li>
                    <li class="aui-list-item aui-list-item-middle">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-media">
                                基地:
                            </div>
                            <div class="aui-list-item-inner">
                                洛川AB苹果(品牌)
                                <span class=" item-right">品牌故事</span>
                            </div>
                        </div>
                    </li>
                    <li class="aui-list-item aui-list-item-middle">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-media">
                                生产商:
                            </div>
                            <div class="aui-list-item-inner">
                                陕西省XXX企业有限公司
                            </div>
                        </div>
                    </li>
                    <li class="aui-list-item aui-list-item-middle">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-media">
                                产地:
                            </div>
                            <div class="aui-list-item-inner">
                                陕西某某
                                <span class="item-right">别名:<i>洛川苹果</i></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="aui-content aui-margin-b-10">
                <div class="aui-content">
                    <ul class="aui-list aui-list-in">
                        <li class="aui-list-item">
                            <div class="aui-list-item-inner">
                                <div class="aui-list-item-title">营养分析</div>
                                <div class="aui-list-item-right source">咨询营养师</div>
                            </div>
                        </li>
                    </ul>
                    <section class="aui-grid aui-margin-b-10">
                        <div class="aui-row">
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                        </div>
                        <div class="aui-row">
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                        </div>
                        <div class="aui-row">
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖:<i>20%</i></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="aui-content aui-margin-b-10">
                <div class="aui-content">
                    <ul class="aui-list aui-list-in">
                        <li class="aui-list-item">
                            <div class="aui-list-item-inner">
                                <div class="aui-list-item-title">不合适人群</div>
                            </div>
                        </li>
                    </ul>
                    <section class="aui-grid aui-margin-b-10">
                        <div class="aui-row">
                            <div class="aui-col-xs-4">
                                <span>糖尿病</span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖尿病</span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖尿病</span>
                            </div>
                        </div>
                        <div class="aui-row">
                            <div class="aui-col-xs-4">
                                <span>糖尿病</span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖尿病</span>
                            </div>
                            <div class="aui-col-xs-4">
                                <span>糖尿病</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="aui-content aui-list" id="goodsDetail""></div>
        </div>
        <footer class="aui-bar aui-bar-tab footer" style="z-index: 99;">
            <div class="aui-bar-tab-item" tapmode style="width: 3rem;">
                <i class="aui-iconfont aui-icon-comment"></i>
                <div class="aui-bar-tab-label">咨询</div>
            </div>
            <div class="aui-bar-tab-item" style="width: 3rem;">
                <div class="aui-badge">12</div>
                <i class="aui-iconfont aui-icon-cart"></i>
                <router-link class="aui-bar-tab-label" to="/cart">购物车</router-link>
            </div>
            <div class="aui-bar-tab-item aui-bg-warning aui-text-white" style="width: auto;" @click="addToCart()">加入购物车</div>
            <div class="aui-bar-tab-item aui-bg-danger aui-text-white"  @click="addToCart()" style="width: auto;">立即购买</div>
        </footer>
        <!-- 选择参数 -->
        <productSpecl v-show="showSpec" :detailData="detailData" @addScuss="addScuss"></productSpecl>
        <div class="aui-mask aui-mask-in maks" v-show="showSpec" @click="hideSpec()"></div>
    </div>
</template>

<script>

      import productSpecl from './spece.vue'

      var qs = require('qs');

      export default{
           data(){
              return{
                 detailData:{
                     goods:{
                        name:"",
                        prize:null
                     }
                 },
                 showSpec:false
              }
           },
           mounted(){
               var goodsId=this.$route.params.id
               this.getProductDeatail(goodsId);
               setTimeout(function(){
                    var bannerSwiper = new Swiper('#banner.swiper-container', {
                        autoplay: 5000,//可选选项，自动滑动
                        pagination : '#banner .swiper-pagination',
                    });
               },500)
           },
           methods:{
             getProductDeatail(goodsId){
                 var _this=this;
                  this.$http.post(RURL.getGoodsDetail,qs.stringify({
                    goods_id:goodsId
                  }))
                  .then(function (ret) {
                     _this.detailData=ret.data.data;
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
             },
             addToCart(){
                 var _this=this;
                 _this.showSpec=true;
                 document.documentElement.style.overflow = "hidden";//当点击弹出出现，让页面禁止滚动
             },
             hideSpec(){
                 var _this=this;
                 _this.showSpec=false;
                 document.documentElement.style.overflow = "scroll";//可以滚动
             },
             addScuss(message){
                alert("加入购物车成功");
                this.showSpec=message;
                document.documentElement.style.overflow = "scroll";//可以滚动
             }
           },
           components:{
              productSpecl
           },
      }

</script>

<style scoped>
        .maks{
            width:100%;
            height:100%;
            background-color:rgab(0,0,0,0.5);
        }
        .lazy{
            height: 100%;
            width: auto;
            margin: 0 auto;
        }
        .swiper-container{
            max-height: 400px;
            background: #ddd;
        }
        .prod-price {
            font-size: 23px;
            font-family: Helvetica;
            color: #f23030;
            font-weight: 700;
            line-height: 23px;
            float: left;
            margin-top: 7px;
            margin-right: 6px;
        }
        .yang-pic {
            float: left;
            display: block;
            background: url(../../static/images/product-detail-sprites-mjs.png?v=1) no-repeat 0 0;
            background-size: 100px 100px;
            background-position: -14px -17px;
            width: 10px;
            height: 12px;
            margin-top: 7px;
        }
        .small-price{
            font-size:12px;
            color:#ccc;
        }
        .product-name{
            margin-bottom:6px;
        }
        .aui-grid [class*=aui-col-]{
            padding:0.5rem 0rem;
            font-size:14px;
        }
        .safeguard .aui-grid [class*=aui-col-]{
            padding:0.2rem 0rem;
        }
        .aui-list .aui-list-item-media{
            width:3.5rem !important;
        }
        .item-right{
            float:right;
        }
        .item-right i{
            font-style:normal;
        }
        .source{
            background-color: #1dcbc9;
            color:#fff !important;
            padding:0.1rem 0.3rem;
            font-size:12px;
        }
        .aui-grid .aui-iconfont{
            font-size:1rem;
        }
       .aui-media-list .aui-list-item{
            font-size:14px;
       }
       .aui-row i{
          font-style:normal;
          margin-left:4px;
       }
       .aui-grid-label{
          margin-top:0rem !important;
       }
        .userlevelstar {
            width:3.6rem;
            text-align:center;
            margin-top:0.3rem;
            background: #C8F5F4;
            font-size: 0.4rem;
            color: #5FE4E2;
            border-radius: 4rem;
        }
        .evaluate-name{
            font-size:14px;
        }
        .evaluate-content{
            font-size:12px;
            display: block;
        }
        .more-evaluate{
           width:100%;
           background-color:#fff;
           text-align:center;
           padding:0.4rem 0rem;
        }
        .more-evaluate span{
            display: inline-block;
            width:4rem;
            height:1.3rem;
            text-align:center;
            line-height:1.3rem;
            background-color:#1dcbc9;
            color:#fff;
            border-radius:3rem;
        }
        .evaluate-num i{
            font-style:normal;
        }
       @media screen and (-webkit-min-device-pixel-ratio:1.5) {
         .aui-list {
              background-image:none;
         }
         .aui-list .aui-list-item {
              background-image:none;
         }
       }
       .detail{
         margin-bottom:4rem;
       }
       .footer{
          background-color:#fff;
       }

</style>
