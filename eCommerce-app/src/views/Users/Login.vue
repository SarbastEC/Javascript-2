<template>
  <div class="container mt-5 vh-100">
    <p class="my-5 text-center h4">Sign In</p>  
    <form class="border p-4 col-9 col-md-6 mx-auto" @submit.prevent="onSubmit">
        <!-- Email input -->
        <div class="form-outline mb-4 input-border">
            <input type="email" id="form2Example1" class="form-control" v-model="user.email"/>
            <label class="form-label" for="form2Example1">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4 input-border">
            <input type="password" id="form2Example2" class="form-control" v-model="user.password"/>
            <label class="form-label" for="form2Example2">Password</label>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

        <!-- Register buttons -->
        <div class="text-center">
            <p>Not a member? <router-link to="/register" exact>Register</router-link></p>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit(){
            if(this.user !== '' && this.user.password !== ''){
                this.login(this.user)
            }
            this.$router.replace({ name: 'Home' })
        }
    }
}
</script>

<style scoped>
.input-border {
    border-right: 1px solid rgb(224, 221, 221);
    border-left: 1px solid rgb(224, 221, 221);
    border-bottom: 1px solid rgb(224, 221, 221);
    border-radius: 5px;
}
</style>