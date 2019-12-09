<template>
  <div class="container">
    <h3 class="center">Our items</h3>
    <div class="box">
      <ShopItem v-for="item in items"
                :item="item"
                v-on:pick-item="onPick(item)"/>
    </div>
            <div>{{state}}</div>
  </div>
</template>

<script lang="ts">
import ShopItem from '@/components/ShopItem.vue'
import Vue from 'vue'
import {mapActions} from "vuex";
import {Item} from "../models/Item";

const name = 'home'
const components = {ShopItem}


export default Vue.extend({
  name,
  components,
  data() {
    return {
      items: this.$store.state.availableItems,
      state: this.$store.state
    }
  },
  // computed() {
  // },
  methods: {
    ...mapActions({
      addItem: 'addItem'
    }),
    onPick(item: Item): void {
      this.addItem(item)
    }
  }
})
</script>
