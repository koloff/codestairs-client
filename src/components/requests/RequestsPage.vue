<template>
  <div>
    <div class="ui divider hidden"></div>
    <div class="ui segment basic">
      <h2 class="ui icon header center aligned">
        <i class="idea icon"></i>
        <div class="content">
          Path requests
          <div class="sub header">Find what people want to learn and help them do it!</div>
        </div>
      </h2>
    </div>

    <div class="ui segment secondary">

      <div class="ui teal dividing header">
        <i class="help circle icon"></i>
        <div class="content">
          Add request
          <div class="sub header">If you struggle to find resources you can always ask our community!</div>
        </div>
      </div>


      <div class="ui column stackable center aligned grid segment basic">


        <div class="column six wide">
          <div class="ui form">
            <div class="field">
              <label>What do you already know?</label>
              <textarea rows="2"></textarea>
            </div>
          </div>
        </div>
        <div class="column six wide">
          <div class="ui form">
            <div class="field">
              <label>What do you want to learn?</label>
              <textarea rows="2"></textarea>
            </div>
          </div>
        </div>
        <div class="column four wide">
          <div class="ui form">
            <div class="field">
              <label>Duration</label>
              <div class="ui fluid search selection dropdown">
                <input type="hidden" name="country"/>
                <i class="dropdown icon"></i>
                <div class="default text">Select Country</div>
                <div class="menu">
                  <div class="item" data-value="uk"><i class="icon wait"></i>3 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ui divider hidden"></div>


    <div class="ui secondary pointing menu blue">
      <a class="active item">
        Popular
      </a>
      <a class="item">
        Top rated
      </a>
      <a class="item">
        Recent
      </a>
      <div class="right menu">
        <a class="ui item  selection dropdown">
          <input type="hidden" name="country"/>
          <i class="dropdown icon"></i>
          <div class="default text">Select Country</div>
          <div class="menu">
            <div class="item" data-value="uk"><i class="icon wait"></i>This week</div>
          </div>
        </a>
      </div>
    </div>


    <div class="ui four cards doubling">
      <a class="ui card">
        <div class="content">
          <div class="meta">
            <span class="category">5 days</span>
            <span class="right floated">pesho</span>
          </div>
        </div>
        <div class="content">
          <div class="description">
            <p>
            <div class="ui gray label">Knows</div>
            Databases basics. Relational databases. Most concepts of databases.
            </p>
          </div>
          <div class="description">
            <p>
            <div class="ui green label">Requests</div>
            NoSQL databases. Difference between NoSQL and raltional DB. MongoDB basics.
            </p>
          </div>
        </div>
        <div class="extra content">

          <div class="ui icon buttons tiny">
            <button class="ui button"><i class="icon thumbs up green"></i></button>
            <button class="ui button"><i class="icon thumbs down red"></i></button>
          </div>

          <div class="right floated author">
            5 answers
          </div>
        </div>
      </a>

      <a class="ui card">
        <div class="content">
          <div class="meta">
            <span class="category">3 days</span>
            <span class="right floated">gosho11</span>
          </div>
        </div>
        <div class="content">
          <div class="description">
            <p>
            <div class="ui gray label">Knows</div>
             Javascript synthax and basics. <br><br>
            </p>
          </div>
          <div class="description">
            <p>
            <div class="ui green label">Requests</div>
              Javascript advanced techniques. Application structure and OOP.
            </p>
          </div>
        </div>
        <div class="extra content">

          <div class="ui icon buttons tiny">
            <button class="ui button"><i class="icon thumbs up green"></i></button>
            <button class="ui button"><i class="icon thumbs down red"></i></button>
          </div>

          <div class="right floated author">
            9 answers
          </div>
        </div>
      </a>

      <a class="ui card">
      <div class="content">
        <div class="meta">
          <span class="category">6 days</span>
          <span class="right floated">ivan98</span>
        </div>
      </div>
      <div class="content">

        <div class="description">
          <p>
          <div class="ui green label">Requests</div>
          HTML and CSS basics. How to create websites and host them?
          </p>
        </div>
        <br><br><br><br>
      </div>
      <div class="extra content">

        <div class="ui icon buttons tiny">
          <button class="ui button"><i class="icon thumbs up green"></i></button>
          <button class="ui button"><i class="icon thumbs down red"></i></button>
        </div>

        <div class="right floated author">
          10 answers
        </div>
      </div>
    </a> <a class="ui card">
      <div class="content">
        <div class="meta">
          <span class="category">5 days</span>
          <span class="right floated">pesho</span>
        </div>
      </div>
      <div class="content">
        <div class="description">
          <p>
          <div class="ui gray label">Knows</div>
          Programming basics and OOP. Have experience with C#.<br><br>
          </p>
        </div>
        <div class="description">
          <p>
          <div class="ui green label">Requests</div>
          Creating games with the Unity game engine.<br><br>
          </p>
        </div>
      </div>
      <div class="extra content">

        <div class="ui icon buttons tiny">
          <button class="ui button"><i class="icon thumbs up green"></i></button>
          <button class="ui button"><i class="icon thumbs down red"></i></button>
        </div>

        <div class="right floated author">
          4 answers
        </div>
      </div>
    </a>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'RequestsPage',
    ready() {
      $('.dropdown').dropdown({
        allowAdditions: true,
        useLabels: true
      });

    }
  }
</script>