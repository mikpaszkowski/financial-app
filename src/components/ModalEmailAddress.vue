<template>
  <div v-show="isEmailModalOpen">
    <div class="dark-background" id="dark-background"></div>
    <div class="conatiner2-module" id="conatiner2-module">
      <div class="exit2" id="exit2" @click="modalClosed">
        <ExitSVG id="ExitSVG" />
      </div>
      <form class="edit-form" id="form2">
        <ul class="form2">
          <li>
            <label for="email" id="email">Email</label>
            <input type="text" name="email"/>
          </li>
          <li>
              <label for="phone" id="phone">Phone number</label>
              <input type="text" name="phone"/>
          </li>
        </ul>
        <div class="edit-buttons button-2">
          <button type="submit" id="save-button-2" class="save-button">
            Save
          </button>
          <button type="reset" id="cancel-button-2" class="cancel-button">
            Clear
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import ExitIconSVG from "../assets/exit.svg";

export default {
  props: ["isEmailModalOpen"],
  components: {
    ExitSVG: ExitIconSVG,
  },
  methods: {
    modalClosed: function () {
      this.$root.$emit("modalEmailClosed");
    },
  },
};
</script>



<style lang="scss" scoped>

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
   font-family: "Rubik", sans-serif;
}

.dark-background {
  position: fixed;
  display: flex;
  z-index: 10;
  opacity: 0.5;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transition: 1s;
}

.exit1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 56px;
}

#ExitSVG {
  position: relative;
  height: 1.8em;
  margin-top: 0.4em;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
    fill: orange;
  }
}

.conatiner2-module {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 25rem;
  height: 20rem;
  top: 0;
  margin: 20% 40% 0 40%;
  padding: 0 .5rem;
  background-color: rgb(213, 253, 244);
}

.exit1,
.exit2,
.exit3 {
  position: absolute;
  top: 2%;
  left: 89%;
  width: 10%;
}

.edit-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input{
      width: 20rem;
      height: 2rem;
      border:none;
      font-size: 1rem;
      border-radius: .25rem;
      transition: all .2s ease-in-out;

      &:hover{
          box-shadow: 1px 1px 7px 0px #c3c3c3;
      }
  }

  ul{
      padding: 0;
  }

  li,
  label {
    display: block;
    font-family: "Rubik", sans-serif;
  }

  li {
    margin-top: 1rem;

    label {
      margin-bottom: 0.5rem;
      font-size: .9rem;
    }
  }

  #language-select,
  #select-time-zone {
    width: 20rem;
    height: 2rem;
    font-size: 1rem;
    border: none;
    transition: box-shadow 0.15s ease-in-out;

    &:hover {
      box-shadow: 1px 1px 7px 0px #c3c3c3;
    }
  }

  #save-button-2,
  #cancel-button-2 {
    margin-top: 1.5rem;
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    box-shadow: 1px 1px 7px 0px #c3c3c3;
    border: none;
    cursor: pointer;
  }

  #cancel-button-2 {
    margin-left: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: lightcoral;
    }
  }

  #save-button-2 {
    margin-right: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: lightgreen;
    }
  }
}
</style>