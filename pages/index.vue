<template>
  <div>
    <home-hero />
    <areas-section />
    <information-section />
  </div>
</template>

<script>
import HomeHero from '../components/pages/home/home-hero'
import AreasSection from '../components/pages/home/areas-section'
import InformationSection from '../components/pages/home/information-section'

export default {
  components: {
    HomeHero,
    AreasSection,
    InformationSection
  }
}
</script>
