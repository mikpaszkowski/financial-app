<template>
  <div class="container-module" id="container-module">
    <div class="headline-container">
      <h1>Account Settings</h1>
      <div class="exit" id="exit" @click="modalClosed">
        <img src="../../../public/img/exit.svg" alt="" class="close-icon" />
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
          <select name="time-zone" id="time-zone" v-model="selectedTimeZone">
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
        class="confirm-btn"
        @click="saveChanges"
      >
        Save
      </button>
    </div>
  </div>
</template>



<script>
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

  methods: {
    modalClosed: function () {
      this.$emit("close");
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
</style>