<template>
  <div class="container-profile">
    <div class="personaldata personaldata1">
      <img
        src="../../public/img/face_photo.jpg"
        id="face_photo"
        alt="facephoto"
      />
    </div>
    <div class="personaldata">
      <p>
        Welcome,
        {{ userName }}
        {{ userSurname }}
      </p>
    </div>
    <ion-icon name="create-outline" id="edit-icon"></ion-icon>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", {
      userName: "getCurrentName",
      userSurname: "getCurrentSurname",
    }),
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>