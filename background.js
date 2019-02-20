'use strict';

function doneCallback(done_message) {
    console.log(done_message);
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'change_tab'}, doneCallback);
});
