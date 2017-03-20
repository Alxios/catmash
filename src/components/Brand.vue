<template>
  <div class="brand">
    <div class="title">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>
    <p class="secondary-text center">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      subTitle: 'Which will be your favorite?'
    }
  }
}
</script>

<style scoped>
.brand {
  padding: 25px 0 25px 0;
}

.title {
  text-align: center;
  font-size: 28px;
}

.title .logo {
  padding-left: 70px;
}
</style>
