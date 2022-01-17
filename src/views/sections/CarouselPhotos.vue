<template>
  <base-section
    id="photos"
    space="12"
  >
    <base-section-heading
      title="Galeria"
      space="0"
    />

    <carousel-3d
      autoplay
      loop
      :autoplay-timeout="2500"
      :width="400"
      :height="500"
      :controls-visible="true"
      :display="5"
      :border="0"
      :perspective="$vuetify.breakpoint.smAndDown ? '180' : '35'"
      class="my-0"
    >
      <slide
        v-for="i in 8"
        :key="i"
        :index="i"
      >
        <v-img :src="require(`@/assets/img/slide-${i}.jpeg`)" />
      </slide>
    </carousel-3d>
  </base-section>
</template>
<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'
  export default {
    name: 'CarouselPhotos',
    component: { Carousel3d, Slide },
    data () {
      return {}
    },
  }
</script>
<style></style>
