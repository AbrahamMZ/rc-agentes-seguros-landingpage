<template>
  <base-section
    id="affiliates"
    space="36"
  >
    <v-container>
      <base-section-heading title="Con Quienes estamos Afiliados?" />

      <v-slide-group>
        <template v-for="n in 5">
          <v-slide-item
            :key="n"
            class="align-self-center"
          >
            <!-- :src="require(`@/assets/logos/logo-${n}-${$vuetify.theme.isDark ? 'dark' : 'light'}.png`)" -->
            <base-img
              :src="require(`@/assets/logos/logo-${n}.png`)"
              color="grey"
              contain
              height="128"
              width="128"
            />
          </v-slide-item>

          <v-responsive
            v-if="n < 5"
            :key="`divider-${n}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
  }
</script>
