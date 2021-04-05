<template>
  <div>
    <div class="container container-middle">
      <div class="module">
        <div class="nav">
          <div class="headline">Account settings</div>
          <div class="edit-button-svg">
            <EditIcon id="edit-icon" @click="toggleModal" />
          </div>
        </div>
        <div class="labels">
          <div class="info">
            <div class="info-name">
              <p>Language:</p>
            </div>
            <div class="info-data">
              <p id="language_p">
                {{ accountSettings.language }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Timezone:</p>
            </div>
            <div class="info-data">
              <p id="time_zone_p">
                {{ accountSettings.timezone }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Status:</p>
            </div>
            <div class="info-data">
              <div class="status">
                <ion-icon
                  name="checkmark-circle-outline"
                  id="enable-icon"
                ></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <ModalAccountSettings
        class="modal"
        v-if="modalOpened"
        @close="closeModal"
      />
    </transition>
  </div>
</template>

<script>
import ModalAccountSettings from "./UserProfileDetailsAccountEdit";
import EditIcon from "./icons/EditIcon";
import userDetailsModal from "../composables/userDetailsModal";
import { watch } from "vue";


export default {
  components: {
    ModalAccountSettings,
    EditIcon
  },
  props: {
    accountSettings: {
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

    watch(props.accountSettings.status, () => {
      const statusLabel = document.querySelector(".status");
      if (props.accountSettings.status == "false") {
        statusLabel.classList.add("disabled");
        statusLabel.classList.remove("enabled");
      } else {
        statusLabel.classList.remove("disabled");
        statusLabel.classList.add("enabled");
      }
    });

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
