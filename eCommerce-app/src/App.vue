<template>
  <div class="mx-1">
    <navbar-top class="my-2"/>
    <navbar class="my-2"/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import NavbarTop from './components/Navigation/NavbarTop.vue'
import Navbar from './components/Navigation/Navbar.vue'
import AppFooter from './components/Navigation/Footer.vue'
import { mapActions } from 'vuex'
export default {
  components: {
     NavbarTop,
     Navbar,
    AppFooter, 
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  created(){
    this.checkUser()
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
