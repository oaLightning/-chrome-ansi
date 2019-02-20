// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//var urlRegex = '.*';

// A function to use as callback
function doneCallback(done_message) {
    console.log(done_message);
}

chrome.browserAction.onClicked.addListener(function (tab) {
  alert('sending message');
  chrome.tabs.sendMessage(tab.id, {text: 'change_tab'}, doneCallback);
});

//chrome.runtime.onInstalled.addListener(function() {
//  chrome.storage.sync.set({color: '#3aa757'}, function() {
//    console.log('The color is green.');
//  });
//  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//    chrome.declarativeContent.onPageChanged.addRules([
//      {
//        conditions: [
//          new chrome.declarativeContent.PageStateMatcher({
//            pageUrl: { urlMatches: '.*' },
//          })
//        ],
//        actions: [ new chrome.declarativeContent.ShowPageAction() ]
//      }
//    ]);
//  });
//});