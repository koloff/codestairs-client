<template>
  <div>

    <div class="ui modal inverted">
      <div class="header">
        <i class="icon setting"></i>
        Edit resource
      </div>
      <div class="image content">
        <img width="400" src="../../assets/img/logo1.png" class="ui image rounded bordered"/>
        <div class="description resource-settings">
          <div class="ui header">Briefly describe the resource</div>

          Title
          <div class="ui left input fluid">
            <input v-model="editedResource.title" type="text" placeholder="No title">
          </div>
          <p></p>
          Description
          <div class="ui form field fluid">
            <textarea v-model="editedResource.description" rows="2"></textarea>
          </div>
          <p></p>
          <div class="ui form">
            <div class="two fields">
              <div class="one field">
                Difficulty
                <div class="ui fluid selection dropdown">
                  <input v-model="editedResource.difficulty" type="hidden" name="difficulty"/>
                  <i class="dropdown icon"></i>
                  <div class="default text">Difficulty</div>
                  <div class="menu">
                    <div class="item" data-value="beginner"><i class="icon child olive"></i>Beginner</div>
                    <div class="item" data-value="medium"><i class="icon child green"></i>Medium</div>
                    <div class="item" data-value="experienced"><i class="icon child yellow"></i>Experienced</div>
                    <div class="item" data-value="expert"><i class="icon child orange"></i>Expert</div>
                  </div>
                </div>
              </div>

              <div class="one field">
                Duration
                <div class="ui fluid selection dropdown">
                  <input v-model="editedResource.duration" type="hidden" name="difficulty"/>
                  <i class="dropdown icon"></i>
                  <div class="default text">Duration</div>
                  <div class="menu">
                    <div class="item" data-value="5_min">5 min</div>
                    <div class="item" data-value="15_min">15 min</div>
                    <div class="item" data-value="30_min">30 min</div>
                    <div class="item" data-value="1_hours">1+ hours</div>
                    <div class="item" data-value="2_hours">2+ hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancel
        </div>
        <div @click="setChangedResource(editedResource._id, editedResource)"
             class="ui positive right labeled icon button">
          Set details
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>


    <div class="ui secondary segment">

      <h5 class="ui horizontal header divider">
        <i class="icon write"></i>
        Path details
      </h5>

      <div class="ui form">
        <div class="ui grid stackable">

          <div class="column eight wide">
            <div class="field">
              <input v-model="courseDetails.title" type="text" placeholder="Title"/>
            </div>

            <div class="field">
              <div class="ui fluid selection dropdown">
                <input v-model="courseDetails.difficulty" type="hidden" name="difficulty"/>
                <i class="dropdown icon"></i>
                <div class="default text">Difficulty</div>
                <div class="menu">
                  <div class="item" data-value="beginner"><i class="icon child olive"></i>Beginner</div>
                  <div class="item" data-value="medium"><i class="icon child green"></i>Medium</div>
                  <div class="item" data-value="experienced"><i class="icon child yellow"></i>Experienced</div>
                  <div class="item" data-value="expert"><i class="icon child orange"></i>Expert</div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="ui fluid selection dropdown">
                <input v-model="editedResource.duration" type="hidden" name="difficulty"/>
                <i class="dropdown icon"></i>
                <div class="default text">Duration</div>
                <div class="menu">
                  <div class="item" data-value="5_min">5 min</div>
                  <div class="item" data-value="15_min">15 min</div>
                  <div class="item" data-value="30_min">30 min</div>
                  <div class="item" data-value="1_hours">1+ hours</div>
                  <div class="item" data-value="2_hours">2+ hours</div>
                </div>
              </div>
            </div>
          </div>
          <div class="column eight wide">
            <div class="field">
              <textarea v-model="courseDetails.description" rows="7" id="description"
                        placeholder="Briefly describe the course."></textarea>
            </div>
          </div>

        </div>
      </div>


    </div>


    <div class="ui segment secondary">
      <div class="ui grid stackable">
        <div class="four wide column">

          <div class="ui buttons large fluid">
            <button class="ui blue basic icon button">
              <i class="icon upload"></i>
              Import
            </button>
            <button class="ui blue icon basic button">
              <i class="icon save"></i>
              Export
            </button>
          </div>

        </div>

        <div class="eight wide column">

          <div class="ui action input large fluid">
            <input type="text" value="http://www.codestairs.com/edit/8c65be057885">
            <button class="ui blue right labeled icon button">
              <i class="copy icon"></i>
              Edit URL
            </button>
          </div>

        </div>
        <div class="four wide column">

          <button @click="getResourcesInOrder()" class="ui right fluid button large  green">
            Save
          </button>

        </div>
      </div>
    </div>

    <h5 class="ui horizontal header divider">
      <i class="icon cubes"></i>
      Resources
    </h5>
    <div class="ui divider hidden"></div>
    <div class="ui divider hidden"></div>
    <div id="wrapper"></div>

  </div>
