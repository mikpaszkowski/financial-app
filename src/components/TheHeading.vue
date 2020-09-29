<template>
  <div class="headlinebar">
    <router-link to="/home">
      <div class="logo">
        <img :src="image" id="main_icon" alt="mail" />
        <h1>Bank Account Manager</h1>
      </div>
    </router-link>
    <div class="menubutton" id="menubutton" @click="menuButton">
      <div class="line1" id="line1"></div>
      <div class="line2" id="line2"></div>
      <div class="line3" id="line3"></div>
    </div>
  </div>
</template>

<script>
import HeadlineImage from "../assets/headline_logo.png";

export default {
  data() {
    return {
      image: HeadlineImage,
    };
  },
  methods: {
    menuButton : function(){
      this.$root.$emit('clickedMenuButton');
    }
  },
};
</script>

<style lang="scss" scoped>
$font-stack: Helvetica, sans-serif;

body {
  padding: 0;
  margin: 0;
}

.headlinebar {
  position: relative;
  z-index: 1;
  background-color: #19a0af;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;
  width: 100%;
  font-family: $font-stack;
  font-size: 20px;
  animation: 1s ease-in both headline_slide_in,
    cubic-bezier(0.6, 0.04, 0.98, 0.335);

  img {
    width: 100px;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .logo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
}

@keyframes headline_slide_in {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

83%{
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
</style>