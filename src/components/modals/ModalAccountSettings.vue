<template>
  <div v-if="isAccountModalOpen">
    <div class="dark-background" id="dark-background"></div>
    <transition name="fade">
      <div class="container-module" id="container-module">
        <div class="headline-container">
          <h1>Account Settings</h1>
          <div class="exit" id="exit" @click="modalClosed">
            <ExitSVG id="ExitSVG" />
          </div>
        </div>
        <div class="edit-form" id="form1">
          <ul class="form1">
            <li>
              <label for="language" id="language">Language</label>
              <select name="language" id="language" v-model="selectedLanguage">
                <option value="" disabled>{{ currentLanguage }}</option>
                <option
                  :value="language.name"
                  v-for="(language, idx) in languages"
                  :key="idx"
                >
                  {{ language.name }}
                </option>
              </select>
            </li>
            <li>
              <label for="timezone" id="timezone">Time Zone</label>
              <select
                name="time-zone"
                id="time-zone"
                v-model="selectedTimeZone"
              >
                <option value="" disabled>{{ currentTimeZone }}</option>
                <option
                  :value="timezone.name"
                  v-for="(timezone, idx) in timezones"
                  :key="idx"
                >
                  {{ timezone.name }}
                </option>
              </select>
            </li>
          </ul>
          <button
            type="submit"
            id="save-button"
            class="save-button"
            @click="saveChanges"
          >
            Save
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>



<script>
import ExitIconSVG from "../../../public/assets/exit.svg";
import { languages } from "../../formLanguages";
import { timeZones } from "../../timeZones";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      languages: languages,
      timezones: timeZones,
      status: true,
      selectedLanguage: "",
      selectedTimeZone: "",
    };
  },
  components: {
    ExitSVG: ExitIconSVG,
  },
  props: ["isAccountModalOpen"],
  methods: {
    modalClosed: function () {
      this.$root.$emit("modalAccountSettingsClosed");
    },
    ...mapActions(["updateCurrentLanguage", "updateCurrentTimeZone"]),
    saveChanges: function () {
      this.updateCurrentLanguage(this.selectedLanguage);
      this.updateCurrentTimeZone(this.selectedTimeZone);
      this.modalClosed();
    },
  },
  computed: {
    ...mapGetters({
      currentTimeZone: "getCurrentTimeZone",
      currentLanguage: "getCurrentLanguage",
    }),
  },
};
</script>




<style lang="scss" scoped>
@import "../../styles/main.scss";

.fade-enter-active {
  animation: bounce-in 0.5s ease-out;
}

.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>