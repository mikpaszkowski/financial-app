<template>
  <div class="form-box" id="form-box">
    <div class="log-in-form">
      <label> Email </label>
      <input
        type="text"
        class="input-field"
        v-model="logInData.email"
        @keyup.enter="logIn"
      />
      <label>Password</label>
      <input
        type="password"
        class="input-field"
        v-model="logInData.password"
        @keyup.enter="logIn"
      />
      <div class="passwordfield"></div>
      <!-- <router-link to="/home/account" class="router-link"> -->
      <button type="submit" class="confirm-btn" @click="logIn">
        Log in
      </button>
      <!-- </router-link> -->

      <div class="remember-me">
        <input type="checkbox" class="check-box" v-model="rememberMe" />
        <label>Remember me</label>
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
        email: "",
        password: ""
      },
      rememberMe: false
    };
  },
  methods: {
    openModal: function() {
      this.$emit("open");
    },
    async logIn() {
      const user = await this.$dbApi.users.logIn(this.logInData);
      if (user) {
        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>

<style>
@import "../styles/main.scss";

.router-link {
  width: 100%;
}

.remember-me {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: center;
}
</style>
