// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router  from './router'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
axios.defaults.withCredentials=true;//跨域请求凭证
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL='http://139.129.9.175:8084/article-web/';


new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
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
