<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row main-content">
            <h2> Overview </h2>
            <p class="col-lg-6"> {{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'overview-section',
  props: {
    text: {
      type: String,
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
  }

  p {
    word-break: break-word;
  }
}
</style>
