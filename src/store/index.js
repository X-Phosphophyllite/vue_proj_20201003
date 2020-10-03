import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const a={
  state:{
    name:'Krenz'
  },
  mutations:{
    update_name(state){
      state.name='Akko'
    }
  },
  actions:{

  },
  getters:{

  }
}

export default new Vuex.Store({
  state: {
    name:"TRIGGER"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    a
  }
})
