import getters from './getters'
const state={
    count:20
}
const mustation={
    increment(state){
        state.count++;
    }
}
export default{
   state,
   mustation,
   getters
}
