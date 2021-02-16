<template>
  <div>
    <div class="background-image"></div>
    <app-heading></app-heading>
    <app-side-bar></app-side-bar>
    <transition name="cards">
      <router-view></router-view>
    </transition>
    <footer>
      <p>Some text in the footer</p>
      <hr id="lower" />
      <p>Some other text</p>
    </footer>
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
.cards-leave-to,
.cards-enter {
  opacity: 0;
  transition: all 0.1s ease-in-out;
}

.cards-leave,
.cards-enter-to {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

body {
  margin: 0;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f1f5f6;
}

footer {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 30rem;
  background-color: rgba(238, 238, 238, 0.671);
  height: 20rem;
}

hr {
  text-align: center;

  margin: 1rem 0;
  margin-left: auto;
  margin-right: auto;
}

#lower {
  width: 60%;
}
</style>