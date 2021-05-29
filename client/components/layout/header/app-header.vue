<template>
  <header class="header-area">
    <div class="container">
			<div class="row">
				<div class="col-12">
					<nav class="main-nav">
						<nuxt-link to="/" class="logo">
							<img src="~/assets/images/piedpiper-logo.png" alt="piedpiper"/>
						</nuxt-link>

						<ul class="nav">
							<li><a href="/">Home</a></li>
							<li class="submenu">
								<a href="javascript:;">Discover</a>
								<ul>
									<li><a href="/">Features</a></li>
									<li><a href="/">Our Team</a></li>
									<li><a href="/">Pricing Plans</a></li>
									<li><a href="/">Latests Blogs</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:;">Pages</a>
								<ul>
									<li><a href="/">About Us</a></li>
									<li><a href="/">Features</a></li>
									<li><a href="/">FAQ's</a></li>
									<li><a href="/">Blog</a></li>
								</ul>
							</li>
							<li><a href="/">Contact</a></li>
						</ul>
						<a class="menu-trigger">
							<span>Menu</span>
						</a>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.header-area {
	height: 100px;
	// position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  z-index: 100;
	.main-nav {
		.logo {
			float: left;
			margin-top: 27px;
		}

		.nav {
			float: left;
			margin-top: 27px;
			margin-left: 80px;

			li {
				padding-left: 20px;
				padding-right: 20px;

				&:last-child {
					padding-right: 0;
				}

				a {
					display: block;
					font-weight: 600;
					font-size: 14px;
					color: #6F8BA4;
					height: 40px;
					line-height: 40px;
					border: transparent;
					letter-spacing: 1px;

					&:hover {
						color: #6F8BA4;
					}
				}

				&.submenu {
					position: relative;
					padding-right: 35px;

					ul {
						position: absolute;
						width: 200px;
						box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
						border-radius: 5px;
						overflow: hidden;
						top: 40px;
						opacity: 0;
						transform: translateY(-2em);
						visibility: hidden;
						z-index: -1;

						li {
							margin-left: 0;
							padding-left: 0;
							padding-right: 0;

							a {
								display: block;
								background: #fff;
								color: #3B566E;
								padding-left: 20px;
								height: 40px;
								line-height: 40px;
								position: relative;
								font-size: 13px;
								border-bottom: 1px solid #f5f5f5;

								&:before {
									content: '';
									position: absolute;
									width: 0;
									height: 40px;
									left: 0;
									top: 0;
									bottom: 0;
									background: #169CB1;
								}

								&:hover {
									background: #f5f5f5;
									padding-left: 25px;

									&:before {
										width: 3px;
									}
								}
							}
						}
					}

					&:hover {
						ul {
							visibility: visible;
							opacity: 1;
							z-index: 1;
							transform: translateY(0%);
							transition-delay: 0s, 0s, 0.3s;
						}
					}
				}
			}
		}

		.menu-trigger {
			cursor: pointer;
			display: block;
			position: absolute;
			top: 23px;
			width: 32px;
			height: 40px;
			text-indent: -9999em;
			z-index: 99;
			right: 40px;
			display: none;

			span, span:after, span:before {
				background-color: #3B566E;
				display: block;
				position: absolute;
				width: 30px;
				height: 2px;
				left: 0;
			}

			span {
				top: 16px;
			}

			span:after, span:before {
				content: "";
				background-color: #3B566E;
				display: block;
				position: absolute;
				width: 30px;
				height: 2px;
				left: 0;
				width: 75%;
			}

			span:before {
				transform-origin: 33% 100%;
				top: -10px;
				z-index: 10;
			}

			span:after {
				transform-origin: 33% 0;
				top: 10px;
			}

			&.active {
				span, span:after, span:before {
					background-color: transparent;
					width: 100%;
				}

				span:after {
					transform: translateY(-6px) translateX(1px) rotate(-45deg);
					background-color: #3B566E;
				}

				span:before {
					transform: translateY(6px) translateX(1px) rotate(45deg);
					background-color: #3B566E;
				}
			}
		}
	}

	@media (max-width: 1200px) {
		.main-nav {

			.nav li {
				padding-left: 12px;
				padding-right: 12px;

				&.submenu {
					padding-right: 20px;

					&:after {
						right: 5px;
					}
				}
			}
		}
	}

	@media (max-width: 991px) {
		background: #fff;
		height: 80px;
		box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);

		.container {
			padding: 0px;
		}

		.logo {
			margin-top: 22px !important;
			margin-left: 30px;
		}
		.menu-trigger {
			display: block !important;
		}
		.main-nav {
			overflow: hidden;

			.nav {
				float: none;
				width: 100%;
				margin-top: 80px !important;
				display: none;
				margin-left: 0px;

				li {
					width: 100%;
					background: #fff;
					border-bottom: 1px solid #f5f5f5;
					padding-left: 0px !important;
					padding-right: 0px !important;

					a {
						height: 50px !important;
						line-height: 50px !important;
						padding: 0px !important;
						padding-left: 30px !important;
						border: none !important;
						background: #fff !important;
						color: #3B566E !important;

						&:hover {
							background: #f5f5f5 !important;
						}
					}

					&.submenu {

						ul {
							position: relative;
							visibility: inherit;
							opacity: 1;
							z-index: 1;
							transform: translateY(0%);
							top: 0;
							width: 100%;
							box-shadow: none;
							height: 0;

							li a {
								padding-left: 50px !important;

								&:hover:before {
									width: 0;
								}
							}

							&.active {
								height: auto !important;
							}
						}

						&:after {
							color: #3B566E;
							right: 25px;
							font-size: 14px;
							top: 15px;
						}

						&:hover ul {
							height: 0;
						}

						&:focus ul {
							height: 0;
						}
					}
				}
			}

			.header-buttons {
				display: none;
			}
		}
	}

	@media (min-width: 992px) {
		.header-area .main-nav .nav {
			display: flex !important;
		}
	}
}
</style>
