<template>
  <v-app>
    <home-app-bar
      :color="color"
      :flat="flat"
      :fab="!fab"
    />

    <home-view />

    <home-footer />

    <!-- <home-settings /> -->
    <v-scale-transition>
      <v-btn
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        left
        color="green"
        @click="toTop"
      >
        <v-icon x-large>
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',

    components: {
      HomeAppBar: () => import('@/layouts/home/AppBar'),
      HomeFooter: () => import('@/layouts/home/Footer'),
      // HomeSettings: () => import('@/layouts/home/Settings'),
      HomeView: () => import('@/layouts/home/View'),
    },
    data: () => ({ fab: null, color: '', flat: null }),
    watch: {
      fab (value) {
        if (value) {
          this.color = 'indigo lighten-5'
          this.flat = false
        } else {
          this.color = 'transparent'
          this.flat = true
        }
      },
    },
    created () {
      const top = window.pageYOffset || 0
      if (top <= 60) {
        this.color = 'transparent'
        this.flat = true
      }
    },
    methods: {
      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset || e.target.scrollTop || 0
        this.fab = top > 60
      },
      toTop () {
        this.$vuetify.goTo(0)
      },
    },
  }
</script>
