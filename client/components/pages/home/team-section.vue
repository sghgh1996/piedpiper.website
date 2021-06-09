<template>
  <section class="section colored">
		<div class="container">
      <div class="row">
				<div class="col-lg-12">
					<div class="center-heading">
						<h2 class="section-title">Our Team</h2>
					</div>
				</div>
				<div class="offset-lg-3 col-lg-6">
					<div class="center-text">
						<p>We are a growing family of 50+ professionals focused on problems worth solving and solutions at enterprise scale.</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<div class="row">
            <template v-for="(team, index) in teams">
              <div class="col-lg-3 col-md-6 col-sm-6 col-12" :key="index">
                <person-item
                  :name="team.name"
                  :link="team.link"
                  :description="team.description"
                  :role="team.role"
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
import PersonItem from '../../common/people/person-item'

export default {
  components: {
    PersonItem
  },
  data () {
    return {
      teams: [ // TODO: api call
        {
          name: 'Gilese Posture',
          role: 'iOS Developer',
          image: '',
          description: 'Nunc posuere lectus ut aliquet facilisis. Nam varius id magna et convallis.',
          link: '#'
        },
        {
          name: 'Valentine Morose',
          role: 'Mobile Developer',
          image: '',
          description: 'Curabitur tristique nec orci quis porta. Aliquam leo justo, auctor eget sapien.',
          link: '#'
        },
        {
          name: 'Lancer Bogroli',
          role: 'Visual Designer',
          image: '',
          description: 'Aliquam eget convallis nunc, et porta libero. Etiam velit, lobortis ut tristique.',
          link: '#'
        },
        {
          name: 'Fletch Skinner',
          role: 'Product Strategist',
          image: '',
          description: 'Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.',
          link: '#'
        }
      ]
    }
  }
}
</script>
