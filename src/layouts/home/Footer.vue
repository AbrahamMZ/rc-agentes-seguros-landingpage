<template>
  <v-footer
    id="contact"
    dark
    padless
  >
    <v-card
      flat
      tile
      class="secondary white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">
            {{ icon.text }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <p>Mision San Lucas #100 CP. 38016, Celaya, Guanajuato, Mexico</p>
        <h3 class="font-weight-light mt-3">
          Telefonos:
          <a href="tel:4611011850">+52(461)101-18-50</a>
          y
          <a href="tel:4612273560">+52(461)227-35-60</a>
        </h3>
        <h3 class="font-weight-light mt-3">
          Email:
          <a
            href="mailto:rcagentesdeseguros@gmail.com"
          >rcagentesdeseguros@gmail.com</a>
        </h3>
      </v-card-text>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>RC Agentes de Seguros y Fianzas</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
          text: 'mdi-facebook',
          link: 'https://www.facebook.com/rcagentesdeseguros',
        },
        {
          text: 'mdi-instagram',
          link: '',
        },
      ],
    }),
  }
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
