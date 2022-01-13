<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="grey darken-4"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              size="text-h3"
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="TU SEGURO DENTAL A UN EXCELENTE PRECIO PROXIMAMENTE, ESPERALO!!!!"
            />

            <!-- <base-body space="0">
              <span class="white--text">
                Conversa con uno de nuestos Agentes Autoizados, y recibe toda la
                informacion que requieres.
                </span>
            </base-body> -->
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionBanner',
  }
</script>
