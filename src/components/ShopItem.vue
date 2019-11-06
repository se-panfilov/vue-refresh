<template>
    <div class="card">
        <div class="card-image">
            <!--            {/*<img src={item.img} alt={item.title}/>*/}-->
            <span class="card-title">{props.title}</span>
            <button type="button">
                <i class="material-icons">add</i>
            </button>
        </div>

        <div class="card-content">
            <p>{props.desc}</p>
            <p><b>Price: {props.price}$</b></p>
        </div>
    </div>
</template>

<script lang="ts">

  export default {
    name: 'shop-item',
    components: {}
  }
</script>
