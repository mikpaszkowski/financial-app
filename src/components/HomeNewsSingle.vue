<template>
    <div class="news-card">
      <h1>{{ news.title }}</h1>
      <span class="author">{{ `written by ${news.providerName}` }}</span>
    </div>
</template>

<script>
export default {
  props: {
    news: Object
  }
};
</script>

<style lang="scss">
@import "../styles/main.scss";


.news-card {
  position: relative;
  width: 35rem;
  height: 35rem;
  background-color: white;
  box-shadow: $container-shadow;
  padding: 2rem;
  margin: 2rem 2rem;
  transition: box-shadow 0.2s ease-in-out;
  transition: transform 0.3s ease-in;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.479);
    transform: translateY(-1rem);
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
  }

  .author {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
