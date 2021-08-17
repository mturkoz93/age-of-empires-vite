<template>
  <div class="app">
    <h2 style="color: purple; padding: 10px">Hello World!</h2>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {},
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
