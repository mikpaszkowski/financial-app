<template>
<div>
     <modal-email-address
        :isEmailModalOpen="modalEmailAddress_open"
      ></modal-email-address>
       <div class="container container-email-phone">
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
            <ul class="email_ul">
              <li>
                <label>Email:</label>
                <p id="email_p">
                  {{
                    currentEmailAddressCom.length > 0
                      ? currentEmailAddressCom
                      : currentEmailAddress
                  }}
                </p>
                <div class="primary"></div>
                <li>
                  <label>Email:</label>
                <p id="email_p">
                  {{
                    additionalEmailAddressCom.length > 0
                      ? additionalEmailAddressCom
                      : additionalEmailAddress
                  }}
                </p>
                <div class="primary hidden"></div>
                </li>
              </li>
              <li>
                <label>Phone:</label>
                <p>
                  {{  currentPhoneNumberCom.length > 0 ?  currentPhoneNumberCom : phoneNumber }}
                </p>
                <div class="primary"></div>
              </li>
              <li>
                <label>Phone:</label>
                <p>
                  {{ additionalPhoneNumberCom.length > 0 ? additionalPhoneNumberCom : additionalPhoneNumber }}
                </p>
                <div class="primary hidden"></div>
              </li>
            </ul>
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
$input-font-color: #656565;
$flat-green: #2ecc71;
$save-button-color: #16a085;
$container-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
$flat-blue: #3498db;

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 400px;
  animation: 0.4s container_animation;
  animation-fill-mode: both;
  background-color: white;
  border-radius: 5px;

  .module {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    box-shadow: $container-shadow;
    height: 100%;
    border-radius: 5px;
    width: 100%;

    .nav {
      display: inline-flex;
      position: relative;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;

      #edit-icon {
        color: $save-button-color;
        font-size: 40px;
        margin-right: 10px;
        transition: color 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          color: lighten($save-button-color, 20%);
          transform: scale(1.2);
        }
      }

      .headline {
        font-size: 1.4em;
        font-weight: normal;
        margin-left: 60px;
        margin-top: 14px;
      }
    }

    ul {
      list-style-type: none;
      padding-left: 51px;

      li {
        display: flex;
        flex-direction: row;
        margin: 45px;
        justify-content: space-between;
        label {
          font-weight: 600;
          color: $input-font-color;
        }
        .primary {
          position: absolute;
          width: 80px;
          height: 20px;
          right: 200px;
          background-color: $flat-blue;
          color: white;
          font-weight: bold;
          font-size: 0.75em;
          border-radius: 2em;
          text-align: center;
          padding-top: 3px;
          letter-spacing: 1px;
          margin-left: 10px;

          &::before {
            content: "Primary";
          }
        }
      }
    }

    .personal_ul li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.container-email-phone {
  margin-top: 30px;
}

@keyframes container_animation {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
p {
  margin: 0;
  width: 58%;
  font-weight: 400 !important;
}
</style>