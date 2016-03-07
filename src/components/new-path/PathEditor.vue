<template>
  <div>
    <div id="test"></div>


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

          <button class="ui right fluid button large  green">
            Save
          </button>

        </div>
      </div>


    </div>
    <!--<h1>add placeholder</h1>-->
    <!--index-->
    <!--<input type="text" v-model="tileToAddIndex"/>-->
    <!--<button @click="addPlaceholder(tileToAddIndex)">add</button>-->

    <!--<h1>remove tile</h1>-->
    <!--index <input type="text" v-model="tileToRemoveIndex"/>-->
    <!--<button @click="removeResource(tileToRemoveIndex)">remove</button>-->
    <!--<div id="wrapper"></div>-->

    <!--<h1>change tile data</h1>-->
    <!--index <input type="text" v-model="tileToChangeIndex"/>-->
    <!--data <input type="text" v-model="tileToChangeData"/>-->
    <!--<button @click="changeBoxData(tileToChangeIndex, tileToChangeData)">change</button>-->

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
        resourcesBoxesStore: resourcesBoxesStore.state
      }
    },
    props: ['resources'],
    ready() {

      $('.dropdown').dropdown({
        allowAdditions: true,
        useLabels: true
      });

      let self = this;

      resourcesBoxesStore.setResources(this.resources);

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
      console.log('bioxes order');
      console.log(boxesOrder);

      // set to store
      resourcesBoxesStore.setOrder(boxesOrder);
      resourcesBoxesStore.setBoxesUuids(resourceUuids);


      // get dom container fot the boxes
      let $wrapper = $('#wrapper');
      this.$wrapper = $wrapper;
      this.$wrapper.css({
        position: 'relative',
//        left: `-${boxOptions.horizontalArrowWidth}px`
        left: '100px'
      });


      // instantiate the dom draggable grid plugin
      this.draggableGrid = new DraggableGrid({
        order: boxesOrder.slice(),
        container: $wrapper.get(0),
        width: boxOptions.containerBoxWidth,
        height: boxOptions.containerBoxHeight,
        onAdded(index, el, order) {
          console.log('added');
          console.log(order);
          console.log(index);
          self.invalidateOrderAndPositions(order.slice());
          self.mountBox(order[index], el);
        },
        onMoved (order) {
          console.log('moved');
          self.invalidateOrderAndPositions(order.slice());
        },
        onRemoved(order) {
          console.log('removed');
          self.invalidateOrderAndPositions(order.slice());
        },
        onChangedData(order) {
          console.log('data changed');
          self.invalidateOrderAndPositions(order.slice());
        },
        onNewLayout(order) {
          console.log('new layout');
          // how many boxes can fin in a row in the wrapper
          self.boxesPerRow = self.calculateBoxesPerRow(self.$wrapper);
          self.invalidateOrderAndPositions(order.slice());
        }
      });

    },
    methods: {

      invalidateOrderAndPositions(order) {
        console.log('invalidation');

        resourcesBoxesStore.setOrder(order.slice());

        let self = this;
        let positions = self.resourcesBoxesStore.order.map(function(boxUuid, index) {
          return self.calculateBoxPosition(index, self.boxesPerRow, self.calculateBoxRow(index, self.boxesPerRow));
        });
        resourcesBoxesStore.setBoxesPositions(positions);
      },


      addPlaceholder(index) {
        index = index | 0;
        let uuid = generateUuid();
        this.resourcesBoxesStore.boxesUuids[uuid] = this.placeholder;
        this.draggableGrid.add(index, uuid);
      },

      removeResource(index) {
        // todo remove from hash
        index = index | 0;
        resourcesBoxesStore.state.order.splice(index, 1);
        this.draggableGrid.remove(index);
      },

      mountBox(boxUuid, el) {
        let self = this;
        let box = new Box({
          data: {
            boxUuid: boxUuid,

            // dynamically bounded components can't use the event system, so we pass some methods
            boxMethods: {

              removeBoxFunction: function(index) {
                self.removeResource(index);
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