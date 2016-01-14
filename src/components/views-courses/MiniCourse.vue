<template>
  <div>

    <div class="ui segment secondary">

      <div class="ui grid stackable">
        <div class="ui row">
          <div class="ui column ten wide">
            <a href="#"><h2>{{title}}</h2></a>
          </div>
          <div class="ui column right aligned six wide">

            <rating :count="rating.votes.length" :value="rating.value" :id="id" :type="'course'"></rating>

            <a href="#" class="comments-link">0 Comments</a>
          </div>
        </div>
      </div>
      <span>Last edit: 10 Jan 2016</span>
      <div class="ui divider small hidden"></div>

      <p>
        {{description}}
      </p>

      <div v-if="resources.length" class="ui horizontal divider">
        Resources
      </div>

      <resource-in-course
        v-for="resource in resources"
        :type="resource.type"
        :url="resource.url"
        :title="resource.title"
        :site="resource.url | domain"
      ></resource-in-course>
    </div>

    <div class="ui hidden"></div>
  </div>
</template>

<script>
  import ResourceInCourse from '../views-resources/ResourceInCourse.vue';
  import Rating from '../social/Rating.vue';

  export default {
    name: 'MiniResource',
    props: ['title', 'description', 'resources', 'rating', 'id'],
    components: {
      ResourceInCourse,
      Rating
    }
  }
</script>

<style>
  .comments-link {
    color: #888;
  }
</style>