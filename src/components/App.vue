<template>
  <div>
    <div class="site">
      <top-header></top-header>
      <div class="ui container site-content">
        <router-view></router-view>
      </div>
      <bottom-footer></bottom-footer>
    </div>
  </div>
</template>

<script>

  import TopHeader from './Header.vue';
  import BottomFooter from './Footer.vue';

  export default {
    components: {
      TopHeader,
      BottomFooter
    }
  }

</script>