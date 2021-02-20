<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
$clouds-color: #ecf0f1;

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.main-container {
  background-color: $clouds-color;
}
</style>
