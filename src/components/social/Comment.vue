<template>
  <div class="ui segment blue">
    <div class="comment">
      <div class="content">
        <div class="ui grid">
          <div class="column twelve wide">
            <a class="author">{{author.username}}</a>
            <div class="metadata">
              <span class="date">{{dateAdded | date}}</span>
            </div>
          </div>
          <div class="column four wide right aligned comment-column">
            <rating
              :id="id"
              :value="rating.value"
            ></rating>
            <div class="ui divider small hidden"></div>
          </div>
        </div>
      </div>
      <div class="text">
        {{text}}
      </div>
    </div>
  </div>
</template>


<script>
  import Rating from './Rating.vue';

  export default {
    name: 'AddComment',
    props: ['id', 'author', 'dateAdded', 'rating', 'text'],
    components: {Rating},
    methods: {}
  }

</script>

<style>
  .comment-column {
    padding: 5px !important;
  }
</style>
