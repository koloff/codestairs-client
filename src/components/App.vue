<template>
  <div>
    <top-header></top-header>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import TopHeader from './Header.vue';

  export default {
    components: {TopHeader}
  }

</script>