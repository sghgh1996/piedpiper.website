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
      product: {},
      productLoading: true
    }
  },
  computed: {
    breadcrumbs () {
      return [
        {
          name: 'Products',
          link: 'products'
        },
        {
          name: this.product.title ? this.product.title : '',
          link: ''
        }
      ]
    }
  },
  async mounted () {
    this.product = await this.$axios.$get(`/product/${this.$route.params.id}`)
    console.log(this.product)
    this.productLoading = false
  }
}
</script>

<style lang="scss" scoped>

</style>
