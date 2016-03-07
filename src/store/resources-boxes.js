export default {
  state: {
    resources: [],
    boxesUuids: {},
    order: [],
    boxesPositions: []
  },

  clearState() {
    this.state.resources = [];
    this.state.boxesUuids = {};
    this.state.order = [];
    this.state.boxesPositions = [];
  },

  setResources(resources) {
    this.state.resources = resources;
  },

  setBoxesUuids(uuids) {
    this.state.boxesUuids = uuids;
  },

  setOrder(order) {
    this.state.order = order;
  },

  setBoxesPositions(positions) {
    this.state.boxesPositions = positions;
  }
}
