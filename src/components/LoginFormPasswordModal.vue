<template>
  <div class="modal_forgot_password" @click="closeModal">
    <div class="forgot_password">
      <h1>Reset your password</h1>
      <div class="forgot_headline">
        <ForgotPasswordPic class="modal-img" />
      </div>
      <div class="exit" @click="closeModal">
        <CloseIcon />
      </div>
      <p>
        Seems like you forgot your password for Bank Account Manager Inc. It
        this is true, write your email below and we send you na email with
        further instructions.
      </p>
      <div class="send-email">
        <label>Your email</label>
        <input type="text" />
      </div>
      <button type="submit" class="btn">Reset your password</button>
    </div>
  </div>
</template>


<script>
import ForgotPasswordPic from "./icons/ForgotPasswordPic";
import CloseIcon from "./icons/CloseIcon";

export default {
  components: {
    ForgotPasswordPic,
    CloseIcon,
  },
  methods: {
    closeModal: function () {
      this.$emit("close");
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";

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
  height: 100%;
  width: 100%;
  z-index: 3;
  padding: 30px;
  background-color: #16a08498;
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
    width: 60%;
    height: 100%;
    margin-top: 30px;
    z-index: 5;
    border-radius: 5px;
    padding: 20px;
    padding-bottom: 40px;
    background-color: white;
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
  }

  .forgot_headline {
    animation: 0.5s both 1s forgot cubic-bezier(0.8, 0.18, 0.46, 0.72);

    .modal-img {
      position: relative;
      width: 300px;
      height: 150px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

.send-email {
  width: 90%;
}
label {
  display: inline-block;
  text-align: left;
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