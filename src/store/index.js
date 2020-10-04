import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginOrNot: false,
    com_list1: [],
    com_list2: [],
    com_list3: [] 
  },
  mutations: {
    SETLIST1(state, com_list1){
      state.com_list1 = com_list1
    }
  },
  actions: {
    GETLIST1(context){
      console.log(context)
      // context.commit('SETDAY')
      return axios.get('/com_data.json').then(res =>{
        context.commit('SETLIST1', res.data)
      })
    }
  },
  modules: {
  }
})
