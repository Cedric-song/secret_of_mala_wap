<template>
  <mt-header :title="title">
    <router-link to="/" slot="left">
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>


<script>
export default {
  name: 'App-Header',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
