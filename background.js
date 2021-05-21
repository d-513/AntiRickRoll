chrome.runtime.onMessage.addListener((req, sender, resp) => {
  switch (req.type) {
    case "open-tab":
      chrome.tabs.create({
        url: req.url,
      });
      break;
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: chrome.runtime.getURL("/html/rickrolled.html"),
    };
  },
  {
    urls: ["*://*.youtube.com/watch?v=dQw4w9WgXcQ"],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
