<template>
  <div class="home">
    <div class="background-image"></div>
    <Heading />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Heading from "./TheHeading";
import Navbar from "./TheSideBar";
import Footer from "./TheFooter";

export default {
  components: {
    Heading,
    Navbar,
    Footer,
  },
  data() {
    return {
      isAccountButtonClicked: false,
      component: "app-home-welcome",
    };
  },
  methods: {
    showAccountData: function () {
      this.component = "app-account-data";
    },
  },

  created: function () {
    // this.$root.$on("accountDataDisplay", this.showAccountData);
  },
};
</script>


<style lang="scss">
@import "../styles/main.scss";

.home {
  background-color: $backgroundColor;
}

.cards-leave-to,
.cards-enter {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.3s ease-in-out;
}

.cards-leave,
.cards-enter-to {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s ease-in-out;
}

body {
  margin: 0;
}

.background-image {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: $backgroundColor;
}
</style>