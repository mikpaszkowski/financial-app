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
      <div class="log-out">
        <button class="log-outbtn" type="submit" id="logOutBtn" @click="logout">
          <LogOutIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeadlineImage from "../../public/img/headline_logo.png";
import LogOutIcon from "./icons/LogOut";
import MenuButton from "./MenuButton";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    LogOutIcon,
    MenuButton
  },
  store() {
     const store = useStore();
    const router = useRouter();

    function logout() {
      console.log("dawefwefsdas");
      store.dispatch("user/logout")
      .then(() => router.push({ name: "LogIn" }));
    };

    return {
      logout
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
