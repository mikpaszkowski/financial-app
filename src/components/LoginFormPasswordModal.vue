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
  padding: 3rem;
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
    margin-top: 3rem;
    z-index: 5;
    border-radius: $border-radius;
    padding: 2rem;
    padding-bottom: 4rem;
    background-color: white;
    box-shadow: 0.2rem 0.2rem 0.9rem 0rem black;
    text-align: center;
    animation: 0.3s ease-in-out 1.1s both password_form;
    will-change: tansform;

    p {
      color: rgb(99, 99, 99);
      width: inherit;
      margin-bottom: 2.5rem;
    }
    h1 {
      margin-top: 2rem;
    }
  }

  .forgot_headline {
    animation: 0.5s both 1s forgot cubic-bezier(0.8, 0.18, 0.46, 0.72);

    .modal-img {
      position: relative;
      width: 30rem;
      height: 15rem;

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
</style>