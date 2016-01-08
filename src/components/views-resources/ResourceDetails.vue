<template>
  <div>

    <div class="ui divider hidden big"></div>

    <div class="ui segment">


      <div class="center aligned row">

        <div class="ui center aligned one column grid">
          <div class="row">
            <div class="column">
              <div class="ui items">
                <div class="item">
                  <div class="content">
                    <a class="ui huge  header">Header of the resource is here</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="center aligned row">
              <div class="ui items">
                <div class="item">
                  <div class="content">
                    <div class="center big aligned meta">
                      <a>Link from the resourse here</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div class="ui center aligned grid">
            <div class="row">
              <div class="ui secondary segment fluid">
                <div class="column">

                  <div class="center aligned row">
                    <div class="ui center aligned grid">
                      <div class="row">
                        <div class="column">
                          <div class="ui large label">
                            Added: 4 June 2015
                          </div>
                          <div class="ui large label">
                            Language:
                            <i class="bg flag"></i>
                            BG
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
                            <input type="text" value="http://ww.short.url/c0opq">
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

        </div>

        <div class="eight wide  column">
          <div class="ui items">
            <div class="item">
              <a href="http://google.com" class="ui right floated rounded large image">
                <!--<img src="./test.png">-->
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="ui divider hidden small"></div>
    <h3 class="ui header center aligned">
      <span class="ui huge star rating" data-rating="3"></span>
      (6)
    </h3>
    <div class="ui divider hidden small"></div>

    <h4 class="ui horizontal divider">
      5 comments
    </h4>

    <div class="ui comments fluid">
      <div class="comment ">
        <div class="ui segment">
          <div class="content">
            <a class="author">Matt</a>
            <div class="metadata">
              <span class="date">Today at 5:42PM</span>
            </div>
            <div class="text">
              How artistic!
            </div>
            <div class="actions">
              <a class="reply">Reply</a>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  import * as resourcesFetcher from '../../http-fetchers/resources';

  export default {
    name: 'ResourceDetails',
    data() {
      return {
        resource: {}
      }
    },
    route: {
      data: function({ to: { params: { id }}}) {
        return {
          resource: resourcesFetcher.getResource('id', id)
        }
      }
    },
    ready() {
      $('.rating').rating({
        initialRating: 4,
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