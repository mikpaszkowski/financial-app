<template>
  <div class="dark-background" id="dark-background">
    <div class="container-module" id="container-module">
      <div class="headline-container">
        <h1>Personal Details</h1>
        <div class="exit" id="exit" @click="modalClosed">
          <CloseIcon />
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
        <button v-on:click.enter="save" @click="save" class="confirm-btn">
          Save
        </button>
      </div>
    </div>
  </div>
</template>



<script>
import { mapActions, mapGetters } from "vuex";
import CloseIcon from "./icons/CloseIcon";

export default {
  components: {
    CloseIcon,
  },
  data() {
    return {
      userName: "",
      userSurname: "",
      birthDate: "",
      address: "",
    };
  },

  methods: {
    modalClosed: function () {
      this.$emit("close");
    },
    ...mapActions("user", [
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
    ...mapGetters("user", {
      currName: "getCurrentName",
      currSurname: "getCurrentSurname",
      currAddress: "getCurrentAddress",
      currBirthDate: "getCurrentBirthDate",
    }),
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