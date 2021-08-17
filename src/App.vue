<template>
  <div class="app">
    <router-link to="/home">Home</router-link> |
    <router-link to="/units">Units</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {},
    data() {
      return {
        imageUrl: 'https://tailwindcss.com/img/erin-lindford.jpg',
      }
    },
  })
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  $background: rgb(212, 233, 243);
  $fullHeight: 100vh;

  .app {
    background: $background;
    height: $fullHeight;
    text-align: center;
  }
</style>
