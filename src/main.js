// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router  from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import store from  './store/index.js'
import infinitesScroll from 'vue-infinite-scroll'
Vue.use(infinitesScroll)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: '../static/images/aui-icon.png',
  loading: '../static/images/aui-icon.png',
  attempt: 1
})
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
axios.defaults.withCredentials=true;//跨域请求凭证
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL='http://139.129.9.175:8084/article-web/';

Vue.directive('focus', {
   inserted:function (el,binding,vnode) {
      console.log(binding.value);
      el.value=binding.value;
    }
})

Vue.filter('remoteImg',function(url){
    if(url.substr(0,1)==="f"){
       return url.replace("fs:/","http://www.hhzy521.com/statics/");
    }else if(url.substr(0,1)==="l"){
      return url.replace("localhost:8080/statics/","http://www.hhzy521.com/statics/");
    }else{
      return url;
    }
})

// var auth=Vue.extend({
//      template:"<p><a :href='authorUrl'>{{autoName}}</a></p>",
//      data:function(){
//         return{
//            autoName:'jspang',
//            authorUrl:'http://www.jspang.com'
//         }
//      }
// });
// new auth().$mount('#author')

new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: { App }
})
router.beforeEach((to, from, next) => {
   var path=to.path;
   if(path=="/cart"){
      if(!store.state.user){
        alert("没有登录,本来要跳转到登录页面,没写");
        next()
      }
   }else{
      next()
   }
})