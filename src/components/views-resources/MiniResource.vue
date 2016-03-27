<template>
  <div class="card">
    <span class="ui right corner label">
      <i :class="getTypeClass()" class="icon"></i>
    </span>
    <div class="blurring dimmable image resource-dimmer">
      <div class="ui inverted dimmer">
        <div class="content">
          <div class="center">
            <button :href="'http://' + url" target="_blank" class="ui button primary icon">
              <i class="ui icon world"></i>
              Open</button>
          </div>
        </div>
      </div>
      <img :src="resourcesScreenshotsUrl + '/' + screenshotFile"/>
    </div>
    <div class="content">
      <a class="header">{{title}}</a>
      <div class="meta">
        <h4>{{url | domain}}</h4>
      </div>
      <div class="ui divider"></div>

      {{resource.description || 'No description.'}}
    </div>
    <div class="extra content">

      <div :class="this.$eval('difficulty | difficultyColor')" class="ui small label">{{difficulty | difficulty}}</div>


      <div v-if="duration" class="ui tiny blue label timeLabel">
        {{duration | duration}}
      </div>
    </div>
  </div>
</template>


<script>
  import {resourcesScreenshotsUrl} from '../../config';
  import Rating from '../social/Rating.vue';

  export default {
    name: 'MiniResource',
    components: {
      Rating
    },
    props: ['id', 'title', 'resource', 'description', 'url', 'screenshotFile', 'type', 'difficulty', 'duration'],
    data() {
      return {
        resourcesScreenshotsUrl: resourcesScreenshotsUrl
      }
    },
    ready () {
      // todo prevent html reparsing
      $('.resource-dimmer').dimmer({
        on: 'hover'
      });
    },
    methods: {
      getTypeClass() {
        return (this.type === 'video') ? 'video play' : 'newspaper';
      }
    }
  }
</script>