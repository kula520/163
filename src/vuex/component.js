import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const homeData = {
    state: () => ({ 
        navLists:[]
    }),
    mutations: { 
       
    },
    actions: { 
        incrementIfOddOnRootSum ({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    },
    getters: { 
    
    }
}

  
export default new Vuex.Store({
    modules:{
        adver: homeData,
    }
})
  
  