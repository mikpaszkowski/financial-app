<template>
  <div>
    <transition name="slide-fade">
      <ModalForgotPassword v-if="modalOpened" @close="closeModal" />
    </transition>
    <div class="frontpage">
      <div class="welcome-message">
        <router-link to="/">
          <h4>Monify</h4>
        </router-link>

        <h1>Welcome back!</h1>
        <p>
          Online payments?
          <br />It's never been so easy!
        </p>
        <LogInPic class="login-pic" />
      </div>
      <LogInForm @open="openModal" />
    </div>
  </div>
</template>


<script>
import ModalForgotPassword from "./LoginFormPasswordModal";
import LogInForm from "./LogInForm";
import LogInPic from "./icons/LogInPic";

export default {
  components: {
    ModalForgotPassword,
    LogInForm,
    LogInPic,
  },
  name: "login",
  data() {
    return {
      modalOpened: false,
      modalSignUpOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpened = true;
    },
    closeModal: function () {
      this.modalOpened = false;
    },
    login: function () {
      this.$router.replace("home");
    },
    signUp: function () {
      this.$router.replace("/signup");
    },
    logIn: function () {
      this.$router.replace("/login");
    },
  },

  created: function () {
    this.$root.$emit("headlineClosed");
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
