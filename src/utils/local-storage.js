export function set(key, value) {
  window.localStorage[key] = value;
}

export function get(key) {
  return window.localStorage[key] || undefined;
}

export function setObject(key, value) {
  window.localStorage[key] = JSON.stringify(value);
}

export function getObject(key) {
  return JSON.parse(window.localStorage[key] || null);
}