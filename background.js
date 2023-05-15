chrome.tabs.onUpdated.addLisener((tabId,tab) => {
  const tabStorage = tabId;

  chrome.tabs.sendMessage(tabId,{
    type: "NEW",
    tabId: tabId,

  })

}) 