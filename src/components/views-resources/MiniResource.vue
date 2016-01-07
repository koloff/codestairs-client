<template>
  <div class="card">
    <span class="ui right corner label">
      <i class="newspaper icon"></i>
    </span>
    <div class="blurring dimmable image">
      <div class="ui inverted dimmer">
        <div class="content">
          <div class="center">
            <div class="ui large buttons">
              <button class="ui button primary">Open</button>
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
        <div class="ui star rating" data-rating="3"></div> (55)
      </span>
      <span class="right floated">
        44 Comments
      </span>
    </div>
  </div>
</template>


<script>
  import {resourcesScreenshotsUrl} from '../../config';
  
  export default {
    name: 'MiniResource',
    props: ['title', 'url', 'dateAdded', 'screenshotFile'],
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

      $('.rating').rating({
        initialRating: 4,
        maxRating: 5
      })
    }
  }
</script>