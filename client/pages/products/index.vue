<template>
  <div>
    <page-banner
      :title="title"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="breadcrumbs"
    />

    <div class="content col-8">
      <div class="row">
        <div
          v-for="(item , index) in items"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-6 col-12">
          <image-feature-item
            :title="item.title"
            :link="`/products/${item._id}`"
            :description="item.overview"
            :show-arrow="false"
            :img-src="item.photo"
            :small="false">
          </image-feature-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageBanner from '../../components/common/page-banner'
import ImageFeatureItem from '../../components/common/features/image-feature-item'

export default {
  components: {
    PageBanner,
    ImageFeatureItem
  },
  data () {
    return {
      items: [],
      title: 'All Products',
      breadcrumbs: [
        {
          name: 'Products',
          link: '/products'
        }
      ]
    }
  },
  async mounted () {
    this.items = await this.$axios.$get('/product/list')
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 45px auto 0 auto;
}
</style>
