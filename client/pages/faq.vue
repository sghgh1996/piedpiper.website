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
                      <span class="badge">1</span> Who's behind the project?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>Angelo, Sadjad and Saman. We're three engineering students in Politecnico di Milano.</p>
                    <p>Our goal is to perform a good job with this project and have some fun doing that.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <div class="mb-0">
                    <h5 class="faq-title">
                      <span class="badge">2</span> How can i contact you?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>Via mail or phone call.</p>
                    <p>All the contacts are in the Contact us page, or at the bottom of each one.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <div class="mb-0">
                    <h5 class="faq-title">
                      <span class="badge">3</span> How can I work for you?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>PiedPiper is a very strict society. to work here there are some conditions you need to repect.</p>
                    <p>The options to work for us include: name a theorem, discover some massive phisical propriety that will change society or be casted for an american sitcom with at least 9 seasons.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <div class="mb-0">
                    <h5 class="faq-title">
                      <span class="badge">4</span> How did you grow so much in such a short time?
                    </h5>
                  </div>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <p>One of the founders isItalian, and he really thaught the rest of the crew how things are done!</p>
                    <p>Favors for favors, promisses which will never be possibly respected and a little bit of bribing here and there are the perfect recepie for success!</p>
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
