import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginOrNot: false,
    com_list: [],
  },
  mutations: {
    SETLIST(state, list){
      for(var i = 0; i < list.length; i++){
        state.com_list[i] = list[i][0]
      }
    }
  },
  actions: {
    GETLIST(context){
      console.log(context)
      return axios.get('/com_data.json').then(res =>{
        context.commit('SETLIST', res.data)
      })
    }
  },
  modules: {
  }
})
