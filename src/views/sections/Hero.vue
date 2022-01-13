<template>
  <section id="hero">
    <v-parallax
      id="Hero"
      style="height: 100vh"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 mt-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="100%"
          width="100%"
        >
          <v-row>
            <v-col
              cols="12 "
              md="6"
              xl="8"
            >
              <base-subheading
                weight="regular"
                title="RC Agentes de Seguros y Fianzas"
              />

              <base-heading
                size="text-h3"
                title="ASEGURA TU AUTO CON NOSOTROS Y OBTEN HASTA UN 50% DE DESCUENTO"
                weight="medium"
              />

              <div
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'flex-column align-start'
                    : 'align-center'
                "
                class="d-flex flex-wrap"
              >
                <base-btn
                  href="https://api.whatsapp.com/send?phone=524611011950"
                  target="blank"
                >
                  Contactenos
                </base-btn>

                <span class="font-weight-bold ml-6 mr-4 my-4">o</span>

                <base-btn
                  :ripple="false"
                  class="pa-1"
                  height="auto"
                  text
                  href="https://api.whatsapp.com/send?phone=524611011950"
                  target="blank"
                >
                  Saber Mas
                </base-btn>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              xl="4"
              class="hidden-sm-and-down"
            >
              <v-img src="@/assets/img/vehicles.svg" />
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>
    <div class="svg-border-waves">
      <img src="@/assets/img/wave2.svg">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: false },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '80vh'
        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
<style>
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

section {
  position: relative;
}
</style>
