<template>
  <div>
    <div :class="headlinePositionStyle">
      <div class="background-image"></div>
      <div class="headlinebar" v-if="isModalsOut">
        <router-link to="/" exact>
          <div class="logo">
            <img :src="image" id="main_icon" alt="mail" />
            <h1>Bank Account Manager</h1>
          </div>
        </router-link>
        <div id="buttons">
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
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import HeadlineImage from "../assets/headline_logo.png";
import LogIn from "./LogIn.vue";

export default {
  methods: {
    login: function () {
      this.isHeadlineOut = true;
    },
    signup: function () {
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
  components: {
    "modal-log-in": LogIn,
  },
  data() {
    return {
      image: HeadlineImage,
      modalLogInOpen: false,
      modalSignInOpen: false,
      isHeadlineOut: false,
    };
  },
  created() {
    if (!this.modalLogInOpen && !this.modalSignInOpen) {
      console.log("modals closed");
      this.isModalsOut = true;
    } else {
      this.isModalsOut = false;
    }
    this.$root.$on("logInClose", this.signin);
    this.$root.$on("singInClose", this.login);
  },

  beforeDestroy() {
    this.$root.$off("logInClose");
    this.$root.$off("singInClose");
  },
};
</script>


<style lang="scss" scoped>
$font-stack: Helvetica, sans-serif;

.fade-enter-active{
  transition: 5s ease-in-out;
}

.fade-leave-active{
  transition: 5s ease-in-out;
}

.fade-leave-to, .cards-enter{
  opacity: 0;
}

.fade-leave, .cards-enter-to{
  opacity: 1;
}


.hideHeadline {
  display: none;
  animation: opacity homepageOut 1s ease-in-out 0.5s;
}

@keyframes homepageOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

body {
  margin: 0;
}

.background-image {
  position: fixed;
  width: 100%;
  height: 101%;
  background-image: linear-gradient(
      rgb(79, 175, 179),
      rgba(167, 255, 233, 0.479)
    ),
    url("../assets/signin_image.jpg");
  background-size: cover;
  background-position: center;
  animation: 2s ease-out both backgroundImage;
}

@keyframes backgroundImage {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}

.headlinebar {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;
  width: 100%;
  font-family: $font-stack;
  font-size: 20px;
  animation: 1s ease-in both headline_slide_in,
    cubic-bezier(0.6, 0.04, 0.98, 0.335);

  img {
    width: 100px;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .logo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
}

@keyframes headline_slide_in {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}

#buttons {
  margin: 0 5rem;
}

.login,
.signin {
  width: 8rem;
  height: 2.5rem;
  font-size: 1.2rem;
  border-radius: 0.35rem;
  cursor: pointer;
}

.login {
  border: 1px solid;
  border-color: white;
  color: white;
  background-color: transparent;
  margin-right: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 1px 7px 0px #ffffff;
    background-color: rgba(255, 255, 255, 0.568);
    color: rgb(82, 82, 82);
  }
}

.signin {
  border: none;
  background-color: #00fffaf5;
  color: rgb(124, 124, 124);
  margin-left: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 1px 9px 0px #76fffdf5;
    background-color: #11a7a4;
    color: white;
  }
}
</style>