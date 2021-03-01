<template>
  <div class="navbar_main" :class="toolbarPositionStyle">
    <router-link to="/home/" exact>
      <button class="component" id="component-history">Home</button>
    </router-link>
    <router-link to="/home/account" exact>
      <button class="component" id="component-account">Account</button>
    </router-link>
    <router-link to="/home/history" exact>
      <button class="component" id="component-history">History</button>
    </router-link>
    <button class="component" id="component-offer">Bank offer</button>
    <button class="component" id="component-call">Call center</button>
    <router-link to="/" exact>
      <div class="signin">
        <button class="signinbtn" type="submit" id="logOutBtn">
          <!-- <LogOut /> -->
          <img src="../../public/img/logout.svg" alt="" />
        </button>
      </div>
    </router-link>
  </div>
</template>



<script>
//import LogOutIcon from "../../public/img/logout.svg";

export default {
  name: "main-side-bar",

  components: {
    // LogOut: LogOutIcon,
  },

  data() {
    return {
      isToolbarOn: false,
    };
  },

  computed: {
    toolbarPositionStyle: function () {
      return {
        toolbarPosition: this.isToolbarOn,
      };
    },
  },

  methods: {
    slideInOutBar: function () {
      this.isToolbarOn = !this.isToolbarOn;
    },
  },
  created: function () {
    //this.$root.$on("clickedMenuButton", this.slideInOutBar);
  },

  beforeUnmount() {
    // this.$root.$off("clickedMenuButton");
    // this.$root.$off("clickedMenuButton");
  },
};
</script>


<style lang="scss" scoped>
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
  font-family: "Montserrat", sans-serif;
  padding: 18px 25px;
  margin: 2px;
  font-size: 1.3rem;
  text-decoration: none;
  color: white;
  background-color: transparent;
  transition: 0.2s all ease;
  will-change: transform;
  outline: none;
}

.component:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: 0.3s ease both rounded_edges;
}

@keyframes rounded_edges {
  from {
    border-radius: 100%;
  }
  to {
    border-radius: 5%;
  }
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

      &:hover {
        transform: scale(1.2);
        fill: tomato;
      }
    }
  }
}

a {
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.router-link-active {
  background-color: darken($color, 10%);
}
</style>