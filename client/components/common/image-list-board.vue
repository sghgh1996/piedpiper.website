<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row main-content">
            <h2> {{ title }} </h2>
            <div class="content-board col-lg-12">
              <template
                v-for="(item , index) in items">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12" :key="index">
                  <image-feature-item
                    :title="item.title"
                    :link="`${path_head}/${item._id}`"
                    :description="item.overview"
                    :show-arrow="false"
                    :img-src="item.photo"
                    :small="false"/>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageFeatureItem from './features/image-feature-item'

export default {
  name: 'image-list-board',
  components: { ImageFeatureItem },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    path_head: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #000000;

  .content-board {
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
  }
  h2 {
    margin-bottom: 40px;
  }

  p {
    word-break: break-word;
  }
}
</style>
