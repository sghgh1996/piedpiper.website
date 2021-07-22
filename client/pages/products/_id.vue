<template>
  <div>
    <template v-if="!productLoading">
      <page-banner
        :title="product.title"
        :imgSrc="$image('hero.jpg')"
        :breadcrumbs="breadcrumbs"
      />
    </template>
  </div>
</template>

<script>
import PageBanner from '../../components/common/page-banner'

export default {
  components: {
    PageBanner
  },
  data () {
    return {
      product: { title: '' },
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

</style>
