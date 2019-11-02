<template>
    <nav class="nav-wrapper">
        <div class="container">
            <Link to="/" class="brande-logo">Shopping</Link>
            <ul class="right">
                <li>
                    <router-link to="/">Shop</router-link>
                </li>
                <li>
                    <router-link to="/cart">My cart</router-link>
                </li>
                <li>
                    <router-link to="/cart">Chopping cart</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">

  export default {
    name: 'navbar',
    components: {}
  }
</script>

