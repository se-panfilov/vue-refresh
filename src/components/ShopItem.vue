<template>
    <div class="card">
        <div class="card__top">
            <span class="card__title">{{item.title}}</span>
        </div>
        <div class="card__center">
            <img v-bind:src="item.img" class="card__image"/>
            <p class="card__description">{{item.desc}}</p>
            <p class="card__price">Price: {{item.price}}$</p>
            <button type="button"
                    class="card__button"
                    @click="$emit('pick-item', item.id)">
                <i class="material-icons card__icon">add</i>
            </button>
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


<style lang="stylus">
    .card
        border 1px solid black
        padding 15px
        display flex
        flex-direction column
        background-color #d0e2e1

        &__top
            align-items: center;
            display: flex;
            flex: 1;
            justify-content: center;
            background-color #c1becf

        &__center
            flex 1
            display flex
            flex-direction row
            justify-content space-between
            background-color #97a6b3

        &__image
            padding 15px
            border 1px solid black
            background-color #ac9dce

        &__title
            border 1px solid black
            background-color #e6d1cd

        &__button
            border 1px solid black
            background-color #96a5ce;

        &__description
            border 1px solid black
            background-color #809b94

        &__price
            border 1px solid black
            background-color #b9c1a7
</style>
