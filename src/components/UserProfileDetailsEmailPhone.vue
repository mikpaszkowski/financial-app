<template>
  <div>
    <div class="container container-lower">
      <div class="module">
        <div class="nav">
          <div class="headline">Email & Phone</div>
          <div class="edit-button-svg">
            <ion-icon
              name="create-outline"
              id="edit-icon"
              @click="toggleModal"
            ></ion-icon>
          </div>
        </div>

        <div class="labels">
          <div class="info">
            <div class="info-name">
              <div class="primary"></div>
              <p>Email:</p>
            </div>
            <div class="info-data">
              <p id="email_p">
                {{ emailPhoneAddress.email }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <div class="primary"></div>
              <p>Email:</p>
            </div>
            <div class="info-data">
              <p id="email_p">
                {{ emailPhoneAddress.additionalEmail }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <div class="primary"></div>
              <p>Phone:</p>
            </div>
            <div class="info-data">
              <p>
                {{ emailPhoneAddress.phone }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <div class="primary"></div>
              <p>Phone:</p>
            </div>
            <div class="info-data">
              <p>
                {{ emailPhoneAddress.additionalPhone }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <ModalEmailAddress class="modal" v-if="modalOpened" @close="closeModal" />
    </transition>
  </div>
</template>

<script>
import ModalEmailAddress from "./UserProfileDetailsEmailPhoneEdit.vue";
import userDetailsModal from "../composables/userDetailsModal";

export default {
  components: { ModalEmailAddress },
  props: {
    emailPhoneAddress: {
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
