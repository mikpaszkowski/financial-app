<template>
  <div v-show="isAccountModalOpen">
    <div class="dark-background" id="dark-background"></div>
    <div class="conatiner2-module" id="conatiner2-module">
      <div class="headline-container">
        <h1>Personal Details</h1>
        <div class="exit2" id="exit2" @click="modalClosed">
          <ExitSVG id="ExitSVG" />
        </div>
      </div>

      <div class="edit-form" id="form1">
        <ul class="form1">
          <li>
            <label for="language" id="language">Language</label>
            <select name="language" id="language" v-model="selectedLanguage">
              <option value="" disabled>Choose your language...</option>
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
              <option value="" disabled>Choose your timezone...</option>
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
          id="save-button-2"
          class="save-button"
          @click="saveChanges"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>



<script>
import ExitIconSVG from "../assets/exit.svg";
import { languages } from "../formLanguages";
import { timeZones } from "../timeZones";
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
};
</script>




<style lang="scss" scoped>
$modal-width: 700px;
$modal-height: 450px;
$input-border-color: #bdc3c7;
$input-font-color: #656565;
$save-button-color: #16a085;
$border-radius: 5px;

* {
  font-size: 20px;
}

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

.dark-background {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  opacity: 0.5;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transition: 1s;
}

#ExitSVG {
  position: relative;
  height: 1.8em;
  margin-top: 0.4em;
  transition: all 0.2s ease-in-out;
  opacity: 0.5;

  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
}

.conatiner2-module {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: $modal-width;
  height: $modal-height;
  top: 50%;
  left: 50%;
  margin-top: -$modal-height / 2;
  margin-left: -$modal-width / 2;
  padding: 30px;
  padding-top: 15px;
  padding-bottom: 0;
  background-color: white;
  border-radius: $border-radius;

  .headline-container {
    border-bottom: 1px solid $input-border-color;
    width: 100%;
    top: 0;

    h1 {
      color: black;
      font-size: 1.5em;
      font-weight: 100;
      margin-top: 0;
      margin-bottom: 20px;
    }

    .exit2 {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 55px;
    }
  }
}

.edit-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  li,
  label {
    display: block;
  }

  li {
    margin-top: 1rem;
    padding: 0;

    label {
      font-size: 0.8em;
      color: $input-font-color;
      margin-bottom: 10px;
    }
  }

  ul {
    padding: 0;
    width: 100%;

    select {
      border: $input-border-color 1px solid;
      border-radius: $border-radius;
      width: 100%;
      height: 60px;
      color: $input-font-color;

      &:focus {
        box-shadow: 1px 1px 7px 0px $save-button-color;
      }
    }
  }

  #save-button-2 {
    margin-top: 1.5rem;
    width: 100%;
    height: 65px;
    font-size: 1.2em;
    color: white;
    font-weight: 500;
    box-shadow: 1px 1px 7px 0px #c3c3c3;
    border-radius: $border-radius;
    border: none;
    cursor: pointer;
    background-color: $save-button-color;
  }

  #save-button-2 {
    margin-right: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: lighten($save-button-color, 10%);
    }
  }
}
</style>