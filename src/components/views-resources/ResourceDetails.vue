<template>
  <div>

    <div class="ui divider hidden big"></div>

    <div class="ui segment">


      <div style="margin-top: 1em;" class="ui center aligned three column grid">
        <div class="three wide column"></div>

        <div class="ten wide column">
          <div class="ui center aligned one column grid">
            <div class="row">
              <div class="column">
                <div class="ui items">
                  <div class="item">
                    <div class="content">
                      <a :href="'http://'+resource.url" target="_blank" class="ui huge header">{{resource.title}}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="center aligned row">
                <div class="ui items">
                  <div class="item">
                    <div class="content">
                      <div class="center big aligned meta">
                        <a :href="'http://' + resource.url" target="_blank">{{resource.url | domain}}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div class="ui center aligned grid">
            <div class="row">
              <div style="width:100%" class="ui secondary segment fluid">
                <div class="column">
                  <div class="center aligned row">
                    <div class="ui center aligned grid">
                      <div class="row">
                        <div class="column">
                          <div class="ui large label">
                            Added: {{resource.dateAdded | date}}
                          </div>
                          <div class="ui large label">
                            Language:
                            <i class="gb flag"></i>
                            EN
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="center aligned row">
                    <div class="ui center aligned grid">
                      <div class="row">
                        <div class="column">
                          <div class="ui action large input fluid">
                            <input :value="resource.url" type="text" value="http://ww.short.url/c0opq" />
                            <button class="ui blue right labeled icon button">
                              <i class="copy icon"></i>
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div style="margin-bottom: 1em;" class="ui center aligned grid">

            <div class="row">
              <div class="ui segment">
                <img class="ui  fluid image" :src="resourcesScreenshotsUrl + '/' + resource.screenshotFile"/>
              </div>
            </div>

          </div>

        </div>

        <div class="three wide column"></div>


      </div>
    </div>


    <div class="ui divider hidden small"></div>
    <h3 class="ui header center aligned">
      <span class="ui huge star rating" data-rating="5"></span>
      (1)
    </h3>
    <div class="ui divider hidden small"></div>

    <h4 class="ui horizontal divider">
      0 comments
    </h4>

    <!--<div class="ui comments fluid">-->
    <!--<div class="comment ">-->
    <!--<div class="ui segment">-->
    <!--<div class="content">-->
    <!--<a class="author">Matt</a>-->
    <!--<div class="metadata">-->
    <!--<span class="date">Today at 5:42PM</span>-->
    <!--</div>-->
    <!--<div class="text">-->
    <!--How artistic!-->
    <!--</div>-->
    <!--<div class="actions">-->
    <!--<a class="reply">Reply</a>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

    <form class="ui reply form">
      <div class="field">
        <textarea></textarea>
      </div>
      <div class="ui blue labeled submit icon button">
        <i class="icon edit"></i> Add comment
      </div>
    </form>

  </div>
</template>

<script>
  import {resourcesScreenshotsUrl} from '../../config';
  import * as resourcesFetcher from '../../http-fetchers/resources';

  export default {
    name: 'ResourceDetails',
    data() {
      return {
        resourcesScreenshotsUrl: resourcesScreenshotsUrl,
        domain: '',
        resource: {}
      }
    },
    route: {
      data: function({ to: { params: { id }}}) {
        let self = this;
        return resourcesFetcher.getResource('id', id)
          .then(function(res, err) {
            return {resource: res};
          });
      }
    },
    ready() {
      $('.rating').rating({
        initialRating: 0,
        maxRating: 5
      })
    }
  }
</script>

<style>
  .comments {
    width: 100% !important;;
  }
</style>