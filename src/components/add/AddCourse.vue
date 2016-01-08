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

      <div :class="!identity.authenticated ? 'active' : ''" class="ui dimmer">
        <div class="content">
          <div class="center">
            <h2 class="ui inverted icon header">
              <i class="lock icon"></i>
              Only for registered users
            </h2>
            <br />
            <button v-link="{path: '/authenticate'}" class="ui green button">Login</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
  import co from 'co';
  import notifier from '../../utils/notifier';
  import EditCourse from '../edit/EditCourse.vue';
  import * as resources from '../../store/resources';
  import * as resourceHttp from '../../http-fetchers/resources';
  import * as courseHttp from '../../http-fetchers/courses';
  
  import * as identity from '../../store/identity';

  export default {
    name: 'AddCourse',
    components: {
      EditCourse
    },
    data() {
      return {
        identity: identity.state,
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
        console.log(course);
        course.resources = course.resourcesIds;

        let self = this;
        co(function *() {
          try {
            let result = yield courseHttp.addCourse(course);
            notifier('success', 'Course created successfully!');
            self.$route.router.go('/courses');
            console.log('course created');
          } catch(err) {
            notifier('error', 'The course was not added!')
          }
        });
      }
    }
  }

</script>