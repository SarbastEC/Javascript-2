<template>
    <div class="container mt-5 vh-100">
        <p class="my-5 text-center h4">Create account</p>
        <form class="border p-4 col-9 col-md-6 mx-auto" @submit.prevent="onSubmit">
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4">
                <div class="col">
                <div class="form-outline input-border">
                    <input type="text" id="form3Example1" class="form-control" v-model="user.firstName"/>
                    <label class="form-label" for="form3Example1">First name</label>
                </div>
                </div>
                <div class="col">
                <div class="form-outline input-border">
                    <input type="text" id="form3Example2" class="form-control" v-model="user.lastName" />
                    <label class="form-label" for="form3Example2">Last name</label>
                </div>
                </div>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4 input-border">
                <input type="email" id="form3Example3" class="form-control" v-model="user.email"/>
                <label class="form-label" for="form3Example3">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4 input-border">
                <input type="password" id="form3Example4" class="form-control" v-model="user.password"/>
                <label class="form-label" for="form3Example4">Password</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

            <div class="d-flex">
                <p>Already have an account?</p>
                <router-link to="/login" exact class="ms-3">Sign-In</router-link>
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
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['register']),
        onSubmit(){
            if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== ''){
                this.register(this.user)
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