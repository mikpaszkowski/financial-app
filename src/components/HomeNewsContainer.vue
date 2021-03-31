<template>
  <div class="cards-container" v-if="listOfNews.length != 0">
    <div class="cards" v-for="news in listOfNews" :key="news.id">
      <SingleNews :news="news"></SingleNews>
    </div>
  </div>
</template>

<script>
import SingleNews from "./HomeNewsSingle";
import { getListOfNews } from "../api/businessNewsAPI";

export default {
  components: {
    SingleNews
  },
  data() {
    return {
      listOfNews: []
    };
  },
  methods: {
    getNews: async function() {
      const response = await getListOfNews();
      this.listOfNews = response.data;
      console.log(this.listOfNews);
    }
  },
  mounted() {
    this.getNews();
  }
};
</script>

<style lang="scss">
@import "../styles/main.scss";

.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
  padding-left: 20rem;
  padding-right: 20rem;
}
</style>
