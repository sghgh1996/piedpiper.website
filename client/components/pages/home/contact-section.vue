<template>
  <section class="parallax">
		<div class="parallax-content">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="info">
              <strong><p>We design cutting edge technologies</p></strong>
              <p class="sub-info">We systematically develop, and invest in, innovative software and technology products to deliver our solutions to global markets.</p>
							<nuxt-link class="btn-white-line" to="/contact">Contact Us</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
  .parallax {
  min-height: 350px;
  overflow: hidden;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    width: 140%;
    height: 140%;
    opacity: .88;
    background-image: linear-gradient(127deg, #0C869A 0%, #23B8CF 91%);
    z-index: 2;
    top: -20%;
    left: -20%;
  }

  .parallax-content {
    position: relative;
    z-index: 3;

    .info {
      text-align: center;
      font-weight: 400;
      font-size: 22px;
      color: #fff;
      padding-top: 20px;
      padding-bottom: 20px;

      .sub-info {
        letter-spacing: 1px;
        margin: auto auto 40px;
        font-size: 0.8em;
        max-width: 60%;

        span {
          text-decoration: underline;
        }
      }

      strong {
        p {
          letter-spacing: 1px;
          margin-bottom: 0;
          font-size: 1.5em;
        }
      }

      .btn-white-line {
        margin: auto;

        &:hover {
          color: #169CB1;
        }
      }
    }
  }

  @media (max-width: 991px) {
    padding-top: 60px;
    padding-bottom: 60px;
    min-height: auto;

    .parallax-content {
      position: relative !important;
      top: 0% !important;
      transform: perspective(1px) translateY(0%) !important;
    }
  }
}
</style>
