<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light pb-3 pb-md-4"> 
        <div class="container container d-flex justify-content-between align-items-center">

            <router-link to="/products" exact class="btn btn-primary pro-btn px-5 mx-0">All products</router-link>

            <div>
                <router-link class="link" to="/" exact>Home</router-link>
                <router-link class="link" to="/about" exact>About</router-link>
                <router-link class="link" to="/contact" exact>Contact</router-link>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
name: 'Navbar',
}
</script>

<style scoped>
.link {
    padding:0.7rem;
    color: #000;
    font-weight: 400;
    border-radius: 0.25rem;
    position: relative;
}
.link:hover {
    padding: 0.7rem;
    background: #1266F1;
    color: #fff;
}
.link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 3px solid #1266F1;
    left: 0.7rem;
    bottom: 0.4rem;
    right: 1.5rem;
  }
.pro-btn {
    color: #fff;
    width: 50%;
    font-size: 1rem;
}
.pro-btn:hover{
    background: #1A237E !important;
}
</style>