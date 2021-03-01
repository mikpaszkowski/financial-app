<template>
  <div>
    <ModalForgotPassword v-bind:isModalOpened="modalOpen" />

    <!-- <div class="background-image"></div> -->
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

      <div class="form-box" id="form-box">
        <div class="edit-form">
          <ul>
            <li>
              <input
                type="text"
                id="userid"
                class="input-field"
                name="userid"
                placeholder="User ID"
                v-model="logInData.userId"
              />
            </li>
            <li>
              <input
                type="text"
                id="password"
                name="password"
                class="input-field"
                placeholder="Password"
                v-model="logInData.password"
              />
              <div class="passwordfield">
                <a id="password-toggle" @click="toggle">
                  <ion-icon name="eye-outline" id="toggle"></ion-icon>
                </a>
              </div>
            </li>
            <li>
              <router-link to="/home/account" class="router-link">
                <button type="submit" class="confirm-btn">
                  <div class="s-btn" @click="login">Log in</div>
                </button>
              </router-link>
            </li>
          </ul>

          <div class="remember">
            <input type="checkbox" class="check-box" />
            <span>remember password</span>
          </div>
        </div>

        <div
          class="forgot"
          id="forgot"
          @click="openModal"
          v-bind:isModalOpened="modalOpen"
        >
          Forgot Password?
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ModalForgotPassword from "./modals/ModalForgotPassword.vue";

export default {
  props: ["signUpOpen"],
  components: {
    ModalForgotPassword,
  },
  name: "login",
  data() {
    return {
      modalOpen: false,
      logInData: {
        userId: "",
        password: "",
      },
      modalSignUpOpen: false,
    };
  },
  methods: {
    openModal: function () {
      this.modalOpen = !this.modalOpen;
    },
    closeModal: function () {
      this.modalOpen = false;
    },
    login: function () {
      console.log(this.logInData);
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

.edit-form {
  li {
    position: relative;
    display: flex;
    align-content: center;
    #toggle {
      font-size: 30px;
    }
  }
}

.passwordfield {
  position: absolute;
  right: 10px;
  top: 15px;
  color: $input-font-color;
}

#modal {
  position: absolute;
  width: 100%;
  height: 100%;
}

.svg-image {
  display: flex;
  height: 350px;
  position: relative;
  bottom: 0;
}

* {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
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

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* background-image: linear-gradient(
      rgb(67, 201, 194),
      rgba(192, 252, 244, 0.541)
    ),
    url("../../public/img/signin_image.jpg"); */
  background-size: cover;
  background-position: center;
}

.circle-background {
  overflow: hidden;
  position: fixed;
  z-index: 0;
  width: 200vw;
  height: 200vh;
  top: 10%;
  left: 20%;
  background-color: #00bfa6;
  border-radius: 100%;
  animation: 2s both front_circle cubic-bezier(0.73, 0.21, 0.35, 1.14);
}

@keyframes front_circle {
  from {
    opacity: 0;
    transform: translateX(100%);
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
    transform: translateY(0);
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

.front-small-window {
  display: flex;
  width: 100%;
  position: relative;
  animation: 0.5s ease-in-out 2.5s both shadowEffect;
}

@keyframes shadowEffect {
  from {
    box-shadow: none;
  }

  to {
    box-shadow: 2px 2px 20px 0px #0d4030;
  }
}

.headline-image {
  position: relative;
  display: flex;
  justify-content: center;
  animation: 1s 1.5s both image_headline;
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

.headline-image img {
  width: 140px;
}

.front_sign_in {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70vw;
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
  background-color: $save-button-color;
  animation: 0.6s ease-in-out 0.65s both image_slide_in;
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

.front_image h1 {
  font-weight: bold;
  font-size: 35px;
  color: rgb(99, 99, 99);
}

.front_image p {
  font-weight: lighter;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 0;
  padding: 20px;
  color: rgb(99, 99, 99);
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

@keyframes form_box_entry {
  0% {
    transform: scale(0);
    transform: translateX(-9em);
    opacity: 0;
  }

  50% {
    transform: scale(1.1);

    opacity: 1;
  }

  100% {
    transform: scale(1);
    transform: translateX(0em);
  }
}

.router-link {
  width: 100%;
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
