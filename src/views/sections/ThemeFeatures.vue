<template>
  <base-section id="theme-features">
    <base-section-heading title="Nuestros Servicios">
      Lo antendemos en una gran variedad de Polizas para su Bienestar en algun
      sinietro.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            <base-btn
              text
              small
              href="https://api.whatsapp.com/send?phone=524611011850"
              target="blank"
            >
              Saber mas
            </base-btn>
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Seguro de Vida Individual o Grupo',
          icon: 'mdi-heart-multiple-outline',
          text:
            'Protege financieramente a tu familia y/o a las familias de tus colaboradores a otras personas que dependen de sus ingresos.',
        },
        {
          title: 'Seguro de Gastos Medicos Mayores Individual o Colectivo',
          icon: 'mdi-hospital-box-outline',
          text:
            'Protegete de los gatos generados por las atenciones medicas originados de un accidente o enfermedad.',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Seguro para la educacion',
          icon: 'mdi-school',
          text:
            'Garantiza un futuro en las mejores universidades del pais o en el extranjer, ya que sera la mejor herencia que les puedes dejar a tus hijos.',
        },
        {
          title: 'Seguro de Viajero',
          icon: 'mdi-shield-airplane',
          text:
            'Si planeas viajar por estudios, negocios o placer. Protegere desde una enfermedad fortuita o accidente grave, incluye COVID-19',
        },
        {
          title: 'Seguro para proteger tu casa o negocio',
          icon: 'mdi-home-plus',
          text:
            'Protege tu patrimonio y no lo dejes en manos de los desastres naturales o robo',
        },
        {
          title: 'Seguro para auto',
          icon: 'mdi-car-door-lock',
          text:
            'Protege tu auto de robo, de los dañoas contra terceros, responsabilidad civil y desatre natural, Protegelos con las mejores compañias.',
        },
        {
          title: 'Seguro para tu ahorro',
          icon: 'mdi-cash-multiple',
          text: '',
        },
        {
          title: 'Seguro de accidentes escolares',
          icon: 'mdi-hospital-building',
          text: 'Protege a los alumnos de tu institucion educativa.',
        },
        {
          title: 'Seguro de accidentes personales',
          icon: 'mdi-badge-account-alert-outline',
          text:
            'Protege a los colaboradores de tu empresa por un accidente o enfermedad sin ser tan costoso para tu compañia',
        },
      ],
    }),
  }
</script>
