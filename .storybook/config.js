import { configure, addDecorator } from '@storybook/vue';
import vuetifyConfig from "@@/plugins/vuetify";

const plugins = require.context('@@/plugins', true, /\.ts$/);
plugins.keys().forEach(plugins);

addDecorator(() => ({
  vuetify: vuetifyConfig,
  template: '<v-app><story /></v-app>',
}));

configure(require.context('@@/stories', true, /\.stories\.ts$/), module);
