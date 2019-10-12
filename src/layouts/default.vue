<template lang="pug">
  v-app(dark)
    v-navigation-drawer(:clipped="clipped" :mini-variant="miniVariant" app fixed v-model="drawer")
      v-list
        v-list-item(:key="i" :to="item.to" exact router v-for="(item, i) in items")
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="item.title")

    v-app-bar(:clipped-left="clipped" app fixed)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-btn(@click.stop="miniVariant = !miniVariant" icon)
        if miniVariant
          v-icon mdi-chevron-right
        else
          v-icon mdi-chevron-left
      v-btn(@click.stop="clipped = !clipped" icon)
        v-icon mdi-application
      v-btn(@click.stop="fixed = !fixed" icon)
        v-icon mdi-minus
      v-toolbar-title(v-text="title")
      v-spacer
      v-btn(@click.stop="rightDrawer = !rightDrawer" icon)
        v-icon mdi-menu

    v-content
      v-container
        nuxt

    v-navigation-drawer(:right="right" fixed temporary v-model="rightDrawer")
      v-list
        v-list-item(@click.native="right = !right")
          v-list-item-action
            v-icon.light mdi-repeat
          v-list-item-title Switch drawer (click me)

    v-footer(:fixed="fixed" app)
      span &copy; 2019
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Default extends Vue {
  private clipped = false;
  private drawer = false;
  private fixed = false;
  private items = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire',
    },
  ];
  private miniVariant = false;
  private right = true;
  private rightDrawer = false;
  private title = 'Vuetify.js';
}
</script>
