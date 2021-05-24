<template>
  <div class="welcome-area">
		<div class="right-bg">
			<img src="~/assets/images/hero.jpg" class="img-fluid float-right" alt="piedpiper-hero">
		</div>

		<div class="header-bg">
			<img src="~/assets/images/hero-bg.svg" class="img-fluid" alt="">
		</div>

		<div class="header-text">
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-md-12 col-sm-12">
						<h1>Industry Leading Managed Services and Staffing <span>Solutions</span></h1>
						<p>Proven methods to capture business priorities and goals as well as current pain points that enables measurable business outcomes.</p>
						<a href="#" class="btn-primary-line">LEARN MORE</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
	.welcome-area {
		overflow: hidden;
		position: relative;
		transform-style: preserve-3d;

		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: none;
			z-index: 3;
		}

		.right-bg {
			float: right;
			width: 89%;
			overflow: hidden;
			position: relative;
			z-index: 1;
			transform-style: preserve-3d;

			&:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: 1;
				background-image: linear-gradient(135deg, #0C869A 0%, #23B8CF 100%);
				opacity: .73;
			}
		}

		.header-bg {
			position: absolute;
			top: 0px;
			min-height: 500px;
			z-index: 2;
		}

		.header-text {
			position: absolute;
			width: 100%;
			top: 26%;
			transform: perspective(1px) translateY(0%);
			z-index: 4;

			h1 {
				font-weight: 400;
				font-size: 28px;
				color: #1E3056;
				line-height: 46px;
				letter-spacing: 0.93px;
				margin-bottom: 30px;

				span {
					color: #169CB1;
				}
			}

			p {
				font-weight: 400;
				font-size: 16px;
				color: #697BA2;
				line-height: 28px;
				letter-spacing: 1px;
				margin-bottom: 0px;
				padding-bottom: 30px;
				position: relative;
			}

			.btn-primary-line {
				width: 170px;
				margin-bottom: 0px;
			}
		}

		@media (max-width: 991px) {
			margin-top: 80px;
			background: #fff;

			.right-bg {
				width: 100%;

				&:before {
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					opacity: 0.5;
					background-image: linear-gradient(135deg, #0C869A 0%, #23B8CF 100%);
				}
			}
			.header-bg {
				display: none;
			}
			.header-text {
				top: 50% !important;
				transform: perspective(1px) translateY(-50%) !important;
				text-align: center;

				h1 {
					font-weight: 600;
					font-size: 20px !important;
					line-height: 30px !important;
					margin-bottom: 10px !important;
					text-align: center;
					color: #fff;

					span {
						color: #fff;
					}
				}

				p {
					text-align: center;
					color: #fff;
					font-size: 14px;
					line-height: 22px;
					margin-bottom: 0px;
					padding-bottom: 10px;
				}

				.btn-primary-line {
					margin: auto;
					border: 1px solid #fff;
					background: #fff;
					color: #169CB1;
					height: 40px;
					line-height: 40px;

					&:hover {
						color: #169CB1;
					}
				}
			}
		}
	}

	@media (max-width: 1200px) {
		.header-text {
			top: 60% !important;
			transform: perspective(1px) translateY(-60%) !important;

			h1 {
				font-size: 28px !important;
				line-height: 38px !important;
			}
		}
	}

	@media (max-width: 1024px) {
		.header-text {
			top: 65% !important;
			transform: perspective(1px) translateY(-65%) !important;

			h1 {
				font-size: 26px !important;
				line-height: 36px !important;
			}
		}
	}
</style>
