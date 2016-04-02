<template>
  <div>
    <div class="ui stackable container">
      <div class="ui divider hidden"></div>
      <div class="ui segment basic">
        <div class="content">
          <h1 class="ui header">
            <i class="student icon"></i>
            <div class="content">
              {{path.title}}
            </div>
          </h1>
          <div class="meta">

            <div class="ui large label">2 resourses</div>
            <div :class="this.$eval('path.difficulty | difficultyColor')" class="ui small label large">{{path.difficulty
              | difficulty}}
            </div>
            <div v-if="path.duration" class="ui tiny blue label large">
              {{path.duration | duration}}
            </div>

          </div>
        </div>

        <div class="ui segment">
          <div v-if="!path.description">No description.</div>
          {{path.description}}
        </div>

        <h5 class="ui horizontal header divider">
          <i class="icon cubes"></i>
          Resources
        </h5>


        <!--todo extract to component-->
        <div class="ui cards stackable four">


          <mini-resource
            v-for="resource in path.resources"
            :id="resource._id"
            :resource="resource"
            :title="resource.title"
            :description="resource.description"
            :url="resource.extracted.url"
            :screenshot-file="resource.extracted.screenshotFile"
            :type="resource.type"
            :difficulty="resource.difficulty"
            :duration="resource.duration"
          ></mini-resource>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import * as pathsFetcher from '../../http-fetchers/paths';
  import {resourcesScreenshotsUrl} from '../../config';
  import MiniResource from '../views-resources/MiniResource.vue';

  export default {
    name: 'PathPage',
    data() {
      return {
        path: {},
        resourcesScreenshotsUrl: resourcesScreenshotsUrl
      }
    },
    components: {MiniResource},
    route: {
      data: function({to: {params: {pathId}}}) {
        let self = this;
        return pathsFetcher.getPath('id', pathId)
          .then(function(res, err) {
            return {path: res};
          });
      }
    }
  }
</script>