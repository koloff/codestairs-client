<template>
  <div>
    <top-header></top-header>
    <div class="ui container">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>

  import TopHeader from './Header.vue';
  import Footer from './Footer.vue';

  export default {
    components: {
      TopHeader,
      Footer
    }
  }

</script>