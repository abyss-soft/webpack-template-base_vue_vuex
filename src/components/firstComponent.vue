<template>
  <section class="l-container">
    <h1> {{ msg }} </h1>
    <h4> {{ message }}</h4>
    <div class="l-row">
      <div class="logo"></div>
      <div class="logo"></div>
    </div>
    <div class="l-row">
      <div class="img-example">
        <img src="/assets/img/pinguin.jpg" alt="pinguin" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello Word',
            message: this.$store.getters.getmessage
        }
    }
}
</script>


<style lang="scss" scoped>
h1 {
  color: $danger-color;
}

h4 {
    font-size: 2rem;
    color: $success-color;
}
</style>
