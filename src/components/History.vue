<template>
  <div class="container-history">
    <TheLeftPanel />
    <Record class="records" />
  </div>
</template>


<script>
import { history } from "../assets/history";
import TheLeftPanel from "./TheLeftPanel.vue";
import Record from "./HistoryRecord";

export default {
  data() {
    return {
      history: history,
    };
  },
  components: {
    TheLeftPanel,
    Record,
  },

  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        let element = document.querySelector(".container-history");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    });
  },
};
</script>


<style lang="scss">
@import "../styles/main.scss";

.container-history {
  display: flex;
  padding: 0 10rem;
  font-family: $main-font;
  font-size: $font-size;

  .records {
    box-shadow: $container-shadow;
  }
}

@media screen and(max-width: 1306px) {
  .container-history {
    flex-direction: column;

    .history-table {
      width: 100%;
      margin: 2rem 0 0 0;
    }
  }
}
</style>