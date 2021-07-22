<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row main-content">
            <h2> {{ title }} </h2>
            <template
              v-for="(item , index) in items">
              <div v-if="(index % 2 === 0)" :key="index" class="content-row">
                <div class="col-lg-5">
                  <h3> {{ item.title }}</h3>
                  <p> {{ item.text }}</p>
                </div>
                <div class="col-lg-5">
                  <img :src="item.image" :alt="item.title"/>
                </div>
              </div>
              <div v-else :key="index" class="content-row">
                <div class="col-lg-5">
                  <img :src="item.image" :alt="item.title"/>
                </div>
                <div class="col-lg-5">
                  <h3> {{ item.title }}</h3>
                  <p> {{ item.text }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'content-board',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #000000;

  h2 {
    margin-bottom: 40px;
    text-align: center;
  }

  p {
    word-break: break-word;
  }

  .content-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5em;
    margin-top: 5em;
    h3 {
      margin-bottom: 2em;
      text-align: center;
    }
    img {
      max-width: 100%;
    }

  }
}
</style>
