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
    background: ghostwhite;
    border-radius: 5px;
  }
</style>