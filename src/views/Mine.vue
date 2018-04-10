<template>
  <section class="app-mine">
    <mt-cell class="profile" title="Cedric Song" value="View your profile" is-link>
      <img slot="icon" src="../assets/imgs/img_01.jpeg" width="24" height="24">
    </mt-cell>
    <mt-cell class="cell" :title="item.title" icon="more" is-link v-for="item in cellList" :key="item.title">
      <img slot="icon" src="../assets/imgs/img_01.jpeg" width="24" height="24">
    </mt-cell>
  </section>
</template>


<script>
export default {
  name: "Mine",
  data() {
    return {
      cellList: [
        {
          title: "Transactions"
        },
        {
          title: "Orders"
        },
        {
          title: "Coupons"
        },
        {
          title: "Members"
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
.app-mine {
  .mint-cell-text {
    padding-left: 10px;
  }

  .profile {
    height: 10vh;
    margin: 0 0 4vh 0;
    .mint-cell-wrapper {
      height: 10vh;
    }
  }
}
</style>
