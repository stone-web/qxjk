import vue from 'vue'
import vuex from 'vuex'
import mutation from './mutations'
vue.use(vuex);

export default new vuex.Store(
      mutation
)