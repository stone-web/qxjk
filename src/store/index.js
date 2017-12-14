import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

import action from './action'
import mutation from './mutations'


export default new vuex.Store({
    action,
    mutation
})