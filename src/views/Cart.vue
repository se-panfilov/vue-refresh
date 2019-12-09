<template>
  <div class="container">
    <div class="cart">
      <h5>You have ordered:</h5>
      <ul class="collection">
        <li v-for="item in basketItems">
          <CartItem :item='item' :key='item.id' />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import CartItem from '@/components/CartItem.vue'
import {mapState} from 'vuex';

export default {
  name: 'cart',
  components: {CartItem},
  computed: {
    ...mapState(['basketItems'])
  }

};
</script>
