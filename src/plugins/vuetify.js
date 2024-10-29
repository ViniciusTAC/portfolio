import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/styles'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#cd00cd',
          secondary: '#8979F2',
          accent: '#E688F2',
          error: '#EF4840',
          info: '#030A8C',
          success: '#04BF8A',
          warning: '#F2E30C',
          background: '#030003',
          surface: '#030003',
        },
      },
    },
  },
})

export default vuetify
