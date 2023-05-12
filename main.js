chrome.tabs.onActivated.addListener(function(activeInfo) {
  // getting URL
  var tabURL = activeInfo.tab.url;

  // GET time active tab
  var startTime = Date.now();

  // storage time
  chrome.storage.local.set({[tabURL]: startTime});
});

function calculateTime() {
  var timeSpent = {};

  chrome.storage.local.get(null, function(result) {
      for (var key in result) {
          var startTime = result[key];
          var currentTime = Date.now();
          var timeDifference = currentTime - startTime;

          // storage time
          timeSpent[key] = timeDifference;
      }

      // call function for storage
      sortTabsByTime(timeSpent);
  });
}
