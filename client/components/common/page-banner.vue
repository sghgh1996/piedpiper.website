<template>
  <div class="page-banner">
    <img :src="imgSrc" alt="This is title" />
    <div class="cover"/>
    <div class="card-title">
      <div>
        <h1>{{ title }}</h1>
        <span v-if="breadcrumbs.length">
          <page-breadcrumbs :items="breadcrumbs" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import PageBreadcrumbs from './page-breadcrumbs'

export default {
  components: {
    PageBreadcrumbs
  },
  props: {
    title: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.page-banner {
  width: 100%;
  height: 270px;
  overflow: hidden;
  display: flex;

  img {
    width: 100%;
    object-fit: cover;
  }

  .cover {
    background: #23B8CF;
    width: 100%;
    height: 270px;
    position: absolute;
    opacity: 70%;
  }

  .card-title {
    width: 100%;
    height: 270px;
    display: flex;
    position: absolute;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
    }

  }
}

</style>
