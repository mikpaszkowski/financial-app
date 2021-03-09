<template>
  <div class="record-container">
    <div class="record" v-for="record in history" :key="record.id">
      <div class="date">{{ record.date }}</div>
      <div class="description">{{ record.description }}</div>
      <div class="status">{{}}</div>
      <div class="amount">{{ record.amount }}</div>
    </div>
  </div>
</template>

<script>
import { history } from "../assets/history";

export default {
  props: ["record"],
  data() {
    return {
      history: history,
    };
  },
};
</script>

<style lang="scss">
@import "../styles/main.scss";

.record-container {
  display: block;
  width: 100%;
  font-family: $main-font;

  .record {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 140px;
  }
}
</style>