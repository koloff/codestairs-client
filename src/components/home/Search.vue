<template>
  <div class="ui segment secondary blue center aligned">
    <div class="ui huge right icon input center aligned">
      <input v-model="searchPhrase" type="text" @keydown.enter="search()" placeholder="I want to learn...">
      <i @click="search()" class="inverted circular search link icon"></i>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'Search',
    props: ['searchPhrase'],
    methods: {
      search() {
        this.$dispatch('search', this.searchPhrase);
      }
    }
  }
</script>