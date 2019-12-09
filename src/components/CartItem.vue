<template>
  <li class="collection-item avatar">
    <div class="item-img">
      <!--            {/*<img src={item.img} alt={item.img} class=""/>*/}-->
    </div>

    <div class="item-desc">
      <span class="title">{{item.title}}</span>
      <p>{item.desc}</p>
      <p><b>Price: {{item.price}}$</b></p>
      <p>
        <b>Quantity: {{item.quantity}}</b>
      </p>
      <div class="add-remove">
        <router-link to="/cart"><i class="material-icons">arrow_drop_up</i></router-link>
        <router-link to="/cart"><i class="material-icons">arrow_drop_down</i></router-link>
      </div>
      <!--            <button type="button"-->
      <!--                    class="waves-effect waves-light btn pink remove"-->
      <!--                    onClick={item.onRemoveClick}>-->
      <!--                Remove-->
      <!--            </button>-->
    </div>

  </li>
</template>

<script lang="ts">
import {Prop} from 'vue/types/options';
import {BasketItem} from '../models/Item';

export default {
  name: 'cart-item',
  props: {
    item: Object as Prop<BasketItem>
  },
  components: {}
};
</script>
