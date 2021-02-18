<template>
  <transition name="fade">
    <div id="account">
      <modal-personal-details
        :isPersonalModalOpen="modalPersonalDetails_open"
      ></modal-personal-details>
      <modal-account-settings
        :isAccountModalOpen="modalAccountSettings_open"
      ></modal-account-settings>
      <modal-email-address
        :isEmailModalOpen="modalEmailAddress_open"
      ></modal-email-address>

      <div class="module1">
        <div class="container">
          <div class="person1">
            <div class="background-1 background-transparency"></div>
            <div class="personaldata personaldata1">
              <img
                src="../assets/face_photo.jpg"
                id="face_photo"
                alt="facephoto"
              />
              <div class="editAvatar">
                <EditAvatarImage />
              </div>
            </div>

            <div class="personaldata personaldata2">
              Welcome, <br />
              {{ userNameCom.length > 0 ? userNameCom : userName }}
              {{ userSurnameCom.length > 0 ? userSurnameCom : userSurname }}
            </div>
          </div>
          <div class="upper_module">
            <div class="background"></div>
            <div class="nav">
              <div class="headline">Personal Details</div>
              <div class="edit-button-svg">
                <button
                  class="edit1"
                  id="edit1"
                  @click="modalPersonalDetailsOpen"
                >
                  <EditSectionSVG id="svg-edit" />
                </button>
              </div>
            </div>
            <ul class="personal_ul">
              <li>
                <label for>Name:</label>
                <p id="personal_name_p">
                  {{ userNameCom.length > 0 ? userNameCom : userName }}
                  {{ userSurnameCom.length > 0 ? userSurnameCom : userSurname }}
                </p>
              </li>

              <li>
                <label for>Date of birth:</label>
                <p id="date_p">
                  {{ birthDateCom.length > 0 ? birthDateCom : birthDate }}
                </p>
              </li>
              <li>
                <label for>Address:</label>
                <p id="address_p">
                  {{ addressCom.length > 0 ? addressCom : address }}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="container">
          <div class="person2">
            <div class="background-2"></div>
            <div class="walletimage">
              <img src="../assets/wallet.png" id="wallet" alt="wallet" />
            </div>
            <div class="money">4543 $</div>
            <div class="availablebalance">Available Balance</div>
            <div class="transferbuttons">
              <router-link to="/home/transfer">
                <button class="transfer" id="transfer">Transfer</button>
              </router-link>
            </div>
          </div>
          <div class="middle_module">
            <div class="background"></div>
            <div class="nav">
              <div class="headline">Account settings</div>
              <div class="edit-button-svg">
                <button
                  class="edit2"
                  id="edit2"
                  @click="modalAccountSettingsOpen"
                >
                  <EditSectionSVG id="svg-edit" />
                </button>
              </div>
            </div>
            <ul class="account_ul">
              <li>
                <label for>Language:</label>
                <p id="language_p">{{currentLanguageCom.length > 0 ? currentLanguageCom : currentLanguage}}</p>
              </li>

              <li>
                <label for>Time Zone:</label>
                <p id="time_zone_p">{{currentTimeZoneCom.length > 0 ? currentTimeZoneCom : currentTimeZone}}</p>
              </li>
              <li>
                <label for>Status:</label>
                <p style="color: green" id="status_p">Enabled</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="container">
          <div class="person3">
            <div class="background-3"></div>
            <div class="personaldata">
              <img src="../assets/chat.png" id="chat" alt="chatpng" />
            </div>
            <div class="question1">Need help?</div>
            <div class="question2">
              Do you have any questions? Or you may be concern about issues with
              your account? We will help you!
            </div>
            <button class="chatwithus">Chat with Us</button>
          </div>
          <div class="lower_module">
            <div class="background"></div>
            <div class="nav">
              <div class="headline">Email & Phone</div>
              <div class="edit-button-svg">
                <button class="edit3" id="edit3" @click="modalEmailAddressOpen">
                  <EditSectionSVG id="svg-edit" />
                </button>
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
                <li>
                  <label>Email:</label>
                <p id="email_p">
                  {{
                    additionalEmailAddressCom.length > 0
                      ? additionalEmailAddressCom
                      : additionalEmailAddress
                  }}
                </p>
                </li>
              </li>
              <li>
                <label>Phone:</label>
                <p>
                  {{ phoneNumberCom.length > 0 ? phoneNumberCom : phoneNumber }}
                </p>
              </li>
              <li>
                <label>Phone:</label>
                <p>
                  {{ additionalPhoneNumberCom.length > 0 ? additionalPhoneNumberCom : additionalPhoneNumber }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import EditAvatar from "../assets/edit_avatar.svg";
import EditSectionSVG from "../assets/edit_icon.svg";
import ModalPersonalDetails from "./ModalPersonalDetails.vue";
import ModalAccountSettings from "./ModalAccountSettings.vue";
import ModalEmailAddress from "./ModalEmailAddress.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      modalPersonalDetails_open: false,
      modalAccountSettings_open: false,
      modalEmailAddress_open: false,
      userName: "",
      userSurname: "",
      phoneNumber: "",
      currentEmailAddress: "",
      additionalPhoneNumber: "",
      additionalEmailAddress: "",
      address: "",
      birthDate: "",
      currentLanguage: "",
      currentTimeZone: "",
    };
  },
  components: {
    EditAvatarImage: EditAvatar,
    EditSectionSVG: EditSectionSVG,
    "modal-personal-details": ModalPersonalDetails,
    "modal-account-settings": ModalAccountSettings,
    "modal-email-address": ModalEmailAddress,
  },
  methods: {
    modalPersonalDetailsOpen: function () {
      this.modalPersonalDetails_open = true;
    },
    modalPersonalDetailsClosed: function () {
      this.modalPersonalDetails_open = false;
    },
    modalAccountSettingsOpen: function () {
      this.modalAccountSettings_open = true;
    },
    modalAccountSettingsClosed: function () {
      this.modalAccountSettings_open = false;
    },
    modalEmailAddressOpen: function () {
      this.modalEmailAddress_open = true;
    },
    modalEmailAddressClosed: function () {
      this.modalEmailAddress_open = false;
    },
    ...mapGetters([
      "getCurrentName",
      "getCurrentBirthDate",
      "getCurrentSurename",
      "getCurrentPhoneNumber",
      "getCurrentAddress",
      "getCurrentEmailAddress",
      "getAdditionalEmailAddress",
      "getAdditionalPhoneNumber",
      "getCurrentTimeZone",
      "getCurrentLanguage",
    ]),
  },
  mounted() {
    this.userName = this.getCurrentName;
    this.userSurname = this.getCurrentSurename;
    this.phoneNumber = this.getCurrentPhoneNumber;
    this.birthDate = this.getCurrentBirthDate;
    this.address = this.getCurrentAddress;
    this.currentEmailAddress = this.getCurrentEmailAddress;
    this.additionalPhoneNumber = this.getAdditionalPhoneNumber;
    this.additionalEmailAddress = this.getAdditionalEmailAddress;
    this.currentTimeZone = this.getCurrentTimeZone;
    this.currentLanugage = this.getCurrentLanguage;
  },
  computed: {
    userNameCom() {
      return this.$store.getters.getCurrentName;
    },
    birthDateCom() {
      return this.$store.getters.getCurrentBirthDate;
    },
    userSurnameCom() {
      return this.$store.getters.getCurrentSurename;
    },
    phoneNumberCom() {
      return this.$store.getters.getCurrentPhoneNumber;
    },
    addressCom() {
      return this.$store.getters.getCurrentAddress;
    },
    currentEmailAddressCom() {
      return this.$store.getters.getCurrentEmailAddress;
    },
    additionalEmailAddressCom() {
      return this.$store.getters.getAdditionalEmailAddress;
    },
    additionalPhoneNumberCom() {
      return this.$store.getters.getAdditionalPhoneNumber;
    },
    currentTimeZoneCom() {
      return this.$store.getters.getCurrentTimeZone;
    },
    currentLanguageCom() {
      return this.$store.getters.getCurrentLanguage;
    },
  },
  created() {
    this.$root.$on(
      "modalPersonalDetailsClosed",
      this.modalPersonalDetailsClosed
    );
    this.$root.$on(
      "modalAccountSettingsClosed",
      this.modalAccountSettingsClosed
    );
    this.$root.$on("modalEmailClosed", this.modalEmailAddressClosed);
  },
};
</script>


