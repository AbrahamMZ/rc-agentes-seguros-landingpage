<template>
  <section id="about">
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
              class="d-none d-md-flex"
            >
              <v-img
                src="@/assets/img/insurance.png"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
