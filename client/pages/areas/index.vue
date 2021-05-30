<template>
  <div>
    <page-banner
      :title="'Dummy Title'"
      :imgSrc="'http://demo.tempload.com/alya/assets/images/photos/parallax-counter.jpg'"
      :breadcrumbs="[{
        name: 'salam',
        link: 'https://www.google.com/'
       }, {
        name: 'chetori',
        link: 'https://www.facebook.com/'
      }]" />

    <div class="content col-8">
      <div
        class="col-lg-3 col-md-6 col-sm-6 col-12"
        v-for="i in 9"
        :key="i">
        <image-feature-item
          :title="'New Products ' + i"
          link="/products/new"
          description="salam salam"
          :showArrow="false"
          imgSrc="https://randomwordgenerator.com/img/picture-generator/brushes-1683134_640.jpg"
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
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px auto 0 auto;
}
</style>