<style lang="scss"scoped>
$font-color: rgb(68, 68, 68);
$font-size: 20px;
$main-font: "Rubik", sans-serif;

* {
  font-family: $main-font;
  font-size: $font-size;
}

.editAvatar {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 100%;
  background-color: rgb(25, 182, 116);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgb(224, 255, 166);
    transform: scale(1.1);
  }
}

.editAvatarImage {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0;
  width: auto;
  height: auto;
  padding: 2px;
  fill: white;
  transition: all 0.2s;

  &:hover {
    fill: rgb(70, 70, 70);
  }
}

.editAvatar,
.editAvatarImage {
  position: absolute;
  z-index: 1;
}

.module1 {
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  margin: 35px;
  padding: 15px;
  transition: all 1s ease-in-out;
}

li {
  display: flex;
  flex-direction: column;
  margin: 45px;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  padding-left: 51px;
}

.personal_ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.account_ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.email_ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.EditSectionSVG {
  width: 25px;
  height: 25px;
}

svg:hover {
  fill: rgb(86, 145, 255);
  transform: scale(1.1);
}

#svg-edit {
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  width: 1500px;
  height: 500px;
  margin: 10px;
  animation: 0.4s container_animation;
  animation-fill-mode: both;
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

.person1,
.person2,
.person3 {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 10px 0px #203753;
  width: 400px;
  height: 100%;
  font-size: 1.5em;
  border-radius: 5px;
  margin-right: 15px;
}

