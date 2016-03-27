<template>

  <div class="ui card mini-path">
    <div class="content">
      <a v-link="{path: '/' + id}" class="header path-title">{{title}}</a>
      <div class="meta">
        <div class="ui small label">{{resourcesCount}} recourses</div>


        <div :class="this.$eval('difficulty | difficultyColor')" class="ui small label">{{difficulty | difficulty}}
        </div>

        <div v-if="duration" class="ui tiny blue label timeLabel">
          {{duration | duration}}
        </div>

      </div>
    </div>
    <div class="content">

      <div class="description path-description">
        <div v-if="!description">
          No description.
        </div>
        {{description}}

      </div>
      <br>
      <div class="right floated meta">Added on {{dateAdded | date}}</div>

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
        0 comments
      </div>
    </div>
  </div>

</template>

<script>
  import ResourceInCourse from '../views-resources/ResourceInCourse.vue';
  import Rating from '../social/Rating.vue';

  export default {
    name: 'MiniResource',
    components: {Rating},
    props: ['id', 'dateAdded', 'title', 'description', 'resourcesCount', 'difficulty', 'duration', 'rating']
  }
</script>


<style>
  .mini-path .path-title {
    display: block;
    display: -webkit-box;
    max-width: 100%;
    height: 43px;
    margin: 0 auto;
    line-height: 1;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mini-path .path-description {
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