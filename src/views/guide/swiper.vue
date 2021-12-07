<template>
  <ui-page title="swiper">
    <guide-navi />
    <h2 class="gd__h1 first">
      swiper 예제
    </h2>
    <div>
      <ui-swiper>
        <swiper-slide>
          <div class="img_banner_box">
            <img
              src="@/assets/images/temp/image-temp.jpg"
              alt=""
            >
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img_banner_box">
            <img
              src="@/assets/images/temp/image-temp.jpg"
              alt=""
            >
          </div>
        </swiper-slide>
      </ui-swiper>
    </div>
  </ui-page>
</template>

<script>
import guideNavi from '@/components/page/guideNavi.vue'

export default {
  name: 'Swiper',
  components: {
    guideNavi,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
