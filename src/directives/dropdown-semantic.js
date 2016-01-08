export default function(Vue) {
  Vue.directive('dropdown-semantic', {
    bind: function () {
      console.log('directive binded');
      console.log(this);
      $(this.el).dropdown();
    }
  });
}
