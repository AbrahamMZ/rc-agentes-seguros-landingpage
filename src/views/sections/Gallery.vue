<template>
  <base-section
    id="about"
    space="4"
  >
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="10">
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              md="7"
              data-aos="fade-right"
            >
              <h1 class="font-weight-light display-2">
                Sobre nosotros
              </h1>
              <h1 class="font-weight-light display-1 mb-3">
                RC Agentes de Seguros
              </h1>
              <v-row>
                <v-col
                  cols="12"
                  class="d-flex align-center"
                >
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Somos un despacho autorizado con una experiencia de 13 años
                    en el ramo asegurador, comprometido con nuestros clientes
                    cuando de trata de vivir un siniestro.
                  </p>
                </v-col>
                <v-col
                  cols="12"
                  class="d-flex align-center"
                >
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Estaremos contigo en cualquier siniestro, asesorándote de
                    manera personal y humana.
                  </p>
                </v-col>
                <v-col
                  cols="12"
                  class="d-flex align-center"
                >
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Trabajamos con las mejores compañias aseguradoras
                    suguiriendote cuál es tu mejor opción.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              md="5"
              data-aos="fade-left"
            >
              <v-card
                elevation="18"
                width="100%"
                height="100%"
                class="mx-auto"
              >
                <!-- <v-system-bar lights-out /> -->
                <v-carousel
                  continuous
                  hide-delimiter-background
                  delimiter-icon="mdi-minus"
                  :show-arrows="false"
                  cycle
                  height="400"
                >
                  <v-carousel-item
                    v-for="i in 5"
                    :key="i"
                    :src="require(`@/assets/img/photo-${i}.jpeg`)"
                  />
                </v-carousel>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      }
    },
  }
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
