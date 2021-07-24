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
    <content-board
      class="odd-background"
      title="Solution"
      :items="area.solutions"
    />
    <image-list-board
      title="Suggested Products"
      :items="area.products"
      path_head="/products"
    />
    <person-list-board
      class="odd-background"
      title="People Working in this Area"
      :teams="area.people"
      path_head="/people"
    />
  </section>
</template>

<script>
import PageBanner from '../../components/common/page-banner.vue'
import OverviewSection from '../../components/pages/area/overview-section'
import ImageListBoard from '../../components/common/image-list-board'
import ContentBoard from '../../components/common/content-board'
import PersonListBoard from '../../components/common/person-list-board'

export default {
  components: {
    PageBanner,
    OverviewSection,
    ImageListBoard,
    ContentBoard,
    PersonListBoard
  },
  data () {
    return {
      area: {
        title: '',
        photo: '',
        description: '',
        solutions: [],
        products: [],
        people: []

      },
      breadcrumbs: []
    }
  },
  mounted () {
    this.$axios.get(`/area/${this.$route.params.id}`)
      .then((response) => {
        this.area = response.data
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
  .odd-background{
    background: #E2FBFF;
  }
</style>
