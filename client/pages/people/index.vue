<template>
  <div class="my-5">
    <template v-for="person in people">
      <person-item
        :key="person._id"
        :name="person.name"
        :link="`/people/${person._id}`"
        :description="person.role.title"
        :role="person.description"
      />
    </template>
  </div>
</template>

<script>
import personItem from '../../components/common/people/person-item.vue'

export default {
  components: { personItem },
  data () {
    return {
      people: []
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
