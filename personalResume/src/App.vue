<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
    <div class="page-title"> MatiasRHuber</div>
    <div class="sub-header">This is a demonstrative website, intended to display relevant course work and personal projects</div>
  </header>

  <main>
    <p>List of relevant tabs</p>
  </main>
</template>

<style>
header .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-heading);
    margin: 0;
  }
header .sub-header {
  font-size: 1.5rem;
    font-weight: 300;
    color: var(--color-heading);
    margin: 0;
}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

} */
</style>
