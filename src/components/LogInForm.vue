<template>
  <div class="form-box" id="form-box">
    <div class="log-in-form">
      <label> Username </label>
      <input type="text" class="input-field" v-model="logInData.userId" />
      <label>Password</label>
      <input type="password" class="input-field" v-model="logInData.password" />
      <div class="passwordfield"></div>
      <!-- <router-link to="/home/account" class="router-link"> -->
        <button type="submit" class="confirm-btn">
          <div class="s-btn" @click="logIn">Log in</div>
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
import axios from "axios";

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
    logIn(){
      axios.post('https://mysql-node-server.herokuapp.com/all-users/findUser/5', {
        username: this.logInData.username,
        password: this.logInData.password
      }).then(res => {
        console.log(res);
      }).catch(err => console.log(err));
    }
  },
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