<template>
  <div>
    <modal-account-settings
      :isAccountModalOpen="modalAccountSettings_open"
    ></modal-account-settings>
    <div class="container">
      <div class="module">
        <div class="nav">
          <div class="headline">Account settings</div>
          <div class="edit-button-svg">
            <ion-icon
              name="create-outline"
              id="edit-icon"
              @click="modalPersonalDetailsOpen"
            ></ion-icon>
          </div>
        </div>
        <ul class="account_ul">
          <li>
            <label for>Language:</label>
            <p id="language_p">
              {{
                currentLanguageCom.length > 0
                  ? currentLanguageCom
                  : currentLanguage
              }}
            </p>
          </li>

          <li>
            <label for>Time Zone:</label>
            <p id="time_zone_p">
              {{
                currentTimeZoneCom.length > 0
                  ? currentTimeZoneCom
                  : currentTimeZone
              }}
            </p>
          </li>
          <li>
            <label for>Status:</label>
            <div class="status-box">
              <div class="status enabled">
                <ion-icon
                  name="checkmark-circle-outline"
                  id="enable-icon"
                ></ion-icon>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import ModalAccountSettings from "./ModalAccountSettings.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "modal-account-settings": ModalAccountSettings,
  },
  data() {
    return {
      modalAccountSettings_open: false,
      currentTimeZone: "",
      currentLanguage: "",
    };
  },
  methods: {
    modalAccountSettingsOpen: function () {
      this.modalAccountSettings_open = true;
    },
    modalAccountSettingsClosed: function () {
      this.modalAccountSettings_open = false;
    },
    ...mapGetters(["getCurrentLanguage", "getCurrentTimeZone"]),
  },
  computed: {
    ...mapGetters({
      currentTimeZoneCom: "getCurrentTimeZone",
      currentLanguageCom: "getCurrentLanguage",
    }),
  },

  mounted() {
    this.currentTimeZone = this.getCurrentTimeZone;
    this.currentLanguage = this.getCurrentLanguage;
  },

  created() {
    this.$root.$on(
      "modalAccountSettingsClosed",
      this.modalAccountSettingsClosed
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

  .module {
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