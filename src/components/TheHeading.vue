<template>
  <div class="headlinebar">
    <router-link to="/home" exact>
      <div class="logo">
        <h3>Monify</h3>
      </div>
    </router-link>
    <div class="navigation">
      <router-link :to="{ name: 'Home' }">
        <button class="component" id="component-history">Home</button>
      </router-link>
      <router-link :to="{ name: 'Account' }" exact>
        <button class="component" id="component-account">Profile</button>
      </router-link>
      <router-link :to="{ name: 'History' }" exact>
        <button class="component" id="component-history">Transactions</button>
      </router-link>
      <router-link :to="{ name: 'Transaction' }" exact>
        <button class="component" id="component-offer">Send/Request</button>
      </router-link>
      <button class="component" id="component-call">Call center</button>
      <router-link :to="{ name: 'LandingPage' }" exact>
        <div class="log-out">
          <button class="log-outbtn" type="submit" id="logOutBtn">
            <LogOutIcon />
          </button>
        </div>
      </router-link>
    </div>
    <!-- <MenuButton ref="menu" /> -->
  </div>
</template>

<script>
import HeadlineImage from "../../public/img/headline_logo.png";
import LogOutIcon from "./icons/LogOut";
import MenuButton from "./MenuButton";

export default {
  components: {
    LogOutIcon,
    MenuButton,
  },
  data() {
    return {
      image: HeadlineImage,
      menuOpened: false,
    };
  },
  methods: {
    openMenu() {
      this.$refs.menu.toggleMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
</style>