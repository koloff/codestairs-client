export default function(Vue) {
  Vue.directive('dropdown-semantic', {
    bind: function () {
      $(this.el).dropdown();
    }
  });
}
