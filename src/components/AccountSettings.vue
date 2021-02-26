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
              @click="modalAccountSettingsOpen"
            ></ion-icon>
          </div>
        </div>
        <div class="labels">
          <div class="info">
            <div class="info-name">
              <p>Language:</p>
            </div>
            <div class="info-data">
              <p id="language_p">
                {{
                  currentLanguageCom.length > 0
                    ? currentLanguageCom
                    : currentLanguage
                }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Language:</p>
            </div>
            <div class="info-data">
              <p id="time_zone_p">
                {{
                  currentTimeZoneCom.length > 0
                    ? currentTimeZoneCom
                    : currentTimeZone
                }}
              </p>
            </div>
          </div>

          <div class="info">
            <div class="info-name">
              <p>Status:</p>
            </div>
            <div class="status-box">
          <!-- <div class="status enabled">
                <ion-icon
                  name="checkmark-circle-outline"
                  id="enable-icon"
                ></ion-icon>
              </div> -->
        </div>
            
            </div>
          </div>

        </div>

        
      </div>
    </div>
  </div>
</template>



<script>
import ModalAccountSettings from "./modals/ModalAccountSettings.vue";
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
@import "../styles/style.scss";
</style>