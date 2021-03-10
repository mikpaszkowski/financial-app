<template>
  <div>
    <div :class="headlinePositionStyle">
      <div class="background-image"></div>
    </div>
    <div class="content">
      <div class="photo">
        <div class="text_content">
          <h1 class="headline-primary">
            <span class="headline">Monify</span>
            <span class="headline-main-quote">
              Trusted by more than 50,000 <br />
              worldwide.
            </span>
            <span class="headline-sub-quote">
              Over 180 countires and 120 currencies supported.
            </span>
          </h1>
          <div class="buttons">
            <router-link to="/login" exact
              ><button class="login" @click="login">Log in</button></router-link
            >
            <router-link to="/signup" exact
              ><button class="signin" @click="signup">
                Sign up
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import HeadlineImage from "../../public/img/headline_logo.png";

export default {
  methods: {
    login: function () {
      this.isHeadlineOut = true;
    },
    signup: function () {
      this.isHeadlineOut = true;
    },
    headlineClosed: function () {
      this.isHeadlineOut = true;
    },
    freeAccountClicked() {
      this.isHeadlineOut = true;
    },
  },
  computed: {
    headlinePositionStyle: function () {
      return {
        hideHeadline: this.isHeadlineOut,
      };
    },
  },

  data() {
    return {
      image: HeadlineImage,
      modalLogInOpen: false,
      modalSignUpOpen: false,
      isHeadlineOut: false,
    };
  },
  created() {
    if (!this.modalLogInOpen && !this.modalSignUpOpen) {
      console.log("modals closed");
      this.isModalsOut = true;
    } else {
      this.isModalsOut = false;
    }
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";

.photo {
  background-image: linear-gradient(
      to right bottom,
      rgba($dark-flat-green, 90%),
      rgba($flat-green, 80%)
    ),
    url("../../public/img/computer.jpg");
}
</style>