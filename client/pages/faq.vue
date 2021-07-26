<template>
  <section class="page">
    <page-banner
      title="Frequently Asked Questions"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="[{
          name: 'FAQ\'s',
          link: '/faq'
        }]"
    />

    <div class="page-content padding-bottom-80">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="faq">
              <div class="card">
                <div class="card-header">
                  <div class="mb-0">
                    <h5 class="faq-title">
                      <span class="badge">1</span> What is Autonomous Performance Optimization and AI-powered Performance Optimization?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>Autonomous Performance Optimization is a new approach to IT performance optimization that leverages AI and Machine Learning techniques to automatically and continuously identify how to configure the technology stack to maximize application performance, cost savings and service resilience.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <div class="mb-0">
                    <h5 class="faq-title">
                      <span class="badge">2</span> Why do I need Autonomous Performance Optimization?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>The complexity of today’s on-premise and cloud infrastructures has grown beyond the reach of even the most skilled performance experts. Software gets built faster and faster, technology platforms are complex with hundreds of possible configurations, cloud vendors offer a growing array of configuration and tuning options. Traditional manual approach to performance tuning is ineffective at this scale, which means organizations are leaving significant performance and cost savings on the table.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <div class="mb-0">
                    <h5 class="faq-title">
                      <span class="badge">3</span> How does PiedPiper support Autonomous Performance Optimization?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>PiedPiper patented AI has been specifically designed to solve otherwise intractable real-world optimization problems that require exploring millions of system configurations. The PiedPiper reinforcement learning engine intelligently explores the configuration space and converges to the optimal configuration within hours.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <div class="mb-0">
                    <h5 class="faq-title">
                      <span class="badge">4</span> How long does it take for PiedPiper to produce results?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>PiedPiper patented AI has been designed to support real-world optimization by converging on optimal configurations faster (and more precisely) than with any alternative approach or AI technique. The actual optimization time generally correlates with the complexity of the optimization scenario, mostly represented by the number of parameters. PiedPiper can converge on optimal configurations in just a few hours, typically in 8 to 24 hours for medium-complexity scenarios.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

  .faq {
    background: #FFFFFF;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    margin-bottom: 30px;

    .card {
      border: none;
      background: none;
      border-bottom: 1px solid #E2FBFF;

      .card-header {
        padding: 0px;
        border: none;
        background: #E2FBFF;

        .faq-title {
          width: 100%;
          text-align: left;
          padding: 0px;
          padding-left: 30px;
          padding-right: 30px;
          font-weight: 400;
          font-size: 15px;
          letter-spacing: 1px;
          color: #3B566E;
          text-decoration: none !important;
          padding-top: 20px;
          padding-bottom: 20px;

          .badge {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 14px;
            border-radius: 100px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            text-align: center;
            background: #169CB1;
            color: #fff;
            font-size: 12px;
            margin-right: 20px;
          }
        }
      }

      .card-body {
        padding: 30px;
        padding-left: 35px;
        padding-bottom: 16px;
        font-weight: 400;
        font-size: 16px;
        color: #6F8BA4;
        line-height: 28px;
        letter-spacing: 1px;
        border-top: 1px solid #F3F8FF;

        p {
          margin-bottom: 14px;
        }
      }
    }

    @media (max-width: 991px) {
      margin-bottom: 30px;

      .card .card-header .faq-title {
        line-height: 26px;
        margin-top: 10px;
      }
    }
  }
}
</style>
