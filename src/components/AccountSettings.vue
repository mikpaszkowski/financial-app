<template>
  <div>
    <ModalAccountSettings
      :isAccountModalOpen="modalAccountSettings_open"
    ></ModalAccountSettings>
    <div class="container container-middle">
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
            <div class="info-data">
              <div class="status enabled">
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
  </div>
</template>



<script>
import ModalAccountSettings from "./modals/ModalAccountSettings.vue";
import { mapGetters } from "vuex";

export default {
  components: { ModalAccountSettings },

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


<style lang="scss" scoped>
@import "../styles/main.scss";

.container-middle {
  margin-top: 30px;
}

.info-data {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  .status {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    left: 0;
    top: 10px;
    color: white;
    font-size: 1em;
    font-weight: 600;
    border-radius: 2em;
    text-align: center;
    letter-spacing: 1px;
    margin-left: 10px;

    #enable-icon {
      color: white;
      font-size: 30px;
      margin-right: 4px;
    }
  }
}
</style>