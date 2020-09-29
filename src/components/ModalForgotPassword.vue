<template>
  <transition name="fade">
    <div class="modal_forgot_password" id="modal_forgot_password" v-show="isModalOpened">
      <div class="exit1" id="exit1" @click="closeModal">
        <ExitSVG id="ExitSVG" />
      </div>
      <div class="forgot_headline">
        <h1>Forgot your password?</h1>
        <ForgotPasswordSVG class="ForgotPasswordSVG" />
      </div>
      <div class="forgot_password">
        <h1>Reset your password</h1>
        <p>
          Seems like you forgot your password for Bank Account Manager Inc. It this is true, write your email below
          and we send you na email with further instructions.
        </p>
        <div class="send_email">
          <label for>Your email</label>
          <input type="text" />
        </div>
        <button type="submit">Reset your password</button>
      </div>
    </div>
  </transition>
</template>


<script>
import ForgotPasswordSVG from "../assets/forgot_password.svg";
import ExitIconSVG from "../assets/exit.svg";

export default {
  name: "Modal",
  props: {
    isModalOpened: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ForgotPasswordSVG: ForgotPasswordSVG,
    ExitSVG: ExitIconSVG,
  },
  methods: {
    closeModal: function () {
      this.isModalOpened = false;
      this.$root.$emit('modalClosed');
      console.log("isModalOpened: " + this.isModalOpened);
    },
  },
};
</script>


<style lang="scss" scoped>


.fade-enter-active{
  animation: bounce-in 0.5s ease-out;
}

.fade-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in{
  0%{
    transform: scale(0);
    opacity: 0;
  }
  50%{
    transform: scale(1.2);
    opacity: 1;
  }
  100%{
    transform: scale(1);
  }
}




* {
  font-family: Helvetica, sans-serif;
}

.forgot_password {
  font-family: Helvetica, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  z-index: 5;
  width: 60%;
  height: 17em;
  border-radius: 5px;
  background-color: rgb(211, 255, 249);
  box-shadow: 2px 2px 9px 0px black;
  text-align: center;
  animation: 0.3s ease-in-out 1.1s both password_form;
  will-change: tansform;
}

@keyframes password_form {
  from {
    opacity: 0;
    transform: translateY(10em) scaleX(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleX(1);
  }
}
.forgot_password p {
  font-size: 0.7em;
  color: rgb(99, 99, 99);
  width: inherit;
  margin-bottom: 25px;
}

.forgot_password h1 {
  margin-top: 20px;
}

.exit1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 56px;
}

.exit1 #ExitSVG {
  position: relative;
  height: 3em;
  margin-top: 0.4em;
  transition: all 0.2s ease-in-out;
}

.exit1:hover #ExitSVG {
  fill: aquamarine;
  cursor: pointer;
  transform: rotate(90deg);
}

.modal_forgot_password {
  position: absolute;
  z-index: 3;
  width: 80%;
  height: 80%;
  margin-top: 10%;
  margin-left: 10%;
  background-color: rgba(0, 133, 133, 0.918);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}


.forgot_headline {
  animation: 0.5s both 1s forgot cubic-bezier(0.8, 0.18, 0.46, 0.72);
}

.forgot_headline h1 {
  color: white;
}

@keyframes forgot {
  from {
    transform: translateY(35%);
  }
  to {
    transform: translateY(-18%);
  }
}

.ForgotPasswordSVG {
  position: relative;
  width: 16em;
  height: 11em;
}

.forgot_password button {
  width: 50%;
  margin-bottom: 20px;
  margin-top: 30px;
  padding: 20px 0;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 4px;
  border-bottom-color: rgba(196, 192, 0, 0.87);
  background-color: rgba(252, 249, 61, 0.87);
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  transition: all .3s ease-in-out;
  cursor: pointer;
}

.forgot_password button:hover {
  background-color: rgb(41, 134, 125);
  border-bottom-color: rgb(3, 163, 147);
  color: white;
}

.forgot_password button:active {
  transform: translateY(4px);
  border-bottom-width: 0;
}

.send_email input {
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  background-color: transparent;
  width: 100%;
  padding: 5px 0;
  font-size: 20px;
}
</style>