</template>

<script>
  import Box from './box-component.js';
  import boxOptions from './box-options';
  import generateUuid from '../../utils/uuid-generator';
  import DraggableGrid from '../../utils/draggable-grid';
  import _ from 'lodash';
  import co from 'co';

  import resourcesBoxesStore from '../../store/resources-boxes';

  import * as resourcesFetcher from '../../http-fetchers/resources';

  export default {
    name: 'PathEditor',
    data() {
      return {
        courseDetails: {
          title: '',
          difficulty: 'medium',
          duration: '',
          description: ''
        },
        boxesPerRow: null,
        resourcesBoxesStore: resourcesBoxesStore.state,
        editedResource: {}
      }
    },
    props: ['resources'],
    ready() {

      $('.dropdown').dropdown({
        allowAdditions: true,
        useLabels: true
      });

      let self = this;

      // generates uuid hash set for each resource in order to save their order
      // adds one extra uuid in the end for the "add new resource" placeholder
      this.placeholder = '$$placeholder$$';
      let resourceUuids = {};
      this.resources.forEach(function(resource) {
        resourceUuids[generateUuid()] = resource._id;
      });
      resourceUuids[generateUuid()] = this.placeholder;


      // generate order array that holds the uuid order in the dom
      let boxesOrder = [];
      for (let uuid in resourceUuids) {
        if (resourceUuids.hasOwnProperty(uuid)) {
          boxesOrder.push(uuid);
        }
      }

      // set to store
      resourcesBoxesStore.setResources(this.resources);
      resourcesBoxesStore.setOrder(boxesOrder);
      resourcesBoxesStore.setBoxesUuids(resourceUuids);


      // get dom container fot the boxes
      let $wrapper = $('#wrapper');
      this.$wrapper = $wrapper;
      this.$wrapper.css({
        position: 'relative',
        left: `-${boxOptions.horizontalArrowWidth}px`
        //        left: '100px'
      });


      // instantiate the dom draggable grid plugin
      this.draggableGrid = new DraggableGrid({
        order: boxesOrder.slice(),
        container: $wrapper.get(0),
        width: boxOptions.containerBoxWidth,
        height: boxOptions.containerBoxHeight,
        onAdded(index, el, order) {
          self.invalidateOrderAndPositions(order.slice());
          self.mountBox(order[index], el);
        },
        onMoved (order) {
          self.invalidateOrderAndPositions(order.slice());
        },
        onRemoved(order) {
          self.invalidateOrderAndPositions(order.slice());
        },
        onChangedData(order) {
          self.invalidateOrderAndPositions(order.slice());
        },
        onNewLayout(order) {
          // how many boxes can fin in a row in the wrapper
          self.boxesPerRow = self.calculateBoxesPerRow(self.$wrapper);
          self.invalidateOrderAndPositions(order.slice());
        }
      });

    },
    methods: {

      showModal() {
        $('.ui.modal')
          .modal({
            blurring: true
          })
          .modal('show');
      },

      getResourcesInOrder() {
        console.log('gettiing ordered resources');
        let self = this;
        let resources = [];
        this.resourcesBoxesStore.order.forEach(function(uuid) {
          let boxId = self.resourcesBoxesStore.boxesUuids[uuid];
          if (boxId !== self.placeholder) {
            let resource = _.find(self.resourcesBoxesStore.resources, {_id: boxId});
            resources.push(resource);
          }
        });

        console.log(resources);
        return resources;
      },

      addResource(url) {
        let self = this;

        console.log(url);

        co(function *() {
          try {
            let resource = yield resourcesFetcher.addResource(url);
            console.log(resource);
          } catch (err) {
            console.log(err);
          }
        });

//        // add the resource
//        this.resourcesBoxesStore.resources.push(resource);
//
//        // save the plcaholder index
//        let placeholderIndex;
//
//        // change placeholder data to contain the resource
//        this.resourcesBoxesStore.order.forEach(function(key, index) {
//          if (self.resourcesBoxesStore.boxesUuids[key] === self.placeholder) {
//            self.resourcesBoxesStore.boxesUuids[key] = resource._id;
//            placeholderIndex = index;
//          }
//        });
//
//        // add new placeholder after the new resource
//        this.addPlaceholder(placeholderIndex + 1);
      },

      addPlaceholder(index) {
        index = index | 0;
        let uuid = generateUuid();
        this.resourcesBoxesStore.boxesUuids[uuid] = this.placeholder;
        this.draggableGrid.add(index, uuid);
      },

      changeResourceData(id, resourceData) {
        this.editedResource = resourceData;
        this.showModal();
      },

      setChangedResource(id, resourceData) {
        let indexOfResource = _.indexOf(this.resourcesBoxesStore.resources, _.find(this.resourcesBoxesStore.resources, {_id: id}));
        let resourceToChange = this.resourcesBoxesStore.resources[indexOfResource];
        resourceToChange.title = resourceData.title;
        resourceToChange.description = resourceData.description;
        resourceToChange.difficulty = resourceData.difficulty;
        resourceToChange.duration = resourceData.duration;
      },

      removeResource(index) {
        index = index | 0;
        let removedUuid = resourcesBoxesStore.state.order.splice(index, 1);
        let resourceId = resourcesBoxesStore.state.boxesUuids[removedUuid];

        delete resourcesBoxesStore.state.boxesUuids[removedUuid];
        _.remove(resourcesBoxesStore.state.resources, {'_id': resourceId});
        this.draggableGrid.remove(index);
      },

      invalidateOrderAndPositions(order) {
        this.centerWrapper();
        resourcesBoxesStore.setOrder(order);

        let self = this;
        let positions = self.resourcesBoxesStore.order.map(function(boxUuid, index) {
          return self.calculateBoxPosition(index, self.boxesPerRow, self.calculateBoxRow(index, self.boxesPerRow));
        });
        resourcesBoxesStore.setBoxesPositions(positions);
      },

      mountBox(boxUuid, el) {
        let self = this;
        let box = new Box({
          data: {
            boxUuid: boxUuid,

            // dynamically bounded components can't use the event system, so we pass some methods
            boxMethods: {

              removeResourceFunction: function(index) {
                console.log('removing resource index');
                console.log(index);
                self.removeResource(index);
              },

              addResourceToPlaceholder(url) {
                self.addResource(url);
              },

              changeResourceDataFunction(id, resourceData) {
                self.changeResourceData(id, resourceData);
              }

            }
          }
        }).$mount().$appendTo($(el).get(0));
      },

      centerWrapper() {
        let marginLeft;
        if (this.resourcesBoxesStore.order.length < this.boxesPerRow) {
          marginLeft = (this.$wrapper.outerWidth() - boxOptions.containerBoxWidth * this.resourcesBoxesStore.order.length) / 2 + boxOptions.horizontalArrowWidth / 2;
        } else {
          marginLeft = (this.$wrapper.outerWidth() - boxOptions.containerBoxWidth * this.boxesPerRow) / 2 + boxOptions.horizontalArrowWidth / 2;
        }

        this.$wrapper.css({
          'margin-left': marginLeft + 'px'
        });
      },

      calculateBoxesPerRow(wrapper) {
        let wrapperWidth = wrapper.width();
        return (Math.floor(wrapperWidth / boxOptions.containerBoxWidth));
      },

      calculateBoxRow(boxPosition, boxesPerLine) {
        let row = Math.floor(boxPosition / boxesPerLine);
        return row;
      },

      calculateBoxPosition(boxIndex, boxesPerRow, numberOfRow) {
        // result in the form: ['even', 'last']
        // this contains the position of the box related to the grid
        let position = [];

        if (numberOfRow % 2 === 0) {
          position.push('even');
        } else {
          position.push('odd');
        }

        if (boxesPerRow === 1) {
          position.push('last');
        }

        if (boxIndex % boxesPerRow === 0) {
          position.push('first');
        } else if (boxIndex % boxesPerRow === boxesPerRow - 1) {
          position.push('last');
        } else {
          position.push('middle')
        }

        return position;
      }

    }
  }
</script>

<style>
  #wrapper {
    padding: 0;
  }

  #wrapper .tile {
    box-sizing: border-box;
    display: block;
    position: absolute;
    background: transparent;
    color: #3A3A4D;
    padding: 0;
    font-weight: bold;
  }

  .resource-settings {
    width: 100% !important;
  }

</style>