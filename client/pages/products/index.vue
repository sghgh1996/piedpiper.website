<template>
  <div>
    <page-banner
      :title="title"
      :imgSrc="imgSrc"
      :breadcrumbs="breadcrumbs" />

    <div class="content col-8">
      <div
        class="col-lg-3 col-md-6 col-sm-6 col-12"
        v-for="(item , index) in items"
        :key="index">
        <image-feature-item
          :title="item.title"
          :link="`products/${item._id}`"
          :description="item.information"
          :showArrow="false"
          :imgSrc="item.photo"
          :small="false">
        </image-feature-item>
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
      imgSrc: 'http://demo.tempload.com/alya/assets/images/photos/parallax-counter.jpg',
      breadcrumbs: [
        {
          name: 'Products',
          link: 'products'
        }
      ]
    }
  },
  async mounted () {
    this.items = await this.$axios.$get('/product/list')
    console.log(this.items)
    return {}
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
