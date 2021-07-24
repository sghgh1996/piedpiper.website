<template>
  <section class="page">
    <page-banner
      :title="title"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="breadcrumbsItems"/>
    <div class="container">
      <div class="section">
        <div class="row mb-5">
          <select class="career-select">
            <option
                value="all"
                :selected="!roleID"
              >
                All
              </option>
            <template v-for="career in careers">
                <option
                  :value="career._id"
                  :key="career._id"
                  :selected="career._id === roleID"
                >
                  <span>{{ career.title }}</span>
                </option>
            </template>
          </select>
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
      roleID: '',
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
    this.roleID = this.$route.query.role
    this.careers = await this.$axios.$get('/career/list')
    if (this.roleID) {
      this.people = await this.$axios.$get(`/people/career/${this.roleID}`)
    } else {
      this.people = await this.$axios.$get('/people/list')
    }
  }
}
</script>
