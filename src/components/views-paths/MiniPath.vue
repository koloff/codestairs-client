<template>

  <div v-link="{path: '/' + _id}" class="ui card link">
    <div class="content">
      <div class="header">{{title}}</div>
      <div class="meta">
        <div class="ui small label">{{resourcesCount}} recourses</div>


        <div :class="this.$eval('difficulty | difficultyColor')" class="ui small label">{{difficulty | difficulty}}</div>

        <div v-if="duration" class="ui tiny blue label timeLabel">
          {{duration | duration}}
        </div>

      </div>
    </div>
    <div class="content">

      <div class="description">
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
        <div class="ui mini red button">
          <i class="heart icon"></i>
        </div>
        <a class="ui mini basic red left pointing label">
          {{rating}}
        </a>
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
    props: ['_id', 'dateAdded', 'title', 'description', 'resourcesCount', 'difficulty', 'duration', 'rating']
  }
</script>
