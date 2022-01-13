<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="@/assets/img/rc-logo-icon-dark.svg"
              alt="Logo"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              RC Agentes
            </v-list-item-title>
            <v-list-item-subtitle>Seguros y Fianzas</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in menuDrawer"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      id="home-app-bar"
      app
      :color="color"
      :flat="flat"
      class="px-15"
      height="100"
      :dark="fab"
      :class="{
        expand: flat,
      }"
    >
      <base-img
        :src="
          require(`@/assets/img/rc-logo-icon-${fab ? 'dark' : 'light'}.svg`)
        "
        class="mr-3 "
        contain
        max-width="80"
        width="100%"
      />

      <base-img
        :src="require(`@/assets/img/rc-logo-${fab ? 'dark' : 'light'}.svg`)"
        contain
        max-width="96"
        width="100%"
        class="hidden-xs-only"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="([icon, name, link], i) in menuDrawer"
            :key="i"
            :exact="name === 'Home'"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
            @click="$vuetify.goTo(link)"
          >
            {{ name }}
          </v-tab>
          <!-- <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
            @click="$vuetify.goTo(link)"
          >
            {{ name }}
          </v-tab> -->
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',
    props: { fab: Boolean, color: String, flat: Boolean },

    data: () => ({
      drawer: null,
      items: ['Home'],
      isXs: false,
      menuDrawer: [
        ['mdi-home-outline', 'Home', '#hero'],
        ['mdi-information-outline', 'Servicios', '#theme-features'],
        ['mdi-download-box-outline', 'Sobre Nosotros', '#about'],
        ['mdi-email-outline', 'Afiliados', '#affiliates'],
      ],
    }),
    watch: {
      isXs (value) {
        if (!value) {
          if (this.drawer) {
            this.drawer = false
          }
        }
      },
    },
    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, {
        passive: true,
      })
    },
    methods: {
      onResize () {
        this.isXs = window.innerWidth < 850
      },
    },
  }
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
