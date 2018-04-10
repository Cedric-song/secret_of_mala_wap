<template>
  <section>
    <mt-cell class="cell" :title="item.title" icon="more" is-link v-for="item in cellList" :key="item.title">
      <img slot="icon" src="../assets/imgs/img_01.jpeg" width="24" height="24">
    </mt-cell>
  </section>
</template>


<script>
export default {
  name: 'Mine',
  data() {
    return {
      cellList: [
        {
          title: 'Transactions'
        },
        {
          title: 'Orders'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  margin-top: 4rem;
}
</style>
