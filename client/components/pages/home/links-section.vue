<template>
  <section class="section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="row">
            <div class="col-md-3 offset-md-2 col-6">
              <feature-item
                title="New Products"
                link="/products/new"
                :small="true"
                logo="server"
              />
            </div>
            <div class="col-md-3 offset-md-2 col-6">
              <feature-item
                title="All Careers"
                link="/careers"
                :small="true"
                logo="laptop-house"
              />
            </div>
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
  }
}
</script>
