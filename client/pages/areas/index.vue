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
              <feature-item
                :title="item.title"
                :link="`areas/${item._id}`"
                :description="item.overview"
                :showArrow="false"
                :logo="item.logo"
                :small="false">
              </feature-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageBanner from '../../components/common/page-banner'
import FeatureItem from '../../components/common/features/feature-item'

export default {
  components: {
    PageBanner,
    FeatureItem
  },
  data () {
    return {
      items: [],
      title: 'All Areas',
      breadcrumbs: [
        {
          name: 'Areas',
          link: 'areas'
        }
      ]
    }
  },
  async mounted () {
    this.items = await this.$axios.$get('/area/list')
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
