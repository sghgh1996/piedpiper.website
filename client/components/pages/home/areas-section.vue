<template>
  <section class="section areas-home">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <template v-for="(area, index) in areas">
              <div class="col-lg-3 col-md-6 col-sm-6 col-12" :key="index">
                <feature-item
                  :title="area.title"
                  :link="`/areas/${area._id}`"
                  :description="area.description"
                  :logo="area.logo"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeatureItem from '../../common/features/feature-item'

export default {
  components: {
    FeatureItem
  },
  data () {
    return {
      areas: []
    }
  },
  mounted () {
    this.$axios.get('/area/list')
      .then((response) => {
        this.areas = response.data
      })
      .catch((err) => { console.log(err) })
  }
}
</script>

<style lang="scss" scoped>
.areas-home {
  padding-top: 0px;
  margin-top: -100px;
}

@media (max-width: 1200px) {
  .areas-home {
    padding-top: 0px;
    margin-top: -10px;
  }
}

@media (max-width: 991px) {
  .areas-home {
    padding-top: 100px;
    margin-top: 0px;
  }
}
</style>
