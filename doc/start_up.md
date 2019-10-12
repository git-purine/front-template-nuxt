# Start Up

## toc

- nuxt
  - install nuxt
  - update eslinrc
  - to typescript
  - update directory structure
  - add pug, stylus

- storybook
  - install storybook
  - fix core-js

## nuxt

### install nuxt

<https://ja.nuxtjs.org/guide/installation/>

```sh
npx create-nuxt-app .
```

### to typescript

```sh
yarn add @nuxt/typescript-runtime vue-property-decorator
yarn add -D typescript
yarn add -D @nuxt/typescript-build @nuxtjs/eslint-config-typescript
yarn add -D ts-jest @types/jest
```

## add pug, stylus

```sh
yarn add -D pug pug-plain-loader stylus stylus-loader
```

## storybook

### install storybook

<https://storybook.js.org/docs/guides/guide-vue/>

```sh
yarn add -D @storybook/vue babel-preset-vue
yarn add -D fork-ts-checker-webpack-plugin
```

### install addons

```sh
yarn add -D @storybook/addon-a11y @storybook/addon-actions @storybook/addon-console @storybook/addon-docs
yarn add -D @storybook/addon-knobs @storybook/addon-links @storybook/addon-storyshots @storybook/addon-storysource
yarn add -D @storybook/addon-viewport
yarn add -D storybook-addon-i18next
```

### fix core-js

```sh
yarn add core-js@2.x
```
