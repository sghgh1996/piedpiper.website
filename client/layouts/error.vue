<template>
  <div class="container">
    <div class="colored col-lg-12" style="width: 100%; justify-content: center; display:flex; align-items:center; flex-direction: column; padding: 2em">
      <img v-if="error.statusCode === 404" :src="$image('404Page.jpeg')" alt="404 Not found">
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Return to <b>Home page</b></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
