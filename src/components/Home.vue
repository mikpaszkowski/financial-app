<template>
  <div>
    <div class="background-image"></div>
    <app-heading></app-heading>
    <app-side-bar></app-side-bar>
    <transition name="cards">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isAccountButtonClicked: false,
      component: "app-home-welcome",
    };
  },
  methods: {
    showAccountData: function () {
      this.component = "app-account-data";
      console.log(this.isAccountButtonClicked);
    },
  },

  created: function () {
    this.$root.$on("accountDataDisplay", this.showAccountData);
  },
};
</script>


<style lang="scss">



.cards-enter-active{
  transition: .3s ease-in-out;
}

.cards-leave-active{
  transition: .2s ease-in-out;
}

.cards-leave-to, .cards-enter{
  opacity: 0;
}

.cards-leave, .cards-enter-to{
  opacity: 1;
}



body {
  margin: 0;
}

.background-image {
  position: rel;
  width: 100%;
  height: 101%;
  margin-right: auto;
  margin-left: auto;
  background-image: linear-gradient(
      rgb(79, 175, 179),
      rgba(167, 255, 233, 0.479)
    ),
    url("../assets/signin_image.jpg");
  background-size: cover;
  background-position: center;
}
</style>