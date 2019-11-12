<template>
    <div class="container">
        <h3 class="center">Our items</h3>
        <div class="box">
            <ShopItem v-for="item in items"
                      :item="item"
                      v-on:pick-item="onPick(item.id)"/>
        </div>
    </div>
</template>

<script lang="ts">
  import ShopItem from '@/components/ShopItem.vue'
  import Vue from 'vue'

  const name = 'home'
  const components = { ShopItem }


  const methods = {
    onPick(id: string) {
      this.$store.dispatch({
        type: 'addItem',
        id
      })
    }
  }

  export default Vue.extend({
    name,
    components,
    data() {
      return {
        items: this.$store.state.items
      }
    },
    methods
  })
</script>
