import Vue from 'vue'
import Vuex from 'vuex'
import products from './Modules/products'
import product from './Modules/product'
import cart from './Modules/cart'
import user from './Modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    product,
    cart,
    user
  }
})
