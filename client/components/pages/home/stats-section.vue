<template>
  <section class="parallax-counter">
		<div class="parallax-content">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-12">
						<div class="count-item">
							<strong>38</strong>
							<span>Completed<br>Projects</span>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12">
						<div class="count-item">
							<strong>190</strong>
							<span>Happy<br>Customers</span>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12">
						<div class="count-item">
							<strong>18</strong>
							<span>Experienced<br>Staff</span>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12">
						<div class="count-item">
							<strong>12</strong>
							<span>Ongoing<br>Projects</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.parallax-counter {
  min-height: 315px;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 140%;
    height: 140%;
    opacity: .78;
    background-image: linear-gradient(127deg, #0C869A 0%, #23B8CF 91%);
    z-index: 2;
    top: -20%;
    left: -20%;
  }

  .parallax-content {
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
    width: 100%;

    .count-item {
      height: 280px;
      position: relative;
      float: left;
      width: 100%;

      &:before {
        content: '';
        position: absolute;
        width: 1px;
        height: 58px;
        border-left: 1px dashed #fff;
        left: 0px;
        right: 0px;
        margin: auto;
        top: -20px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
      }

      &:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 58px;
        border-left: 1px dashed #fff;
        left: 0px;
        right: 0px;
        margin: auto;
        bottom: -20px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
      }

      &:hover:before {
        height: 90px;
      }

      &:hover:after {
        height: 90px;
      }

      strong {
        display: block;
        text-align: center;
        font-weight: 400;
        font-size: 40px;
        letter-spacing: 1.72px;
        margin-bottom: 10px;
        color: #fff;
        margin-top: 70px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
      }

      span {
        display: block;
        text-align: center;
        color: #fff;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.86px;
      }
    }
  }

  @media (max-width: 991px) {
    padding-top: 60px;
    padding-bottom: 60px;
    .parallax-content {
      position: relative !important;
      top: 0% !important;
      transform: perspective(1px) translateY(0%) !important;

      .count-item {
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;

        &:hover strong {
          margin-top: 0px;
        }

        &:before {
          display: none;
        }

        &:after {
          display: none;
        }

        strong {
          margin-top: 0px;
        }
      }
    }
  }
}
</style>
