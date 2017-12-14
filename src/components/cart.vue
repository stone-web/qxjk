<template>
    <div>
        <section class="aui-refresh-content">
            <ul class="aui-list aui-select-list">
                <li class="aui-list-item info" v-for="(item,index) in cartData">
                    <div class="aui-list-item-label">
                        <input class="aui-radio" type="checkbox" name="info" v-model="item.is_check" @click="check(index)">
                    </div>
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-media">
                            <img :src="item.image_default | remoteImg"/>
                        </div>
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-ellipsis-2">{{item.name}}</div>
                            </div>
                            <div class="aui-list-item-text desc"></div>
                            <div class="aui-info aui-margin-t-5" style="padding:0">
                                <div class="aui-info-item">
                                    <span class="aui-text-danger">¥<strong>{{item.price}}</strong></span>
                                </div>
                                <div class="cartNum">
                                    <div class="aui-bar aui-bar-btn aui-bar-btn-sm" style="float:right">
                                        <div class="aui-bar-btn-item">
                                            <i class="aui-iconfont aui-icon-minus" @click=des(index)></i>
                                        </div>
                                        <div class="aui-bar-btn-item">
                                            <input type="number" class="aui-input aui-text-center" v-model="item.num">
                                        </div>
                                        <div class="aui-bar-btn-item">
                                            <i class="aui-iconfont aui-icon-plus" @click=add(index)></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <footer class="aui-bar aui-bar-tab" style="background: #efefef;bottom:2.7rem;">
            <div class="aui-bar-tab-item" tapmode style="width: 4.1rem;font-size: 14px;">
                <input class="aui-radio" type="checkbox" name="all" @click="checkAllEven()" v-model="checkAll"> 全选
            </div>
            <div class="aui-bar-tab-item" tapmode style="width: 7rem;color: #333;">
                <span>合计: <em class="aui-text-danger">￥<span>{{addMoney}}</span></em></span>
            </div>

            <div class="aui-bar-tab-item aui-bg-danger aui-text-white" style="width: auto;" >去结算(<span ></span>)</div>
            <div class="aui-bar-tab-item " tapmode style="width: auto;" v-if="false">
                <div class="aui-btn aui-btn-danger aui-btn-block" style="height: 1.5rem;line-height: 1.5rem;font-size: 14px;float: right;width: 100px;margin-right: 0.7rem" >删除(<span ></span>)</div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default{
           data(){
              return{
                cartData:[],
                checkAll:true,
              }
           },
           created(){
              this.getcartData();
           },
           methods:{
              getcartData(){
                  var _this=this;
                  this.$http.post(RURL.getCartList).then((ret)=>{
                     _this.cartData=ret.data.data;
                     console.log(_this.cartData);
                  }).catch((errcore)=>{
                      console.log(errcore);
                  })
              },
              des(index){
                 var _this=this;
                 if( _this.cartData[index].num>1){
                   _this.cartData[index].num--;
                 }
              },
              add(index){
                  this.cartData[index].num++;
              },
              checkAllEven(){
                 var _this=this;
                 _this.checkAll=!_this.checkAll;
                 for( var i=0;i<_this.cartData.length;i++){
                    _this.cartData[i].is_check=_this.checkAll;
                 }
              },
              check(index){
                 var _this=this;
                 _this.cartData[index].is_check=!_this.cartData[index].is_check;
                 for( var i=0;i<_this.cartData.length;i++){
                    if(_this.cartData[i].is_check==false){
                        _this.checkAll=false;
                        return;
                    }
                 }
                 _this.checkAll=true;
              },
           },
           computed:{
            addMoney(){
              var money=0;
              for( var i=0;i<this.cartData.length;i++){
                 if(this.cartData[i].is_check){
                    money+=this.cartData[i].price*this.cartData[i].num;
                 }
              }
              return money.toFixed(2)
            }
           },
    }
</script>

<style scoped>
    .aui-refresh-content{
      padding-top:3rem;
    }
    .aui-radio:checked, .aui-radio.aui-checked, .aui-checkbox:checked, .aui-checkbox.aui-checked {
        background-color: #1dcbc9;
        border: solid 1px #1dcbc9;
    }
    /* 购物车信息 */
    .aui-list-item.info{padding: 0 0.5rem !important;}
    .aui-list-item.info .aui-list-item-label{padding-right: 0 !important;min-width: 1.5rem !important;}
    .aui-list-item.info .aui-list-item-media{padding: 0.5rem !important;}
    .aui-list-item.info .cartNum{width: 6rem;}
</style>
