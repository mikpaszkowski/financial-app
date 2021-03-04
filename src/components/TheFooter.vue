<template>
  <footer>
    <p>Some text in the footer</p>
    <hr id="lower" />
    <p>Some other text</p>
  </footer>
</template>

<script>
export default {};
</script>

<style style="scss" scoped>
footer {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: rgba(238, 238, 238, 0.671);
  height: 20rem;
}

hr {
  text-align: center;

  margin: 1rem 0;
  margin-left: auto;
  margin-right: auto;
}

#lower {
  width: 60%;
}
</style>