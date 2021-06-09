<template>
  <section class="page">
    <page-banner
      :title="title"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="breadcrumbsItems" />

		<div class="container">
      <div class="row">
        <template v-for="person in people">
          <div class="col-lg-3 col-md-6 col-sm-6 col-12" :key="person._id">
            <person-item
              :name="person.name"
              :link="`/people/${person._id}`"
              :description="person.role.title"
              :role="person.description"
            />
          </div>
        </template>
      </div>
		</div>
  </section>
</template>

<script>
import PageBanner from '../../components/common/page-banner.vue'
import PersonItem from '../../components/common/people/person-item.vue'

export default {
  components: { PersonItem, PageBanner },
  data () {
    return {
      people: [],
      breadcrumbsItems: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'All People',
          link: '/people'
        }
      ]
    }
  },
  mounted () {
    this.$axios.get('/people/list')
      .then((response) => {
        this.people = response.data
      })
      .catch((err) => { console.log(err) })
  }
}
</script>

<style lang="scss" scoped>

</style>
