<template>
  <section class="page">
    <page-banner
      :title="area.title"
      :img-src="area.photo"
      :breadcrumbs="breadcrumbs"
    />
    <overview-section
      :text="area.description"
    />
    <image-list-board
      title="Suggested Products"
      :items="area.products"
      path_head="/products"
    />
  </section>
</template>

<script>
import PageBanner from '../../components/common/page-banner.vue'
import OverviewSection from '../../components/pages/area/overview-section'
import ImageListBoard from '../../components/common/image-list-board'

export default {
  components: {
    PageBanner,
    OverviewSection,
    ImageListBoard
  },
  data () {
    return {
      area: {},
      breadcrumbs: []
    }
  },
  mounted () {
    const params = this.$route.path.split('/')
    if (params.length < 3) {
      console.log('Not Valid URL')
      return
    }
    this.$axios.get(`/area/${params[2]}`)
      .then((response) => {
        this.area = response.data
        console.log('=================================')
        console.log(this.area)
        this.breadcrumbs = [
          {
            name: 'Areas',
            link: '/areas'
          },
          {
            name: this.area.title,
            link: `/areas/${this.area._id}`
          }
        ]
      })
      .catch((err) => {
        console.log(err)
      })
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
