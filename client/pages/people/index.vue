<template>
  <section class="page">
    <page-banner
      :title="title"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="breadcrumbsItems"/>

    <div class="container">
      <div class="section">
        <div class="row">
        </div>
        <div class="row">
          <template v-for="person in people">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12" :key="person._id">
              <person-item
                :name="person.name"
                :link="`/people/${person._id}`"
                :description="person.description"
                :role="person.role.title"
                :photo="person.photo"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageBanner from '../../components/common/page-banner.vue'
import PersonItem from '../../components/common/people/person-item.vue'

export default {
  components: {
    PersonItem,
    PageBanner
  },
  data () {
    return {
      people: [],
      careers: [],
      title: 'All People',
      breadcrumbsItems: [
        {
          name: 'People',
          link: '/people'
        }
      ]
    }
  },
  async mounted () {
    this.careers = await this.$axios.$get('/career/list')
    this.people = await this.$axios.$get('/people/list')
  }
}
</script>

<style lang="scss" scoped>

</style>
