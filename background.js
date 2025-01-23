// background.js

// Listen for the extension's button to be clicked
chrome.browserAction.onClicked.addListener(function(tab) {
    // Execute a script in the context of the current tab to get the selected text
    chrome.tabs.executeScript(tab.id, {
      code: '(' + getSelectedText.toString() + ')();'
    }, function(results) {
      let selectedText = '';
      if (results && results[0]) {
        selectedText = results[0];
      }
  
      // Construct the Pinboard URL
      const pinboardUrl = `https://pinboard.in/add?next=same&url=${encodeURIComponent(
        tab.url
      )}&description=${encodeURIComponent(
        selectedText
      )}&title=${encodeURIComponent(tab.title)}`;
  
      // Open the Pinboard URL in a new tab
      chrome.tabs.create({ url: pinboardUrl });
    });
  });
  
  // Function to get the selected text in the page
  function getSelectedText() {
    return window.getSelection ? window.getSelection().toString() : '';
  }
  