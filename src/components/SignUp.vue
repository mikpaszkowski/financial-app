<template>
  <div>
    <transition name="slide-fade">
      <ModalForgotPassword v-if="modalOpened" @close="closeModal" />
    </transition>
    <div class="frontpage">
      <div class="welcome">
        <router-link to="/">
          <h4>Monify</h4>
        </router-link>

        <h1>Welcome!</h1>
        <p>We are glad you want to be a member of Monify community!</p>
        <SignUpPic class="signup-pic" />
      </div>
      <SignUpForm @open="openModal" />
    </div>
  </div>
</template>


<script>
import ModalForgotPassword from "./LoginFormPasswordModal";
import SignUpForm from "./SignUpForm";
import SignUpPic from "./icons/SignUpPic";

export default {
  components: {
    ModalForgotPassword,
    SignUpForm,
    SignUpPic,
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
