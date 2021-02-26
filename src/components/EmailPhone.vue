<template>
  <div>
    <ModalEmailAddress
      :isEmailModalOpen="modalEmailAddress_open"
    ></ModalEmailAddress>
    <div class="container container-lower">
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
              <div class="primary"></div>
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
              <div class="primary"></div>
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
              <div class="primary"></div>
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
              <div class="primary"></div>
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
  components: { ModalEmailAddress },

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




<style lang="scss" scoped>
@import "../styles/main.scss";

.container-lower {
  margin-top: 30px;
}

.primary {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 20px;
  left: 20px;
  top: 50%;
  margin-top: -10px;
  background-color: $flat-blue;
  color: white;
  font-weight: bold;
  font-size: 0.75em;
  border-radius: 2em;
  text-align: center;

  letter-spacing: 1px;
  margin-left: 10px;

  &::before {
    content: "Primary";
  }
}
</style>