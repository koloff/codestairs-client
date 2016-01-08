window.$pure = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};