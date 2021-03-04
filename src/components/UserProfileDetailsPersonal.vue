<template>
  <div>
    <div class="container">
      <div class="module">
        <div class="nav">
          <div class="headline">Personal Details</div>
          <ion-icon
            name="create-outline"
            id="edit-icon"
            @click="modalOpen"
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
    <transition name="slide-fade">
      <ModalPersonalDetails v-if="modalOpened" @close="modalClosed" />
    </transition>
  </div>
</template>



<script>
import ModalPersonalDetails from "./UserProfileDetailsPersonalEdit";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userName: "",
      userSurname: "",
      address: "",
      birthDate: "",
      modalOpened: false,
    };
  },

  components: { ModalPersonalDetails },

  methods: {
    modalOpen() {
      this.modalOpened = true;
    },
    modalClosed() {
      this.modalOpened = false;
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
};
</script>



<style lang="scss" scoped>
@import "../styles/main.scss";
</style>