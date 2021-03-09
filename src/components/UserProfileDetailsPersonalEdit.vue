<template>
  <div class="dark-background" id="dark-background">
    <div class="container-module" id="container-module">
      <div class="headline-container">
        <h1>Personal Details</h1>
        <div class="exit" id="exit" @click="modalClosed">
          <CloseIcon class="close-icon" />
        </div>
      </div>
      <div class="edit-form" id="form1">
        <label for="name" id="name" :class="{ 'error-label': hasError.name }"
          >First Name
          <ion-icon
            :class="{ 'non-visible': !hasError.name, visible: hasError.name }"
            name="alert-circle-outline"
          ></ion-icon>
        </label>

        <input
          v-model="user.name"
          type="text"
          name="name"
          id="name-form"
          :class="{ error: hasError.name }"
          :placeholder="[[currName]]"
          @change.capture="checkName"
        />

        <label
          for="surname"
          id="surname"
          :class="{ 'error-label': hasError.surname }"
          >Last Name
          <ion-icon
            :class="{
              'non-visible': !hasError.surname,
              visible: hasError.surname,
            }"
            name="alert-circle-outline"
          ></ion-icon>
        </label>
        <input
          v-model="user.surname"
          :class="{ error: hasError.surname }"
          type="text"
          name="surname"
          id="surname-form"
          :placeholder="[[currSurname]]"
          @change.capture="checkSurname"
        />

        <label for="birth" id="birth" :class="{ 'error-label': hasError.birth }"
          >Date of birth
          <ion-icon
            :class="{
              'non-visible': !hasError.birth,
              visible: hasError.birth,
            }"
            name="alert-circle-outline"
          ></ion-icon>
        </label>
        <input
          v-model="user.birth"
          type="date"
          name="birth"
          :class="{ error: hasError.birth }"
          id="date_select"
          @change.capture="checkBirth"
        />

        <label for="address" :class="{ 'error-label': hasError.address }"
          >Address
          <ion-icon
            :class="{
              'non-visible': !hasError.address,
              visible: hasError.address,
            }"
            name="alert-circle-outline"
          ></ion-icon>
        </label>
        <input
          v-model="user.address"
          :class="{ error: hasError.address }"
          type="text"
          name="address"
          :placeholder="[[currAddress]]"
          @change.capture="checkAddress"
        />

        <button
          v-on:click.enter="save"
          @click="save"
          class="confirm-btn"
          :disabled="isButtonDisabled"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CloseIcon from "./icons/CloseIcon";
import { checkCapitalWord } from "../utils/formValidation";

export default {
  components: {
    CloseIcon,
  },
  data() {
    return {
      user: {
        name: "",
        surname: "",
        birth: "",
        address: "",
      },
      hasError: {
        name: false,
        surname: false,
        address: false,
      },
    };
  },

  methods: {
    modalClosed: function () {
      this.$emit("close");
    },
    save() {
      if (!this.isThereAnError()) {
        this.$store.dispatch("user/updateUser", this.user);
        this.modalClosed();
      } else {
        this.checkName();
        this.checkSurname();
        this.checkAddress();
        this.checkBirth();
      }
    },
    checkSurname() {
      if (!checkCapitalWord(this.user.surname) || this.user.surname == "") {
        this.hasError.surname = true;
      } else {
        this.hasError.surname = false;
      }
    },
    checkName() {
      if (!checkCapitalWord(this.user.name) || this.user.name == "") {
        this.hasError.name = true;
      } else {
        this.hasError.name = false;
      }
    },
    checkAddress() {
      if (this.user.address == "") {
        this.hasError.address = true;
      } else {
        this.hasError.address = false;
      }
    },
    checkBirth() {
      console.log(this.user.birth);
      if (this.user.birth == "") {
        this.hasError.birth = true;
      } else {
        this.hasError.birth = false;
      }
    },
    isThereAnError() {
      if (
        this.hasError.name ||
        this.hasError.surname ||
        this.hasError.address ||
        this.hasError.birth
      ) {
        console.log("heheheheh1");
        return true;
      } else if (
        this.user.name == "" ||
        this.user.surname == "" ||
        this.user.address == "" ||
        this.user.birth == ""
      ) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters("user", {
      currName: "getCurrentName",
      currSurname: "getCurrentSurname",
      currAddress: "getCurrentAddress",
      currBirthDate: "getCurrentBirthDate",
    }),
    isButtonDisabled() {
      if (!this.isThereAnError()) {
        return false;
      }
      return true;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";

.fade-enter-active {
  animation: bounce-in 0.5s ease-out;
}

.fade-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>