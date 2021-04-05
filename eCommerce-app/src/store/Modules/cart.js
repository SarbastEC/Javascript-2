
export default ({
    state: {
        cartProducts: [],
    },

    getters: {
        cartProducts: state => state.cartProducts,
        qtyVal: state => state.qtyVal,
        cartItemsCount: state => {
            let counter = 0
            state.cartProducts.forEach(item => {
                 counter += item.qty
            })
            return Number(counter)
        },
        cartTotal: state => {
            let total = 0
            state.cartProducts.forEach(item => {
                total += item.product.price*item.qty
            })
            return total
        }
    },

    mutations: {
        ADD_TO_CART: (state, {product, qty}) => {
            let existsProduct = state.cartProducts.find(item => item.product._id === product._id)
                if(existsProduct){
                    existsProduct.qty += Number(qty)
                    return 
                } 
                state.cartProducts.push({product, qty})
        },
        REMOVE_CART_PRODUCT: (state, id) => {
            state.cartProducts = state.cartProducts.filter(item => item.product._id !== id)
        }

    },

    actions: {
        addToCart: ({commit}, {product, qty}) => {
            commit('ADD_TO_CART', {product, qty})
        },
        removeCartProduct: ({commit}, id) => {
            commit('REMOVE_CART_PRODUCT', id)
        }
    }
  })