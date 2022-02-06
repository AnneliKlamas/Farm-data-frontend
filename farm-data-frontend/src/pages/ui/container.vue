<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
  .container{
    background: whitesmoke;
    border-radius: 5px;
    padding: 2rem;
  }
</style>