<template lang="html">
  <nav>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/about" exact>About</router-link></li>
      <li><router-link to="/contact" exact>Contact</router-link></li>
    </ul>
  </nav>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .router-link-active {
    color: red;
  }
</style>
