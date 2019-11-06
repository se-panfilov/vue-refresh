<template>
    <div class="container">
        <div class="cart">
            <h5>You have ordered:</h5>
<!--            <ul class="collection">-->
<!--                {props.items.length ?-->
<!--                props.items.map(item =>-->
<!--                <CartItem key={item.id}-->
<!--                          {...item}-->
<!--                          onRemoveClick={() => onRemoveClick(props, item.id)}/>)-->
<!--                :-->
<!--                (-->
<!--                <span>Nothing so far</span>-->
<!--                )}-->
<!--            </ul>-->
        </div>
    </div>
</template>

<script lang="ts">

  export default {
    name: 'cart',
    components: {}
  }
</script>
