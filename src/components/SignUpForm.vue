<template>
  <div class="form-box" id="form-box">
    <div class="log-in-form">
        <label> First Name </label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.userName"
        @keyup.enter="logIn"
      />
      <label> Last Name </label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.userSurname"
        @keyup.enter="logIn"
      />
      <label> Email </label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.email"
        @keyup.enter="logIn"
      />
      <label>Date of birth</label>
      <input type="date" v-model="signUpData.birthDate">

      
      <label>Password</label>
      <input
        type="password"
        class="input-field"
        v-model="signUpData.password"
        @keyup.enter="logIn"
      />

      <label>Confirm Password</label>
      <input
        type="password"
        class="input-field"
        v-model="signUpData.password"
        @keyup.enter="logIn"
      />
      <div class="passwordfield"></div>
      <!-- <router-link to="/home/account" class="router-link"> -->
      <button type="submit" class="confirm-btn" @click.prevent="signUp">
        Sign up
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
      signUpData: {
        email: "",
        password: "",
        userName: "",
        userSurname: "",
        birthDate: ""
      },
      rememberMe: false
    };
  },
  methods: {
    openModal: function() {
      this.$emit("open");
    },
    async signUp() {
      console.log(this.signUpData);
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
