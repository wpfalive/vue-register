import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phoneNo: '18158171234'
  },
  actions: {
    changePhoneNo (ctx, num) {
      ctx.commit('changePhoneNo', num)
    }
  },
  mutations: {
    changePhoneNo (state, num) {
      state.phoneNo = num
    }
  }
  // getters 类似组件中的computed，计算属性
  // 当我们需要根据state中的数据算出一些新的数据时，可以借助getter
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
