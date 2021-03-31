<template>
  <div class="navbar_main" :class="toolbarPositionStyle">
    <router-link :to="{ name: 'Transaction' }">
      <button class="component" id="component-history">Send</button>
    </router-link>
    <router-link :to="{ name: 'Account' }" exact>
      <button class="component" id="component-account">Request</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToolbarOn: false
    };
  },
  computed: {
    toolbarPositionStyle: function() {
      return {
        toolbarPosition: this.isToolbarOn
      };
    }
  },
  methods: {
    slideInOutBar: function() {
      this.isToolbarOn = !this.isToolbarOn;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
