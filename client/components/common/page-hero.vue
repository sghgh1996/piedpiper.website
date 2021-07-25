<template>
  <div class="page-hero" :style="$backgroundImage('company-team.jpg')">
    <div class="hero-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>{{ title }}</h1>
          </div>
          <div class="col-lg-12">
            <slot name="breadcrumbs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

  .page-hero {
    margin-bottom: 80px;
    min-height: 350px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      position: absolute;
      width: 140%;
      height: 140%;
      left: -20%;
      top: -20%;
      right: -20%;
      bottom: -20%;
      background-image: linear-gradient(127deg, #0C869A 0%, #23B8CF 91%);
      z-index: 2;
      opacity: 0.7;
    }

    .hero-top {
      position: absolute;
      width: 100%;
      z-index: 3;
      text-align: center;

      h1 {
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        letter-spacing: 1.4px;
        color: #fff;
        text-align: center;
      }
    }
  }
</style>
