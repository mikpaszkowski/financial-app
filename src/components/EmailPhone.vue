<template>
  <div>
    <modal-email-address
      :isEmailModalOpen="modalEmailAddress_open"
    ></modal-email-address>
    <div class="container">
      <div class="module">
        <div class="nav">
          <div class="headline">Email & Phone</div>
          <div class="edit-button-svg">
            <ion-icon
              name="create-outline"
              id="edit-icon"
              @click="modalEmailAddressOpen"
            ></ion-icon>
          </div>
        </div>

        <div class="labels">
          <div class="info">
            <div class="info-name">
              <p>Email:</p>
            </div>
            <div class="info-data">
              <p id="email_p">
                {{
                  currentEmailAddressCom.length > 0
                    ? currentEmailAddressCom
                    : currentEmailAddress
                }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Email:</p>
            </div>
            <div class="info-data">
              <p id="email_p">
                {{
                  additionalEmailAddressCom.length > 0
                    ? additionalEmailAddressCom
                    : additionalEmailAddress
                }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Phone:</p>
            </div>
            <div class="info-data">
              <p>
                {{
                  currentPhoneNumberCom.length > 0
                    ? currentPhoneNumberCom
                    : phoneNumber
                }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Phone:</p>
            </div>
            <div class="info-data">
              <p>
                {{
                  additionalPhoneNumberCom.length > 0
                    ? additionalPhoneNumberCom
                    : additionalPhoneNumber
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import ModalEmailAddress from "./modals/ModalEmailAddress.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "modal-email-address": ModalEmailAddress,
  },

  data() {
    return {
      modalEmailAddress_open: false,
      phoneNumber: "",
      currentEmailAddress: "",
      additionalPhoneNumber: "",
      additionalEmailAddress: "",
    };
  },
  methods: {
    modalEmailAddressOpen: function () {
      this.modalEmailAddress_open = true;
    },
    modalEmailAddressClosed: function () {
      this.modalEmailAddress_open = false;
    },
    ...mapGetters([
      "getCurrentPhoneNumber",
      "getCurrentEmailAddress",
      "getAdditionalEmailAddress",
      "getAdditionalPhoneNumber",
    ]),
  },
  created() {
    this.$root.$on("modalEmailClosed", this.modalEmailAddressClosed);
  },
  computed: {
    ...mapGetters({
      currentPhoneNumberCom: "getCurrentPhoneNumber",
      currentEmailAddressCom: "getCurrentEmailAddress",
      additionalEmailAddressCom: "getAdditionalEmailAddress",
      additionalPhoneNumberCom: "getAdditionalPhoneNumber",
    }),
  },
  mounted() {
    this.phoneNumber = this.getCurrentPhoneNumber;
    this.currentEmailAddress = this.getCurrentEmailAddress;
    this.additionalPhoneNumber = this.getAdditionalPhoneNumber;
    this.additionalEmailAddress = this.getAdditionalEmalAddress;
  },
};
</script>




<style lang="scss">
@import "../styles/style.scss";
</style>