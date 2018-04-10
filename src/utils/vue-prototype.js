import Vue from 'vue'

Vue.prototype.$go = function(params) {
  this.$router.push({ name: params.name })
}
