<template>
  <footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-md-12 col-sm-12">
          <nuxt-link to="/" class="logo">
            <img src="~/assets/images/piedpiper-logo.png" alt="piedpiper"/>
          </nuxt-link>
					<div class="text"> We use data, software, and insights to solve our customers' most substantial technology challenges.</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-6 col-6">
					<h5>Helpful Links</h5>
					<ul class="footer-nav">
						<li><a href="/areas"><i class="fa fa-angle-right"></i><span>Areas</span></a></li>
						<li><a href="/products"><i class="fa fa-angle-right"></i><span>Products</span></a></li>
						<li><a href="/people"><i class="fa fa-angle-right"></i><span>People</span></a></li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-6 col-6">
					<h5>Support</h5>
					<ul class="footer-nav">
						<li><a href="/about"><i class="fa fa-angle-right"></i><span>About Us</span></a></li>
						<li><a href="/contact"><i class="fa fa-angle-right"></i><span>Contact Us</span></a></li>
						<li><a href="/faq"><i class="fa fa-angle-right"></i><span>FAQ's</span></a></li>
					</ul>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-12">
					<h5>Contact Us</h5>
					<div class="address">
						<p>Piazza Leonardo da Vinci, 32<br>20133 Milano MI</p>
						<p>Phone: +39 02 23991</p>
						<p><span>E-Mail:</span><a href="mailto:sadjad.ghanbarynasab@mail.polimi.it">contact@piedpiper.com</a></p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<p class="copyright">© 2021 PiedPiper. All Rights Reserved.</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
  footer {
    background: #fff;
    padding-top: 70px;
    border-top: 1px solid #EEEEEE;

    img.logo {
      margin-bottom: 30px;
    }

    .text {
      font-weight: 400;
      font-size: 14px;
      color: #6F8BA4;
      line-height: 26px;
      letter-spacing: 0.88px;
    }

    h5 {
      font-weight: 400;
      font-size: 16px;
      color: #3B566E;
      letter-spacing: 0.69px;
      line-height: 30px;
      margin-bottom: 30px !important;
    }

    .footer-nav {

      li {

        a {
          display: block;
          overflow: hidden;

          &:hover span {
            color: #169CB1;
          }

          i {
            float: left;
            height: 32px;
            line-height: 32px;
            margin-right: 12px;
            font-size: 14px;
            color: #3B566E;
          }

          span {
            float: left;
            height: 32px;
            line-height: 32px;
            font-weight: 400;
            font-size: 14px;
            color: #6F8BA4;
            -webkit-transition: all 0.3s ease 0s;
            -moz-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
          }
        }
      }
    }

    .address {

      p {
        display: block;
        overflow: hidden;
        font-weight: 400;
        font-size: 14px;
        color: #6F8BA4;
        line-height: 26px;
        letter-spacing: 0.88px;
        margin-bottom: 5px;

        a {
          color: #169CB1;
        }

        .social {
          overflow: hidden;
          margin-top: 5px;

          li {
            float: left;
            font-size: 16px;
            margin-right: 10px;

            a {
              color: #6F8BA4;
            }
          }
        }
      }
    }

    .copyright {
      text-align: center;
      border-top: 1px solid #DAE6FD;
      margin-top: 30px;
      padding-top: 30px;
      padding-bottom: 30px;
      font-weight: 400;
      font-size: 14px;
      color: #6F8BA4;
      letter-spacing: 0.88px;
    }

    @media (max-width: 991px) {
      .text {
        margin-bottom: 30px;
      }

      h5 {
        margin-bottom: 15px;
      }

      .footer-nav {
        margin-bottom: 30px;
      }
    }
  }
</style>
