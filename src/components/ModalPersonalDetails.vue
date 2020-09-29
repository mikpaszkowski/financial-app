<template>
  
    <div v-if="isPersonalModalOpen">
      <div class="dark-background" id="dark-background"></div>
      <transition name="fade">
      <div class="conatiner1-module" id="conatiner1-module">
        <div class="exit1" id="exit1" @click="modalClosed">
          <ExitSVG id="ExitSVG" />
        </div>
        <form class="edit-form" id="form1" method="POST" name="form1">
          <ul class="form1">
            <li>
              <label for="name" id="name">Name and surname</label>
              <input type="text" name="name" id="name-form" />
            </li>
            <li>
              <label for="birth" id="birth">Date of birth</label>
              <input type="date" name="birth" id="date_select" />
            </li>
            <li>
              <label for="address">Address</label>
              <input type="text" name="address" />
            </li>
          </ul>
          <div class="edit-buttons button-1">
            <button type="submit" id="save-button-1" class="save-button">
              Save
            </button>
            <button type="reset" id="cancel-button-1" class="cancel-button">
              Clear
            </button>
          </div>
        </form>
        
      </div>
      </transition>
    </div>
  
</template>



<script>
import ExitIconSVG from "../assets/exit.svg";

export default {
  components: {
    ExitSVG: ExitIconSVG,
  },
  props: ["isPersonalModalOpen"],
  created() {},
  methods: {
    modalClosed: function () {
      this.$root.$emit("modalPersonalDetailsClosed");
    },
  },
};
</script>


<style lang="scss" scoped>

.fade-enter-active{
  animation: bounce-in .5s ease-out;
}

.fade-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in{
  0%{
    transform: scale(0);
    opacity: 0;
  }
  50%{
    transform: scale(1.2);
    opacity: 1;
  }
  100%{
    transform: scale(1);
  }
}


* {
  font-family: "Halvetica", sans-serif;
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

.exit1 #ExitSVG {
  position: relative;
  height: 1.8em;
  margin-top: 0.4em;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
}

.conatiner1-module,
.conatiner2-module,
.conatiner3-module {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 50%;
  height: 50%;
  top: 0;
  margin-left: 25%;
  margin-top: 25%;
  padding: 0 1rem;
  background-color: rgb(213, 253, 244);
}


.conatiner1-module svg {
  width: 100%;
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

  li,
  label {
    display: block;
  }

  li {
    margin-top: 1rem;

    label {
      margin-bottom: 0.5rem;
      letter-spacing: 0.1rem;
    }
  }

  input {
    width: 20rem;
    height: 2rem;
    font-size: 1rem;
    border: none;
    transition: box-shadow 0.15s ease-in-out;

    &:hover {
      box-shadow: 1px 1px 7px 0px #c3c3c3;
    }
  }

  #save-button-1,
  #cancel-button-1 {
    margin-top: 1.5rem;
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    box-shadow: 1px 1px 7px 0px #c3c3c3;
    border: none;
    cursor: pointer;
  }

  #cancel-button-1 {
    margin-left: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: lightcoral;
    }
  }

  #save-button-1 {
    margin-right: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: lightgreen;
    }
  }
}
</style>