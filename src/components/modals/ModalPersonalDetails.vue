<template>
  <div v-if="isPersonalModalOpen">
    <div class="dark-background" id="dark-background"></div>
    <transition name="fade">
      <div class="container1-module" id="container1-module">
        <div class="headline-container">
          <h1>Personal Details</h1>
          <div class="exit1" id="exit1" @click="modalClosed">
            <ExitSVG id="ExitSVG" />
          </div>
        </div>
        <div class="edit-form" id="form1">
          <ul class="form1">
            <li>
              <label for="name" id="name">First Name</label>
              <input
                v-model="userName"
                type="text"
                name="name"
                :placeholder="currName"
                id="name-form"
              />
            </li>
            <li>
              <label for="surname" id="surname">Last Name</label>
              <input
                v-model="userSurname"
                type="text"
                name="surname"
                :placeholder="currSurname"
                id="surname-form"
              />
            </li>
            <li>
              <label for="birth" id="birth">Date of birth</label>
              <input
                v-model="birthDate"
                type="date"
                name="birth"
                :placeholder="currBirthDate"
                id="date_select"
              />
            </li>
            <li>
              <label for="address">Address</label>
              <input
                v-model="address"
                type="text"
                name="address"
                :placeholder="currAddress"
              />
            </li>
          </ul>
          <button
            v-on:click.enter="save"
            @click="save"
            id="save-button"
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
import ExitIconSVG from "../../../public/assets/exit.svg";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      userName: "",
      userSurname: "",
      birthDate: "",
      address: "",
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
    ]),
    save() {
      this.updateCurrentName(this.userName);
      this.updateCurrentSurname(this.userSurname);
      this.updateCurrentAddress(this.address);
      this.updateCurrentBirthDate(this.birthDate);
      this.modalClosed();
    },
  },
  computed: {
    ...mapGetters({
      currName: "getCurrentName",
      currSurname: "getCurrentSurname",
      currAddress: "getCurrentAddress",
      currBirthDate: "getCurrentBirthDate",
    }),
  },
};
</script>


<style lang="scss" scoped>
$modal-width: 700px;
$modal-height: 800px;
$input-border-color: #bdc3c7;
$input-font-color: #656565;
$save-button-color: #16a085;
$border-radius: 5px;

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

#ExitSVG {
  position: relative;
  height: 1.8em;
  margin-top: 0.4em;
  transition: all 0.2s ease-in-out;
  opacity: 0.5;

  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
    opacity: 1;
  }
}

.container1-module {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: $modal-width;
  height: $modal-height;
  top: 50%;
  left: 50%;
  margin-top: -$modal-height / 2;
  margin-left: -$modal-width / 2;
  padding: 30px;
  padding-top: 15px;
  padding-bottom: 0;
  background-color: white;
  border-radius: $border-radius;

  .headline-container {
    border-bottom: 1px solid $input-border-color;
    width: 100%;
    top: 0;

    h1 {
      color: black;
      font-size: 1.5em;
      font-weight: lighter;
      margin-top: 0;
      margin-bottom: 20px;
    }

    .exit1 {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 55px;
    }
  }
}

.edit-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  li,
  label {
    display: block;
  }

  li {
    margin-top: 1rem;
    padding: 0;

    label {
      font-size: 0.8em;
      color: $input-font-color;
      margin-bottom: 10px;
    }
  }

  ul {
    padding: 0;
    width: 100%;

    input[type="text"],
    input[type="date"] {
      border: $input-border-color 1px solid;
      border-radius: $border-radius;
      width: 100%;
      height: 60px;
      color: $input-font-color;
      outline: none;
      transition: box-shadow ease-in-out 0.1s;
      font-size: 1.2em;
      padding-left: 15px;

      &:focus {
        box-shadow: 1px 1px 4px 0px $save-button-color;
      }
    }
  }

  #save-button {
    margin-top: 1.5rem;
    width: 100%;
    height: 65px;
    font-size: 1.2em;
    color: white;
    font-weight: 500;
    box-shadow: 1px 1px 7px 0px #c3c3c3;
    border-radius: $border-radius;
    border: none;
    cursor: pointer;
    background-color: $save-button-color;
  }

  #save-button {
    margin-right: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: lighten($save-button-color, 10%);
    }
  }
}
</style>