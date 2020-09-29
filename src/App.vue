<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  components: {

  },
};
</script>

<style lang="scss">

html{
  height: 101%;
}

body{
  margin: 0;
}

.background-image {
  position: fixed;
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(
      rgb(79, 175, 179),
      rgba(167, 255, 233, 0.479)
    ),
    url("./assets/signin_image.jpg");
  background-size: cover;
  background-position: center;
}
</style>
