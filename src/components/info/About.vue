<template>
  <div>

    <div class="ui divider hidden"></div>
    <div class="ui one column grid">
      <div class="stretched column">
        <div class="row">
          <div style="font-size: 2.5em;" class="ui centered header">
            About us
          </div>

          <div style="max-width: 50%; margin-left: 30%;" class="ui centered blue inverted segment">
            <p>
              Education is important part of the software industry. Due to the rapid pace of change in the modern IT
              trends, developers have to study every day. Most often they do it on the Internet. We created Codestairs
              to facilitate and organize the search for information from the web.
            </p>

          </div>

          <div style="max-width: 75%;margin-left: 11%;" class="ui centered grey inverted segment">
            <p>
              Codestairs is system for collecting, analyzing and organizing of programming resources. With just a
              simple link any resource from the web can be extracted. Then Codestairs takes the most important
              information from it, generates metadata and index it in the database.
            </p>
            <p>
              All the resources can be intelligently organized in separated courses. Multiple courses can be combined
              in whole studying programs - developing android apps for example.
            </p>

          </div>

          <div style="margin-right: 9%;" class="ui black centered inverted segment">
            <p>
              The information is sorted by language. In order to assure the quality of the resources we implemented
              rating and comments systems.
            </p>
            <p>
              In addition to our web app Codestairs provides RESTful API, which can be used for automatic resource
              indexing with simple HTTP request to our server. This way the process of adding information can be
              automated and simplified by creating simple scripts. You will not even have to visit our site to use it!
            </p>
          </div>
        </div>

        <!--    <div class="row">
                <div class="ui doubling three column grid">
                    <div class=" column">
                        <a href="http://google.com" class="ui small image">

                        </a>
                         <i class="huge blue pointing right icon"></i>
                            <a href="http://google.com" class="ui small image">

                        </a>
                        <i class="huge black pointing down icon"></i>

                </div>

                <div class="column">
                    <a href="http://google.com" class="ui small image">

                    </a>
                    <i class="huge grey pointing right icon"></i>
                </div>

                <div class="column">
                        <a href="http://google.com" class="ui small image">

                        </a>
                        <i class="huge black pointing down icon"></i>
                </div> -->

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'About'
  }
</script>