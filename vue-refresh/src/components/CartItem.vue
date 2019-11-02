<template>
    <li class="collection-item avatar">
        <div class="item-img">
<!--            {/*<img src={props.img} alt={props.img} class=""/>*/}-->
        </div>

        <div class="item-desc">
            <span class="title">{props.title}</span>
            <p>{props.desc}</p>
            <p><b>Price: {props.price}$</b></p>
            <p>
                <b>Quantity: {props.quantity}</b>
            </p>
            <div class="add-remove">
                <router-link to="/cart"><i class="material-icons">arrow_drop_up</i></router-link>
                <router-link to="/cart"><i class="material-icons">arrow_drop_down</i></router-link>
            </div>
<!--            <button type="button"-->
<!--                    class="waves-effect waves-light btn pink remove"-->
<!--                    onClick={props.onRemoveClick}>-->
<!--                Remove-->
<!--            </button>-->
        </div>

    </li>
</template>

<script lang="ts">

  export default {
    name: 'cart-item',
    components: {}
  }
</script>
