"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;

require("whatwg-fetch");

function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(data) {
  return data.json();
}

function onError(err) {
  console.log(err);
}