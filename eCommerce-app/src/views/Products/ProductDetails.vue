<template>
  <div class="container px-0 z-depth-1">
  <!--Section: Content-->
  <section class="text-center" v-if="product">

    <!-- Section heading -->
    <h3 class="font-weight-bold py-3 shadow p-0">Product Details</h3>

    <div class="row">

      <div class="col-lg-6">

            <!-- image  -->
            <div class="carousel-item active">
              <img :src="product.image"
                alt="First slide" class="img-fluid">
            </div>

      </div>

      <div class="col-lg-6 text-center text-md-left">

        <h2 class="h2-responsive text-center text-md-left product-name shadow py-2 font-weight-bold dark-grey-text mb-1 mt-3 mt-md-4 ml-xl-0 ">
          <strong>{{product.name}}</strong>
        </h2>
        <h3 class="h3-responsive text-center text-md-left mb-4 mt-3 ml-xl-0 shadow py-2">
          <span class="red-text font-weight-bold">
            <strong><span class="text-primary">$</span>{{product.price}}</strong>
          </span>
        </h3>

          <!-- Accordion card -->
          <div class="card">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingOne1">
              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
                <h5 class="mb-0">Description</h5>
              </a>
            </div>

            <!-- Card body -->

              <div class="card-body">
                {{product.description}}
              </div>

          </div>
          <!-- Accordion card -->


        <!-- Add to Cart -->
          <div>

            <div class="row my-5">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-primary btn-rounded" @click="addToCart({product, qty})">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
              </div>
            </div>
          </div>
        <!-- /.Add to Cart -->

      </div>

    </div>

  </section>
  <!--Section: Content-->


</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
      return {
        qty: 1
      }
    },
    computed: {
        ...mapGetters(['product', 'cartProducts'])
    },
    methods: {
        ...mapActions(['getProduct', 'clearProduct', 'addToCart'])
    },
    created(){
        this.getProduct(this.$route.params.id)
    },
    destroyed(){
        this.clearProduct()
    }
}
</script>

<style scoped>

</style>