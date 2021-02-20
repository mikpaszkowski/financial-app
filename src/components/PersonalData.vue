<template>
  <div>
    <modal-personal-details
      :isPersonalModalOpen="modalPersonalDetails_open"
    ></modal-personal-details>
    <div class="container">
      <div class="upper_module">
        <div class="nav">
          <div class="headline">Personal Details</div>
          <ion-icon
            name="create-outline"
            id="edit-icon"
            @click="modalPersonalDetailsOpen"
          ></ion-icon>
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
  </div>
</template>



<script>
import ModalPersonalDetails from "./ModalPersonalDetails.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      modalPersonalDetails_open: false,

      userName: "",
      userSurname: "",
      address: "",
      birthDate: "",
    };
  },
  components: {
    "modal-personal-details": ModalPersonalDetails,
  },
  methods: {
    modalPersonalDetailsOpen: function () {
      this.modalPersonalDetails_open = true;
    },
    modalPersonalDetailsClosed: function () {
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
      "modalPersonalDetailsClosed",
      this.modalPersonalDetailsClosed
    );
  },
};
</script>



<style lang="scss">
$input-font-color: #656565;
$flat-green: #2ecc71;
$save-button-color: #16a085;

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  width: 1000px;
  height: 400px;
  margin: 10px;
  animation: 0.4s container_animation;
  animation-fill-mode: both;
  background-color: white;

  .upper_module {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    box-shadow: 0px 0px 10px 0px #203753;
    height: 100%;
    border-radius: 5px;
    width: 1000px;

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
        flex-direction: column;
        margin: 45px;
        justify-content: space-between;
        label {
          font-weight: 600;
          color: $input-font-color;
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