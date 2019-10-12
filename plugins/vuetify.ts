import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

const vuetifyConfig = new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
  },
});

Vue.use(Vuetify, vuetifyConfig);

export default vuetifyConfig;
