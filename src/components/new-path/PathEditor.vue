<template>
  <div>


    <button @click="showModal()">asdas</button>

    <div class="ui modal inverted">
      <div class="header">Edit resource</div>
      <div class="image content">
        <img src="../../assets/img/logo1.png" class="ui medium rounded image bordered"/>
        <div class="description">

          <p>
          <div class="ui left icon input fluid">
            <input type="text" placeholder="Search users...">
            <i class="users icon"></i>
          </div>
          </p>

          <p>
          <div class="ui form field fluid">
            <textarea rows="2"></textarea>
          </div>
          </p>

          <p>
          <div class="ui form two fields">
            <div class="field">
              <div class="ui fluid search selection dropdown">
                <input type="hidden" name="country"/>
                <i class="dropdown icon"></i>
                <div class="default text">Select Country</div>
                <div class="menu">
                  <div class="item" data-value="uk"><i class="icon child green"></i>Medium</div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="ui fluid search selection dropdown">
                <input type="hidden" name="country"/>
                <i class="dropdown icon"></i>
                <div class="default text">Select Country</div>
                <div class="menu">
                  <div class="item" data-value="uk"><i class="icon child green"></i>Medium</div>
                </div>
              </div>
            </div>
          </div>
          </p>

        </div>
      </div>
    </div>


    <div class="ui secondary segment">
      <div class="ui form">

        <div class="three fields">

          <div class="field">
            <label for="title">Title</label>
            <input value="Javascript OOP from TelerikAcademy" type="text" id="title"/>
          </div>

          <div class="field">
            <label>Difficulty</label>
            <div class="ui fluid search selection dropdown">
              <input type="hidden" name="country"/>
              <i class="dropdown icon"></i>
              <div class="default text">Select Country</div>
              <div class="menu">
                <div class="item" data-value="uk"><i class="icon child green"></i>Medium</div>
              </div>
            </div>
          </div>

          <div class="field">
            <label>Duration</label>
            <div class="ui fluid search selection dropdown">
              <input type="hidden" name="country"/>
              <i class="dropdown icon"></i>
              <div class="default text">Select Country</div>
              <div class="menu">
                <div class="item" data-value="uk"><i class="icon wait"></i>4 Hours</div>
              </div>
            </div>
          </div>

        </div>

        <div class="field">
          <label for="description">Brief description</label>
          <textarea rows="2" id="description">
            The purpose of this path is to give introduction to Object-oriented programming in JS. There are 3 videos that are going to get you familiar with the most useful concepts that we use to do OOP in JavaScript.
          </textarea>
        </div>

      </div>
    </div>

    <button @click="addResource()">asds</button>

    <input type="text" v-model="newTitle">

    <div class="ui segment basic secondary">

      <div class="ui grid">
        <div class="three wide column">

          <button class="ui blue icon large fluid button">
            <i class="forward mail icon"></i>
            &nbsp; Import
          </button>

        </div>
        <div class="three wide column">

          <button class="ui blue icon large fluid button">
            <i class="file icon"></i>
            &nbsp; Export
          </button>

        </div>
        <div class="six wide column">

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

  import resourcesBoxesStore from '../../store/resources-boxes';


  export default {
    name: 'PathEditor',
    data() {
      return {
        tileToAddIndex: null,
        tileToAddData: null,
        tileToChangeIndex: null,
        tileToChangeData: null,
        tileToRemoveIndex: null,
        boxesPerRow: null,
        resourcesBoxesStore: resourcesBoxesStore.state,
        newTitle: ''
      }
    },
    props: ['resources'],
    ready() {


//      this.showModal();

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

      addResource() {
        let self = this;
        let resource = {
          "_id": Math.random() + "",
          "title": "random title" + Math.random(),
          "description:": "random description"
        };

        // add the resource
        this.resourcesBoxesStore.resources.push(resource);

        // save the plcaholder index
        let placeholderIndex;

        // change placeholder data to contain the resource
        this.resourcesBoxesStore.order.forEach(function(key, index) {
          if (self.resourcesBoxesStore.boxesUuids[key] === self.placeholder) {
            self.resourcesBoxesStore.boxesUuids[key] = resource._id;
            placeholderIndex = index;
          }
        });

        // add new placeholder after the new resource
        this.addPlaceholder(placeholderIndex + 1);
      },

      addPlaceholder(index) {
        index = index | 0;
        let uuid = generateUuid();
        this.resourcesBoxesStore.boxesUuids[uuid] = this.placeholder;
        this.draggableGrid.add(index, uuid);
      },

      changeResourceData(id, resourceData) {
        let indexOfResource = _.indexOf(this.resourcesBoxesStore.resources, _.find(this.resourcesBoxesStore.resources, {_id: id}));
        console.log(indexOfResource);
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
                // todo get extracted resource and add
                self.addResource();
              },

              changeResourceDataFunction(id, resourceData) {
                console.log(arguments);
                self.changeResourceData(id, resourceData);
              }

            }
          }
        }).$mount().$appendTo($(el).get(0));
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
</style>