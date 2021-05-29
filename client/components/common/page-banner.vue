<template>
  <div class="page-banner">
    <img src="http://demo.tempload.com/alya/assets/images/photos/parallax-counter.jpg" alt="This is title" />
    <div class="cover"/>
    <div class="card-title">
      <div>
        <h1>
          This is the title
        </h1>
        <span>
          <page-breadcrumbs :items="herger" />
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
  data () {
    return {
      herger: [{
        name: 'salam',
        link: 'https://www.google.com/'
      }, {
        name: 'chetori',
        link: 'https://www.facebook.com/'
      }]
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
