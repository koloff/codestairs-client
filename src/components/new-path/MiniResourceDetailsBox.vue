<template>
  <div>
    <div class="ui card course">
      <div class="courseCard">
        <div class="courseScreenshot">
          <div href="http://google.com" class="ui small courseImage image">
            <img class="courseShot" :src="resourcesScreenshotsUrl + '/' + resource.screenshotFile"/>
          </div>
        </div>

        <div class="ui vertical divider imgDivider"></div>

        <div class="courseText">

          <div data-clickable="true" class="ui mini icon inverted buttons closeAndEdit">
            <button data-clickable="true"  @click="removeResource(index)" class="ui mini inverted red button removeButton"><i class="remove icon"></i>
              <button
                @click="changeResourceData(resource._id, resource)"
                class="ui mini inverted grey button"
                data-clickable="true">
                <i class="setting icon editIcon"></i>
              </button>
            </button>
          </div>

          
          <h4 class="ui header courseHeader">{{index + 1}}. {{resource.title}}</h4>
          <div class="courseDescription description">
            {{resource.description}}
            <div v-if="!resource.description">No description.</div>
          </div>
        </div>

        <div class="courseLabels">

          <div :class="this.$eval('resource.difficulty | difficultyColor')" class="ui small label difficultyLabel">{{resource.difficulty | difficulty}}</div>

          <div class="ui tiny blue label timeLabel">
            <i class=" video play outline icon typeIcon"></i>
            {{resource.duration | duration}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {resourcesScreenshotsUrl} from '../../config';
  
  export default{
    name: 'MiniResourceDetailsBox',
    props: ['index', 'resource', 'boxMethods'],
    data() {
      return {
        resourceData: '',
        resourcesScreenshotsUrl: resourcesScreenshotsUrl
      };
    },
    methods: {
      removeResource(index) {
        index = index | 0;
        this.boxMethods.removeResourceFunction(index);
      },
      changeResourceData(id, resourceData) {
        this.boxMethods.changeResourceDataFunction(id, resourceData);
      }
    }
  };
</script>

<style>


  .ui.card.course {
    width: 340px;
    height: 150px;
    background: whitesmoke;
    box-sizing: content-box;

  }

  .courseScreenshot {
    width: 150px;
    height: 150px;
    box-sizing: content-box;
    float: left;

  }

  a.ui.small.image img.courseShot {
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    float: left;
  }

  .courseText {
    display: inline-block;
    width: 190px;
    height: 120px;
    box-sizing: content-box;
    margin-top: -0.6em;
  }

  div.ui.mini.icon.inverted.buttons.closeAndEdit {
    margin-left: 150px;
    background-color: whitesmoke !important;
    position: fixed;
  }

  .ui.inverted.button.removeButton {
    box-shadow: 0px 0px 0px 2px #D4D4D5 inset !important;
  }

  .editIcon {
    color: grey;
  }

  div.description.courseDescription {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    color: rgba(0, 0, 0, .68);
    font-size: 0.9em;
    max-height: 60px;
    overflow: hidden;
  }

  h4.ui.header.courseHeader {
    max-height: 40px;
    display: inline-flex;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: -3%;
    margin-top: 13%;
    overflow: hidden;
  }

  .ui.small.label.difficultyLabel {
    margin-left: 8px;
  }

  .ui.tiny.basic.label.timeLabel {
    background-color: whitesmoke !important;
  }

  div.ui.vertical.divider.imgDivider {
    left: 150px;
  }

  div.ui.vertical.divider.imgDivider:before,
  div.ui.vertical.divider.imgDivider:after {
    height: calc(100%);
  }

  .icon.typeIcon {
    margin-right: 0.2em;
    font-size: 1.2em;
  }

</style>

