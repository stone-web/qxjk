<template>
    <footer class="aui-bar aui-bar-tab aui-border-t" id="footer">
        <router-link class="aui-bar-tab-item aui-active" to="/home">
            <img  src="../../static/images/bottombtn0102.png">
            <div class="aui-bar-tab-label">首页</div>
        </router-link>
        <router-link class="aui-bar-tab-item" to="/productClass">
            <img  src="../../static/images/bottombtn0202.png">
            <div class="aui-bar-tab-label">分类</div>
        </router-link>
        <router-link class="aui-bar-tab-item" to="/cart">
            <img  src="../../static/images/bottombtn0302.png">
            <div class="aui-bar-tab-label">购物车</div>
        </router-link>
        <router-link class="aui-bar-tab-item" to="/center">
            <img  src="../../static/images/bottombtn0402.png">
            <div class="aui-bar-tab-label">个人中心</div>
        </router-link>
    </footer>
</template>

<script>

export default{

}
</script>

<style>
  .aui-bar-tab-label{
     color:#000;
  }
</style>
