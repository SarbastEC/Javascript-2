<template>
  <div class="container  py-3 z-depth-1 rounded">
    <!--Section: Content-->
    <section class="dark-grey-text">

      <!-- Shopping Cart table -->
      <div class="table-responsive">

        <table class="table product-table mb-0">

          <!-- Table head -->
          <thead class="mdb-color lighten-5">
            <tr>
              <th></th>
              <th class="font-weight-bold">
                <strong>Product</strong>
              </th>
              <th></th>
              <th class="font-weight-bold">
                <strong>Price</strong>
              </th>
              <th class="font-weight-bold">
                <strong>QTY</strong>
              </th>
              <th class="font-weight-bold">
                <strong>Amount</strong>
              </th>
              <th></th>
            </tr>
          </thead>
          <!-- /.Table head -->

          <!-- Table body -->
          <tbody v-for="item in cartProducts" :key="item.product.id">

            <!-- Table row  product-->
            <tr>
              <th scope="row">
                <img :src="item.product.image">
              </th>
              <td>
                <h5 class="mt-1">
                  <strong>{{item.product.name}}</strong>
                </h5>
              </td>
              <td></td>
              <td>
                  <h6 class="mt-2">${{item.product.price}}</h6>
              </td>
              <td>
                <input type="number" min="1" value="1" aria-label="Search" class="form-control" style="width: 60px" v-if="item.qty > 0" v-model="item.qty">
              </td>
              <td class="font-weight-bold">
                <h6 class="mt-2">{{item.product.price*item.qty}}</h6>
              </td>
              <td>
                <button type="button" class="btn btn-sm btn-danger px-3" data-toggle="tooltip" data-placement="top" @click.prevent.stop="removeCartProduct(item.product._id)"
                  title="Remove item">X
                </button>
              </td>
            </tr>
            <!-- /.Table row -->

          </tbody>
          <!-- /.Table body -->



          <!-- /.Table foot -->
          <tfoot>
            <!-- Total row -->
            <tr>
              <td colspan="3"></td>
              <td>
                <h4 class="mt-2">
                  <strong>Total</strong>
                </h4>
              </td>
              <td class="text-right">
                <h4 class="mt-2">
                  <strong>${{cartTotal}}</strong>
                </h4>
              </td>
              <td colspan="3" class="text-right">
                <button type="button" class="btn btn-primary btn-rounded">Complete purchase
                  <i class="fas fa-angle-right right"></i>
                </button>
              </td>
            </tr>
            <!-- Total row -->
          </tfoot>
          <!-- /.Table foot -->

        </table>

      </div>
      <!-- /.Shopping Cart table -->

    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
name: 'shoppingCart',
data(){
  return{
    val: '1',
  }
},
computed: {
  ...mapGetters(['cartProducts', 'cartTotal']),
},
methods: {
  ...mapActions(['removeCartProduct'])
}

}
</script>

<style scoped>
img {
  width: 75px;
}
</style>