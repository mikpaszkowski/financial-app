<template>
  <div>
    <div :class="headlinePositionStyle">
      <div class="background-image"></div>
    </div>
    <div class="content">
      <div class="photo">
        <div class="text_content">
          <h1 class="headline-primary">
            <span class="headline">Monify</span>
            <span class="headline-main-quote">
              Trusted by more than 50,000 <br />
              worldwide.
            </span>
            <span class="headline-sub-quote">
              Over 180 countires and 120 currencies supported.
            </span>
          </h1>
          <div class="buttons">
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
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import HeadlineImage from "../../public/img/headline_logo.png";

export default {
  methods: {
    login: function () {
      this.isHeadlineOut = true;
    },
    signup: function () {
      this.isHeadlineOut = true;
    },
    headlineClosed: function () {
      this.isHeadlineOut = true;
    },
    freeAccountClicked() {
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

  data() {
    return {
      image: HeadlineImage,
      modalLogInOpen: false,
      modalSignUpOpen: false,
      isHeadlineOut: false,
    };
  },
  created() {
    if (!this.modalLogInOpen && !this.modalSignUpOpen) {
      console.log("modals closed");
      this.isModalsOut = true;
    } else {
      this.isModalsOut = false;
    }
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
$font-stack: "Rubik", sans-serif;

.headline-primary {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-family: "Righteous", cursive;
}

.buttons {
  margin-top: 6rem;
}

.login,
.signin {
  width: 20rem;
  height: 6rem;
  font-size: 2.5rem;
  border-radius: 3rem;
  cursor: pointer;
}

.login {
  border: 0.1rem solid;
  position: relative;
  border-color: white;
  color: white;
  background-color: transparent;
  margin-right: 1rem;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  will-change: transform;

  &:hover {
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.2);
    color: $font-color;
    transform: translateY(-0.3rem);

    &::after {
      transform: translateX(100%);
      opacity: 1;
    }
  }

  &:focus {
    transform: translateY(-0.1rem);
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5rem;
    transition: all 0.2s ease-in-out;
  }
}

.signin {
  position: relative;
  border: none;
  background-color: white;
  color: $font-color;
  margin-left: 1rem;
  transition: all 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: translateY(-0.3rem);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:focus {
    transform: translateY(-0.1rem);
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5rem;
    transition: all 0.2s ease-in-out;
  }
}

.photo {
  position: relative;
  text-align: center;
  background-image: linear-gradient(
      to right bottom,
      rgba($dark-flat-green, 90%),
      rgba($flat-green, 80%)
    ),
    url("../../public/img/computer.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 7rem;
  width: 100vw;
  height: 100vh;
}

.text_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.headline-primary {
  color: white;
  height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .headline {
    display: block;
    font-family: $website-name-font;
    letter-spacing: 2rem;
    font-size: 20rem;
  }

  span {
    font-family: $main-font;
  }

  .headline-main-quote {
    display: block;
    font-size: 4rem;
    font-weight: 400;
  }

  .headline-sub-quote {
    display: block;
    font-size: 3rem;
    font-weight: 100;
    color: white;
  }
}
</style>