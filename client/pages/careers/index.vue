<template>
  <div>
    <page-banner
      :title="title"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="breadcrumbs"/>

    <div class="container">
      <div class="section">
        <div class="col-lg-12">
          <div class="row content">
            <div
              class="col-lg-3 col-md-6 col-sm-6 col-12"
              v-for="(item , index) in items"
              :key="index">
              <image-feature-item
                :title="item.title"
                :link="`people?role=${item._id}`"
                :imgSrc="item.photo"
                :small="true">
              </image-feature-item>
            </div>
          </div>
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
      title: 'All Careers',
      breadcrumbs: [
        {
          name: 'Careers',
          link: 'careers'
        }
      ]
    }
  },
  async mounted () {
    this.items = await this.$axios.$get('/career/list')
    console.log(this.items)
    return {}
  }
}
</script>

<style lang="scss" scoped>
.content {
  justify-content: center;
}
</style>
