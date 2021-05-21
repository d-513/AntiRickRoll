chrome.runtime.sendMessage({
  type: "open-tab",
  url: chrome.runtime.getURL("/html/options.html"),
});
window.close();
