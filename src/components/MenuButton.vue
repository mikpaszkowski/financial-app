<template>
  <div class="center">
    <div class="line upperLine" id="line-1"></div>
    <div class="line middleLine" id="line-2"></div>
    <div class="line lowerLine" id="line-3"></div>
  </div>
</template>

<script>
export default {
  props: ["menuOpened"],

  methods: {
    toggleMenu() {
      console.log("hello");
      let centerContainer = document.querySelector(".center");
      let upperLine = document.getElementById("line-1");
      let lowerLine = document.getElementById("line-3");
      let middleLine = document.getElementById("line-2");
      centerContainer.addEventListener("click", (e) => {
        upperLine.classList.toggle("line-1-rotate");
        lowerLine.classList.toggle("line-3-rotate");
        middleLine.classList.toggle("line-2-animate");
      });
    },
  },
};
</script>

<style>
@import "../styles/main.scss";
</style>