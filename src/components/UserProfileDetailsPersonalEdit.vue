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
        <ul class="form1">
          <li>
            <label for="name" id="name">First Name</label>
            <input v-model="user.name" type="text" name="name" id="name-form" />
          </li>
          <li>
            <label for="surname" id="surname">Last Name</label>
            <input
              v-model="user.surname"
              type="text"
              birth
              name="surname"
              id="surname-form"
            />
          </li>
          <li>
            <label for="birth" id="birth">Date of birth</label>
            <input
              v-model="user.birth"
              type="date"
              name="birth"
              id="date_select"
            />
          </li>
          <li>
            <label for="address">Address</label>
            <input v-model="user.address" type="text" name="address" />
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
import { mapGetters } from "vuex";
import CloseIcon from "./icons/CloseIcon";

export default {
  components: {
    CloseIcon,
  },
  data() {
    return {
      user: {
        name: this.currName,
        surname: this.currSurname,
        birth: this.currAddress,
        address: this.currBirthDate,
      },
    };
  },

  methods: {
    modalClosed: function () {
      this.$emit("close");
    },
    save() {
      this.$store.dispatch("user/updateUser", this.user);
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