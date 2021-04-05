<template>
  <div>
    <div class="container">
      <div class="module">
        <div class="nav">
          <div class="headline">Personal Details</div>
          <ion-icon
            name="create-outline"
            id="edit-icon"
            @click="toggleModal"
          ></ion-icon>
        </div>

        <div class="labels">
          <div class="info">
            <div class="info-name">
              <p>Name:</p>
            </div>
            <div class="info-data">
              <p>{{ personalData.name + " " + personalData.surname }}</p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Date of birth:</p>
            </div>
            <div class="info-data">
              <p id="date_p">
                {{ personalData.dateOfBirth }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Address:</p>
            </div>
            <div class="info-data">
              <p id="address_p">
                {{ personalData.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <ModalPersonalDetails
        class="modal"
        v-if="modalOpened"
        @close="modalClosed"
      />
    </transition>
  </div>
</template>

<script>
import ModalPersonalDetails from "./UserProfileDetailsPersonalEdit";
import userDetailsModal from "../composables/userDetailsModal";


export default {
  components: { ModalPersonalDetails },
  props: {
    personalData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      modalOpened,
      toggleModal,
      closeModal,
      scrollBack,
      scrollToElement
    } = userDetailsModal(props);

    return {
      modalOpened,
      toggleModal,
      closeModal,
      scrollBack,
      scrollToElement
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
