<template>
  <div class="bg-light">
    
    <div class="container mt-5">
      <!--Section: Content-->
      <section class="dark-grey-text text-center">
        <!-- Grid row -->
        <div class="row pt-4">
          <product-comp v-for="product in filteredProducts" :key="product.id" :product="product"></product-comp>
        </div>
        <!-- Grid row -->
      </section>
      <!--Section: Content-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductComp from "../../components/productComp";
export default {
  name: "Products",
  components: {
    ProductComp,
  },
  computed: {
    ...mapGetters(["products", "filteredProducts"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
</style>