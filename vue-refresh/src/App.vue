<template>
    <div id="app">
        main app <br/>
        <Navbar/>
        ------<br/>
        router <br/>
        <router-view></router-view>
        <br/>after router<br/>
        ------
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navbar from '@/components/Navbar.vue'

  export default Vue.extend({
    name: 'app',
    components: {Navbar}
  });
</script>

<style lang="stylus">

</style>
