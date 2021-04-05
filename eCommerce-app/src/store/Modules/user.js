import axios from 'axios'

export default ({
    state: {
        userToken: null,
        loggedin: false
    },

    getters: {
        userToken: state => state.userToken,
        loggedin: state => state.loggedin
    },

    mutations: {
        LOG_IN: (state, token) => {
            if(token){
                state.userToken = token
                state.loggedin = true
            } else {
                state.userToken = null
                state.loggedin = false
            }
        },
        CHECK_USER: state => {
            let token = localStorage.getItem('token')
            if(token){
                state.userToken = token
                state.loggedin = true
            } else {
                state.userToken = null
                state.loggedin = false 
            }
        }
    },

    actions: {
        register: async({dispatch}, _user) => {
            const user = {
                email: _user.email,
                password: _user.password
            }
            await axios.post('http://localhost:9999/api/users/register', _user)
            dispatch('login', user)
        },
        login: ({commit}, payload) => {
            axios.post('http://localhost:9999/api/users/login', payload)
            .then(res => {
                if(res.status == 200){
                    localStorage.setItem('token', res.data.token)
                    commit('LOG_IN', res.data.token)
                }
            })
        },
        checkUser: ({commit}) => {
            commit('CHECK_USER')
        },
        logout: ({commit}) => {
            let token = localStorage.getItem('token')
            if(token){
                localStorage.removeItem('token')
                commit('LOG_IN', null)
            }
        }
    }
  })