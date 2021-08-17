<template>
  <div class="app">
    <router-link to="/home">Home</router-link> |
    <router-link to="/units">Units</router-link>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <input v-model="newName" type="text" @keypress.enter="saveName" />
      <div>Username: {{ getUserName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapGetters } from 'vuex'

  export default defineComponent({
    name: 'App',
    components: {},
    data() {
      return {
        imageUrl: 'https://tailwindcss.com/img/erin-lindford.jpg',
        newName: '',
      }
    },
    computed: {
      ...mapGetters({
        getUserName: 'user/getUserName',
      }),
    },
    methods: {
      saveName() {
        // this.$store.dispatch('user/saveName', this.newName)
        this.$store.dispatch('user/saveName', this.newName)
        this.newName = ''
      },
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
