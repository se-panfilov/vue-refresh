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
  import ShopItem from '@/components/ShopItem.vue';
  import { Item } from '@/models/Item';
  import Vue from 'vue';

  const name = 'home';
  const components = { ShopItem };

  const items: ReadonlyArray<Item> = [
    { id: 1, title: 'Super Item 1', price: 20, desc: 'qqqqqq' },
    { id: 2, title: 'Awesome Item 2', price: 30, desc: 'wwwwww' },
    { id: 3, title: 'Just another handsome Item 3', price: 40, desc: 'eeeee' }
  ];

  const data = () => ({ items });

  const methods = {
    onPick(id: string) {
      console.info(id);
    }
  };

  export default Vue.extend({
    name,
    components,
    data,
    methods
  });
</script>
