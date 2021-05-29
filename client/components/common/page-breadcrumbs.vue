<template>
  <div>
    <ol class="page-breadcrumbs">
      <template v-for="(item, index) in items">
        <li
          :key="index"
        >
          <nuxt-link
            v-if="index !== (items.length - 1) || !item.link"
            :to="item.link"
          >
            {{ item.name }}
          </nuxt-link>
          <template v-else>
            {{ item.name }}
          </template>
        </li>
      </template>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

  .page-breadcrumbs {
    float: none;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    background: none;
    padding: 0px;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 0px;
    display: inline-block;
    text-align: center;
    background: #fff;
    border-radius: 15px 100px 100px 15px;
    padding-left: 20px;
    padding-right: 20px;

    li {
      font-weight: 400;
      font-size: 14px;
      color: #6F8BA4;
      line-height: 30px;
      margin-left: 10px;
      display: inline-block;

      &:after {
        font-family: FontAwesome;
        content: "\f105";
        margin-left: 10px;
        color: #6F8BA4;
      }

      &:first-child {
        margin-left: 0px;
      }

      &:last-child:after {
        content: '';
        margin-left: 0px;
      }

      a {
        font-weight: 400;
        font-size: 14px;
        color: #3B566E;
      }
    }
  }
</style>
