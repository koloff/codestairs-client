<template>
  <div class="card">
    <span class="ui right corner label">
      <i :class="getTypeClass()" class="icon"></i>
    </span>
    <div class="blurring dimmable image">
      <div class="ui inverted dimmer">
        <div class="content">
          <div class="center">
            <div class="ui large buttons">
              <a :href="'http://' + url" target="_blank" class="ui button primary">Open</a>
              <div class="or"></div>
              <button class="ui button primary">Details</button>
            </div>
          </div>
        </div>
      </div>
      <img :src="resourcesScreenshotsUrl + '/' + screenshotFile" />
    </div>
    <div class="content">
      <a class="header">{{title}}</a>
      <div class="meta">
        <h4>{{url | domain}}</h4>
        <span>Added on <strong>{{dateAdded | date}}</strong></span>
      </div>
    </div>
    <div class="extra content">
      <span class="left floated">
         <rating :count="0" :value="0" :id="id" :type="'course'"></rating>
      </span>
      <span class="right floated">
        0 Comments
      </span>
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
    props: ['id', 'title', 'url', 'dateAdded', 'screenshotFile', 'type'],
    data() {
      return {
        resourcesScreenshotsUrl: resourcesScreenshotsUrl
      }
    },
    ready () {
      // todo prevent html reparsing
      $('.special.cards .image').dimmer({
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