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
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();

    const userName = ref("");
    const userSurname = ref("");

    const user = computed(() => store.getters["user/getPersonalData"]);
    userName.value = user.value.name;
    userSurname.value = user.value.surname;

    return {
      userName,
      userSurname
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>