<template>
  <feature-item
    :title="title"
    :link="link"
    :description="description"
    :showArrow="showArrow"
    :small="small">
    <template #image>
      <div class="header-image">
        <img :src="imgSrc" />
      </div>
    </template>
  </feature-item>
</template>

<script>
import FeatureItem from './feature-item'

export default {
  name: 'image-feature-item',
  components: {
    FeatureItem
  },
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    imgSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header-image{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
}
</style>
