<template>
  <div id="modal">
    <modal-forgot-password
      v-bind:isModalOpened="modalOpen"
    ></modal-forgot-password>
    <div class="circle-background"></div>
    <div class="background-image"></div>
    <div class="frontpage">
      <div class="front_sign_in" id="front_sign_in">
        <div class="headline-image">
          <img src="../assets/headline_logo.png" alt />
        </div>
        <div class="headline">Bank Account Manager</div>
        <div class="front-small-window" id="front-small-window">
          <div class="front_login_draw"></div>

          <div class="front_image">
            <h1>Welcome back!</h1>
            <p>
              Online payments?
              <br />It's never been so easy!
            </p>
            <LogInSVG class="LogInSVG" />
          </div>

          <div class="form-box" id="form-box">
            <div class="button-box">
              <div id="btn"></div>
              <div class="upper-buttons">
                <button
                  type="button"
                  class="toggle-btn-left"
                  id="btn1"
                  @click="logIn"
                >
                  Log In
                </button>
                <button
                  type="button"
                  class="toggle-btn-right"
                  id="btn2"
                >
                  Sign up
                </button>
              </div>
            </div>
            <form id="register" class="input-group" action>
              <div class="inputarea">
                <div class="passwordfield">
                  <input
                    type="text"
                    class="input-field"
                    placeholder="Email Address"
                    v-model="signIn.email"
                  />
                </div>
                <div class="emailaddress">
                  <input
                    type="text"
                    class="input-field"
                    placeholder="Enter Password"
                    v-model="signIn.password"
                  />
                </div>
                <div class="remember">
                  <input type="checkbox" class="check-box" name="checkbox" />
                  <span>remember password</span>
                </div>
              </div>

              <div class="loginbutton">
                <button type="submit" class="submit-btn" @click="signup">
                  Sign up
                </button>
              </div>
            </form>
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
    </div>
  </div>
</template>


<script>
import LogInPicture from "../assets/login.svg";
import ModalForgotPassword from "./ModalForgotPassword.vue";

export default {
  name: "signin",
  data() {
    return {
      modalOpen: false,
      signIn: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    openModal: function () {
      this.modalOpen = !this.modalOpen;
    },
    closeModal: function () {
      this.modalOpen = false;
      console.log("closeModal: " + this.modalOpen);
    },
    signup: function () {
      this.$router.replace('/home/account');
    },
    logIn: function () {
      this.$router.replace("/login");
    },
  },
  components: {
    LogInSVG: LogInPicture,
    "modal-forgot-password": ModalForgotPassword,
  },
  created: function () {
    this.$root.$emit("modalClosed", this.closeModal);
    this.$root.$emit('headlineClosed');
  },
};
</script>


<style lang="scss" scoped>
#modal{
  position: absolute;
  width: 100%;
  height: 100%;
}


.LogInSVG {
  display: flex;
  height: 205px;
  width: 327px;
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
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  text-align: center;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(
      rgb(67, 201, 194),
      rgba(192, 252, 244, 0.541)
    ),
    url("../assets/signin_image.jpg");
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
  justify-content: space-evenly;
  position: relative;
  font-family: "Rubik", sans-serif;
  z-index: 0;
  overflow: hidden;
  background-image: linear-gradient(
    rgba(241, 255, 162, 0.493),
    rgba(255, 252, 104, 0.87)
  );

  /*
    background-image: linear-gradient(rgba(91, 255, 247, 0.87), rgba(241, 255, 162, 0.493)), url("../bank_account_manager/images/sign_in_front_image.jpg");
    background-size: cover;
    background-position: center;
    object-fit: contain;
    */
  width: 300px;
  height: 379px;
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
  color: rgb(99, 99, 99);
}

.form-box {
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 352px;
  background-color: rgb(172, 251, 255);
  border-radius: 2px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 8px;
  padding-top: 20px;
  animation: 1s ease-in-out both form_box_entry,
    cubic-bezier(0.55, 0.08, 1, 0.18);
  animation-delay: 0;
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

.button-box {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 2.5em;
  border-radius: 15px;
  margin: 10px;
  padding: 0;
  background-color: rgb(214, 253, 255);
}

#btn {
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  width: 50%;
  height: 100%;
  border-radius: 15px;
  background: linear-gradient(to right, rgb(72, 182, 255), rgb(62, 255, 136));
  transition: 0.5s;
}

.upper-buttons {
  display: inline;
  justify-content: center;
  padding-top: 0.5em;
  width: 100%;
}

.toggle-btn-right {
  position: relative;
  background: transparent;
  color: white;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  text-align: center;
  z-index: 2;
  border: 0;
  color: rgb(66, 66, 66);
  width: 50%;
}
.toggle-btn-left {
  font-size: 15px;
  text-align: center;
  width: 48%;
  position: relative;
  background: transparent;
  color: white;
  cursor: pointer;
  outline: none;
  z-index: 2;
  border: 0;
  color: rgb(66, 66, 66);
}

.entry-animation {
  position: absolute;
  z-index: 1;
  width: 90px;
  height: 90px;
  background-color: black;
}

.input-group {
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

.inputarea {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 140px;
}

.input-field {
  margin: 10px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  background-color: transparent;
  border-bottom: 1px solid #999;
  outline: none;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.input-field:focus::placeholder {
  opacity: 0;
  border-bottom-color: greenyellow;
}

.errorFormField::placeholder {
  color: red;
}

.input-field:hover {
  transform: scale(1.2);
}

.input-field:focus {
  transform: scale(1.2);
}

.check-box {
  text-align: center;
  margin-right: 10px;
}

.remember {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-top: 15px;
}

.loginbutton {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  margin-bottom: 0;
  margin-top: 10px;
}

.submit-btn {
  cursor: pointer;
  padding: 10px 10px;
  margin-top: 20px;
  background-color: teal;
  border: 0;
  color: white;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
}

.submit-btn:hover {
  background-color: rgb(29, 150, 109);
  transform: scale(1.2);
}

.forgot {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 10px;
  margin-top: 20px;
}

.forgot {
  text-decoration: none;
  color: black;
}

.forgot:hover {
  color: rgb(194, 27, 105);
}

#register {
  display: flex;
  overflow: hidden;
  margin-bottom: 0;
}

.router-link {
  text-decoration: none;
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
}
</style>