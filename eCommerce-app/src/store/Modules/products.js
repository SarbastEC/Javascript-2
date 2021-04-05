import axios from 'axios'

export default ({
    state: {
        products: [],
        searchValue: ''
    },

    getters: {
        products: state => state.products,
        searchValue: state => state.searchValue,
        filteredProducts: state => {
            return state.products.filter(product => product.name.toLowerCase().match(state.searchValue.toLowerCase()))
        }
    },

    mutations: {
        GET_PRODUCTS: (state, products) => {
            state.products = products
        },
        SEARCH: (state, val) => {
            state.searchValue = val
        }
    },

    actions: {
        getProducts: async ({commit}) => {
            const res = await axios.get('http://localhost:9999/api/products')
            commit('GET_PRODUCTS', res.data)
        },
        search: ({commit}, val) => {
            commit('SEARCH', val)
        }
    }
  })