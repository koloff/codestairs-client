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
          <input v-model="title" type="text" id="title"/>
        </div>
        <div class="field">
          <label for="description">Brief description</label>
          <textarea v-model="description" rows="2" id="description"></textarea>
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
    </div>

    <div v-if="resources.length === 0" class="ui secondary segment">
      <div class="ui info message">
        <div class="header">No resources</div>
        <p>This resource does not contain any resources yet. You can add by giving the resource URL above.</p>
      </div>
    </div>

    <resource-in-course-edit
      v-for="resource in resources"
      :index="$index + 1"
      :resource="resource"
    ></resource-in-course-edit>


    <div class="ui divider hidden"></div>

    <div @click="courseDoneClick()" class="ui button primary large fluid">Done</div>


  </div>

</template>

<script>
  import notifier from '../../utils/notifier';
  import _ from 'lodash';
  import co from 'co';
  import * as resourceHttp from '../../utils/resources-http';

  import ResourceInCourseEdit from '../views-resources/ResourceInCourseEdit.vue';

  export default {
    name: 'EditCourse',
    components: {
      ResourceInCourseEdit
    },
    props: {
      title: String,
      description: String,
      resourcesIds: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    data() {
      return {
        resources: [],
        resourceToAddUrl: '',
        state: {
          notAdded: false,
          loadingAddingCourse: false
        }
      }
    },
    methods: {
      courseDoneClick() {
        let resourcesIds;
        console.log(this.resourcesIds);
        if (this.resources.length > 0) {
          resourcesIds = _.pluck(JSON.parse(JSON.stringify(this.resources)), '_id');
        }

        this.$dispatch('course-done', {
          title: this.title,
          description: this.description,
          resourcesIds: resourcesIds
        });
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
              notifier('information', 'This resource is already added');
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
              let result = yield resourceHttp.addResource(self.resourceToAddUrl);
              self.state.loadingAddingCourse = false;
              self.state.notAdded = false;
              self.resources.push(result.resource);
              notifier('success', 'You successfully added this course!');
            } catch (err) {
              console.log(err);
              self.state.loadingAddingCourse = false;
              self.state.notAdded = false;
              if (err.reason === 'CANNOT_EXTRACT') {
                notifier('error', 'This resource can not be extracted!');
              } else {
                notifier('error', 'The resource was not extracted!');
              }
            }
          });

        } else {
          this.state.notAdded = false;
        }

      }
    }
  }
</script>