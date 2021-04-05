<template>
<nav class="bg-light pt-2">
    <div class=" container d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <router-link to="/">
            <h1 href="" class="mb-0 bg-primary">Logo</h1>
        </router-link>

        <!-- search form  -->
        <form class="input-group mx-1" @submit.prevent="search(searchVal)">
            <input type="search" class="form-control rounded" placeholder="Search" v-model="searchVal" @keyup="search(searchVal)" />
        </form>

        <!-- accuont and cart  -->
        <div class="navbar-expand-lg navbar-light">
            <ul class="navbar-nav d-flex flex-row">
            
                <!--cart / Icon dropdown -->
                <li class="nav-item me-1 me-lg-0 dropdown">
                    <a class="nav-link d-flex align-items-center border" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <p class="mb-0 pe-2 text-white">Cart</p>
                        <span><i class="fas fa-shopping-cart i-icon me-2"></i></span>
                        <span v-if="cartItemsCount" class="badge badge-pill bg-danger p-1">{{cartProducts.length}}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <shoping-cart/>
                    </ul>
                </li>

                <!--account / Icon dropdown -->
                <li class="nav-item me-lg-0 dropdown">
                    <a class="nav-link  d-flex align-items-center border" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <p class="mb-0 pe-2 text-white">Account</p>
                        <i class="fas fa-user i-icon"></i>
                    </a>
                    <ul v-if="loggedin" class="dropdown-menu dropdown-menu-end text-center p-3 account-width" aria-labelledby="navbarDropdown">
                        <div>
                            <button class="btn btn-danger px-3" @click="logout">Sign-Out</button>
                        </div>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <a class="dropdown-item" href="#">Account settings</a>
                        </li>
                    </ul>
                    <ul v-if="!loggedin" class="dropdown-menu dropdown-menu-end text-center p-3 account-width" aria-labelledby="navbarDropdown">
                        <div>
                            <router-link to="/login" exact><button class="btn btn-success px-3">Sign-In</button></router-link>
                            <div class="d-flex justify-content-center">
                                <p class="mx-2">New customer?</p>
                                <router-link to="/register" exact>Register</router-link>
                            </div>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
        

    </div>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import shopingCart from '../shoppingCart.vue'
export default {
    name: 'NavbarTop',
    components: { 
      shopingCart 
    },
    data(){
        return{
            searchVal: '',
        }
    },
    computed: {
        ...mapGetters(['products','searchValue', 'cartItemsCount', 'cartProducts', 'loggedin'])
    },
    methods: {
        ...mapActions(['search', 'logout'])
    }
}
</script>

<style scoped>
.search-btn {
    border: 1px solid rgb(168, 166, 166);
    z-index: 1;
    padding: 0 0.5rem;
    border-radius: 0 0.25rem 0.25rem 0;
}
.i-icon {
    font-size: 1.3rem;
    color: #fff;
    display: inline-block;
}
.nav-link {
    padding: 4.32px 5px;
    background: #1A237E;
    border-radius: 0.2rem;
}
h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #fff;
    border-radius: 0.2rem;
    padding: 0 0.6rem;
    font-size: 1.9rem;
    cursor: pointer;
}
.account-width {
    width: 250px;
}
</style>