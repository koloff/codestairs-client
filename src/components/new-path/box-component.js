import boxOptions from './box-options';
import resourcesBoxesStore from '../../store/resources-boxes';
import MiniResourceDetailsBox from './MiniResourceDetailsBox.vue';
import InsertResourceBox from './InsertResourceBox.vue';
import _ from 'lodash';

export default Vue.extend({

  template: `
  <div class="container-box">
    <div class="content-box">

      <mini-resource-details-box v-if="isResource" :index="index" :resource="resource" :box-methods="boxMethods"></mini-resource-details-box>
      <insert-resource-box v-if="!isResource" :box-methods="boxMethods"></insert-resource-box>


    <img class="arrow" src="../../assets/img/arrow.png" alt="next">
  </div>`,

  name: 'Box',
  components: {
    MiniResourceDetailsBox,
    InsertResourceBox
  },
  data() {
    return {
      boxUuid: null,
      boxMethods: null,
      boxPositon: [],
      boxData: null,
      index: null,
      isPlaceholder: false,
      isResource: false,
      resource: undefined,
      resourcesBoxesState: resourcesBoxesStore.state
    };
  },
  ready() {
    this.boxData = this.getBoxData();
    this.calculateStyles(this.boxPosition);
  },

  computed: {
    index: {
      get() {
        return this.resourcesBoxesState.order.indexOf(this.boxUuid);
      }
    },
    boxPosition: {
      get() {
        let boxPosition = this.resourcesBoxesState.boxesPositions[this.index];
        this.calculateStyles(boxPosition);
        return boxPosition;
      }
    },
    isResource: function() {
      return $pure(this.resource) !== undefined;
    },

    resource() {
      let self = this;

      // needs to refer resources outside function scope
      // for vue to calculate the computed property correctly :D
      this.resourcesBoxesState.resources;

      let isResource = this.resourcesBoxesState.boxesUuids[this.boxUuid] !== '$$placeholder$$';

      if (isResource) {
        return _.find(this.resourcesBoxesState.resources, {_id: self.getBoxData()});
      } else {
        return undefined;
      }
    }
  },
  methods: {
    getBoxData() {
      let boxData = this.resourcesBoxesState.boxesUuids[this.boxUuid];
      return boxData;
    },

    removeResource(index) {
      this.$destroy();
      this.boxMethods.removeBoxFunction(index);
    },

    calculateStyles(boxPosition) {

      if (this.resourcesBoxesState.order.indexOf(this.boxUuid) < 0) {
        return;
      }

      let pos = boxPosition;

      let isFirst = pos.indexOf('first') > -1;
      let isMiddle = pos.indexOf('middle') > -1;
      let isLast = pos.indexOf('last') > -1;
      let isEven = pos.indexOf('even') > -1;
      let isOdd = pos.indexOf('odd') > -1;

      let $container = $(this.$el);

      // reset styles
      $container.attr('style', '');
      $container.children().attr('style', '');


      $('.container-box')
        .css({
          width: `${boxOptions.containerBoxWidth}px`,
          height: `${boxOptions.containerBoxHeight}px`
        });

      $('.content-box')
        .css({
          display: 'inline-block',
          width: boxOptions.boxWidth,
          height: boxOptions.boxHeight
        });


      if (isEven) {
        $container
          .css({
            left: `${boxOptions.horizontalArrowWidth}px`
          });
      }

      if (isOdd) {
        $container.find('.content-box')
          .css({
            float: 'right'
          });
      }

      // set arrow styles
      let $arrow = $container.find('.arrow');


      if ((isLast && isEven) || (isFirst && isOdd) || (isFirst && isLast)) {
        //noinspection JSSuspiciousNameCombination
        $arrow
          .css({
            transform: 'rotate(90deg)',
            transformOrigin: '0 0',
            // swap width and height because of the rotate
            width: boxOptions.verticalArrowSizes.height,
            height: boxOptions.verticalArrowSizes.width,
            top: `${boxOptions.boxHeight + boxOptions.verticalArrowSizes.marginStart}px`
          });

        if (isLast && isEven) {
          $arrow
            .css({
              marginLeft: `-${boxOptions.boxWidth / 2 - boxOptions.verticalArrowSizes.width / 2}px`
            });
        } else if (isFirst && isOdd) {
          $arrow
            .css({
              marginLeft: `${boxOptions.horizontalArrowWidth + (boxOptions.boxWidth / 2) + (boxOptions.verticalArrowSizes.width / 2)}px`
            });
        }
      } else {
        $arrow
          .css({
            width: boxOptions.horizontalArrowSizes.width,
            height: boxOptions.horizontalArrowSizes.height
          });

        if (isEven && !isLast) {
          $arrow
            .css({
              top: `${boxOptions.boxHeight / 2 - boxOptions.horizontalArrowSizes.height / 2}px`,
              left: `${boxOptions.boxWidth + boxOptions.horizontalArrowSizes.marginStart}px`
            });
        }

        if (isOdd && !isFirst) {
          $arrow
            .css({
              transform: 'rotate(180deg)',
              transformOrigin: '0 0',
              top: `${boxOptions.boxHeight / 2 + boxOptions.horizontalArrowSizes.height / 2}px`,
              left: `${boxOptions.horizontalArrowSizes.width + boxOptions.horizontalArrowSizes.marginEnd}px`
            });
        }
      }

    }
  }
});

