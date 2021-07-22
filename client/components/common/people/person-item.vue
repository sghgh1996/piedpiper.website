<template>
  <div class="team-item">
    <nuxt-link :to="link">
      <div class="team-content">
        <p class="mb-4 max-text">{{ description }}</p>
        <!-- <ul class="social">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fa fa-github"></i></a></li>
        </ul> -->
        <div class="user-image">
          <img :src="photo" :alt="name">
        </div>
        <div class="team-info">
          <h3 class="user-name">{{ name }}</h3>
          <span>{{ role }}</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

  .team-item {
    background: #fff;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    position: relative;
    margin-bottom: 30px;

    .user-image {
      width: 90px;
      height: 60px;
      overflow: hidden;
      border-radius: 0px 100px 100px 0px;
      position: absolute;
      left: 0px;
      bottom: 28px;
      margin: auto;
      transition: all 0.3s ease 0s;
      background-image: linear-gradient(135deg, #0C869A 0%, #23B8CF 100%);
      box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.13);

      img {
        border-radius: 100px;
        position: absolute;
        right: -1px;
        height: 60px;
        width: 60px;
      }
    }

    &:hover {
      .user-image {
        width: 130px;
      }
    }

    .team-content {
      text-align: center;
      overflow: hidden;

      .max-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
        -webkit-box-orient: vertical;
        padding-bottom: 0;
      }

      .team-info {
        margin-bottom: 30px;
        padding-top: 20px;
        float: right;
        width: calc(100% - 100px);

        .user-name {
          display: block;
          font-weight: 400;
          font-size: 16px;
          color: #3B566E;
          letter-spacing: 0.69px;
          margin-bottom: 3px;
          text-align: left;
        }

        span {
          display: block;
          font-weight: 400;
          font-size: 12px;
          color: #6F8BA4;
          letter-spacing: 0.6px;
          text-align: left;
        }
      }

      .social {
        text-align: center;
        margin-bottom: 25px;

        li {
          display: inline-block;
          margin-left: 9px;
          margin-right: 9px;

          a {
            color: #169CB1;
            font-size: 14px;
          }
        }
      }

      p {
        padding: 25px;
        padding-bottom: 10px;
        font-weight: 400;
        font-size: 14px;
        color: #6F8BA4;
        letter-spacing: 0.6px;
        line-height: 26px;
        position: relative;

        &:before {
          font-family: FontAwesome;
          content: "\f10d";
          position: absolute;
          left: 0px;
          right: 0px;
          margin: auto;
          font-size: 40px;
          opacity: .1;
        }
      }
    }
  }
</style>
