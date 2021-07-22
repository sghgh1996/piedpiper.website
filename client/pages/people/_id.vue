<template>
  <div>
    <template v-if="!isLoading">
      <div class="row breadcrumbs-center">
        <page-breadcrumbs :items="breadcrumbs"/>
      </div>
      <div class="container">
        <div class="section">
          <div class="col-lg-12">
            <div class="row person-content">
              <div class="col-lg-5 col-10">
                <h1>{{ person.name }}</h1>
                <h5>{{ person.role.title }}</h5>
                <br/><br/>
                <p>{{ person.description }}</p>
                <br/><br/>
                <h5>Contact Information</h5>
                <p><i class="fa fa-mobile"/>Phone: <span>{{ person.contact.phone }}</span></p>
                <p><i class="fa fa-envelope"/>E-Mail: <span>{{ person.contact.email }}</span></p>
              </div>
              <div class="col-lg-4 col-9">
                <img class="profile-image" :src="person.photo" :alt="person.name"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <image-list-board
        class="colored"
        title="Products Working on"
        :items="person.products"
        path_head="/products"
      />
    </template>
  </div>
</template>

<script>
import ImageListBoard from '../../components/common/image-list-board'
import PageBreadcrumbs from '../../components/common/page-breadcrumbs'

export default {
  components: {
    ImageListBoard,
    PageBreadcrumbs
  },
  data () {
    return {
      person: {},
      breadcrumbs: [],
      isLoading: true
    }
  },
  mounted () {
    this.$axios.$get(`/people/${this.$route.params.id}`)
      .then((response) => {
        this.person = response
        console.log(response)
        this.breadcrumbs = [
          {
            name: 'People',
            link: '/people'
          },
          {
            name: this.person.name,
            link: `/people/${this.person._id}`
          }
        ]
        this.isLoading = false
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs-center {
  justify-content: center;
  margin: 0;
  background: #E2FBFF;
  padding-bottom: 25px;
}

.person-content {
  justify-content: space-between;
  color: #000;

  h5 {
    color: #6F8BA4;
  }

  p {
    i {
      margin: 0.5em;
      color: #6F8BA4;
    }
    span {
      color: #169CB1;
      margin-left: 1em;
    }
  }

  .profile-image {
    max-width: 100%;
  }
}
</style>
