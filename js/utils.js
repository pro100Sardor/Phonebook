function $_ (selector, node = document) {
  return node.querySelector(selector);
}

function $$_ (selector, node = document) {
  return node.querySelectorAll(selector);
}