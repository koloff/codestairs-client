<template>
  <div>
    <div class="ui segment">

      <div class="ui grid stackable middle aligned">

        <div class="one wide column">
          <div class="row">
            <div class="ui statistic tiny">
              <div class="value">
                {{index}}.
              </div>
            </div>
          </div>
        </div>


        <div class="fourteen wide column">
          <div class="row">
            <resource-in-course
              :type="resource.type"
              :url="resource.url"
              :title="resource.title"
              :site="resource.url | domain"
            ></resource-in-course>
          </div>
        </div>


        <div class="one wide column no-padding-left">
          <div class="row">
            <button class="ui negative circular icon button">
              <i class="icon remove"> </i>
            </button>
          </div>
        </div>

      </div>
    </div>

    <div class="hidden"></div>

  </div>
</template>

<script>
  import ResourceInCourse from './ResourceInCourse.vue';

  export default {
    name: 'ResourceInCourseEdit',
    components: {
      ResourceInCourse
    },
    props: ['resource', 'index'],
    created() {
      console.log('resource: ');
      console.log(this.resource);
    }
  }
</script>

<style>
  .no-padding-left {
    padding-left: 0 !important;
  }
</style>