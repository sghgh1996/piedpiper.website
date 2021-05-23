<template>
  <div>
    <home-hero />
    <areas-section />
    <information-section />
    <stats-section />
    <links-section />
    <team-section />
    <contact-section />
  </div>
</template>

<script>
import HomeHero from '../components/pages/home/home-hero'
import AreasSection from '../components/pages/home/areas-section'
import InformationSection from '../components/pages/home/information-section'
import LinksSection from '../components/pages/home/links-section'
import TeamSection from '../components/pages/home/team-section'
import StatsSection from '../components/pages/home/stats-section'
import ContactSection from '../components/pages/home/contact-section'

export default {
  components: {
    HomeHero,
    AreasSection,
    InformationSection,
    LinksSection,
    TeamSection,
    StatsSection,
    ContactSection
  }
}
</script>
