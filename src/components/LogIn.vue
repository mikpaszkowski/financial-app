<template>
  <div>
    <transition name="slide-fade">
      <ModalForgotPassword v-if="modalOpened" @close="closeModal" />
    </transition>
    <div class="frontpage">
      <div class="front_image">
        <div class="headline-image">
          <img src="../../public/img/headline_logo.png" alt />
        </div>
        <div class="headline">Bank Account Manager</div>
        <h1>Welcome back!</h1>
        <p>
          Online payments?
          <br />It's never been so easy!
        </p>
        <img src="../../public/img/login.svg" class="svg-image" />
      </div>
      <LogInForm @open="openModal" />
    </div>
  </div>
</template>


<script>
import ModalForgotPassword from "./modals/ModalForgotPassword.vue";
import LogInForm from "./form/LogInForm";

export default {
  props: ["signUpOpen"],
  components: {
    ModalForgotPassword,
    LogInForm,
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

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.svg-image {
  display: flex;
  height: 350px;
  position: relative;
  bottom: 0;
}

.frontpage {
  display: flex;
  justify-content: stretch;
  flex-direction: row;
  align-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

.front_image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-family: "Rubik", sans-serif;
  z-index: 0;
  width: 50%;
  overflow: hidden;
  background-color: $dark-flat-green;
  animation: 0.6s ease-in-out 0.65s both image_slide_in;

  h1 {
    font-weight: bold;
    font-size: 35px;
    color: rgb(99, 99, 99);
  }
  p {
    font-weight: lighter;
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 0;
    padding: 20px;
    color: $input-labels;
  }
}

.headline-image {
  position: relative;
  display: flex;
  justify-content: center;
  animation: 1s image_headline ease-in-out;

  img {
    width: 140px;
  }
}

@keyframes image_headline {
  from {
    opacity: 0;
    transform: translateY(-10rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes image_slide_in {
  from {
    transform: translateX(17em);
    opacity: 0;
  }

  to {
    transform: translateX(0em);
    opacity: 1;
  }
}

.headline {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  align-items: center;
  font-size: 60px;
  color: white;
  margin-bottom: 3rem;
  animation: 1s 2.5s both headline;
}

@keyframes headline {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.form-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  animation: 1s ease-in-out both form_box_entry,
    cubic-bezier(0.55, 0.08, 1, 0.18);
  animation-delay: 0;
  padding: 40px;
  width: 50%;
}

@media screen and(max-width: 850px) {
  .frontpage {
    flex-direction: column;
  }

  .front_image {
    width: 100%;
  }
  .form-box {
    width: 100%;
  }
}
</style>
