<template>
  <nuxt-link :to="link" class="features-small-item">
    <div class="icon">
      <slot name="image">
        <i :class="`fa fa-${logo}`"></i>
      </slot>
    </div>
    <h5 class="features-title">{{ title }}</h5>
    <p v-if="!small">{{ description }}</p>
    <div v-if="!small && showArrow" class="next">
      <i class="fa fa-angle-right"></i>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    logo: {
      type: String,
      default: 'cloud'
    }
  }
}
</script>

<style lang="scss" scoped>

  .features-small-item {
    display: block;
    background: #FFFFFF;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease 0s;
    position: relative;
    margin-bottom: 45px;
    border-radius: 5px;
    height: calc(100% - 45px);
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background-image: linear-gradient(135deg, #0C869A 0%, #23B8CF 100%);
      transition: all 0.3s ease 0s;
      opacity: 0;
      border-radius: 5px;
    }

    &:hover {
      transform: scale(1.1);
      &:before {
        opacity: 1;
      }

      .features-title {
        color: #ffffff;
      }

      p {
        color: #FFF7F5;
      }

      a {
        span, i {
          color: #fff;
        }
      }
    }

    &.active {
      &:before {
        opacity: 1;
      }

      .features-title {
        color: #fff;
      }

      p {
        color: #FFF7F5;
      }

      a {
        span, i {
          color: #fff;
        }
      }
    }

    .icon {
      width: 100px;
      height: 100px;
      line-height: 115px;
      margin: auto;
      position: relative;
      margin-bottom: 20px;
      background: #E2FBFF;
      border-radius: 5px;

      font-size: 2.5em;
      color: #169CB1;
    }

    .features-title {
      font-weight: 400;
      font-size: 16px;
      color: #3B566E;
      letter-spacing: 0.7px;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
      transition: all 0.3s ease 0s;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: #6F8BA4;
      letter-spacing: 0.88px;
      line-height: 26px;
      position: relative;
      z-index: 2;
      transition: all 0.3s ease 0s;
      margin-bottom: 20px;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

    }

    .next {
      width: 58px;
      height: 58px;
      background-image: linear-gradient(135deg, #0C869A 0%, #23B8CF 100%);
      line-height: 58px;
      border-radius: 100px;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 0px;
      right: 0px;
      margin: auto;
    }
  }
</style>
