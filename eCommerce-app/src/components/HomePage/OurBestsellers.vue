<template>
  <div class="container mt-5">
    <!--Section: Content-->
    <section class="dark-grey-text text-center">
      <!-- Section heading -->
      <h3 class="font-weight-bold mb-4 pb-2">Our bestsellers</h3>
      <!-- Section description -->
      <p class="grey-text w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit fugit, error
        amet numquam iure provident voluptate esse quasi nostrum quisquam eum
        porro a pariatur veniam.
      </p>

      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-lg-3 col-md-6 mb-4">
          <!-- Collection card -->
          <div class="card collection-card z-depth-1-half">
            <!-- Card image -->
            <div class="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg"
                class="img-fluid mb-2"
                alt=""
              />
              <div class="stripe dark">
                <a>
                  <p>
                    Sony TV-675
                  </p>
                </a>
              </div>
            </div>
            <!-- Card image -->
          </div>
          <!-- Collection card -->
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-3 col-md-6 mb-4">
          <!-- Collection card -->
          <div class="card collection-card z-depth-1-half">
            <!-- Card image -->
            <div class="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
                class="img-fluid mb-2"
                alt=""
              />
              <div class="stripe light">
                <a>
                  <p>
                    Dell V-964i
                  </p>
                </a>
              </div>
            </div>
            <!-- Card image -->
          </div>
          <!-- Collection card -->
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-3 col-md-6 mb-4">
          <!-- Collection card -->
          <div class="card collection-card z-depth-1-half">
            <!-- Card image -->
            <div class="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
                class="img-fluid mb-2"
                alt=""
              />
              <div class="stripe dark">
                <a>
                  <p>
                    Samsung CT-567
                  </p>
                </a>
              </div>
            </div>
            <!-- Card image -->
          </div>
          <!-- Collection card -->
        </div>
        <!-- Grid column -->

        <!-- Fourth column -->
        <div class="col-lg-3 col-md-6 mb-4">
          <!-- Collection card -->
          <div class="card collection-card z-depth-1-half">
            <!-- Card image -->
            <div class="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg"
                class="img-fluid mb-2"
                alt=""
              />
              <div class="stripe light">
                <a>
                  <p>
                    JBL DX-320
                  </p>
                </a>
              </div>
            </div>
            <!-- Card image -->
          </div>
          <!-- Collection card -->
        </div>
        <!-- Fourth column -->
      </div>
      <!-- Grid row -->
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'OurBestsellers',
  computed: {
    ...mapGetters(['products'])
  }
};
</script>

<style>
</style>