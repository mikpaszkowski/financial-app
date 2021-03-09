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
import { mapGetters } from "vuex";
import ModalAccountSettings from "./UserProfileDetailsAccountEdit";
import EditIcon from "./icons/EditIcon";

export default {
  components: {
    ModalAccountSettings,
    EditIcon,
  },
  data() {
    return {
      currentTimeZone: "",
      currentLanguage: "",
      modalOpened: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.modalOpened = !this.modalOpened;
      if (this.modalOpened) {
        this.scrollToElement();
      } else {
        this.scrollBack();
      }
    },
    closeModal: function () {
      this.modalOpened = false;
      this.scrollBack();
    },
    scrollToElement() {
      setTimeout(() => {
        let element = document.querySelector(".modal");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    },
    scrollBack() {
      setTimeout(() => {
        let element = document.querySelector(".container-middle");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    },
    setStatus() {
      const statusLabel = document.querySelector(".status");
      if (this.statusCom == "false") {
        console.log("1");
        statusLabel.classList.add("disabled");
        statusLabel.classList.remove("enabled");
      } else {
        console.log("2");
        statusLabel.classList.remove("disabled");
        statusLabel.classList.add("enabled");
      }
    },
    ...mapGetters("user", [
      "getCurrentLanguage",
      "getCurrentTimeZone",
      "getStatus",
    ]),
  },
  computed: {
    ...mapGetters("user", {
      currentTimeZoneCom: "getCurrentTimeZone",
      currentLanguageCom: "getCurrentLanguage",
      statusCom: "getStatus",
    }),
  },
  watch: {
    statusCom() {
      this.setStatus();
    },
  },
  mounted() {
    this.currentTimeZone = this.getCurrentTimeZone;
    this.currentLanguage = this.getCurrentLanguage;
    this.setStatus();
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
    height: 40px;
    left: 0;
    top: 10px;
    color: white;
    font-size: 1em;
    font-weight: 400;
    border-radius: 2em;
    padding: 10px;

    #enable-icon {
      color: white;
      font-size: 30px;
      margin-right: 4px;
    }
  }
}
</style>