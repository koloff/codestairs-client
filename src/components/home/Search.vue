<template>
  <div class="ui segment blue center aligned">
    <div class="ui huge left icon input transparent center aligned">
      <input v-on:keyup.enter="search" v-model="searchPhrase" type="text" placeholder="I want to learn..."/>
      <i class="search icon"> </i>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'Search',
    data() {
      return {
        searchPhrase: ''
      };
    },
    methods: {
      search() {
        this.$dispatch('search', this.searchPhrase);
      }
    }
  }
</script>