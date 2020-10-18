import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    loginID: '',
    com_list1: [],
    com_list2: [],
    com_list3: [],
    com_data: [],
  },
  mutations: {
    UPDATEAUTH(state, isAuth){
      state.isAuthenticated = isAuth
      console.log( state.isAuthenticated)
    },
    UPDATELOGINID(state, loginID){
      state.loginID = loginID
      console.log(state.loginID)
    },
    // UPDATEDATA(state, data){
    //   axios.put('/com_org_data.json', data).then(res =>{
    //     // context.commit('SETLIST', res.data)
    //     console.log('success put')
    //     console.log(res)
    //   })
    // },
    SETLIST(state, com_list){
      for(var i = 0; i < com_list.length-1; i++){
        state.com_list1.push( com_list[i] )
        i++
        state.com_list2.push( com_list[i] )
        i++
        state.com_list3.push( com_list[i] )
      }
    },
    SETCOMPANYDATA(state, com_data){
      state.com_data = com_data[7]
    },
  },
  actions: {
    GETLIST(context){
      // console.log(context)
      // context.commit('SETDAY')
      return axios.get('/com_org_data.json').then(res =>{
        context.commit('SETLIST', res.data)
      })
    },
    GETCOMPANYDATA(context){
      // console.log(context)
      // context.commit('SETDAY')
      return axios.get('/com_org_data.json').then(res =>{
        context.commit('SETCOMPANYDATA', res.data)
      })
    },
  },
  modules: {
  }
})
