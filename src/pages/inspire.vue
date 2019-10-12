<template lang="pug">
  v-layout
    v-flex.text-center
      img.mb-5(alt="Vuetify.js" src="/v.png")
      blockquote.blockquote &#8220;First, solve the problem. Then, write the code.&#8221;
        footer
          small
            em &mdash;John Johnson
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {}
</script>
