<template>
  <div class="headlinebar">
    <router-link to="/home" exact>
      <div class="logo">
        <img :src="image" id="main_icon" alt="mail" />
        <h1>Monify</h1>
      </div>
    </router-link>
    <div class="navigation">
      <router-link :to="{ name: 'Home' }">
        <button class="component" id="component-history">Home</button>
      </router-link>
      <router-link :to="{ name: 'Account' }" exact>
        <button class="component" id="component-account">Profile</button>
      </router-link>
      <router-link :to="{ name: 'History' }" exact>
        <button class="component" id="component-history">Transactions</button>
      </router-link>
      <router-link :to="{ name: 'AccountTransfer' }" exact>
        <button class="component" id="component-offer">Send/Request</button>
      </router-link>
      <button class="component" id="component-call">Call center</button>
      <router-link :to="{ name: 'LandingPage' }" exact>
        <div class="signin">
          <button class="signinbtn" type="submit" id="logOutBtn">
            <LogOutIcon />
          </button>
        </div>
      </router-link>
    </div>
    <!-- <div class="menubutton" id="menubutton" @click="menuButton">
      <div class="line1" id="line1"></div>
      <div class="line2" id="line2"></div>
      <div class="line3" id="line3"></div>
    </div> -->
  </div>
</template>

<script>
import HeadlineImage from "../../public/img/headline_logo.png";
import LogOutIcon from "./icons/LogOut";

export default {
  components: {
    LogOutIcon,
  },
  data() {
    return {
      image: HeadlineImage,
    };
  },
  methods: {
    menuButton: function () {
      this.$root.$emit("clickedMenuButton");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

body {
  padding: 0;
  margin: 0;
}

$color: #336c68;

.toolbarPosition {
  transform: rotate(90deg);
  transform: translateY(250px);
  transition: 0.5s ease-in-out;
  will-change: transform;
}

.navbar_main {
  display: flex;
  z-index: 0;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 2rem 0;
  width: 100%;
  color: white;

  background-color: $color;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  will-change: transform;
}

.component {
  cursor: pointer;
  border: none;
  font-family: $main-font;
  padding: 18px 25px;
  margin: 2px;
  font-size: 1.4rem;
  text-decoration: none;
  color: white;
  background-color: transparent;
  transition: 0.2s all ease;
  will-change: transform;
  outline: none;
  font-weight: 400;

  &::before {
    content: "";
    background-color: white;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transform: scale(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
}

.router-link-exact-active > .component {
  border-bottom: 1px solid white;
  padding-bottom: 18px;
  background-color: rgba($color: #ffffff, $alpha: 0.04);
}

.signin {
  display: flex;
  justify-content: flex-end;
  width: 2rem;

  .signinbtn {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5rem;
    width: 2rem;
    justify-content: space-evenly;
    border: none;
    font-size: 1em;
    background-color: transparent;
    color: white;
    border-radius: 2px;
    transition: all 1s ease-out;
    transition-timing-function: cubic-bezier(0.28, -0.07, 0.5, 1.05);
    will-change: transform;

    svg {
      fill: white;
      transition: all 0.2s ease-in-out;
    }
  }
}
a {
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.headlinebar {
  position: relative;
  z-index: 1;
  background-color: #225355;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  margin-bottom: 80px;
  width: 100%;
  font-family: "Righteous", cursive;
  font-size: 20px;
  animation: 1s ease-in both headline_slide_in,
    cubic-bezier(0.6, 0.04, 0.98, 0.335);

  img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }
}

@keyframes headline_slide_in {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  83% {
    opacity: 1;
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}

.menubutton {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 40px;
  width: 40px;
  cursor: pointer;

  .line1,
  .line2,
  .line3 {
    position: absolute;
    width: 34px;
    height: 4px;
    border-radius: 2px;
    background-color: white;
    transition: 0.2s ease-in-out;
    will-change: transform;
  }
}

.line1 {
  margin-bottom: 20px;
}

.line2 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.line3 {
  margin-top: 20px;
}

#menubutton:hover > .line1 {
  width: 50px;
}

#menubutton:hover > .line2 {
  width: 25px;
}

#menubutton:hover > .line3 {
  width: 50px;
}

.navigation {
  display: flex;
  margin-left: 100px;
}
</style>