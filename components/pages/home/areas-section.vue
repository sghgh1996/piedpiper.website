<template>
  <section class="section areas-home">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="row">
            <template v-for="(area, index) in areas">
              <div class="col-lg-3 col-md-6 col-sm-6 col-12" :key="index">
                <feature-item
                  :title="area.title"
                  :link="area.link"
                  :description="area.description"
                />
              </div>
            </template>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import FeatureItem from '../../common/features/feature-item'

export default {
  components: {
    FeatureItem
  },
  data () {
    return {
      areas: [ // TODO: api call
        {
          title: 'Cloud Solutions',
          logo: '',
          description: 'Morbilling pharetra sapiening ut mattis viverra. Curabi tur magna.',
          link: '#'
        },
        {
          title: 'Network Services',
          logo: '',
          description: 'Donec pellentesque turpis utium lorem imperdiet semper viverra.',
          link: '#'
        },
        {
          title: 'Webcast Services',
          logo: '',
          description: 'Facilisis arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.',
          link: '#'
        },
        {
          title: 'Disaster Recovery',
          logo: '',
          description: 'Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .areas-home {
    padding-top: 0px;
    margin-top: -100px;
  }

  @media (max-width: 1200px) {
    .areas-home {
      padding-top: 0px;
      margin-top: -10px;
    }
  }

  @media (max-width: 991px) {
    .areas-home {
      padding-top: 100px;
      margin-top: 0px;
    }
  }
</style>
