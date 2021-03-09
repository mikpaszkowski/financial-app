<template>
  <div>
    <transition name="slide-fade">
      <ModalForgotPassword v-if="modalOpened" @close="closeModal" />
    </transition>
    <div class="frontpage">
      <div class="welcome-message">
        <h4>Monify</h4>
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

.login-pic {
  height: 200px;
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

.welcome-message {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  width: 50%;
  padding: 10px;
  overflow: hidden;
  background-color: $dark-flat-green;

  h1 {
    font-weight: 300;
  }
  h4 {
    text-align: left;
    margin-top: 0;
    font-family: $website-name-font;
  }
  p {
    font-weight: lighter;
    font-size: 1.5em;
    letter-spacing: 1px;
    padding: 20px;
    color: white;
  }
  p,
  h1,
  h4 {
    color: white;
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

@include for-tablet-portrait-up {
}

@include for-phones-only {
  .frontpage {
    flex-direction: column;

    .welcome-message {
      width: 100%;
    }
    .form-box {
      width: 65%;
      margin: 0 auto;
    }
  }
  .login-pic {
    height: 200px;
  }
}

@include for-tablet-portrait-landscape {
  .frontpage {
    flex-direction: column;

    .welcome-message {
      width: 100%;
    }
    .form-box {
      width: 65%;
      margin: 0 auto;
    }
  }
  .login-pic {
    height: 400px;
  }
}

@include for-large-desktop {
  .frontpage {
    flex-direction: row;
  }
  .login-pic {
    height: 400px;
  }
}
@include for-extra-large-desktop {
  .frontpage {
    flex-direction: row;
  }
  .login-pic {
    height: 600px;
  }
}
</style>
