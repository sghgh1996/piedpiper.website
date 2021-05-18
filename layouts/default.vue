<template>
  <div>
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/header/app-header'

export default {
  components: {
    AppHeader
  }
}
</script>