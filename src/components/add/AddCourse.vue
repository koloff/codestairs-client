<template>
  <div>

    <div class="ui very padded basic segment">
      <h2 class="ui header">
        <i class="student icon"></i>
        <div class="content">
          Add course
          <div class="sub header">You can structure the learning resources in courses</div>
        </div>
      </h2>
    </div>

    <div class="ui blue very padded tertiary segment">

      <edit-course></edit-course>

    </div>
  </div>
</template>


<script>

  import EditCourse from '../edit/EditCourse.vue';
  import * as resources from '../../store/resources';
  import * as resourceHttp from '../../utils/resources-http';

  export default {
    name: 'AddCourse',
    components: {
      EditCourse
    },
    data() {
      return {
        course: {
          title: '',
          description: '',
          resources: []
        }
      }
    },
    methods: {

    },
    events: {
      'course-done': function(course) {
        console.log('course done');
        console.log(course.title);
      }
    }
  }

</script>