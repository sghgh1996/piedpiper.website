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
  </div>
</template>
<script>
import PageBanner from '../../components/common/page-banner'
export default {
  components: {
    PageBanner
  }
}
</script>