.background-1,
.background-2,
.background-3 {
  position: absolute;
  z-index: 0;
}

.background-1,
.background-2,
.background-3,
.background {
  background-color: rgb(255, 255, 255);
}

.background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.background-1 {
  width: 100%;
  height: 100%;
}

.background-2 {
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-3 {
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-transparency {
  border-radius: 5px;
}

.person2 {
  padding-bottom: 0;
  padding: 0;
  justify-content: flex-end;
}

.personaldata1 {
  display: flex;
  justify-content: center;
}

.personaldata {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 5px;
  font-size: 1.1em;
  color: $font-color;
}

.personaldata4 {
  position: relative;
  width: 200px;
}

.personal_data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
}

#chat {
  width: 120px;
  object-position: center;
}

.chatwithus {
  height: 50px;
  width: 130px;
  border: none;
  background-color: rgb(131, 235, 209);
  font-weight: bold;
  margin: 5px;
  box-shadow: 1px 1px 5px grey;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.chatwithus:hover {
  background-color: rgb(87, 153, 136);
  color: white;
}

.question1 {
  font-weight: bold;
  text-align: center;
  padding: 0 50px 0 50px;
}

.question2 {
  width: 180px;
  text-align: center;
  font-size: 9px;
}

.personaldata2,
.personaldata3,
.personaldata4 {
  font-weight: 600;
  letter-spacing: 1px;
}

.personaldata4 {
  width: 200px;
}

#face_photo {
  position: relative;
  z-index: 0;
  width: 120px;
  height: 110px;
  border-radius: 100%;
  box-shadow: 1px 1px 5px 0px grey;
}

.upper_module,
.lower_module,
.middle_module {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  box-shadow: 0px 0px 10px 0px #203753;
  height: 100%;
  border-radius: 5px;
  width: 1000px;
}

.lower_module {
  display: flex;
  align-self: flex-start;

  .email_ul {
    padding-right: 60px;
  }
}

.middle_module {
  display: flex;
  align-self: flex-start;
}

.email {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
}

.email_header {
  margin: 10px 30px;
}

#wallet {
  width: 100px;
  margin: 10px;
}

.availablebalance {
}

.money {
  font-size: 30px;
  text-align: center;
  width: 200px;
}

.transferbuttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
}

.transferbuttons a {
  width: 100%;
}

.transfer {
  width: 100%;
  height: 35px;
  border-radius: 0;
  border-right-width: 0;
  border-left-width: 0;
  background-color: transparent;
  font-weight: bold;
  transition: transform 0.6s ease-in-out;
  cursor: pointer;
}

.transfer:hover {
  background-color: rgb(32, 164, 216);
}

.transfer a {
  text-decoration: none;
}

.edit1,
.edit2,
.edit3 {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0;
}

.nav {
  display: inline-flex;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.headline {
  font-size: 1.4em;
  font-weight: normal;
  margin-left: 19px;
  margin-top: 14px;
}

p {
  margin: 0;
  width: 58%;
  font-weight: 400 !important;
}

.data {
  font-size: 20px;
}

label {
  font-weight: 600;
}

@media screen and (max-width: 1306px) {
  .person1,
  .person2,
  .person3,
  .upper_module,
  .middle_module,
  .lower_module {
    width: 100%;
  }

  .person1,
  .person2,
  .person3 {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .person1 {
    padding: 15px 0;
  }
}
</style>