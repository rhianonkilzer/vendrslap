import Vue from 'vue'
import Vuex from 'vuex'
import Target from './models/Target';
import Vendmachine from './models/Vendmachine';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    target: new Target({
      health: 100,
      name: "ScarCrow",
      attacks: {
        kick: 10,
        slap: 1,
        punch: 5,
        haduouken: 100
      },
      items: []
    }),
    machine: new Vendmachine({
      name: "Vendr",
      foodItems: [{
        id: 'Cheetos',
        img: 'cheetos-crunchy-cheese.png',
        price: 1.50,
        quantity: 10

    }, {
        id: 'Mountain Dew',
        img: 'mountain-dew-soda.jpg',
        price: .50,
        quantity: 30
    }, {
        id: 'KitKat',
        img: 'kitkat.jpg',
        price: 1.00,
        quantity: 10
    }]

    })
  },
  mutations: {
    setHealth(state, actualHealth) {
      state.target.health = actualHealth
    }
  },
  actions: {
    attack({ dispatch, commit, state }, payload) {
      //async call
      let newHealth = state.target.health - state.target.attacks[payload]
      commit('setHealth', newHealth)
    },
    // add new action here
  }
})
