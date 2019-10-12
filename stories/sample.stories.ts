import { storiesOf } from '@storybook/vue';

import Logo from '@/components/Logo.vue';
import Index from '@/pages/index.vue';

storiesOf('HelloWorld', module).add('simple', () => ({
  components: { Index },
  template: `<Index msg="Welcome to Your Vue.js + TypeScript + Storybook App"/>`,
}));

storiesOf('HelloWorld', module).add('simple2', () => ({
  components: { Logo },
  template: `<Logo/>`,
}));
