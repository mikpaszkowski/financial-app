<template>
  <div class="form" id="form">
    <div class="log-in-form">
        <label> First Name </label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.name"
        @keyup.enter="logIn"
      />
      <label> Last Name </label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.surname"
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
      <input type="date" v-model="signUpData.birth">

      
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
      <label>Address</label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.address"
        @keyup.enter="logIn"
      />
      <div class="city-state">
        <label>City</label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.city"
        @keyup.enter="logIn"
      />
      <label>State</label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.state"
        @keyup.enter="logIn"
      />
      </div>
      <div class="country-postalCode">
        <label>Postal code</label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.postalCode"
        @keyup.enter="logIn"
      />
      <label>Country</label>
      <input
        type="text"
        class="input-field"
        v-model="signUpData.country"
        @keyup.enter="logIn"
      />
      </div>

      

      <div class="passwordfield"></div>
      <button type="submit" class="confirm-btn" @click.prevent="signUp">
        Sign up
      </button>

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
        name: "",
        surname: "",
        birth: "",
        address: "",
        city: "",
        country: "",
        state: "",
        postalCode: ""
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

.city-state{
  display: flex;
}

.country-postalCode{
  display: flex;
}
</style>
