<template>
  <section class="page">
    <page-banner
      title="Pied Piper"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="[]"
    />


  </section>
</template>

<script>
export default {
  data () {

  },
  mounted () {

  },
  methods: {
    getTheArea () {
      this.$axios.$get('/area/list')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
