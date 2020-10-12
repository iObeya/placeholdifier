chrome.browserAction.onClicked.addListener(placeholdify);

var toggle = false;

function placeholdify() {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "./assets/on/icon128.png"});
    chrome.tabs.executeScript({
      file: "placeholdify.js",
      allFrames: true,
      frameId: 0,
    })
  } else {
    chrome.browserAction.setIcon({path: "./assets/off/icon128.png"});
    chrome.tabs.executeScript({
      file: "placeholdify.js",
      allFrames: true,
      frameId: 0,
    })
  }
}
