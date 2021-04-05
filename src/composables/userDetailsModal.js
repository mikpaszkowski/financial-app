import { ref, watch } from "vue";

const userDetailsModal = () => {
  let modalOpened = ref(false);

  const toggleModal = () => {
    modalOpened.value = !modalOpened.value;
    if (modalOpened.value) {
      scrollToElement();
    } else {
      scrollBack();
    }
  };

  const closeModal = () => {
    modalOpened.value = false;
    scrollBack();
  };

  const scrollToElement = () => {
    setTimeout(() => {
      let element = document.querySelector(".modal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const scrollBack = () => {
    setTimeout(() => {
      let element = document.querySelector(".container");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return {
    modalOpened,
    toggleModal,
    closeModal,
    scrollBack,
    scrollToElement
  };
};

export default userDetailsModal;
