<template>
  <div class="home">
    <mt-swipe :atuo="999999" class="swiper">
      <mt-swipe-item class="swiper_item" v-for="item in swipeList" :key="item.img">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import img_01 from '../assets/imgs/img_01.jpeg'
import img_02 from '../assets/imgs/img_02.jpeg'
import img_03 from '../assets/imgs/img_03.jpeg'

export default {
  name: 'home',

  data() {
    return {
      swipeList: [
        {
          img: img_01,
          name: 'The Secret of MALA'
        },
        {
          img: img_02,
          name: 'The Secret of MALA'
        },
        {
          img: img_03,
          name: 'The Secret of MALA'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 36rem;
  background: red;
  img {
    width: 100%;
  }
}
</style>

