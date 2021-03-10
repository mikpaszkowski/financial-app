<template>
  <div class="headlinebar">
    <router-link to="/home" exact>
      <div class="logo">
        <h3>Monify</h3>
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
        <div class="log-out">
          <button class="log-outbtn" type="submit" id="logOutBtn">
            <LogOutIcon />
          </button>
        </div>
      </router-link>
    </div>
    <!-- <MenuButton ref="menu" /> -->
  </div>
</template>

<script>
import HeadlineImage from "../../public/img/headline_logo.png";
import LogOutIcon from "./icons/LogOut";
import MenuButton from "./MenuButton";

export default {
  components: {
    LogOutIcon,
    MenuButton,
  },
  data() {
    return {
      image: HeadlineImage,
      menuOpened: false,
    };
  },
  methods: {
    openMenu() {
      this.$refs.menu.toggleMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

body {
  padding: 0;
  margin: 0;
}

$color: #336c68;

.toolbarPosition {
  transform: rotate(90deg);
  transform: translateY(25rem);
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
  padding: 1.8rem 2.5rem;
  margin: 0.2rem;
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
    height: 0.1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 0.1rem;
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
  border-bottom: 0.1rem solid white;
  padding-bottom: 1.8rem;
  background-color: rgba($color: #ffffff, $alpha: 0.04);
}

.log-out {
  display: flex;
  justify-content: flex-end;
  width: 2rem;

  .log-outbtn {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5rem;
    width: 2rem;
    justify-content: space-evenly;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    color: white;
    border-radius: 0.2rem;
    transition: all 1s ease-out;
    transition-timing-function: cubic-bezier(0.28, -0.07, 0.5, 1.05);
    will-change: transform;

    svg {
      fill: white;
      transition: all 0.2s ease-in-out;
    }
  }
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
  margin-bottom: 8rem;
  width: 100%;
  font-size: 2rem;
  animation: 1s ease-in both headline_slide_in,
    cubic-bezier(0.6, 0.04, 0.98, 0.335);

  h3 {
    font-family: $website-name-font;
  }

  img {
    width: 6rem;
    height: 6rem;
    margin-right: 2rem;
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
    letter-spacing: 1rem;
  }
}

.navigation {
  display: flex;
  margin-left: 10rem;
}
</style>