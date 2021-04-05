<template>
  <div class="p-5">
    <h1 class="text-center mb-4">Welcome to the home page</h1>
    <carousel/>
    <our-bestsellers/>
  </div>
</template>

<script>
import Carousel from '../components/HomePage/Carousel.vue';
import OurBestsellers from '../components/HomePage/OurBestsellers.vue';
export default {
  name: "Home",
  components: {Carousel, OurBestsellers},
};
</script>
