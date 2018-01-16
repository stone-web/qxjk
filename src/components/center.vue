<template>
<div>
    <div class="aui-content" style="padding-top:2.8rem;">
        <ul class="aui-list aui-media-list center-top">
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media health-pic">
                        <img src="../../static/images/demo5.png" class="aui-img-round aui-list-img-sm">
                    </div>
                    <div class="aui-list-item-inner aui-list-item-arrow">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title health-name">时晋涛
                                <span>健康师</span>
                                <div class="userlevelstar">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                            </div>
                            <div class="aui-list-item-right aui-text-center health-number">
                                <span style="font-size:0.75rem">80</span>
                                <span style="font-size:0.5rem;">健康指数</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="aui-content">
        <ul class="aui-list aui-list-in" style="background-image:none;">
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-label-icon">
                    <img src="../../static/images/report-icon.png"/>
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title report">
                        健康报告
                    </div>
                    <div class="aui-list-item-right">
                        测一测
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="aui-content" style="margin-top:0.3rem;">
        <ul class="aui-list aui-list-in" style="background-image:none;">
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title report">
                        我的资产
                    </div>
                    <div class="aui-list-item-right aui-ellipsis-1">
                        ￥109847,8090
                    </div>
                </div>
            </li>
        </ul>
        <section class="aui-grid">
            <div class="aui-row">
                <div class="aui-col-xs-4  aui-border-r">
                    <img src="../../static/images/balance.png" class="balanceImg">
                    <div class="balance aui-ellipsis-1">
                       19970
                        <span>余额</span>
                    </div>
                </div>
                <div class="aui-col-xs-4  aui-border-r">
                    <img src="../../static/images/balance.png" class="balanceImg">
                    <div class="balance aui-ellipsis-1">
                        19970
                        <span>余额</span>
                    </div>
                </div>
                <div class="aui-col-xs-4  aui-border-r">
                    <img src="../../static/images/balance.png" class="balanceImg">
                    <div class="balance aui-ellipsis-1">
                        19970
                        <span>余额</span>
                    </div>
                </div>
            </div>
        </section>
    </div>


    <div class="aui-content" style="margin-top:0.3rem;">
        <p>今日温度{{wendu}}</p>
        <p>今日穿衣指数{{yifu}}</p>
        <p><button @click="addd()">增加温度</button><button @click="redictt()">降低温度</button></p>
    </div>
    <div class="aui-content" style="margin-top:0.3rem;background:#fff;">
       <input type="text" name="" v-model="count">
       <p><button @click="increment()">加</button></p>
       <button @click="reduct()">减</button>
    </div>

    <div class="aui-content" style="margin-top:0.3rem;display: none">
        <ul class="aui-list aui-list-in" style="background-image:none;">
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-label-icon">
                    <img src="../../static/images/order-icon.png" style="width:0.95rem;height:1.15rem;"/>
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title">
                        健康问答
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="aui-content" style="margin-top:0.3rem;">
        <ul class="aui-list aui-list-in" style="background-image:none;">
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-label-icon">
                    <img src="../../static/images/order-icon.png" style="width:0.95rem;height:1.15rem;"/>
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title">
                        我的食谱
                    </div>
                </div>
            </li>
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-label-icon">
                    <img src="../../static/images/equity-icon.png" style="width:1rem;height:1.1rem;"/>
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title">
                        我的权益
                    </div>
                </div>
            </li>
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-label-icon">
                    <img src="../../static/images/health-icon.png" style="width:1rem;height:0.825rem;" />
                </div>

                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title">
                        我的健康
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="aui-content" style="margin-top:0.3rem;">
        <ul class="aui-list aui-list-in">
            <li class="aui-list-item aui-list-item-middle" @click="about($event)">
                <div class="aui-list-item-label-icon" style="vertical-align: middle;">
                    <img src="../../static/images/about-icon.png" style="width:1rem;height:1rem;"/>
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title">
                        关于我们
                    </div>
                </div>
            </li>
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-label-icon">
                    <img src="../../static/images/kf-icon.png" style="width:1rem;height:1rem;"/>
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title">
                        我的客服
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
  import store from '../store/index.js'
export default{
      data(){
        return{
            wendu:19,
            yifu:"毛衣"
        }
      },
      created(){
        this.increment()
      },
      computed:mapState(['count']),
      methods:{
          ...mapMutations(['increment','reduct']),
          about:function(event){
              console.log(event);
          },
          redictt:function(){
            this.wendu-=5;
          },
          addd:function(){
            this.wendu+=5;
          }
      },
      watch:{
        wendu:{
            handler:function(nowValue,ordValue){
                 if(nowValue>20){
                   this.yifu="短袖"
                 }else if(nowValue<20 && nowValue >0){
                   this.yifu="卫衣"
                 }else{
                   this.yifu="棉袄"
                 }
            },
            deep:true
        }
      },
      store
}
</script>

<style>
        .center-top {
            background: url(../../static/images/center-top.jpg) no-repeat center center;
            background-size: cover;
            color: #fff;
        }

        .health-name {
            font-size: 0.75rem;
            color: #fff;
            font-weight: 600;
        }

        .health-pic {
            width: 4.1rem;
            padding: 0.15rem !important;
            margin: 0.5rem 1rem 0.825rem 0rem;
            background-color: #84dcdb;
            border-radius: 50%;
        }

        .health-name span {
            font-size: 0.65rem;
            font-weight: 300;
        }

        .userlevelstar {
            width: 3.6rem;
            text-align: center;
            margin-top: 0.3rem;
            background: #C8F5F4;
            font-size: 0.4rem;
            color: #5FE4E2;
            border-radius: 4rem;
        }

        .health-number span {
            display: block;
            color: #fff;
        }

        .center-top .aui-list-item-arrow:before {
            width: 0.5rem;
            height: 0.5rem;
            border: 1px solid #fff;
            border-top: none;
            border-right: none;
        }

        .aui-list-item-label-icon img {
            width: 1rem;
            height: 1rem;
        }

        .aui-list-item-title {g
            font-size: 0.7rem !important;
            color: #515151 !important;
        }

/*         .health-name {
            font-size: 0.8rem !important;
            color: #fff !important;
        } */

        .balanceImg {
            display: inline-block;
            width: 1.2rem;
            height: 1.35rem;
            vertical-align: middle;
            margin-left: 1.3rem;
            margin-right: 0.35rem;
        }

        .balance {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.65rem;
            color: #3d3d3d;
        }

        .balance span {
            display: block;
            color: #9a9a9a;
            font-size: 0.6rem;
            margin-top: -0.2rem;
        }

        .aui-grid [class*=aui-col-] {
            padding: .65rem 0;
            text-align: left;
        }
</style>
