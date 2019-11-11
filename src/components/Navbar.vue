<template>
    <nav class="nav-wrapper">
        <ul class="container">
            <li>
                <router-link class="link" to="/">Shop</router-link>
            </li>
            <li>
                <router-link class="link" to="/cart">Chopping cart</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
  export default {
    name: 'navbar',
    components: {}
  }
</script>
<style lang="stylus" scoped>
    .container
        display flex
        justify-content start
        align-items center
        list-style none
        padding 10px
        margin 0
        .link
            padding 15px
</style>
