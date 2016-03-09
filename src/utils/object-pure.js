window.$pure = function(obj) {
  if (obj === undefined) return undefined;
  return JSON.parse(JSON.stringify(obj));
};