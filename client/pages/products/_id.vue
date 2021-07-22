<template>
  <div>
    <template v-if="!productLoading">
      <page-banner
        :title="product.title"
        :imgSrc="product.photo"
        :breadcrumbs="breadcrumbs"
      />
      <content-board
        title="Information"
        :items="product.information"
      />
      <person-list-board
        class="odd-background"
        title="People Work on this Project"
        :teams="product.people"
        path_head="/people"
      />

      <section class="section">
        <div class="container">
          <div class="row colored">
              <div class="col-lg-12">
                <div class="row">
                  <h3> Area </h3>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <feature-item
                      :title="product.area.title"
                      :link="`/areas/${product.area._id}`"
                      :description="product.area.overview"
                      :showArrow="false"
                      :small="false"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import PageBanner from '../../components/common/page-banner'
import ContentBoard from '../../components/common/content-board'
import PersonListBoard from '../../components/common/person-list-board'
import FeatureItem from '../../components/common/features/feature-item'

export default {
  components: {
    PageBanner,
    ContentBoard,
    PersonListBoard,
    FeatureItem
  },
  data () {
    return {
      product: {
        title: '',
        people: []
      },
      breadcrumbs: [],
      productLoading: true
    }
  },
  mounted () {
    this.$axios.$get(`/product/${this.$route.params.id}`)
      .then((response) => {
        this.product = response
        this.productLoading = false
        this.breadcrumbs = [
          {
            name: 'Products',
            link: '/products'
          },
          {
            name: this.product.title,
            link: `/products/${this.product._id}`
          }
        ]
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.odd-background {
  background: #E2FBFF;
}
</style>
