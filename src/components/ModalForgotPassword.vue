<template>
  <transition name="fade">
    <div
      class="modal_forgot_password"
      id="modal_forgot_password"
      v-show="isModalOpened"
    >
      <div class="exit1" id="exit1" @click="closeModal">
        <ExitSVG id="ExitSVG" />
      </div>
      <div class="forgot_headline">
        <ForgotPasswordSVG class="ForgotPasswordSVG" />
      </div>
      <div class="forgot_password">
        <h1>Reset your password</h1>
        <p>
          Seems like you forgot your password for Bank Account Manager Inc. It
          this is true, write your email below and we send you na email with
          further instructions.
        </p>
        <div class="send_email">
          <label>Your email</label>
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
      this.$root.$emit("modalClosed");
      console.log("isModalOpened: " + this.isModalOpened);
    },
  },
};
</script>


<style lang="scss" scoped>
$modal-width: 700px;
$modal-height: 600px;

.fade-enter-active {
  animation: bounce-in 0.5s ease-out;
}

.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

* {
  font-family: Helvetica, sans-serif;
}

.modal_forgot_password {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -($modal-height/2);
  margin-left: -($modal-width/2);
  width: $modal-width;
  height: $modal-height;
  z-index: 3;
  padding: 30px;
  background-color: rgba(0, 133, 133, 0.918);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .forgot_password {
    font-family: Helvetica, sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 60%;
    margin-top: 30px;
    z-index: 5;
    border-radius: 5px;
    background-color: rgb(211, 255, 249);
    box-shadow: 2px 2px 9px 0px black;
    text-align: center;
    animation: 0.3s ease-in-out 1.1s both password_form;
    will-change: tansform;

    p {
      color: rgb(99, 99, 99);
      width: inherit;
      margin-bottom: 25px;
    }
    h1 {
      margin-top: 20px;
    }
    button {
      width: 200px;
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
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: rgb(41, 134, 125);
        border-bottom-color: rgb(3, 163, 147);
        color: white;
      }
    }
  }
  .exit1 {
    position: absolute;
    right: 5px;
    top: 5px;

    #ExitSVG {
      position: relative;
      transition: all 0.2s ease-in-out;
      width: 48px;
      height: 48px;

      &:hover {
        fill: aquamarine;
        cursor: pointer;
        transform: rotate(90deg);
      }
    }
  }
  .forgot_headline {
    animation: 0.5s both 1s forgot cubic-bezier(0.8, 0.18, 0.46, 0.72);

    .ForgotPasswordSVG {
      position: relative;
      width: 300px;
      height: 150px;
    }
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

@keyframes forgot {
  from {
    transform: translateY(35%);
  }
  to {
    transform: translateY(0%);
  }
}
</style>