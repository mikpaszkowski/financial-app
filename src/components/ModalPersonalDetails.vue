<template>
  <div v-if="isPersonalModalOpen">
    <div class="dark-background" id="dark-background"></div>
    <transition name="fade">
      <div class="container1-module" id="container1-module">
        <div class="exit1" id="exit1" @click="modalClosed">
          <ExitSVG id="ExitSVG" />
        </div>
        <div class="edit-form" id="form1">
          <ul class="form1">
            <li>
              <label for="name" id="name">First Name</label>
              <input
                v-model="userName"
                type="text"
                name="name"
                id="name-form"
              />
            </li>
            <li>
              <label for="surname" id="surname">Last Name</label>
              <input
                v-model="userSurname"
                type="text"
                name="surname"
                id="surname-form"
              />
            </li>
            <li>
              <label for="birth" id="birth">Date of birth</label>
              <input
                v-model="birthDate"
                type="date"
                name="birth"
                id="date_select"
              />
            </li>
            <li>
              <label for="address">Address</label>
              <input v-model="address" type="text" name="address" />
            </li>
            <li>
              <label for="phone-number">Phone</label>
              <input v-model="phoneNumber" name="phone-number" />
            </li>
          </ul>
          <button
            v-on:click.enter="save"
            @click="save"
            id="save-button-1"
            class="save-button"
          >
            Save
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>



<script>
import ExitIconSVG from "../assets/exit.svg";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userName: "",
      userSurname: "",
      birthDate: "",
      address: "",
      phoneNumber: "",
    };
  },
  components: {
    ExitSVG: ExitIconSVG,
  },
  props: ["isPersonalModalOpen"],
  methods: {
    modalClosed: function () {
      this.$root.$emit("modalPersonalDetailsClosed");
    },
    ...mapActions([
      "updateCurrentName",
      "updateCurrentSurname",
      "updateCurrentAddress",
      "updateCurrentBirthDate",
      "updateCurrentPhoneNumber",
    ]),
    save() {
      this.updateCurrentName(this.userName);
      this.updateCurrentSurname(this.userSurname);
      this.updateCurrentAddress(this.address);
      this.updateCurrentBirthDate(this.birthDate);
      this.updateCurrentPhoneNumber(this.phoneNumber);
      this.modalClosed();
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
  }
}

.container1-module {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 600px;
  height: 800px;
  background-color: #ffffff;
  right: 50%;
  margin-right: -200px;
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
    padding: 0;

    label {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    input {
      width: 20rem;
      height: 2rem;
      border: none;
      font-size: 1rem;
      border-radius: 0.25rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 1px 1px 7px 0px #c3c3c3;
      }
    }
  }

  ul {
    padding: 0;
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

  #save-button-1 {
    width: 90%;
    height: 50px;
    font-size: 1rem;
    box-shadow: 1px 1px 7px 0px #c3c3c3;
    border: none;
    cursor: pointer;
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