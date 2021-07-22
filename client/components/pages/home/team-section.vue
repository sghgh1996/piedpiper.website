<template>
    <person-list-board
      class="colored"
      title="Part of Our Team"
      :teams="teams"
      path_head="/people"
    />
</template>

<script>
import PersonListBoard from '../../common/person-list-board'

export default {
  components: {
    PersonListBoard
  },
  data () {
    return {
      teams: []
    }
  },
  mounted () {
    this.$axios.get('/people/list')
      .then((response) => {
        if (response.data.length > 4) {
          this.teams = response.data.sort(() => Math.random() - Math.random()).slice(0, 4)
        } else {
          this.teams = response.data
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
