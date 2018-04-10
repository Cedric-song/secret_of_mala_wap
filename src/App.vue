<template>
  <div id="app">
    <app-header title="Home"></app-header>
    <router-view/>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="Home" @click.native="$go({name: 'Home'})">
        Home
      </mt-tab-item>
      <mt-tab-item id="Menu" @click.native="$go({name: 'Menu'})">
        Menu
      </mt-tab-item>
      <mt-tab-item id="Times" @click.native="$go({name: 'Times'})">
        Times
      </mt-tab-item>
      <mt-tab-item id="Mine" @click.native="$go({name: 'Mine'})">
        Mine
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>
<script>
import AppHeader from '@/components/App-Header'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      selected: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  overflow: hidden;
}
</style>
