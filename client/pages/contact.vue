<template>
  <section class="page">
    <page-banner
      title="Contact Us"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="[
        {
          name: 'Contact Us',
          link: '/contact'
        }
      ]"
    />

    <div class="page-content padding-bottom-80">
      <div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="contact">
							<div class="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5594.980606798249!2d9.227621500000009!3d45.48007050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f67dd11753%3A0x8e30fae1774a3377!2sMilan%20Polytechnic!5e0!3m2!1sen!2sit!4v1624480865277!5m2!1sen!2sit"
                  width="1110"
                  height="500"
                  style="border:10px;"
                  allowfullscreen=""
                  loading="lazy"
                />
							</div>
							<div class="contact-info">
								<div class="row">
									<div class="col-lg-4 col-md-4 col-sm-12">
										<div class="item">
											<i class="fa fa-location-arrow"></i>
											<div class="txt">
												<span>Piazza Leonardo da Vinci, 32<br>20133 Milano MI, Italy</span>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-12">
										<div class="item">
											<i class="fa fa-phone"></i>
											<div class="txt">
												<span>Phone: +39 02 23991</span>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-12">
										<div class="item">
											<i class="fa fa-envelope"></i>
											<div class="txt">
												<span><a href="mailto:sadjad.ghanbarynasab@mail.polimi.it">contact@piedpiper.com</a></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
//					<div class="col-lg-12">
//						<div class="contact-bottom">
//							<div class="row">
//								<div class="col-lg-4 col-md-6 col-sm-12">
//									<h5 class="margin-bottom-30">Get in touch</h5>
//									<div class="contact-text">
//                    <p>
//                      Thank you for your interest in PiedPiper! Please fill out the form to contact us and don't forget to check the box if you'd like to receive news, articles and insights.
//                    </p>
//									</div>
//								</div>
//								<div class="col-lg-8 col-md-6 col-sm-12">
//									<div class="contact-form">
//										<div class="row">
//											<div class="col-lg-6 col-md-12 col-sm-12">
//												<input type="text" placeholder="Name, surname">
//											</div>
//											<div class="col-lg-6 col-md-12 col-sm-12">
//												<input type="text" placeholder="E-Mail">
//											</div>
//											<div class="col-lg-12">
<!--												<textarea placeholder="Your message"></textarea>-->
<!--											</div>-->
<!--											<div class="col-lg-12">-->
<!--												<button class="btn-primary-line pull-right">SEND</button>-->
<!--											</div>-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
				</div>
			</div>
    </div>
  </section>
</template>

<script>
import PageBanner from '../components/common/page-banner'

export default {
  components: {
    PageBanner
  }
}
</script>

<style lang="scss" scoped>
.page-content {

  .contact {
    float: left;
    width: 100%;
    position: relative;

    .map-wrapper {
      position: relative;
      width: 100%;
      height: 500px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
      z-index: 1;

      .map-canvas {
        width: 100%;
        height: 100%;
      }
    }

    .contact-info {
      position: relative;
      z-index: 2;
      width: 90%;
      margin-left: 5%;
      margin-top: -60px;
      background-image: linear-gradient(135deg, #0C869A 0%, #23B8CF 100%);
      box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
      border-radius: 15px 100px 100px 15px;
      padding: 30px;
      padding-bottom: 30px;

      .item {
        overflow: hidden;
        color: #fff;

        i {
          float: left;
          font-size: 16px;
          width: 20px;
          margin-right: 10px;
          margin-top: 5px;
        }

        span {
          float: left;
          width: calc(100% - 30px);
          width: -webkit-calc(100% - 30px);
          font-size: 14px;

          a {
            color: #fff;
          }
        }
      }

      .social {
        overflow: hidden;
        margin-top: 30px;
        text-align: center;
        margin-bottom: 20px;

        li {
          display: inline;
          font-size: 22px;
          margin-right: 7px;
          margin-left: 7px;

          a {
            color: #fff;
          }
        }
      }
    }
  }

  .contact-bottom {
    border-top: 1px solid #f5f5f5;
    margin-top: 60px;
    padding-top: 60px;
    margin-bottom: 30px;

    .contact-text {
      font-weight: 400;
      font-size: 14px;
      color: #6F8BA4;
      letter-spacing: 0.6px;
      line-height: 26px;

      p {
        margin-bottom: 28px;
      }
    }

    .contact-form {
      input, textarea {
        border: 1px solid #eee;
        width: 100%;
        height: 50px;
        outline: none;
        padding-left: 20px;
        padding-right: 20px;
        transition: all 0.3s ease 0s;
        border-radius: 4px;
        appearance: none;
        margin-bottom: 30px;

        &:focus {
          border: 1px solid #169CB1;
          padding-left: 30px;
        }
      }

      textarea {
        height: 150px;
        resize: none;
        padding: 20px;
      }

      .btn-primary-line {
        margin-bottom: 0px !important;
      }
    }
  }

  @media (max-width: 991px) {
    .contact {
      overflow: initial !important;
      margin-bottom: 10px !important;

      .map-wrapper {
        width: 100% !important;
        height: 300px;
        margin-bottom: 30px;
      }

      .contact-info {
        position: relative !important;
        width: 100% !important;
        margin-top: 10px !important;
        margin-left: 0px !important;
        transform: perspective(1px) translateY(0%) !important;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
      }
    }
    .contact-bottom {
      margin-top: 30px;
      padding-top: 30px;
    }
  }
}
</style>
