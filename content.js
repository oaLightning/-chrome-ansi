'use strict';

var Convert = require("ansi-to-html");

function changeTab() {
  var convert = new Convert();

  let data = document.all[0].innerText;
  let lines = data.split('\n');
  let output_lines = lines.map(line => '<div>' + convert.toHtml(line) + '</div>');
  document.all[0].innerHTML = output_lines;
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'change_tab') {
        changeTab()
        sendResponse('done');
    }
});