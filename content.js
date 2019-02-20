'use strict';

var Convert = require("ansi-to-html");

function changeTab() {
  var convert = new Convert();

  let data = document.all[0].innerText;
  let output = convert.toHtml(data);
  document.all[0].innerText = output;
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'change_tab') {
        changeTab()
        sendResponse('done');
    }
});