<template>
  <div>
    <div class="ui divider hidden"></div>

    <h2 class="ui dividing header">
      <i class="icon idea"></i>
      Request
    </h2>

    <div class="ui grid">
      <div class="column six wide">
        <div class="ui top attached header orange">Already knows</div>
        <div class="ui attached segment">
          Programming basics and OOP. Have experience with C#.
        </div>
      </div>
      <div class="column six wide">
        <div class="ui top attached header green">Wants to learn</div>
        <div class="ui attached segment">
          Creating games with the Unity game engine.
        </div>
      </div>
      <div class="column four wide">
        <div class="ui top attached header">Time available</div>
        <div class="ui attached segment">
          <strong>1 week</strong>
        </div>
      </div>
    </div>

    <div class="ui segment secondary">

      <div class="ui grid">

        <div class="ui column four wide">

          <button class="ui button icon"><i class="icon thumbs up green"></i></button>
          <div class="ui label circular basic">
            3
          </div>
          <button class="ui button icon"><i class="icon thumbs down red"></i></button>


        </div>

        <div class="ui column eight wide center aligned">
          <div class="ui label large basic">
            <i class="eye icon"></i>23 views
          </div>
        </div>

        <div class="ui column four wide right aligned">
          <div class="ui label circular basic large">
            Asked by <a href="">pesho</a> on 1/3/2016
          </div>
        </div>


      </div>

    </div>


    <h5 class="ui horizontal header divider">
      <i class=" student icon"></i>
      Recommendations
    </h5>

    <div class="ui comments center aligned">

      <div class="ui segment">
        <div class="comment">
          <div class="content">
            <div class="ui grid">
              <div class="column twelve wide">
                <a class="author">vankata_1211</a>
                <div class="metadata">
                  <span class="date">Today at 5:42PM</span>
                </div>
              </div>
              <div class="column four wide right aligned">
                <button class="ui button icon tiny"><i class="icon thumbs up green"></i></button>
                <div class="ui label circular basic">
                 4
                </div>
                <button class="ui button icon tiny"><i class="icon thumbs down red"></i></button>
              </div>
            </div>

            <div class="text">
              You can check out these videos: <a href="">http://codestairs.com/e20782e64eae</a>. These will get you familiar with the basic concepts.
            </div>
            <div class="actions">
              <a class="reply">Reply</a>
            </div>
          </div>
        </div>
      </div>

      <div class="ui segment">
        <div class="comment">
          <div class="content">
            <div class="ui grid">
              <div class="column twelve wide">
                <a class="author">gosho98</a>
                <div class="metadata">
                  <span class="date">2 days ago</span>
                </div>
              </div>
              <div class="column four wide right aligned">
                <button class="ui button icon tiny"><i class="icon thumbs up green"></i></button>
                <div class="ui label circular basic">
                  2
                </div>
                <button class="ui button icon tiny"><i class="icon thumbs down red"></i></button>
              </div>
            </div>
            <div class="text">
              <p>This might be helpful: <a href="">http://codestairs.com/g60sfee78hgt</a>.</p>
            </div>
            <div class="actions">
              <a class="reply">Reply</a>
            </div>
          </div>
          <div class="comments">
            <div class="ui segment">
              <div class="comment">
                <div class="content">
                  <div class="ui grid">
                    <div class="column twelve wide">
                      <a class="author">pesho</a>
                      <div class="metadata">
                        <span class="date">Just now</span>
                      </div>
                    </div>
                    <div class="column four wide right aligned">
                      <button class="ui button icon tiny"><i class="icon thumbs up green"></i></button>
                      <div class="ui label circular basic">
                        0
                      </div>
                      <button class="ui button icon tiny"><i class="icon thumbs down red"></i></button>
                    </div>
                  </div>
                  <div class="text">
                    Thank you so much! :)
                  </div>
                  <div class="actions">
                    <a class="reply">Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form class="ui reply form">
        <div class="field">
          <textarea></textarea>
        </div>
        <div class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Post
        </div>
      </form>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'RequestDetails'
  }
</script>