<template>
  <div>
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/header/app-header'
import AppFooter from '~/components/layout/footer/app-footer'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
