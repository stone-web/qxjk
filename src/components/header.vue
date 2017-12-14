<template>
    <header id="index" class="aui-bar aui-bar-nav">
        <a class="aui-pull-left aui-btn">
            <img src="../../static/images/index01.png" alt="" style="width: 1.575rem;height: 1.575rem;" />
        </a>
        <div class="aui-header-block ui-search">
            <div>
              请输入搜索关键字
            </div>
        </div>
        <!-- 消息 -->
        <a class="aui-pull-right aui-btn" style="margin-left: 0.375rem;">
            <div class="aui-badge">99</div>
            <img src="../../static/images/index02.png" alt="" style="width: 1.05rem;height: 1.6rem;" />
        </a>
        <!-- 溯源 -->
        <a class="aui-pull-right aui-btn">
            <img src="../../static/images/index03.png" alt="" style="width: 1.05rem;height: 1.6rem;" />
        </a>
    </header>
</template>

<script>
export default{


}
</script>

<style>
    header.aui-bar{padding-right: 0.75rem;padding-left: 0.75rem;}
    header.aui-bar .aui-btn{padding: 0;}
    .ui-search{
        right: 3.5rem;
        left: 2.75rem;
        margin-top: 0.475rem;
    }
    .ui-search>div{
        height: 1.3rem;
        line-height: 1.3rem;
        background: #5be6e8 url('../../static/images/index04.png') no-repeat 0.75rem center;
        background-size: 0.775rem auto;
        -webkit-background-size: 0.775rem auto;
        -moz-background-size: 0.775rem auto;
        padding-left: 2rem;
        font-size: 0.7rem;
        color: #d0fcfd;
        border-radius: 0.65rem;
        -webit-border-radius: 0.65rem;
        -moz-border-radius: 0.65rem;
        overflow: hidden;
    }
    .aui-bar-nav .aui-title{color: #fff;}
    .aui-bar-tab .aui-bar-tab-item{padding-top: 0.25rem;}
    .aui-bar-tab .aui-bar-tab-item img {top: 0;height: 0.95rem;}
    .aui-badge{
        left:0.5rem !important;
    }
</style>
