<template>
  <ui-page
    title="vuetify"
    class="v-application v-application--is-ltr"
  >
    <h1 class="t-center">
      v-carousel
    </h1>

    <v-carousel
      v-model="model"
      :class="{'hide-navi':colors.length <= 1}"
    >
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-btn @click="carouselDel">
      삭제
    </v-btn>
  </ui-page>
</template>

<script>

export default {
  name: 'Vuetify',
  data() {
    return {
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }
  },
  methods: {
    carouselDel() {
      this.colors.pop()
    },
  },
}
</script>
