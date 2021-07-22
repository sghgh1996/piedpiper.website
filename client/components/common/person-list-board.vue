<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row main-content">
            <h2> {{ title }} </h2>
            <div class="content-board col-lg-12">
              <template v-for="(team, index) in teams">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12" :key="index">
                  <person-item
                    :name="team.name"
                    :link="`${path_head}/${team._id}`"
                    :description="team.description"
                    :role="team.role.title"
                    :photo="team.photo"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonItem from './people/person-item'

export default {
  name: 'person-list-board',
  components: { PersonItem },
  props: {
    title: {
      type: String,
      required: true
    },
    teams: {
      type: Array,
      required: true
    },
    path_head: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #000000;

  .content-board {
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
  }
  h2 {
    margin-bottom: 40px;
  }

  p {
    word-break: break-word;
  }
}
</style>
