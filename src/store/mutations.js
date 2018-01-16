const state={
    count:20,
    user:false
}
const mutations={
    increment(state){
        state.count++;
    },
    reduct(state){
        state.count--;
    }
}
export default{
   state,
   mutations
}

