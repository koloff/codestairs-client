<template>
  <div class="ui card mini-request">
    <!--v-link="{path: '/requests/V1GudZing'}"-->
    <div class="content">
      <div class="meta">
        <span class="category">{{dateAdded | date}}</span>
        <span class="right floated">{{author.username}}</span>
      </div>
    </div>
    <div class="content">
      <h5 class="ui header grey">Knows</h5>
      <div class="request-data" class="description">
        {{knows || 'Not specified.'}}
      </div>
      <h5 class="ui header blue">Wants to learn</h5>
      <div class="request-data" class="description">
        {{wantsToLearn}}
      </div>

      <div class="ui divider hidden"></div>
      <button v-link="{path: 'requests/' + id}" class="ui blue basic button mini fluid">Open</button>

    </div>
    <div class="content">
      <div class="ui mini left floated labeled button" tabindex="0">


        <rating
          :id="id"
          :type="'path'"
          :value="rating.value"
        ></rating>


      </div>
      <div class="right floated meta">
        <div class="ui divider small hidden"></div>
        0 comments
      </div>
    </div>
  </div>
</template>

<script>
  import Rating from '../social/Rating.vue';

  export default {
    name: 'MiniResource',
    components: {Rating},
    props: ['id', 'dateAdded', 'knows', 'wantsToLearn', 'availableTime', 'author', 'commentsLength', 'rating']
  }
</script>

<style>

  .mini-request .request-data {
    display: block;
    display: -webkit-box;
    max-width: 100%;
    height: 55px;
    margin: 0 auto;
    line-height: 1;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>