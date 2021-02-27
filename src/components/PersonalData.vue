<template>
  <div>
    <div class="container">
      <div class="module">
        <div class="nav">
          <div class="headline">Personal Details</div>
          <ion-icon
            name="create-outline"
            id="edit-icon"
            @click="modalPersonalDetailsOpen"
          ></ion-icon>
        </div>

        <div class="labels">
          <div class="info">
            <div class="info-name">
              <p>Name:</p>
            </div>
            <div class="info-data">
              <p>{{ userNameCom.length > 0 ? userNameCom : userName }}</p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Date of birth:</p>
            </div>
            <div class="info-data">
              <p id="date_p">
                {{ birthDateCom.length > 0 ? birthDateCom : birthDate }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Address:</p>
            </div>
            <div class="info-data">
              <p id="address_p">
                {{ addressCom.length > 0 ? addressCom : address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <ModalPersonalDetails v-if="modalPersonalDetails_open" />
    </transition>
  </div>
</template>



<script>
import ModalPersonalDetails from "./modals/ModalPersonalDetails.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userName: "",
      userSurname: "",
      address: "",
      birthDate: "",
      modalPersonalDetails_open: false,
    };
  },

  components: { ModalPersonalDetails },

  methods: {
    modalPersonalDetailsOpen() {
      this.modalPersonalDetails_open = true;
    },
    modalPersonalDetailsClosed() {
      this.modalPersonalDetails_open = false;
    },
    ...mapGetters([
      "getCurrentName",
      "getCurrentBirthDate",
      "getCurrentSurname",
      "getCurrentAddress",
    ]),
  },

  mounted() {
    this.userName = this.getCurrentName;
    this.userSurname = this.getCurrentSurname;
    this.birthDate = this.getCurrentBirthDate;
    this.address = this.getCurrentAddress;
  },
  computed: {
    ...mapGetters({
      userNameCom: "getCurrentName",
      birthDateCom: "getCurrentBirthDate",
      userSurnameCom: "getCurrentSurname",
      addressCom: "getCurrentAddress",
    }),
  },
  created() {
    this.$root.$on(
      "personal-data-modal-close",
      this.modalPersonalDetailsClosed
    );
  },
};
</script>



<style lang="scss" scoped>
@import "../styles/main.scss";

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
</style>