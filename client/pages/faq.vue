<template>
  <section class="page">
    <page-banner
      title="Pied Piper"
      :img-src="$image('hero.jpg')"
      :breadcrumbs="[]"
    />

    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="about">
              <div class="row">
                <div class="offset-lg-2 col-lg-8">
                  <h2>We're makers and creative</h2>
                  <p>
                    Pied Piper started as a research spinoff at Politecnico of Milan and was incubated at its startup accelerator. Data and experimentation are part of our DNA. We believe that science and engineering need to be seen as one. It is for this reason that we continuously focus on research, emerging ideas, and new technologies, routinely partnering with top academic and engineering research institutions. Our R&D orientation, combined with data-driven industry and business knowledge, allows us to identify innovation opportunities and create first-to-market solutions, creating unique competitive advantages for our customers.
                  </p>
                </div>
                <div class="col-lg-12">
                  <div class="about-image">
                    <div class="img-1">
                      <img :src="$image('about-1.jpg')" class="img-fluid" alt="pied piper">
                    </div>
                    <div class="img-2">
                      <img :src="$image('about-2.jpg')" class="img-fluid" alt="pied piper">
                    </div>
                  </div>
                </div>
                <div class="offset-lg-2 col-lg-8">
                  <p>
                    Telefónica is changing the way users interact with our video products, following the principle of always placing them at the center of the experience. With the ContentWise solution, we can offer viewers personalized and simplified user experiences.
                  </p>
                  <h5>Pablo Antolín</h5>
                  <h6>Product Manager, PayTV - Telefónica</h6>
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

  .about {
    position: relative;
    float: left;
    width: 100%;
    margin-bottom: 100px;
    text-align: center;

    h2 {
      font-size: 30px;
      color: #3B566E;
      margin-bottom: 30px;
    }

    h5 {
      font-style: italic;
      font-size: 20px;
      color: #6F8BA4;
      letter-spacing: 1.25px;
      text-align: center;
      line-height: 28px;
      margin-top: -20px;
    }

    .about-image {
      min-height: 500px;
      position: relative;
      margin-top: 50px;
      margin-bottom: 80px;

      .img-1 {
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 2;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.13);
        width: 55%;
      }

      .img-2 {
        position: absolute;
        right: 0px;
        bottom: 0px;
        z-index: 1;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.13);
        width: 55%;
      }
    }
  }

  @media (max-width: 991px) {
    .about {

      .about-image {
        height: auto;

        .img-1 {
          position: relative;
          margin-bottom: 30px;
        }

        .img-2 {
          position: relative;
        }
      }
    }
  }
}
</style>
