'use strict';

alert('0');
var Convert = require("ansi-to-html");

alert('1');
document.getElementById("pritifyAnsi").addEventListener("click", changeTab);
alert('2');
function changeTab() {
  alert('updating tab');
  var convert = new Convert();

  let data = document.all[0].innerText;
  let output = convert.toHtml(data);
  document.all[0].innerText = output;
}
alert('3');

//let pritifyAnsi = document.getElementById('pritifyAnsi');

//chrome.storage.sync.get('color', function(data) {
//  pritifyAnsi.style.backgroundColor = data.color;
//  pritifyAnsi.setAttribute('value', data.color);
//});

//pritifyAnsi.onclick = function(element) {
//  alert('In click');
//  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//    chrome.tabs.executeScript(
//        tabs[0].id,
//        {code: 'document.body.style.backgroundColor = "red"'});
//  });
//};

alert('Done loading');