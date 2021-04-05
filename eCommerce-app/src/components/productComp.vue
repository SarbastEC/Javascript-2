<template>
    <!-- Grid column -->
    <router-link :to="'/productDetails/' + product._id" class="col-lg-3 col-md-4 mb-4 hover-shadow">
        <!-- Card -->
        <div class="card card-cascade wider card-ecommerce">
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img :src="product.image" class="card-img-top"
              alt="sample photo">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <!-- Card image -->
          <!-- Card content -->
          <div class="card-body card-body-cascade text-center pb-0">
            <!-- Title -->
            <h5 class="card-title">
              <strong>
                <a href="#" class="h4">{{product.name}}</a>
              </strong>
            </h5>
            <!-- Description -->
            <p class="card-text">{{product.short}}</p>
            <!-- Card footer -->
            <div class="card-footer mt-4 d-flex justify-content-between align-items-center">
              <p class="float-left font-weight-bold mb-1 pb-2 h3">$<span class="text-danger h3">{{product.price}}</span></p>
              <a class="float-right material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Quick Look">
                <!-- <i class="fas fa-shopping-cart grey-text ml-3 card-icon"></i> -->
              </a>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
    </router-link>
    <!-- Grid column -->
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ProductComp',
    props: ['product'],
    // computed: {
    //   ...mapGetters(['cartProducts'])
    // },
    // methods: {
    //   ...mapActions(['addToCart']),
    // }
};
</script>

<style scoped>
.card-body {
      border-bottom-left-radius: inherit !important;
      border-bottom-right-radius: inherit !important;
    }
.card-icon {
    font-size: 1.4rem;
    color: #1A237E !important;
}
</style>