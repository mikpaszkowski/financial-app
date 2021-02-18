<template>
  <div v-show="isEmailModalOpen">
    <div class="dark-background" id="dark-background"></div>
    <div class="conatiner2-module" id="conatiner2-module">
      <div class="headline-container">
        <h1>Email & Phone</h1>
        <div class="exit2" id="exit2" @click="modalClosed">
          <ExitSVG id="ExitSVG" />
        </div>
      </div>
      <div class="edit-form" id="form2">
        <ul class="form2">
          <li>
            <label for="email" class="label-email">
              Email
              <div class="primary"></div>
            </label>
            <input type="text" name="email" />
          </li>
          <li>
            <label for="email" class="label-email"
              >Email
              <div class="primary hidden-primary-mark"></div>
            </label>
            <input type="text" name="email" />
          </li>
          <li>
            <label for="phone" class="label-phone"
              >Phone number
              <div class="primary"></div>
            </label>
            <input type="text" name="phone" />
          </li>
          <li>
            <label for="phone" class="label-phone"
              >Phone number
              <div class="primary hidden-primary-mark"></div>
            </label>
            <input type="text" name="phone" />
          </li>
        </ul>
        <button id="save-button" class="save-button">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import ExitIconSVG from "../assets/exit.svg";

export default {
  props: ["isEmailModalOpen"],
  components: {
    ExitSVG: ExitIconSVG,
  },
  methods: {
    modalClosed: function () {
      this.$root.$emit("modalEmailClosed");
    },
  },
};
</script>



<style lang="scss" scoped>
$modal-width: 700px;
$modal-height: 700px;
$input-border-color: #bdc3c7;
$input-font-color: #656565;
$save-button-color: #16a085;
$border-radius: 5px;
$flat-green: #2ecc71;
$flat-blue: #3498db;

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
    opacity: 1;
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

      .label-email,
      .label-phone {
        display: flex;
        align-items: center;

        .primary {
          width: 80px;
          height: 20px;
          background-color: $flat-blue;
          color: white;
          font-weight: bold;
          font-size: 0.93em;
          border-radius: 2em;
          text-align: center;
          padding-top: 3px;
          letter-spacing: 1px;
          margin-left: 10px;

          &::before {
            content: "Primary";
          }
        }
      }

      label {
        font-size: 0.8em;
        color: $input-font-color;
        margin-bottom: 10px;
      }
    }

    ul {
      padding: 0;
      width: 100%;

      input[type="text"] {
        border: $input-border-color 1px solid;
        border-radius: $border-radius;
        width: 100%;
        height: 60px;
        color: $input-font-color;
        transition: box-shadow ease-in-out 0.2s;
        outline: none;
        font-size: 1.2em;

        &:focus {
          box-shadow: 1px 1px 4px 0px $save-button-color;
        }
      }
    }

    #save-button {
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

    #save-button {
      margin-right: 0.5rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: lighten($save-button-color, 10%);
      }
    }
  }
}

.hidden-primary-mark {
  display: none;
}
</style>