<template lang="pug">
  v-app(dark)
    h1(v-if="error.statusCode === 404") {{ pageNotFound }}
    h1(v-else) {{ otherError }}
    NuxtLink(to="/") Home page
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Error extends Vue {
  @Prop()
  private error: { statusCode: number } | null = null;

  private layout = 'empty';

  private pageNotFound: string = '404 Not Found';
  private otherError: string = 'An error occurred';

  private head() {
    const title = this.error!.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  font-size: 20px;
}
</style>
