<template>
  <div class="body">
    <div class="image">
      <NotFoundPic class="not-found-pic" />
    </div>
    <div class="info">
      <h1>Something went wrong ...</h1>
      <p>Page not found: Error 404.</p>
    </div>
  </div>
</template>

<script>
import NotFoundPic from "../components/icons/NotFoundPic";

export default {
  components: {
    NotFoundPic,
  },
};
</script>
=
<style lang="scss" scoped>
@import "../styles/main.scss";

.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;
}

.not-found-pic {
  width: 50rem;
}

.info {
  font-size: 1.1em;
  font-family: $main-font;
  color: $font-color;
  text-align: center;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  padding: 20px;
}
</style>