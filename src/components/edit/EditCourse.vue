<template>
  <div>

    <h4 class="ui horizontal divider header">
      <i class="write icon"></i>
      Course details
    </h4>


    <div class="ui secondary segment">
      <div class="ui form">
        <div class="field">
          <label for="title">Title</label>
          <input v-model="course.title" type="text" id="title"/>
        </div>
        <div class="field">
          <label for="description">Brief description</label>
          <textarea v-model="course.description" rows="2" id="description"></textarea>
        </div>
      </div>
    </div>

    <h4 class="ui horizontal divider header">
      <i class="file icon"></i>
      Resources
    </h4>

    <div class="ui secondary segment">
      <div class="ui left icon input action fluid">
        <i class="icon world"></i>
        <input v-model="resourceToAddUrl" type="text" placeholder="Resource URL"/>
        <button @click="resourceToAddClick()" type="submit" class="ui button primary">Add</button>
      </div>


      <div v-if="state.notAdded" class="ui card fluid">

        <div :class="state.loadingAddingCourse ? 'active' : ''" class="ui inverted dimmer">
          <div class="ui loader"></div>
        </div>

        <div class="content">
          <div class="header">
            This URL is not in the system
          </div>
          <div class="description">
            No one has added this URL yet. Be the first!
          </div>
        </div>
        <div class="extra content">
          <div class="ui buttons fluid">
            <button @click="addIfNotAddedAnswered(true)" class="ui positive button">Save to Codestairs</button>
            <div class="or"></div>
            <button @click="addIfNotAddedAnswered(false)" class="ui button">Cancel</button>
          </div>
        </div>
      </div>

      <div class="ui card fluid link">
        <div class="content">
          <button class="ui red right floated icon button">
            <i class="icon remove"> </i>
          </button>
          <div class="header"><a href="">CSS layoult</a></div>
          <div class="meta">www.telerikacademy.com</div>
        </div>
      </div>
    </div>

    <div class="ui divider hidden"></div>

    <div v-for="resource in resources">
      {{resource || json}}
    </div>

    <div @click="courseDone()" class="ui button primary large fluid">Done</div>


  </div>

</template>

<script>
  import notifier from '../../utils/notifier';
  import _ from 'lodash';
  import co from 'co';
  import * as resourceHttp from '../../utils/resources-http';

  export default {
    name: 'EditCourse',
    props: {
      title: String,
      description: String,
      resources: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    data() {
      return {
        resourceToAddUrl: '',
        course: {
          title: '',
          description: ''
        },
        state: {
          notAdded: false,
          loadingAddingCourse: false
        }
      }
    },
    methods: {
      courseDone() {
        this.$dispatch('course-done', this.course);
      },

      resourceToAddClick() {
        // todo only add to collection - on done save the whole course

        console.log('respurceToAddUrl this: ' + this.resourceToAddUrl);

        let self = this;
        co(function *() {
          let result = yield resourceHttp.getResource('url', self.resourceToAddUrl);

          if (result) {
            // check if already added
            let added = _.some(JSON.parse(JSON.stringify(self.$data.resources)), {'_id': result._id});

            if (!added) {
              self.resources.push(result);
              console.log(self.resources);
            } else {
              // todo alert added
              console.log('already added');
            }
          } else {

            // if the resource does not exists (this state shows the modal)
            self.state.notAdded = true;
            console.log('no such result');
          }
        });
      },

      addIfNotAddedAnswered(shouldAdd) {
        // this method is called when the use answer
        // if he watns to add the course when it does not exists
        if (shouldAdd) {
          // add the course
          this.state.addingCourseLoading = true;
          let self = this;
          co(function *() {
            try {
              self.state.loadingAddingCourse = true;
              let resource = yield resourceHttp.addResource(self.resourceToAddUrl);
              console.log(resource);
              self.state.loadingAddingCourse = false;
              self.state.notAdded = false;
              self.resources.push(resource);
              notifier('success', 'You successfully added this course!');
            } catch(err) {
            	console.log(err);
              console.log(err.reason);
              notifier('error', 'The resource was not added!');
            }
          });

        } else {
          console.log('should not add');
        }

        console.log('not added finished');
      }
    }
  }
</script>