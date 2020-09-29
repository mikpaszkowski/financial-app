<template>
  <div>
    <modal-personal-details
      :isPersonalModalOpen="modalPersonalDetails_open"
    ></modal-personal-details>
    <modal-account-settings
      :isAccountModalOpen="modalAccountSettings_open"
    ></modal-account-settings>
    <modal-email-address :isEmailModalOpen = "modalEmailAddress_open"></modal-email-address>
    
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

          <div class="personaldata personaldata2">John</div>
          <div class="personaldata personaldata3">Smith</div>
          <div class="personaldata personaldata4">+69 987621351</div>
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
              <p id="personal_name_p">John Smith</p>
            </li>

            <li>
              <label for>Date of birth:</label>
              <p id="date_p">26/06/1997</p>
            </li>
            <li>
              <label for>Address:</label>
              <p id="address_p">Florida 23A</p>
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
              <p id="language_p">English</p>
            </li>

            <li>
              <label for>Time Zone:</label>
              <p id="time_zone_p">Somewhere</p>
            </li>
            <li>
              <label for>Status:</label>
              <p style="color: greenyellow" id="status_p">Enabled</p>
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
            <div class="headline">Email address</div>
            <div class="edit-button-svg">
              <button class="edit3" id="edit3" @click="modalEmailAddressOpen">
                <EditSectionSVG id="svg-edit" />
              </button>
            </div>
          </div>
          <ul class="email_ul">
            <li>
              <label for>Email:</label>
              <p id="email_p">john.smith@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import EditAvatar from "../assets/edit_avatar.svg";
import EditSectionSVG from "../assets/edit_icon.svg";
import ModalPersonalDetails from "./ModalPersonalDetails.vue";
import ModalAccountSettings from "./ModalAccountSettings.vue";
import ModalEmailAddress from "./ModalEmailAddress.vue";

export default {
  data() {
    return {
      modalPersonalDetails_open: false,
      modalAccountSettings_open: false,
      modalEmailAddress_open: false,
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
  },
  created() {
    this.$root.$on("modalPersonalDetailsClosed",this.modalPersonalDetailsClosed);
    this.$root.$on("modalAccountSettingsClosed", this.modalAccountSettingsClosed);
    this.$root.$on("modalEmailClosed", this.modalEmailAddressClosed);
  },
};
</script>


<style lang="scss" scoped>

.fade-enter-active{
  animation: bounce-in 0.5s ease-out;
}

.fade-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in{
  0%{
    transform: scale(0);
    opacity: 0;
  }
  50%{
    transform: scale(1.2);
    opacity: 1;
  }
  100%{
    transform: scale(1);
  }
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

* {
  font-family: "Poppins", sans-serif;
}

.module1 {
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  font-family: Helvetica, sans-serif;
  margin: 35px;
  padding: 15px;
}

li {
  display: flex;
  flex-direction: column;
  margin: 3vh;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  padding-left: 51px;
}

.personal_ul li {
  display: flex;
  flex-direction: row;
  margin: 3vh;
  justify-content: space-between;
}
.account_ul li {
  display: flex;
  flex-direction: row;
  margin: 3vh;
  justify-content: space-between;
}

.email_ul li {
  display: flex;
  flex-direction: row;
  margin: 3vh;
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
  transition: all .15s ease-in-out;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
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
  box-shadow: 0px 0px 10px 0px #203753;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-right: 15px;
}

.background-1,
.background-2,
.background-3 {
  background-color: rgba(203, 255, 248, 0.6);
  position: absolute;
  z-index: 0;
}

.background {
  background-color: rgba(203, 255, 248, 0.6);
  position: absolute;
  z-index: -1;
  width: 43vw;
  height: 100%;
}

.background-1 {
  width: 15em;
  height: 100%;
}

.background-2 {
  width: 15em;
  height: 100%;
  z-index: -1;
}

.background-3 {
  width: 15em;
  height: 100%;
  z-index: -1;
}

.background-transparency {
  border-radius: 3px;
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
  color: black;
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
  color: rgb(117, 117, 117);
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
  width: 85px;
  height: 80px;
  border-radius: 100%;
  box-shadow: 1px 1px 5px 0px grey;
}

.upper_module,
.lower_module,
.middle_module {
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 0px 10px 0px #203753;
  width: 43vw;
  border-radius: 2px;
}

.lower_module {
  display: flex;
  align-self: flex-start;
  height: 27vh;

  .email_ul {
    padding-right: 60px;
  }
}

.middle_module {
  display: flex;
  align-self: flex-start;
  height: 31vh;
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
  color: rgb(121, 121, 121);
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
  color: black;
}

.edit1,
.edit2,
.edit3 {
  position: absolute;
  right: 1em;
  top: 1em;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0;
}

.nav {
  display: inline-flex;
  justify-content: space-between;
}

.headline {
  font-size: large;
  font-weight: normal;
  margin-left: 19px;
  margin-top: 14px;
}

p {
  margin: 0;
  width: 58%;
}

.data {
  font-size: 20px;
}
label {
  font-weight: 600;
}
</style>