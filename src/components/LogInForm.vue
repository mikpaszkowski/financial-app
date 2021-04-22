<template>
  <div class="form-box" id="form-box">
    <div class="log-in-form">
      <label> Email </label>
      <input
        type="text"
        class="input-field"
        v-model="loginData.email"
        @keyup.enter="logIn"
      />
      <label>Password</label>
      <input
        type="password"
        class="input-field"
        v-model="loginData.password"
        @keyup.enter="logIn"
      />
      <div class="passwordfield"></div>
      <!-- <router-link to="/home/account" class="router-link"> -->
      <button type="submit" class="confirm-btn" @click="login">Log in</button>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup(props, context) {
    const store = useStore();
    const router = useRouter();

    const loginData = ref({ email: "", password: "" });
    const rememberMe = ref(null);

    function openModal() {
      context.emit("open");
    }
    function login() {
      console.log(loginData.value);
      store
        .dispatch("user/login", { user: loginData.value })
        .then(() => router.push({ name: "Account" }));
    }

    return {
      openModal,
      login,
      rememberMe,
      loginData
    };
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
