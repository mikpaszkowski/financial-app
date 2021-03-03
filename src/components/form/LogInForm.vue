<template>
  <div class="form-box" id="form-box">
    <div class="edit-form">
      <ul>
        <li>
          <label> Username </label>
          <input type="text" class="input-field" v-model="logInData.userId" />
        </li>
        <li>
          <label>Password</label>
          <input
            type="password"
            class="input-field"
            v-model="logInData.password"
          />
          <div class="passwordfield">
            <a id="password-toggle" @click="toggle">
              <ion-icon name="eye-outline" id="toggle"></ion-icon>
            </a>
          </div>
        </li>
        <li>
          <router-link to="/home/account" class="router-link">
            <button type="submit" class="confirm-btn">
              <div class="s-btn" @click="login">Log in</div>
            </button>
          </router-link>
        </li>
      </ul>

      <div class="remember">
        <input type="checkbox" class="check-box" v-model="rememberMe" />
        <span>Remember me</span>
      </div>
    </div>

    <div class="forgot" id="forgot" @click="openModal">Forgot Password?</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logInData: {
        userId: "",
        password: "",
      },
      rememberMe: false,
    };
  },
  methods: {
    openModal: function () {
      this.$emit("open");
      console.log("open");
    },
  },
};
</script>

<style>
@import "../../styles/main.scss";
</style>