<template>
    <div class="card">
        <div class="card-image">
            <span class="card-title">{{item.title}}</span>
            <button type="button" @click="$emit('pick-item', item.id)">
                <i class="material-icons">add</i>
            </button>
        </div>

        <div class="card-content">
            <p>{{item.desc}}</p>
            <p><b>Price: {{item.price}}$</b></p>
        </div>
    </div>
</template>

<script lang="ts">
import { Item } from '@/models/Item'
import Vue from 'vue'
import { Prop } from 'vue/types/options'

// TODO (S.Panfilov) would be nice to add some animation (blink) on "add" event
export default Vue.extend({
  name: 'shop-item',
  props: {
    item: Object as Prop<Item>
  }
})
</script>
